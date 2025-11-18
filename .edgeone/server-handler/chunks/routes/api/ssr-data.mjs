import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const ssrData = defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const now = /* @__PURE__ */ new Date();
  const randomStats = {
    activeUsers: Math.floor(Math.random() * 1e3) + 500,
    totalViews: Math.floor(Math.random() * 1e4) + 5e4,
    serverLoad: Math.floor(Math.random() * 100),
    responseTime: Math.floor(Math.random() * 50) + 10
  };
  const users = [
    { id: 1, name: "John Doe", status: "online", lastActive: new Date(now.getTime() - Math.random() * 36e5) },
    { id: 2, name: "Jane Smith", status: "offline", lastActive: new Date(now.getTime() - Math.random() * 864e5) },
    { id: 3, name: "Mike Johnson", status: "online", lastActive: new Date(now.getTime() - Math.random() * 18e5) },
    { id: 4, name: "Sarah Wilson", status: "busy", lastActive: new Date(now.getTime() - Math.random() * 72e5) }
  ];
  const systemStatus = {
    database: Math.random() > 0.1 ? "healthy" : "warning",
    cache: Math.random() > 0.05 ? "healthy" : "error",
    api: "healthy",
    cdn: Math.random() > 0.02 ? "healthy" : "warning"
  };
  return {
    timestamp: now.toISOString(),
    serverTime: now.toLocaleString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }),
    stats: randomStats,
    users,
    systemStatus,
    renderMode: "SSR",
    requestId: Math.random().toString(36).substring(2, 15),
    performance: {
      generatedAt: now.getTime(),
      processingTime: Math.floor(Math.random() * 50) + 5
    },
    metadata: {
      version: "1.0.0",
      environment: "production",
      nodeVersion: process.version
    }
  };
});

export { ssrData as default };
//# sourceMappingURL=ssr-data.mjs.map
