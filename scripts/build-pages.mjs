import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const entries = ["index.html", "styles.css", "game.js", "analytics-config.js", "analytics.js", "assets", "_redirects"];
const siteUrl = "https://www.meowdoku.xyz";

const pages = [
  {
    path: "how-to-play",
    title: "How to Play Meowdoku - Rules for the Cat Logic Puzzle",
    description: "Learn Meowdoku rules: place one cat in every colored room, avoid shared rows and columns, and keep cats from touching diagonally.",
    h1: "How to Play Meowdoku",
    intro: "Meowdoku is easy to start because the rules fit on one small board, but the best solves come from careful elimination.",
    sections: [
      ["The Goal", "Fill the board with cats so every colored room has exactly one cat. A solved board also has one cat in each row and one cat in each column."],
      ["The Neighbor Rule", "Cats are cozy, but not crowded. Two cats cannot touch horizontally, vertically, or diagonally. When assist mode is on, the board shows soft dots around placed cats to make this rule easier to see."],
      ["A Good First Move", "Look for tiny colored rooms or rows with only a few legal cells. Mark impossible cells, then place a cat only when a room, row, or column has one remaining option."]
    ],
    keywords: ["how to play meowdoku", "meowdoku rules", "cat sudoku rules", "queens puzzle rules"]
  },
  {
    path: "tips",
    title: "Meowdoku Tips - Meowdoku Strategy for Cat Sudoku and Queens Puzzles",
    description: "Improve at Meowdoku with practical solving tips for color rooms, rows, columns, diagonal blocks, and hard 8x8 boards.",
    h1: "Meowdoku Tips and Strategy",
    intro: "The strongest Meowdoku solves feel calm: remove bad cells first, then let the board reveal where each cat belongs.",
    sections: [
      ["Meowdoku Room Scan", "Colored rooms are the identity of Meowdoku. If a room has two possible cells, every other row, column, and neighbor clue can decide between them."],
      ["Meowdoku Pairs", "When two Meowdoku rooms compete for the same two rows or columns, they often lock each other in place. Mark the cells that become impossible outside the pair."],
      ["Delay Guessing in Meowdoku", "A hard Meowdoku board should still be logical. If you feel forced to guess, switch to marking mode and ask what each already placed cat forbids around it."]
    ],
    keywords: ["meowdoku tips", "meow doku strategy", "cat queens puzzle strategy", "cat sudoku tips"]
  },
  {
    path: "levels",
    title: "Meowdoku Levels - Meowdoku Easy 6x6, Normal 7x7, Hard 8x8",
    description: "Compare Meowdoku difficulty levels and choose between easy 6x6, normal 7x7, and hard 8x8 cat logic boards.",
    h1: "Meowdoku Levels",
    intro: "Every difficulty gives three hearts. The board size changes, so the pressure grows through logic instead of unfair punishment.",
    sections: [
      ["Meowdoku Easy 6x6", "Best for learning the Meowdoku room, row, column, and no-touch rules. Easy boards teach the core rhythm quickly."],
      ["Meowdoku Normal 7x7", "A balanced Meowdoku challenge with more interaction between colored rooms. This is the best daily-play setting."],
      ["Meowdoku Hard 8x8", "Hard Meowdoku boards reward patient marking and room-by-room elimination. Use assist mode if you want the board to reveal neighbor exclusions."]
    ],
    keywords: ["meowdoku levels", "meowdoku hard", "8x8 cat puzzle", "queens puzzle difficulty"]
  },
  {
    path: "faq",
    title: "Meowdoku FAQ - Cat Sudoku, Meow Doku, and Queens Puzzle Answers",
    description: "Answers to common Meowdoku questions, including what Meowdoku means, whether it is Sudoku, and how assist mode works.",
    h1: "Meowdoku FAQ",
    intro: "Short answers for players searching Meowdoku, Meow Doku, cat sudoku, cat queens puzzle, or similar names.",
    sections: [
      ["Is Meowdoku Sudoku?", "It is Sudoku-like because rows and columns matter, but the main rule is a Queens-style region placement puzzle with cute cats instead of queens."],
      ["What happens when I lose a heart?", "A wrong placement removes one solid heart from the right side and leaves an outline heart behind, so your mistake history stays visible."],
      ["Can I play on mobile?", "Yes. The board, language picker, and controls are responsive for mobile browsers, tablets, and desktop screens."]
    ],
    keywords: ["meowdoku faq", "is meowdoku sudoku", "meow doku game", "cat sudoku online"]
  },
  {
    path: "meow-doku",
    title: "Meow Doku Online - The Cat Sudoku Logic Puzzle",
    description: "Looking for Meow Doku or Meowdoku? Play a free cat sudoku and Queens-style logic puzzle online with cute cats and multilingual support.",
    h1: "Meow Doku Online",
    intro: "Some players type Meow Doku with a space, others type Meowdoku as one word. Either way, this is the browser cat puzzle you can play instantly.",
    sections: [
      ["Why the Name Varies", "Searches like meow doku, meowdokou, meow sudoku, and cat sudoku usually point to the same idea: a charming logic puzzle about placing cats correctly."],
      ["Play First, Read Later", "The game is at the top of the homepage. Start with easy mode, then come back to this guide if you want rules, tips, or language pages."],
      ["Related Searches", "Useful related terms include cat queens puzzle, color region puzzle, daily logic puzzle, no-touch puzzle, and online queens game."]
    ],
    keywords: ["meow doku", "meow dokou", "meow sudoku", "meowdoku online"]
  },
  {
    path: "cat-sudoku",
    title: "Meowdoku Cat Sudoku Online - Cute Logic Puzzle with Meowdoku Rules",
    description: "Play Cat Sudoku online: a cute color-region logic puzzle where each row, column, and room needs one cat.",
    h1: "Meowdoku Cat Sudoku Online",
    intro: "Cat Sudoku is a friendly way to describe Meowdoku for players who already know Sudoku but want a more visual, region-based puzzle.",
    sections: [
      ["Meowdoku Is Similar to Sudoku", "Rows and columns matter in Meowdoku, and each line can contain only one cat. That familiar constraint makes the game easy to understand."],
      ["Meowdoku Is Different from Sudoku", "Numbers are replaced by cats, and colored rooms replace boxes. Diagonal touching is also forbidden, which adds a Queens-puzzle twist."],
      ["Who Meowdoku Is For", "If you like Sudoku, Minesweeper logic, Star Battle, Queens, nonograms, or daily brain teasers, Meowdoku Cat Sudoku is a natural fit."]
    ],
    keywords: ["cat sudoku", "cat sudoku online", "cute sudoku", "cat logic puzzle"]
  }
];

const languages = [
  ["ar", "العربية", "العب Meowdoku على الويب"],
  ["bn", "বাংলা", "অনলাইনে Meowdoku খেলুন"],
  ["zh", "简体中文", "在线玩 Meowdoku 猫咪数独"],
  ["zh-Hant", "繁體中文", "線上玩 Meowdoku 貓咪數獨"],
  ["cs", "Čeština", "Hrajte Meowdoku online"],
  ["nl", "Nederlands", "Speel Meowdoku online"],
  ["en", "English", "Play Meowdoku online"],
  ["fil", "Filipino", "Maglaro ng Meowdoku online"],
  ["fr", "Français", "Jouez à Meowdoku en ligne"],
  ["de", "Deutsch", "Meowdoku online spielen"],
  ["el", "Ελληνικά", "Παίξτε Meowdoku online"],
  ["gu", "ગુજરાતી", "Meowdoku ઑનલાઇન રમો"],
  ["ha", "Hausa", "Kunna Meowdoku a yanar gizo"],
  ["he", "עברית", "שחקו Meowdoku אונליין"],
  ["hi", "हिन्दी", "Meowdoku ऑनलाइन खेलें"],
  ["hu", "Magyar", "Játssz Meowdoku online"],
  ["id", "Bahasa Indonesia", "Main Meowdoku online"],
  ["it", "Italiano", "Gioca a Meowdoku online"],
  ["ja", "日本語", "Meowdokuをオンラインで遊ぶ"],
  ["jv", "Basa Jawa", "Dolanan Meowdoku online"],
  ["ko", "한국어", "Meowdoku 온라인 플레이"],
  ["ms", "Bahasa Melayu", "Main Meowdoku dalam talian"],
  ["mr", "मराठी", "Meowdoku ऑनलाइन खेळा"],
  ["pa", "ਪੰਜਾਬੀ", "Meowdoku ਆਨਲਾਈਨ ਖੇਡੋ"],
  ["fa", "فارسی", "Meowdoku را آنلاین بازی کنید"],
  ["pl", "Polski", "Graj w Meowdoku online"],
  ["pt", "Português", "Jogue Meowdoku online"],
  ["ro", "Română", "Joacă Meowdoku online"],
  ["ru", "Русский", "Играть в Meowdoku онлайн"],
  ["es", "Español", "Juega Meowdoku online"],
  ["sw", "Kiswahili", "Cheza Meowdoku mtandaoni"],
  ["sv", "Svenska", "Spela Meowdoku online"],
  ["ta", "தமிழ்", "Meowdoku ஆன்லைனில் விளையாடுங்கள்"],
  ["te", "తెలుగు", "Meowdoku ఆన్‌లైన్ ఆడండి"],
  ["th", "ไทย", "เล่น Meowdoku ออนไลน์"],
  ["tr", "Türkçe", "Meowdoku çevrimiçi oyna"],
  ["uk", "Українська", "Грати в Meowdoku онлайн"],
  ["ur", "اردو", "Meowdoku آن لائن کھیلیں"],
  ["vi", "Tiếng Việt", "Chơi Meowdoku trực tuyến"]
];

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

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function pageShell({ title, description, slug, h1, intro, body, keywords = [], lang = "en" }) {
  const canonical = `${siteUrl}/${slug ? `${slug}/` : ""}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonical,
    description,
    isPartOf: { "@type": "WebSite", name: "Meowdoku Garden", url: siteUrl },
    about: ["Meowdoku", "Meow Doku", "Cat Sudoku", "Queens puzzle", ...keywords]
  };
  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="keywords" content="${escapeHtml(["meowdoku", "meow doku", "cat sudoku", "cat queens puzzle", ...keywords].join(", "))}">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/png" href="/assets/cat-token.png">
    <link rel="apple-touch-icon" href="/assets/cat-token.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${siteUrl}/assets/cat-token.png">
    <link rel="stylesheet" href="/styles.css">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  </head>
  <body>
    <header class="site-header">
      <a class="site-brand" href="/"><img src="/assets/cat-token.png" alt="" class="brand-mark"><span>Meowdoku Garden</span></a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="/#play">Play</a>
        <a href="/how-to-play/">How to Play</a>
        <a href="/tips/">Tips</a>
        <a href="/levels/">Levels</a>
        <a href="/faq/">FAQ</a>
      </nav>
    </header>
    <main>
      <section class="seo-section">
        <div class="content-grid">
          <div>
            <p class="eyebrow">Meowdoku guide</p>
            <h1>${escapeHtml(h1)}</h1>
            <p>${escapeHtml(intro)}</p>
            <p><a class="text-link" href="/#play">Play Meowdoku Garden now</a></p>
            <p>Meowdoku is the main puzzle experience on this site, so each guide connects back to the same playable Meowdoku board, rules, and search terms.</p>
          </div>
          <div class="seo-card">
            <h2>Related Searches</h2>
            <p>${escapeHtml(["Meowdoku", "Meow Doku", "cat sudoku", "cat queens puzzle", "color region logic puzzle"].concat(keywords).join(" · "))}</p>
          </div>
        </div>
      </section>
      <section class="seo-section alt">
        <div class="content-grid three">
          ${body}
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div><img src="/assets/cat-token.png" alt="" class="footer-mark"><strong>Meowdoku Garden</strong><p>Free online Meowdoku, cat sudoku, Meow Doku, and Queens-style logic puzzles.</p></div>
      <nav aria-label="Footer navigation"><a href="/">Play</a><a href="/how-to-play/">How to Play</a><a href="/tips/">Tips</a><a href="/levels/">Levels</a><a href="/faq/">FAQ</a><a href="/languages/">Languages</a><a href="/sitemap.xml">Sitemap</a></nav>
    </footer>
    <script src="/analytics-config.js"></script>
    <script src="/analytics.js"></script>
  </body>
</html>
`;
}

async function writePage(slug, html) {
  const dir = path.join(out, slug);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), html, "utf8");
}

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });

for (const entry of entries) {
  await copyEntry(path.join(root, entry), path.join(out, entry));
}

for (const page of pages) {
  const body = page.sections.map(([heading, copy]) => `<article><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(copy)}</p></article>`).join("\n");
  await writePage(page.path, pageShell({ ...page, slug: page.path, body }));
}

const languageCards = languages.map(([code, label, heading]) => `<article><h2>${escapeHtml(label)}</h2><p>${escapeHtml(heading)}. Meowdoku Garden supports this language in the game interface and links it as a discovery entry for global players.</p><a class="text-link" href="/${code}/">Open ${escapeHtml(label)}</a></article>`).join("\n");
await writePage("languages", pageShell({
  title: "Meowdoku Languages - Play Cat Sudoku Around the World",
  description: "Choose a Meowdoku language page for major world languages and play the cat sudoku logic puzzle online.",
  slug: "languages",
  h1: "Meowdoku Languages",
  intro: "Meowdoku is built for global search and global play, with language-aware game UI and language landing pages for major communities.",
  body: languageCards,
  keywords: ["meowdoku languages", "cat sudoku languages", "international logic puzzle"]
}));

for (const [code, label, heading] of languages) {
  const slug = code;
  const body = [
    ["Play Instantly", `${heading}. Open the homepage and the game will try to match your browser language automatically.`],
    ["Rules", "Place one cat in every colored room. No two cats can share a row or column, and cats cannot touch diagonally."],
    ["Search Terms", `Players may search for Meowdoku, Meow Doku, cat sudoku, cat queens puzzle, or local-language logic puzzle terms in ${label}.`]
  ].map(([headingText, copy]) => `<article><h2>${escapeHtml(headingText)}</h2><p>${escapeHtml(copy)}</p></article>`).join("\n");
  await writePage(slug, pageShell({
    title: `${heading} - Meowdoku Garden`,
    description: `${heading}: play Meowdoku Garden, a free online cat sudoku and Queens-style logic puzzle.`,
    slug,
    h1: heading,
    intro: `This ${label} landing page helps players discover Meowdoku Garden and start the web game quickly.`,
    body,
    keywords: [`meowdoku ${label}`, `cat sudoku ${label}`],
    lang: code
  }));
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
const urls = ["", ...pages.map((page) => page.path), "languages", ...languages.map(([code]) => code)];
await fs.writeFile(
  path.join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((slug) => `  <url><loc>${siteUrl}/${slug ? `${slug}/` : ""}</loc><changefreq>${slug ? "weekly" : "daily"}</changefreq><priority>${slug ? "0.7" : "1.0"}</priority></url>`).join("\n")}\n</urlset>\n`,
  "utf8"
);
await fs.writeFile(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
await fs.writeFile(
  path.join(out, "site.webmanifest"),
  JSON.stringify({
    name: "Meowdoku Garden",
    short_name: "Meowdoku",
    description: "Play the cute cat sudoku and Queens-style logic puzzle online.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf1",
    theme_color: "#157f83",
    icons: [{ src: "/assets/cat-token.png", sizes: "256x256", type: "image/png" }]
  }, null, 2),
  "utf8"
);
await fs.writeFile(path.join(out, "_headers"), "/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n", "utf8");
console.log(`Built static site to ${out}`);
