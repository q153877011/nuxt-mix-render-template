import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, existsSync, statSync } from 'fs';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static assets directory
const ASSET_DIR = resolve(__dirname, '../assets');

// MIME type mapping
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml'
};

/**
 * Get the MIME type of a file
 */
function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

/**
 * 解析IPX参数
 */
function parseIPXParams(paramString) {
  const params = {};
  
  if (!paramString || paramString === '_') {
    return params;
  }
  
  // IPX参数格式: w_800&h_600&q_80&f_webp
  const paramPairs = paramString.split('&');
  
  for (const pair of paramPairs) {
    if (pair.includes('_')) {
      const [key, value] = pair.split('_', 2);
      
      switch (key) {
        case 'w':
          params.width = parseInt(value);
          break;
        case 'h':
          params.height = parseInt(value);
          break;
        case 's':
          // 尺寸格式: s_800x600
          if (value.includes('x')) {
            const [w, h] = value.split('x');
            params.width = parseInt(w);
            params.height = parseInt(h);
          }
          break;
        case 'q':
          params.quality = parseInt(value);
          break;
        case 'f':
          params.format = value;
          break;
        case 'fit':
          params.fit = value;
          break;
        case 'b':
        case 'bg':
          params.background = value;
          break;
        case 'blur':
          params.blur = parseInt(value);
          break;
      }
    }
  }
  
  return params;
}

/**
 * 处理IPX图片请求 - 简化版本，直接调用Nitro的IPX处理器
 */
async function processIPXImage(ipxPath) {
  try {
    const app = await getNitroApp();
    const fullPath = `/_ipx/${ipxPath}`;
    
    
    // 检查本地文件是否存在，如果是本地文件且存在，直接处理
    if (!ipxPath.includes('http')) {
      const pathParts = ipxPath.split('/');
      let filePath = '';
      let params = {};
      
      // 找到实际的文件路径（跳过参数）
      for (let i = 0; i < pathParts.length; i++) {
        const part = pathParts[i];
        if (part.includes('.')) {
          // 找到文件扩展名，这是文件路径的开始
          filePath = pathParts.slice(i).join('/');
          // 前面的部分是参数
          if (i > 0) {
            const paramString = pathParts.slice(0, i).join('&');
            params = parseIPXParams(paramString);
          }
          break;
        }
      }
      
      const localFilePath = resolve(ASSET_DIR, filePath);
      // console.log(`Checking local file: ${localFilePath}`);
      // console.log(`File exists: ${existsSync(localFilePath)}`);
      
      // 如果是本地文件且存在，直接返回文件内容（暂时跳过IPX处理）
      if (existsSync(localFilePath)) {
        const fileContent = readFileSync(localFilePath);
        const mimeType = getMimeType(localFilePath);
        
        return {
          statusCode: 200,
          headers: {
            'Content-Type': mimeType,
            'Content-Length': fileContent.length.toString(),
            'Cache-Control': 'public, max-age=31536000',
            'from-server': 'true'
          },
          body: fileContent
        };
      }
    }
    
    const response = await app.localCall({
      url: fullPath,
      method: 'GET',
      headers: {
        'accept': 'image/*'
      },
      body: ''
    });
    
    if (!response || response.status !== 200) {
      console.log('IPX processing failed, status code:', response?.status);
      return null;
    }
    
    // 处理响应体
    let responseBody;
    
    if (response.body) {
      if (Buffer.isBuffer(response.body)) {
        responseBody = response.body;
      } else if (typeof response.body === 'string') {
        // 对于图片数据，使用latin1编码保持二进制完整性
        responseBody = Buffer.from(response.body, 'latin1');
      } else if (response.body && typeof response.body.getReader === 'function') {
        // 处理ReadableStream
        const reader = response.body.getReader();
        const chunks = [];
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(Buffer.from(value));
        }
        
        responseBody = Buffer.concat(chunks);
      } else if (response.body instanceof Uint8Array) {
        responseBody = Buffer.from(response.body);
      } else {
        return null;
      }
    } else if (response._data) {
      if (Buffer.isBuffer(response._data)) {
        responseBody = response._data;
      } else if (response._data instanceof Uint8Array) {
        responseBody = Buffer.from(response._data);
      } else if (typeof response._data === 'string') {
        responseBody = Buffer.from(response._data, 'latin1');
      } else {
        console.log('Unknown _data format:', typeof response._data);
        return null;
      }
    } else {
      console.log('No image data found in IPX response');
      return null;
    }
    
    if (!responseBody || responseBody.length === 0) {
      console.log('Image data is empty after IPX processing');
      return null;
    }
    
    // 获取内容类型
    let contentType = 'image/jpeg';
    if (response.headers) {
      const headers = response.headers instanceof Headers ? response.headers : new Headers(response.headers);
      contentType = headers.get('content-type') || contentType;
    }
    
    // 验证图片数据完整性
    const isValidImage = responseBody.length > 0 && (
      responseBody[0] === 0xFF || // JPEG
      (responseBody[0] === 0x89 && responseBody[1] === 0x50) || // PNG
      (responseBody[0] === 0x47 && responseBody[1] === 0x49) // GIF
    );
    
    // console.log(`IPX processing successful: size=${responseBody.length}bytes, type=${contentType}, valid image=${isValidImage}`);
    // console.log(`Image header bytes: ${responseBody.slice(0, 10).toString('hex')}`);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': responseBody.length.toString(),
        'Cache-Control': 'public, max-age=31536000', // 1年缓存
        'Accept-Ranges': 'bytes',
        'Access-Control-Allow-Origin': '*',
        'from-server': 'true'
      },
      body: responseBody
    };
    
  } catch (error) {
    console.error('IPX processing error:', error);
    console.error('Error stack:', error.stack);
    return null;
  }
}

/**
 * Handle static file requests
 */
async function handleStaticFile(url) {
  try {
    // Remove query parameters
    let cleanUrl = url.split('?')[0];
    
    // Handle IPX image processing paths from @nuxt/image
    // 直接使用IPX处理图片，而不是重定向
    if (cleanUrl.startsWith('/_ipx/')) {
      const ipxPath = cleanUrl.slice(6); // Remove '/_ipx/'
      return processIPXImage(ipxPath);
    }

    // Handle EdgeOne SSR functions IPX paths
    // 直接使用IPX处理图片
    if(cleanUrl.includes('-ssr-functions/_ipx/')) {
      // 提取IPX路径部分
      const ipxIndex = cleanUrl.indexOf('_ipx/');
      if (ipxIndex !== -1) {
        const ipxPath = cleanUrl.slice(ipxIndex + 5); // Remove '_ipx/'
        return processIPXImage(ipxPath);
      }
      return null;
    }
    
    const possiblePaths = [];
    
    // Direct file path
    const directPath = resolve(ASSET_DIR, cleanUrl.startsWith('/') ? cleanUrl.slice(1) : cleanUrl);
    possiblePaths.push(directPath);
    
    // Try each possible path
    for (const filePath of possiblePaths) {
      // Security check: ensure file is within asset directory
      if (!filePath.startsWith(ASSET_DIR)) {
        continue;
      }
      
      if (existsSync(filePath) && statSync(filePath).isFile()) {
        const content = readFileSync(filePath);
        const mimeType = getMimeType(filePath);
        
        return {
          statusCode: 200,
          headers: {
            'Content-Type': mimeType,
            'Content-Length': content.length.toString(),
            'Cache-Control': 'public, max-age=31536000' // 1 year cache
          },
          body: content
        };
      }
    }
  } catch (error) {
    console.error('Static file error:', error);
  }
  
  return null;
}

/**
 * Lazy load Nitro application
 */
let nitroApp = null;
async function getNitroApp() {
  if (!nitroApp) {
    // Set environment variables to prevent automatic server startup
    process.env.NITRO_PORT = '';
    process.env.PORT = '';
    
    // Set correct static assets path
    process.env.NITRO_PUBLIC_DIR = ASSET_DIR;
    
    const { j: useNitroApp } = await import('./chunks/nitro/nitro.mjs');
    nitroApp = useNitroApp();
    
    // 检查IPX配置
    const runtimeConfig = nitroApp.hooks.callHook ? await nitroApp.hooks.callHook('render:route', { url: '/' }).catch(() => null) : null;
    console.log('Nitro application initialized');
  }
  return nitroApp;
}

/**
 * Handle HTTP response
 */
function handleResponse(response, event) {
  if (!response) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Internal Server Error'
    };
  }

  const headers = {};
  
  // Ensure response.headers is a Headers object
  if (!(response.headers instanceof Headers)) {
    response.headers = new Headers(response.headers || {});
  }
  
  // Correctly iterate over Headers object (using entries() method)
  for (const [key, value] of response.headers.entries()) {
    headers[key] = value;
  }

  // Check if Content-Type already exists (case-insensitive)
  const hasContentType = response.headers.has('content-type');
  
  // Only set default value if Content-Type is missing
  if (!hasContentType) {
    headers['Content-Type'] = 'text/html; charset=utf-8';
  }

  headers['from-server'] = 'true';

  // Handle set-cookie header (special handling, as there may be multiple values)
  if (response.headers.has('set-cookie')) {
    const cookieArr = response.headers.getSetCookie();
    headers['set-cookie'] = Array.isArray(cookieArr) ? cookieArr : [cookieArr];
  }

  return {
    statusCode: response.status || response.statusCode || 200,
    headers,
    body: response.body || response._data || ''
  };
}

/**
 * EdgeOne function handler
 */
export async function handler(event, context) {
  try {
    const url = event.path || '/';
    const method = event.httpMethod || event.method || 'GET';
    const headers = event.headers || {};
    const body = event.body || '';

    // First try to handle static assets
    if (method === 'GET') {
      const staticResponse = await handleStaticFile(url);
      if (staticResponse) {
        return staticResponse;
      }
    }

    // Handle dynamic requests
    const app = await getNitroApp();
    
    try {
      const response = await app.localCall({
        url,
        method,
        headers,
        body
      });

      return handleResponse(response, event);
    } catch (nitroError) {
      // Handle Nitro static file read errors (prerender files not found)
      // Check error and its cause property (H3Error may wrap actual error in cause)
      const actualError = nitroError?.cause || nitroError;
      const errorPath = actualError?.path || nitroError?.path;
      const errorCode = actualError?.code || nitroError?.code;
      
      // If error is due to prerender static file not found, try dynamic rendering
      if (errorCode === 'ENOENT' && 
          errorPath && 
          (errorPath.includes('/assets/') || errorPath.includes('assets/')) &&
          (errorPath.includes('/index.html') || errorPath.includes('index.html'))) {
        console.warn(`Prerender file not found: ${errorPath}, falling back to dynamic rendering for ${url}`);
        
        // If static file handling has been tried but file not found, should perform dynamic rendering
        // Nitro should be able to handle dynamic routes, but if it still tries to read static files,
        // it may be due to configuration issues. We throw an error directly to let user know to build or check configuration
        throw new Error(`Prerender route ${url} not found. Make sure to run build first or configure routeRules correctly. Original error: ${actualError?.message || nitroError?.message}`);
      }
      
      // Other errors are thrown directly
      throw nitroError;
    }
  } catch (error) {
    console.error('EdgeOne handler error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain' },
      body: `Internal Server Error: ${error.message}`
    };
  }
}

import('http').then(async (http) => {
  const { createServer } = http;
  // Dynamically import stream module to handle ReadableStream
  await import('stream').then(({ Readable, pipeline }) => {
    const server = createServer(async (req, res) => {
      try {
        const event = {
          path: req.url,
          httpMethod: req.method,
          headers: req.headers,
          body: ''
        };

        if (req.method !== 'GET' && req.method !== 'HEAD') {
          const chunks = [];
          for await (const chunk of req) {
            chunks.push(chunk);
          }
          event.body = Buffer.concat(chunks).toString();
        }

        const result = await handler(event, {});

        res.statusCode = result.statusCode;
        Object.entries(result.headers).forEach(([key, value]) => {
          if(key === 'set-cookie') {
            res.setHeader('set-cookie', Array.isArray(value) ? value[0].split(',') : value);
          } else {
            res.setHeader(key, value);
          }
        });

        // Handle response body: support Buffer, string, and ReadableStream
        if (Buffer.isBuffer(result.body)) {
          res.end(result.body);
        } else if (result.body && typeof result.body === 'object' && typeof result.body.getReader === 'function') {
          // Detect ReadableStream (Web Streams API)
          try {
            const nodeStream = Readable.fromWeb(result.body);
            nodeStream.pipe(res);
          } catch (streamError) {
            console.error('Stream conversion error:', streamError);
            // If conversion fails, try to read the entire stream
            const reader = result.body.getReader();
            const chunks = [];
            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(Buffer.from(value));
              }
              res.end(Buffer.concat(chunks));
            } catch (readError) {
              console.error('Stream read error:', readError);
              res.end();
            }
          }
        } else {
          // Handle string or other types
          res.end(result.body || '');
        }
      } catch (error) {
        console.error('Local server error:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Server Error: ${error.message}`);
      }
    });

    const port = process.env.DEV_PORT || 9000;
    server.listen(port, () => {
      console.log(`EdgeOne development server running at http://localhost:${port}`);
      console.log(`Static assets served from: ${ASSET_DIR}`);
    });
  });
});