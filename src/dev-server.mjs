import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { pages, renderPage } from "./site.mjs";

const pageMap = new Map(pages.map((page) => [page.path, renderPage(page)]));
const root = process.cwd();
const port = Number(process.env.PORT || 3000);
const host = "127.0.0.1";

const mime = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = url.pathname.replace(/\/$/, "") || "/";

  if (pathname.includes(".")) {
    try {
      const file = await readFile(path.join(root, "public", pathname));
      response.writeHead(200, { "content-type": mime[path.extname(pathname)] || "application/octet-stream" });
      response.end(file);
      return;
    } catch {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
  }

  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(pageMap.get(pathname) || pageMap.get("/") || "");
});

server.listen(port, host, () => {
  console.log(`Plnar site running at http://${host}:${port}`);
});
