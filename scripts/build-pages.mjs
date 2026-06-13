import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const entries = ["index.html", "styles.css", "game.js", "analytics-config.js", "analytics.js", "assets", "_redirects"];

function loadEnv(text) {
  const env = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const index = line.indexOf("=");
    env[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return env;
}

async function copyEntry(source, target) {
  const stat = await fs.stat(source);
  if (stat.isDirectory()) {
    await fs.mkdir(target, { recursive: true });
    for (const entry of await fs.readdir(source)) {
      await copyEntry(path.join(source, entry), path.join(target, entry));
    }
    return;
  }
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(source, target);
}

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });

for (const entry of entries) {
  await copyEntry(path.join(root, entry), path.join(out, entry));
}

let gaMeasurementId = "";
try {
  const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
  gaMeasurementId = env.GA_MEASUREMENT_ID || "";
} catch {
  gaMeasurementId = process.env.GA_MEASUREMENT_ID || "";
}

await fs.writeFile(
  path.join(out, "analytics-config.js"),
  `window.MEOWDOKU_ANALYTICS = ${JSON.stringify({ gaMeasurementId })};\n`,
  "utf8"
);
await fs.writeFile(path.join(out, "_headers"), "/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n", "utf8");
console.log(`Built static site to ${out}`);
