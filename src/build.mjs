import { mkdir, readFile, rm, cp, writeFile } from "node:fs/promises";
import path from "node:path";
import { pages, renderPage } from "./site.mjs";

const root = process.cwd();
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const server = path.join(dist, "server");

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });
await cp(path.join(root, "public"), client, { recursive: true });

const pageMap = {};

for (const page of pages) {
  const html = renderPage(page);
  pageMap[page.path] = html;
  const routeDir = path.join(client, page.path === "/" ? "" : page.path);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

const worker = `const pages = ${JSON.stringify(pageMap)};

const mime = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\\/$/, "") || "/";

    if (pathname.includes(".")) {
      if (env && env.ASSETS) return env.ASSETS.fetch(request);
      return new Response("Asset not found", { status: 404 });
    }

    const html = pages[pathname] || pages[pathname + "/"] || pages["/"];
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};`;

await writeFile(path.join(server, "index.js"), worker);

await mkdir(path.join(dist, "_appgen_meta"), { recursive: true });
await cp(path.join(root, ".openai", "hosting.json"), path.join(dist, "_appgen_meta", "appgarden.json"));
await writeFile(path.join(client, ".nojekyll"), "");

const homePage = pages.find((page) => page.path === "/");
if (homePage) {
  await writeFile(path.join(client, "404.html"), renderPage(homePage));
}

const screenshotSource = path.join(client, "images", "plnar-conference-backdrop-2026.png");
try {
  await readFile(path.join(client, "screenshot.jpeg"));
} catch {
  await cp(screenshotSource, path.join(client, "screenshot.jpeg"));
}

console.log(`Built ${pages.length} routes to dist/`);
