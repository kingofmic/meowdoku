import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 3005);
const root = process.cwd();
const buildRoot = join(root, "out");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://localhost:${port}`);
    const decoded = decodeURIComponent(url.pathname);
    const pathname = decoded === "/" ? "/index.html" : decoded.endsWith("/") ? `${decoded}index.html` : decoded;
    const filePath = normalize(join(root, pathname));
    const buildFilePath = normalize(join(buildRoot, pathname));

    if (!filePath.startsWith(root) || !buildFilePath.startsWith(buildRoot)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    let body;
    let servedPath = filePath;
    try {
      body = await readFile(filePath);
    } catch {
      body = await readFile(buildFilePath);
      servedPath = buildFilePath;
    }
    res.writeHead(200, {
      "Content-Type": types[extname(servedPath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}).listen(port, () => {
  console.log(`Meowdoku running at http://localhost:${port}`);
});
