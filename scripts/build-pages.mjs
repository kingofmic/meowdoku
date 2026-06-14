import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const siteUrl = "https://www.meowdoku.xyz";
const entries = ["index.html", "styles.css", "game.js", "site-language.js", "pwa.js", "sw.js", "analytics-config.js", "analytics.js", "assets", "_redirects"];

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

const topics = [
  {
    slug: "how-to-play",
    title: "How to Play Meowdoku - Complete Rules and First Solve Guide",
    h1: "How to Play Meowdoku",
    description: "Learn how to play Meowdoku with clear rules, a first-solve method, examples of legal placements, and mistakes to avoid.",
    intent: "rules",
    keywords: ["how to play meowdoku", "meowdoku rules", "meowdoku guide", "cat sudoku rules"],
    summary: [
      "Place exactly one cat in every colored room.",
      "Keep rows and columns unique: no two cats share a line.",
      "Cats cannot touch horizontally, vertically, or diagonally."
    ],
    sections: [
      ["The Meowdoku Goal", "A Meowdoku board is solved when every colored room has exactly one cat, every row has exactly one cat, and every column has exactly one cat. The rules look small, but they create a tight deduction puzzle."],
      ["Read Rooms First", "Before you place anything, scan the colored regions. Small rooms, narrow rooms, and rooms trapped along one edge often reveal the first useful restriction."],
      ["Use Marks Before Cats", "Marking impossible cells keeps the solve logical. If a cat would break a row, column, room, or adjacency rule, mark that cell instead of guessing."],
      ["The No-Touch Rule", "After placing a cat, every surrounding cell becomes impossible, including diagonals. This single rule is where many Meowdoku breakthroughs come from."],
      ["When a Placement Is Certain", "A placement is certain when one room, row, or column has only one legal cell left. Strong Meowdoku solving is mostly about creating those moments."]
    ],
    faqs: [
      ["What is the fastest way to learn Meowdoku?", "Start on a 6x6 board, use assist mode, and focus on one colored room at a time."],
      ["Is guessing required in Meowdoku?", "No. Good Meowdoku boards can be solved by elimination, row and column pressure, and the no-touch rule."],
      ["What should I check after placing a cat?", "Check the room, the row, the column, and the eight neighboring cells."]
    ]
  },
  {
    slug: "rules",
    title: "Meowdoku Rules - Room, Row, Column, and No-Touch Logic",
    h1: "Meowdoku Rules",
    description: "A detailed Meowdoku rules reference covering colored rooms, row and column limits, diagonal contact, marks, hearts, and assist mode.",
    intent: "rules reference",
    keywords: ["meowdoku rules", "meowdoku no touch rule", "cat puzzle rules", "queens rule puzzle"],
    summary: ["One cat per colored room.", "One cat per row and column.", "No touching, even diagonally."],
    sections: [
      ["Colored Room Rule", "Each colored region needs one cat. A room can be any shape, so the best clues often come from odd corners and narrow corridors."],
      ["Row Rule", "A completed row contains one cat. Once a cat sits in a row, every other cell in that row is no longer available for cats."],
      ["Column Rule", "A completed column contains one cat. Columns combine with room boundaries to create strong locks and forced placements."],
      ["Neighbor Rule", "Cats cannot be neighbors, including diagonally. In Meowdoku, diagonal contact is just as illegal as side-by-side contact."],
      ["Hearts and Mistakes", "Hearts are feedback, not the puzzle engine. The logic remains the same: place carefully, learn from the blocked cell, and keep the board clean."]
    ],
    faqs: [
      ["Can two cats be diagonal in Meowdoku?", "No. Diagonal touching is not allowed."],
      ["Can a colored room have zero cats?", "Not in a solved Meowdoku board. Every colored room needs one cat."],
      ["Are marks part of the rules?", "Marks are a solving aid. They help you remember cells that cannot contain cats."]
    ]
  },
  {
    slug: "tips",
    title: "Meowdoku Tips - Practical Solving Habits for Better Cat Sudoku",
    h1: "Meowdoku Tips",
    description: "Improve Meowdoku solving with practical tips for scanning rooms, finding pairs, using assist mode, and avoiding common traps.",
    intent: "tips",
    keywords: ["meowdoku tips", "meowdoku strategy", "cat sudoku tips", "meow doku tips"],
    summary: ["Scan constrained rooms.", "Mark impossible cells.", "Use row-column pairs before guessing."],
    sections: [
      ["Start with Pressure", "A cell is under pressure when its row, column, room, or neighbors already remove many options. High-pressure areas are usually where Meowdoku opens up."],
      ["Find Room Pairs", "If two rooms can only use the same two rows, those rows may be locked. This pair thinking is one of the cleanest Meowdoku strategy patterns."],
      ["Use Corners Carefully", "Corners have fewer neighbors, which can make them attractive. But a corner cat can still block a row, a column, and nearby room cells."],
      ["Switch Assist On While Learning", "Assist mode shows cells blocked by neighboring cats. It is not a cheat; it is a visual way to learn the shape of the no-touch rule."],
      ["Reset Your Assumptions", "If a Meowdoku board feels stuck, stop looking for a cat placement and look for a cell that must be impossible."]
    ],
    faqs: [
      ["What is the best Meowdoku tip for beginners?", "Mark more cells before placing cats."],
      ["Should I use assist mode?", "Yes while learning. Turn it off later when you want a cleaner challenge."],
      ["Why do I get stuck?", "Most stuck moments come from missing a diagonal no-touch restriction or a room-row lock."]
    ]
  },
  {
    slug: "strategy",
    title: "Meowdoku Strategy - Advanced Logic Patterns for Hard Boards",
    h1: "Meowdoku Strategy",
    description: "Advanced Meowdoku strategy guide for room locks, row-column pressure, adjacency chains, and hard 8x8 puzzle solving.",
    intent: "advanced strategy",
    keywords: ["meowdoku strategy", "advanced meowdoku", "hard meowdoku", "queens puzzle strategy"],
    summary: ["Build locks.", "Track exclusions.", "Prefer deductions over guesses."],
    sections: [
      ["Room-Row Locks", "When every legal cell in a room sits inside one row, that row is reserved for the room. Other rooms cannot place a cat in that same row."],
      ["Column Chains", "Column pressure can travel across the board. One forced column choice can remove a cat from a distant room, creating a second forced choice."],
      ["Adjacency Cascades", "The no-touch rule can create cascades: one cat blocks neighboring cells, which forces another room, which then blocks more neighbors."],
      ["Negative Space", "Hard Meowdoku often depends on proving where cats cannot go. The empty-looking cells are information, not filler."],
      ["Endgame Sweep", "At the end, check remaining rooms against unused rows and columns. The final cat is usually forced by a line you have not checked recently."]
    ],
    faqs: [
      ["What makes hard Meowdoku hard?", "Hard boards hide forced moves behind room locks and adjacency cascades."],
      ["Is advanced Meowdoku like Sudoku?", "It shares row and column thinking, but colored rooms and no-touch adjacency make the logic feel closer to Queens or Star Battle."],
      ["How do I avoid guessing?", "Ask which cells are impossible first. A forced cat appears after enough cells are eliminated."]
    ]
  },
  {
    slug: "levels",
    title: "Meowdoku Levels - Easy 6x6, Normal 7x7, and Hard 8x8 Boards",
    h1: "Meowdoku Levels",
    description: "Compare Meowdoku levels, learn what changes from 6x6 to 8x8, and choose the right difficulty for your solving style.",
    intent: "difficulty",
    keywords: ["meowdoku levels", "meowdoku easy", "meowdoku hard", "8x8 meowdoku"],
    summary: ["Easy is 6x6.", "Normal is 7x7.", "Hard is 8x8."],
    sections: [
      ["Easy 6x6", "Easy Meowdoku teaches the rules quickly. The board is small enough to see row, column, room, and neighbor logic at the same time."],
      ["Normal 7x7", "Normal boards add enough space for room locks and row-column tension without becoming exhausting."],
      ["Hard 8x8", "Hard boards are for deliberate marking. They reward players who can hold several exclusions in mind."],
      ["Why Hearts Stay the Same", "Every difficulty uses three hearts so the challenge comes from the board, not from changing the punishment."],
      ["Which Level Should You Play?", "If you are learning, use Easy. If you want a daily habit, use Normal. If you want a deeper solve, use Hard."]
    ],
    faqs: [
      ["Does hard mode have fewer hearts?", "No. All Meowdoku levels use three hearts."],
      ["Which level is best for learning the game?", "Easy 6x6 is the clearest first experience."],
      ["Can I switch levels anytime?", "Yes. Use the level tabs above the board."]
    ]
  },
  {
    slug: "daily",
    title: "Daily Meowdoku - A Calm Cat Logic Puzzle Habit",
    h1: "Daily Meowdoku",
    description: "Use Meowdoku as a daily logic puzzle routine with quick boards, repeatable solving habits, and mobile-friendly play.",
    intent: "daily play",
    keywords: ["daily meowdoku", "daily cat puzzle", "daily logic puzzle", "daily queens puzzle"],
    summary: ["Short sessions.", "Repeatable logic.", "Easy to play on mobile."],
    sections: [
      ["Why Meowdoku Works Daily", "A Meowdoku solve is compact enough for a break but structured enough to feel meaningful. Each board gives a complete little deduction arc."],
      ["A Three-Minute Routine", "Start with the smallest room, mark obvious no-touch cells, place the first forced cat, then rescan rows and columns."],
      ["Track Improvement", "The timer and best time make progress visible without turning the puzzle into a race."],
      ["Play Without Downloading", "Because Meowdoku Garden is web-based, the daily puzzle habit works on desktop, tablet, and phone."],
      ["How Friends May Find It", "Friends may look for Meowdoku, Meow Doku, cat sudoku, daily cat puzzle, or Queens puzzle. Those names all point back to the same kind of cat logic challenge."]
    ],
    faqs: [
      ["Is Meowdoku good for a daily puzzle routine?", "Yes. Boards are short, visual, and logic-driven."],
      ["Do I need an app?", "No. Meowdoku Garden runs in the browser."],
      ["What difficulty should I play daily?", "Normal 7x7 is the best everyday balance."]
    ]
  },
  {
    slug: "beginner-guide",
    title: "Meowdoku Beginner Guide - Learn Cat Sudoku Without Guessing",
    h1: "Meowdoku Beginner Guide",
    description: "A beginner-friendly Meowdoku guide that explains what to look at first, how to mark cells, and how to solve without guessing.",
    intent: "beginner",
    keywords: ["meowdoku beginner", "learn meowdoku", "cat sudoku beginner", "meow doku beginner"],
    summary: ["Start small.", "Mark often.", "Place only when certain."],
    sections: [
      ["Do Not Start in the Middle", "Beginners often tap the center because it looks important. In Meowdoku, a tiny edge room may be much more useful."],
      ["One Rule at a Time", "Ask four questions: room, row, column, neighbor. If any answer is illegal, the cell cannot hold a cat."],
      ["Use the Mark Button", "Marks are memory. They keep you from rechecking the same impossible cell again and again."],
      ["Watch Diagonals", "Most beginner errors come from diagonal contact. Assist mode can train your eye until the pattern feels natural."],
      ["Celebrate Forced Moves", "A forced move is not luck. It is the reward for removing enough impossible choices."]
    ],
    faqs: [
      ["Is Meowdoku hard for beginners?", "Easy mode is built for beginners, especially with assist mode on."],
      ["What should I learn first?", "Learn the no-touch rule and how colored rooms work."],
      ["Should I place cats quickly?", "No. Mark first, place when certain."]
    ]
  },
  {
    slug: "hard-puzzles",
    title: "Hard Meowdoku Puzzles - 8x8 Cat Logic Strategy",
    h1: "Hard Meowdoku Puzzles",
    description: "Understand hard Meowdoku puzzles, including 8x8 board pressure, advanced marking, room locks, and endgame checks.",
    intent: "hard difficulty",
    keywords: ["hard meowdoku", "8x8 meowdoku", "hard cat sudoku", "advanced queens puzzle"],
    summary: ["8x8 boards.", "Longer chains.", "More careful endgames."],
    sections: [
      ["Why 8x8 Feels Different", "The board has more room for false choices. Hard Meowdoku asks you to keep exclusions organized instead of relying on quick visual certainty."],
      ["Mark the First Wave", "Before placing a cat, mark cells made impossible by obvious row, column, and room conflicts."],
      ["Look for Split Rooms", "A split room may have options in two distant areas. One row or column lock can collapse the room into a single side."],
      ["Do Not Chase the Last Cat", "The last cat becomes clear when all previous rows, columns, and rooms are checked. Work backward through constraints."],
      ["Use Assist as a Review Tool", "On hard boards, assist mode is useful after a mistake because it reveals which adjacency you missed."]
    ],
    faqs: [
      ["Is hard Meowdoku always 8x8?", "In this web version, hard mode uses 8x8 boards."],
      ["Do hard puzzles require guessing?", "They should not. Hard boards reward deeper elimination."],
      ["What is the most common hard-mode mistake?", "Missing a diagonal no-touch conflict."]
    ]
  },
  {
    slug: "queens-puzzle",
    title: "Meowdoku Queens Puzzle - Cat-Themed Queens Logic Online",
    h1: "Meowdoku as a Queens Puzzle",
    description: "See how Meowdoku relates to Queens puzzles, including row, column, region, and no-touch placement logic.",
    intent: "related puzzle",
    keywords: ["meowdoku queens puzzle", "queens puzzle online", "cat queens puzzle", "queens logic game"],
    summary: ["Queens-style placement.", "Cats instead of queens.", "Colored regions drive the solve."],
    sections: [
      ["The Queens Connection", "Classic Queens puzzles ask for one queen in each row, column, and region. Meowdoku keeps that satisfying structure and turns it into a cozy cat puzzle."],
      ["Why Cats Change the Feel", "The logic remains sharp, but the visual language is friendlier. A cat token makes the board feel less abstract while preserving deduction."],
      ["No-Touch Placement", "Many Queens variants forbid touching. In Meowdoku, that rule is central: cats need space in every direction."],
      ["Region Shapes Matter", "Colored regions are not just decoration. Their shapes tell you where cats can and cannot fit."],
      ["Who Should Play", "If you enjoy Queens, Star Battle, Sudoku, or grid logic puzzles, Meowdoku is a natural browser-friendly next puzzle."]
    ],
    faqs: [
      ["Is Meowdoku a Queens puzzle?", "It is Queens-inspired: one piece per row, column, and region, with no touching."],
      ["Why use cats instead of queens?", "Cats make the logic more approachable and memorable."],
      ["Can Queens players solve Meowdoku quickly?", "Usually yes, because the core constraints are familiar."]
    ]
  },
  {
    slug: "cat-sudoku",
    title: "Meowdoku Cat Sudoku Online - Cute Logic Puzzle with Meowdoku Rules",
    h1: "Meowdoku Cat Sudoku Online",
    description: "Play Cat Sudoku online through Meowdoku: a cute color-region logic puzzle where rows, columns, and rooms each need one cat.",
    intent: "cat sudoku",
    keywords: ["cat sudoku", "cat sudoku online", "cute sudoku", "meowdoku cat sudoku"],
    summary: ["Sudoku-like rows.", "Colored regions.", "Cute cat tokens."],
    sections: [
      ["Why People Call It Cat Sudoku", "Meowdoku feels Sudoku-like because rows and columns matter. Instead of filling numbers, you place cats."],
      ["What Makes It Different", "Sudoku uses boxes and digits. Meowdoku uses colored rooms, no-touch adjacency, and visual placement."],
      ["A Friendlier First Impression", "Cat Sudoku is easy to explain: every room needs a cat, but cats cannot share rows, columns, or touch."],
      ["Good for Visual Solvers", "Because the board uses color and shape, Meowdoku can be easier to scan than number-heavy puzzles."],
      ["Other Names", "Players may call it cat sudoku, meow sudoku, meow doku, cat queens puzzle, or Meowdoku online."]
    ],
    faqs: [
      ["Is Cat Sudoku the same as Meowdoku?", "Cat Sudoku is a natural way to describe Meowdoku-style cat placement logic."],
      ["Are there numbers in Meowdoku?", "No. The puzzle uses cats and colored rooms instead of numbers."],
      ["Is it free online?", "Yes. Meowdoku Garden is free to play in the browser."]
    ]
  },
  {
    slug: "color-region-puzzle",
    title: "Meowdoku Color Region Puzzle - Why Colored Rooms Matter",
    h1: "Meowdoku Color Region Puzzle",
    description: "Learn how colored regions shape Meowdoku logic, create locks, and turn simple row-column rules into deeper deduction.",
    intent: "color regions",
    keywords: ["color region puzzle", "meowdoku rooms", "colored room puzzle", "region logic puzzle"],
    summary: ["Rooms define obligations.", "Shapes create locks.", "Colors make logic visible."],
    sections: [
      ["Rooms Are Commitments", "Each colored region must contain one cat. That means every room is both a target and a source of exclusions."],
      ["Shape Beats Size", "A large room can be easy if it is squeezed into one row. A small room can be hard if its few cells interact with many neighbors."],
      ["Color Helps Memory", "Color lets players remember which cells belong together without reading coordinates."],
      ["Room Locks", "When a room's legal cells all sit in one row or column, that line becomes locked for the room."],
      ["Why Region Shapes Matter", "Color-region logic gives Meowdoku its identity. The rooms create the same satisfying placement pressure that players enjoy in region puzzles, Queens puzzles, and Star Battle."]
    ],
    faqs: [
      ["Why does Meowdoku use colored rooms?", "Colored rooms define the one-cat-per-region rule."],
      ["Do colors repeat?", "Colors are visual aids; the important part is the room boundary."],
      ["Can a room shape force a cat?", "Yes. A constrained room can force a placement by eliminating all but one cell."]
    ]
  },
  {
    slug: "no-touch-rule",
    title: "Meowdoku No-Touch Rule - Why Cats Cannot Touch",
    h1: "Meowdoku No-Touch Rule",
    description: "Understand the Meowdoku no-touch rule, including diagonal blocking, assist dots, common mistakes, and solving opportunities.",
    intent: "specific rule",
    keywords: ["meowdoku no touch", "cats cannot touch puzzle", "diagonal rule meowdoku", "no-touch puzzle"],
    summary: ["Side contact is illegal.", "Diagonal contact is illegal.", "Assist dots reveal blocked cells."],
    sections: [
      ["The Rule", "Two cats cannot occupy neighboring cells. That includes left, right, up, down, and all four diagonals."],
      ["Why Diagonals Matter", "Diagonal contact is easy to miss because the cats do not share a row or column. Meowdoku still forbids it."],
      ["How Assist Helps", "Assist mode adds black dots around placed cats so the no-touch pattern is visible while you learn."],
      ["Turn Mistakes into Clues", "A no-touch mistake tells you which area was over-crowded. After the heart changes, rescan nearby rooms."],
      ["Strategic Power", "The no-touch rule is not only a restriction. It can force cats by eliminating surrounding alternatives."]
    ],
    faqs: [
      ["Can cats touch diagonally in Meowdoku?", "No. Diagonal touching is forbidden."],
      ["Does assist mode change the rules?", "No. It only shows cells that are already impossible."],
      ["Why did I lose a heart?", "Most likely the new cat conflicted with a row, column, room, or neighbor rule."]
    ]
  },
  {
    slug: "hints",
    title: "Meowdoku Hints - How to Use Hints Without Spoiling the Puzzle",
    h1: "Meowdoku Hints",
    description: "Learn when to use Meowdoku hints, how assist mode differs from hints, and how to keep improving after a hint.",
    intent: "hints",
    keywords: ["meowdoku hints", "meowdoku help", "cat sudoku hints", "meowdoku assist mode"],
    summary: ["Hints reveal direction.", "Assist teaches adjacency.", "Use hints after checking rooms."],
    sections: [
      ["Hint vs Assist", "A hint points toward a useful cell. Assist mode shows adjacency exclusions around cats. They solve different problems."],
      ["When to Ask for a Hint", "Use a hint after you have checked every unsolved room, unused row, and unused column at least once."],
      ["Learn from the Hint", "Do not just place the hinted cat. Ask which rule made that cell useful: room pressure, row pressure, column pressure, or no-touch logic."],
      ["Keep Momentum", "A single hint can restart a board without spoiling the whole solve."],
      ["Better Hints", "When players get stuck, the best help teaches the next deduction instead of simply revealing an answer."]
    ],
    faqs: [
      ["Does a hint solve the whole board?", "No. A hint gives direction for the next useful move."],
      ["Is assist mode a hint?", "Assist mode is a visual rule aid, not a direct solution."],
      ["Should beginners use hints?", "Yes, if they also review why the hinted cell matters."]
    ]
  },
  {
    slug: "mistakes",
    title: "Meowdoku Mistakes - Common Errors and How to Fix Them",
    h1: "Meowdoku Mistakes",
    description: "Avoid common Meowdoku mistakes with rows, columns, colored rooms, diagonal touching, over-marking, and rushed placements.",
    intent: "errors",
    keywords: ["meowdoku mistakes", "meowdoku errors", "cat sudoku mistakes", "meowdoku hearts"],
    summary: ["Diagonal misses.", "Duplicate rooms.", "Rushed placements."],
    sections: [
      ["Diagonal Contact", "The most common Meowdoku mistake is placing cats diagonally adjacent. It feels harmless until the no-touch rule catches it."],
      ["Duplicate Room Cats", "A colored room can hold only one cat. If you place a second cat in the same room, the room logic breaks immediately."],
      ["Ignoring Columns", "Rows are visually easy to scan. Columns are just as important and are easy to miss on mobile."],
      ["Over-Marking", "Marks help, but incorrect marks can hide the real solution. Reset marks mentally when a new cat changes the board."],
      ["Rushing After a Hint", "A hint should slow you down for one second. Ask what the hint teaches before tapping the next cell."]
    ],
    faqs: [
      ["Why do hearts become empty?", "Each wrong placement removes one life and leaves an outline heart."],
      ["Can I recover after a mistake?", "Yes. Use the feedback to inspect the row, column, room, and neighbors."],
      ["What mistake should I check first?", "Check diagonal touching first."]
    ]
  },
  {
    slug: "meow-doku",
    title: "Meow Doku Online - Meowdoku With a Space",
    h1: "Meow Doku Online",
    description: "Looking for Meow Doku, Meowdokou, Meow Sudoku, or Meowdoku? Play the free cat logic puzzle online and learn the rules.",
    intent: "variant keyword",
    keywords: ["meow doku", "meow dokou", "meow sudoku", "meowdoku online"],
    summary: ["Same puzzle idea.", "Common spelling variation.", "Instant browser play."],
    sections: [
      ["Meowdoku or Meow Doku", "Both versions point to the same idea. Players often add a space because the name sounds like a playful version of Sudoku."],
      ["Other Names", "Meowdokou, meow sudoku, cat sudoku, cat queens, and color region puzzle are all natural ways people may describe this game."],
      ["Finding the Right Game", "If you used a spaced name, a misspelling, or a similar puzzle phrase, this page points you back to the playable Meowdoku board quickly."],
      ["Start Playing", "The homepage has the playable board at the top, with Easy, Normal, and Hard modes."],
      ["Learn the Rules", "If the name brought you here, the core rule is simple: one cat per room, row, and column, with no touching."]
    ],
    faqs: [
      ["Is Meow Doku the same as Meowdoku?", "For this site, yes. Meow Doku is a spacing variation of Meowdoku."],
      ["Is there a download?", "No download is needed for the web version."],
      ["What if I misspelled the name?", "You are still in the right place. Meow Doku, Meowdokou, and Meow Sudoku are easy ways to arrive at Meowdoku."]
    ]
  },
  {
    slug: "variants",
    title: "Meowdoku Names - Meow Doku, Miaodoku, Catdoku, Kittydoku, and Cat Sudoku",
    h1: "Meowdoku Names and Similar Puzzle Terms",
    description: "Find Meowdoku even if you know it as Meow Doku, Miaodoku, Catdoku, Kittydoku, meow sudoku, cat sudoku, cat queens puzzle, or region logic puzzle.",
    intent: "names and puzzle terms",
    keywords: ["meowdoku", "meow doku", "miaodoku", "catdoku", "kittydoku", "meow sudoku", "cat sudoku", "cat queens puzzle"],
    summary: ["Meowdoku is the main name for this cat logic puzzle.", "Meow Doku, Miaodoku, Catdoku, Kittydoku, and Meow Sudoku are common ways people may describe it.", "The rules connect it to cat sudoku, Queens puzzles, no-touch puzzles, and color-region logic games."],
    sections: [
      ["Meowdoku", "Meowdoku is the main name used on this site: a cat-themed logic puzzle with colored rooms, row and column rules, and no-touch placement."],
      ["Meow Doku", "Some players add a space because the name sounds like a playful twist on Sudoku. The rules and playable board are the same."],
      ["Miaodoku and Misspellings", "Miaodoku, meowdokou, and similar spellings usually mean players are trying to find the same cat puzzle from memory."],
      ["Kittydoku and Catdoku", "Kittydoku and Catdoku are natural descriptions for a cute cat placement puzzle, especially for people who have not seen the official name yet."],
      ["Related Puzzle Names", "Cat sudoku, cat queens puzzle, no-touch puzzle, colored room puzzle, and region logic puzzle all describe parts of the Meowdoku experience."]
    ],
    faqs: [
      ["Is Meow Doku the same as Meowdoku?", "Yes. Meow Doku is a common spaced version of the same name."],
      ["Are Miaodoku, Catdoku, and Kittydoku official names?", "They are not the main name here, but they are understandable ways people describe a cat logic puzzle."],
      ["What puzzle category is Meowdoku closest to?", "It feels like a mix of cat sudoku, Queens puzzle placement, no-touch logic, and colored-region deduction."]
    ]
  },
  {
    slug: "mobile",
    title: "Meowdoku Mobile - Play the Cat Logic Puzzle in Your Browser",
    h1: "Meowdoku Mobile",
    description: "Play Meowdoku on mobile with responsive boards, touch controls, long-press marking, hints, assist mode, and no app download.",
    intent: "mobile",
    keywords: ["meowdoku mobile", "play meowdoku on phone", "mobile cat sudoku", "browser puzzle mobile"],
    summary: ["Touch-friendly board.", "No download.", "Responsive layout."],
    sections: [
      ["Designed for Touch", "Cells are large enough to tap, and the board scales for phone screens without hiding the game controls."],
      ["Long-Press Marking", "On touch devices, long-pressing a cell can mark it as impossible, keeping mobile solving fast."],
      ["Header Language Picker", "The global language picker stays in the header so mobile visitors can reach the right language entry from every page."],
      ["No App Store Required", "The browser version makes Meowdoku easy to open immediately."],
      ["Best Mobile Habit", "Use Easy or Normal mode on the phone, then use Hard mode on larger screens when you want slower analysis."]
    ],
    faqs: [
      ["Can I play Meowdoku on my phone?", "Yes. It runs in a mobile browser."],
      ["Do I need to install anything?", "No. The web version is instant."],
      ["Does mobile support marking?", "Yes. You can use mark mode or long-press."]
    ]
  },
  {
    slug: "faq",
    title: "Meowdoku FAQ - Answers About the Cat Sudoku Logic Puzzle",
    h1: "Meowdoku FAQ",
    description: "Answers to common Meowdoku questions about rules, difficulty, cats, hearts, hints, mobile play, and related puzzle names.",
    intent: "faq",
    keywords: ["meowdoku faq", "is meowdoku sudoku", "meowdoku answers", "cat sudoku online"],
    summary: ["Rules explained.", "Search variants covered.", "Gameplay questions answered."],
    sections: [
      ["What Is Meowdoku?", "Meowdoku is a cat-themed logic puzzle where you place cats into colored rooms without sharing rows, columns, or neighboring cells."],
      ["Is Meowdoku Sudoku?", "It is Sudoku-like because rows and columns matter, but the colored rooms and no-touch rule make it closer to Queens or Star Battle."],
      ["Is Meowdoku Free?", "Meowdoku Garden is free to play online in the browser."],
      ["What Are Hearts?", "Hearts show how many mistakes you can make before the board resets."],
      ["What Other Names Do Players Use?", "Players may call it Meow Doku, cat sudoku, meow sudoku, cat queens puzzle, or a color region puzzle."]
    ],
    faqs: [
      ["What does Meowdoku mean?", "It combines a cat theme with Sudoku-like logic."],
      ["Can cats touch diagonally?", "No. Cats cannot touch diagonally."],
      ["Where should I start?", "Start with How to Play, then try Easy mode."]
    ]
  },
  {
    slug: "glossary",
    title: "Meowdoku Glossary - Rooms, Marks, Hearts, and Cat Puzzle Terms",
    h1: "Meowdoku Glossary",
    description: "A Meowdoku glossary explaining colored rooms, marks, assist mode, hearts, no-touch logic, row locks, and cat sudoku terms.",
    intent: "glossary",
    keywords: ["meowdoku glossary", "meowdoku terms", "cat sudoku glossary", "queens puzzle terms"],
    summary: ["Puzzle vocabulary.", "Beginner-friendly definitions.", "Clear names for every rule."],
    sections: [
      ["Colored Room", "A connected region of cells with the same room identity. Each colored room needs exactly one cat."],
      ["Mark", "A mark is a dot placed on a cell that cannot contain a cat. Marks help track deductions."],
      ["Assist Mode", "Assist mode visually shows cells blocked by the no-touch rule around placed cats."],
      ["Heart", "A heart is one available mistake. Empty hearts show used lives."],
      ["Room Lock", "A room lock happens when all legal cells for a room sit in a single row or column."]
    ],
    faqs: [
      ["Why have a glossary?", "Glossaries help beginners learn the names of rules, marks, rooms, hearts, and no-touch patterns."],
      ["Is a mark the same as a cat?", "No. A mark means a cat cannot go there."],
      ["What is a row lock?", "A row lock reserves a row for one room's cat."]
    ]
  }
];

const topicNames = {
  "how-to-play": { zh: "Meowdoku 玩法指南", "zh-Hant": "Meowdoku 玩法指南", ja: "Meowdoku の遊び方", ko: "Meowdoku 플레이 방법", es: "Cómo jugar Meowdoku", fr: "Comment jouer à Meowdoku", de: "Meowdoku spielen", pt: "Como jogar Meowdoku", ru: "Как играть в Meowdoku" },
  rules: { zh: "Meowdoku 规则", "zh-Hant": "Meowdoku 規則", ja: "Meowdoku ルール", ko: "Meowdoku 규칙", es: "Reglas de Meowdoku", fr: "Règles de Meowdoku", de: "Meowdoku-Regeln", pt: "Regras do Meowdoku", ru: "Правила Meowdoku" },
  tips: { zh: "Meowdoku 技巧", "zh-Hant": "Meowdoku 技巧", ja: "Meowdoku のコツ", ko: "Meowdoku 팁", es: "Consejos de Meowdoku", fr: "Astuces Meowdoku", de: "Meowdoku-Tipps", pt: "Dicas de Meowdoku", ru: "Советы Meowdoku" },
  strategy: { zh: "Meowdoku 策略", "zh-Hant": "Meowdoku 策略", ja: "Meowdoku 戦略", ko: "Meowdoku 전략", es: "Estrategia de Meowdoku", fr: "Stratégie Meowdoku", de: "Meowdoku-Strategie", pt: "Estratégia de Meowdoku", ru: "Стратегия Meowdoku" },
  levels: { zh: "Meowdoku 难度", "zh-Hant": "Meowdoku 難度", ja: "Meowdoku 難易度", ko: "Meowdoku 난이도", es: "Niveles de Meowdoku", fr: "Niveaux Meowdoku", de: "Meowdoku-Level", pt: "Níveis de Meowdoku", ru: "Уровни Meowdoku" },
  daily: { zh: "每日 Meowdoku", "zh-Hant": "每日 Meowdoku", ja: "毎日の Meowdoku", ko: "데일리 Meowdoku", es: "Meowdoku diario", fr: "Meowdoku quotidien", de: "Tägliches Meowdoku", pt: "Meowdoku diário", ru: "Ежедневный Meowdoku" },
  "beginner-guide": { zh: "Meowdoku 新手指南", "zh-Hant": "Meowdoku 新手指南", ja: "Meowdoku 初心者ガイド", ko: "Meowdoku 초보자 가이드", es: "Guía para principiantes", fr: "Guide débutant", de: "Einsteigerleitfaden", pt: "Guia iniciante", ru: "Гайд для новичков" },
  "hard-puzzles": { zh: "Meowdoku 困难题", "zh-Hant": "Meowdoku 困難題", ja: "難しい Meowdoku", ko: "어려운 Meowdoku", es: "Meowdoku difícil", fr: "Meowdoku difficile", de: "Schwere Meowdoku", pt: "Meowdoku difícil", ru: "Сложные Meowdoku" },
  "queens-puzzle": { zh: "Meowdoku 与 Queens 谜题", "zh-Hant": "Meowdoku 與 Queens 謎題", ja: "Meowdoku と Queens パズル", ko: "Meowdoku와 Queens 퍼즐", es: "Meowdoku y Queens", fr: "Meowdoku et Queens", de: "Meowdoku und Queens", pt: "Meowdoku e Queens", ru: "Meowdoku и Queens" },
  "cat-sudoku": { zh: "Meowdoku 猫咪数独", "zh-Hant": "Meowdoku 貓咪數獨", ja: "Meowdoku 猫数独", ko: "Meowdoku 고양이 스도쿠", es: "Sudoku de gatos Meowdoku", fr: "Sudoku chat Meowdoku", de: "Meowdoku Katzen-Sudoku", pt: "Sudoku de gatos Meowdoku", ru: "Кошачье судоку Meowdoku" },
  "color-region-puzzle": { zh: "Meowdoku 彩色区域谜题", "zh-Hant": "Meowdoku 彩色區域謎題", ja: "Meowdoku 色分け領域パズル", ko: "Meowdoku 색 영역 퍼즐", es: "Regiones de color", fr: "Régions colorées", de: "Farbbereiche", pt: "Regiões coloridas", ru: "Цветные регионы" },
  "no-touch-rule": { zh: "Meowdoku 不相邻规则", "zh-Hant": "Meowdoku 不相鄰規則", ja: "Meowdoku 非接触ルール", ko: "Meowdoku 비접촉 규칙", es: "Regla de no tocarse", fr: "Règle sans contact", de: "Nicht-berühren-Regel", pt: "Regra sem toque", ru: "Правило без касаний" },
  hints: { zh: "Meowdoku 提示", "zh-Hant": "Meowdoku 提示", ja: "Meowdoku ヒント", ko: "Meowdoku 힌트", es: "Pistas de Meowdoku", fr: "Indices Meowdoku", de: "Meowdoku-Hinweise", pt: "Dicas de ajuda", ru: "Подсказки Meowdoku" },
  mistakes: { zh: "Meowdoku 常见错误", "zh-Hant": "Meowdoku 常見錯誤", ja: "Meowdoku よくあるミス", ko: "Meowdoku 흔한 실수", es: "Errores comunes", fr: "Erreurs fréquentes", de: "Häufige Fehler", pt: "Erros comuns", ru: "Частые ошибки" },
  "meow-doku": { zh: "Meow Doku 在线", "zh-Hant": "Meow Doku 線上版", ja: "Meow Doku オンライン", ko: "Meow Doku 온라인", es: "Meow Doku online", fr: "Meow Doku en ligne", de: "Meow Doku online", pt: "Meow Doku online", ru: "Meow Doku онлайн" },
  variants: { zh: "Meowdoku 常见名称", "zh-Hant": "Meowdoku 常見名稱", ja: "Meowdoku のよくある名前", ko: "Meowdoku 자주 쓰는 이름", es: "Nombres comunes", fr: "Noms courants", de: "Haeufige Namen", pt: "Nomes comuns", ru: "Другие названия" },
  mobile: { zh: "Meowdoku 手机版", "zh-Hant": "Meowdoku 手機版", ja: "Meowdoku モバイル", ko: "Meowdoku 모바일", es: "Meowdoku móvil", fr: "Meowdoku mobile", de: "Meowdoku mobil", pt: "Meowdoku mobile", ru: "Meowdoku на телефоне" },
  faq: { zh: "Meowdoku 常见问题", "zh-Hant": "Meowdoku 常見問題", ja: "Meowdoku FAQ", ko: "Meowdoku FAQ", es: "Preguntas frecuentes", fr: "FAQ Meowdoku", de: "Meowdoku FAQ", pt: "FAQ Meowdoku", ru: "FAQ Meowdoku" },
  glossary: { zh: "Meowdoku 术语表", "zh-Hant": "Meowdoku 術語表", ja: "Meowdoku 用語集", ko: "Meowdoku 용어집", es: "Glosario Meowdoku", fr: "Glossaire Meowdoku", de: "Meowdoku-Glossar", pt: "Glossário Meowdoku", ru: "Глоссарий Meowdoku" }
};

Object.assign(topicNames, {
  "what-is-meowdoku": {
    zh: "Meowdoku 是什么？",
    "zh-Hant": "Meowdoku 是什麼？",
    ja: "Meowdoku とは？",
    ko: "Meowdoku란 무엇인가요?",
    es: "¿Qué es Meowdoku?",
    fr: "Qu'est-ce que Meowdoku ?",
    de: "Was ist Meowdoku?",
    pt: "O que é Meowdoku?",
    ru: "Что такое Meowdoku?",
    vi: "Meowdoku là gì?",
    id: "Apa itu Meowdoku?",
    it: "Che cos'è Meowdoku?",
    nl: "Wat is Meowdoku?",
    pl: "Czym jest Meowdoku?",
    tr: "Meowdoku nedir?"
  },
  "is-meowdoku-cat-sudoku": {
    zh: "Meowdoku 和猫咪数独一样吗？",
    "zh-Hant": "Meowdoku 和貓咪數獨一樣嗎？",
    ja: "Meowdoku は猫数独ですか？",
    ko: "Meowdoku는 고양이 스도쿠인가요?",
    es: "¿Meowdoku es sudoku de gatos?",
    fr: "Meowdoku est-il un sudoku de chats ?",
    de: "Ist Meowdoku Katzen-Sudoku?",
    pt: "Meowdoku é sudoku de gatos?",
    ru: "Meowdoku похоже на судоку с кошками?",
    vi: "Meowdoku có giống sudoku mèo không?",
    id: "Apakah Meowdoku seperti sudoku kucing?",
    it: "Meowdoku è un sudoku con gatti?",
    nl: "Is Meowdoku katten-sudoku?",
    pl: "Czy Meowdoku to sudoku z kotami?",
    tr: "Meowdoku kedi sudoku mu?"
  },
  "can-cats-touch-diagonally": {
    zh: "Meowdoku 里的猫可以斜着相邻吗？",
    "zh-Hant": "Meowdoku 裡的貓可以斜角相鄰嗎？",
    ja: "Meowdoku で猫は斜めに隣接できますか？",
    ko: "Meowdoku에서 고양이는 대각선으로 닿을 수 있나요?",
    es: "¿Los gatos pueden tocarse en diagonal?",
    fr: "Les chats peuvent-ils se toucher en diagonale ?",
    de: "Dürfen Katzen diagonal berühren?",
    pt: "Gatos podem tocar na diagonal?",
    ru: "Могут ли кошки касаться по диагонали?",
    vi: "Mèo có được chạm chéo không?",
    id: "Bolehkah kucing bersentuhan diagonal?",
    it: "I gatti possono toccarsi in diagonale?",
    nl: "Mogen katten elkaar diagonaal raken?",
    pl: "Czy koty mogą stykać się po przekątnej?",
    tr: "Kediler çapraz temas edebilir mi?"
  },
  "best-beginner-strategy": {
    zh: "Meowdoku 新手最佳策略",
    "zh-Hant": "Meowdoku 新手最佳策略",
    ja: "Meowdoku 初心者向け戦略",
    ko: "Meowdoku 초보자 전략",
    es: "Mejor estrategia para principiantes",
    fr: "Meilleure stratégie débutant",
    de: "Beste Strategie für Anfänger",
    pt: "Melhor estratégia para iniciantes",
    ru: "Лучшая стратегия для новичков",
    vi: "Chiến lược cho người mới",
    id: "Strategi pemula terbaik",
    it: "Strategia migliore per principianti",
    nl: "Beste beginnersstrategie",
    pl: "Najlepsza strategia dla początkujących",
    tr: "Yeni başlayanlar için strateji"
  },
  "how-assist-mode-works": {
    zh: "Meowdoku 辅助模式怎么用？",
    "zh-Hant": "Meowdoku 輔助模式怎麼用？",
    ja: "Meowdoku のアシストモード",
    ko: "Meowdoku 도움 모드",
    es: "Cómo funciona el modo ayuda",
    fr: "Comment fonctionne le mode aide",
    de: "So funktioniert der Hilfemodus",
    pt: "Como funciona o modo de ajuda",
    ru: "Как работает режим помощи",
    vi: "Chế độ trợ giúp hoạt động thế nào?",
    id: "Cara kerja mode bantu",
    it: "Come funziona la modalità aiuto",
    nl: "Hoe werkt de hulpmodus?",
    pl: "Jak działa tryb pomocy?",
    tr: "Yardım modu nasıl çalışır?"
  },
  "which-difficulty": {
    zh: "Meowdoku 应该选哪个难度？",
    "zh-Hant": "Meowdoku 應該選哪個難度？",
    ja: "Meowdoku の難易度の選び方",
    ko: "Meowdoku 난이도 선택",
    es: "Qué dificultad elegir",
    fr: "Quelle difficulté choisir",
    de: "Welche Schwierigkeit wählen?",
    pt: "Qual dificuldade escolher",
    ru: "Какую сложность выбрать?",
    vi: "Nên chọn độ khó nào?",
    id: "Tingkat kesulitan mana yang cocok?",
    it: "Quale difficoltà scegliere?",
    nl: "Welke moeilijkheid kies je?",
    pl: "Jaki poziom trudności wybrać?",
    tr: "Hangi zorluk seçilmeli?"
  },
  "play-without-download": {
    zh: "Meowdoku 可以不用下载直接玩吗？",
    "zh-Hant": "Meowdoku 可以不用下載直接玩嗎？",
    ja: "Meowdoku はダウンロードなしで遊べますか？",
    ko: "Meowdoku는 다운로드 없이 플레이할 수 있나요?",
    es: "Jugar sin descargar",
    fr: "Jouer sans téléchargement",
    de: "Ohne Download spielen",
    pt: "Jogar sem baixar",
    ru: "Играть без скачивания",
    vi: "Chơi không cần tải xuống",
    id: "Main tanpa mengunduh",
    it: "Gioca senza scaricare",
    nl: "Spelen zonder download",
    pl: "Graj bez pobierania",
    tr: "İndirmeden oyna"
  }
});

const localePacks = {
  zh: {
    titleSuffix: "在线猫咪逻辑谜题指南",
    play: "开始玩 Meowdoku",
    learn: "学习规则",
    quick: "快速答案",
    signals: "Meowdoku 重点",
    questions: "玩家常问的 Meowdoku 问题",
    related: "相关 Meowdoku 指南",
    terms: "相关名称",
    note: "这个页面把 Meowdoku 的玩法、规则、策略、难度、常见别名和每日游玩入口整理在一起，方便你快速找到适合自己的下一步。",
    summary: ["Meowdoku 是一个猫咪主题的区域放置逻辑谜题。", "每个彩色房间、每一行、每一列都只能有一只猫。", "猫不能相邻，斜角也不可以。"],
    sections: [
      ["核心规则", "先观察彩色区域，再结合行、列和不相邻规则排除不可能的格子。不要靠猜，先标记，再放猫。"],
      ["解题思路", "优先找被限制最多的房间。一个房间如果只剩一行或一列可用，就会形成很强的 Meowdoku 锁定。"],
      ["为什么这个页面有价值", "有些玩家想知道 Meowdoku 怎么玩、是否像数独、困难题怎么解，或者 Meow Doku 是否是同一个游戏。本页把这些常见问题集中说明。"],
      ["适合谁玩", "如果你喜欢 Sudoku、Queens、Star Battle、Nonogram 或每日逻辑题，Meowdoku 会很容易上手。"],
      ["下一步", "读完本页后可以回到首页从简单模式开始，也可以继续查看规则、策略、困难题和常见名称页面。"]
    ],
    faqs: [["Meowdoku 是什么？", "Meowdoku 是一个猫咪主题的逻辑谜题，需要在每个彩色区域放一只猫。"], ["需要猜吗？", "不需要。好的 Meowdoku 题目可以通过排除和锁定推理完成。"], ["和数独一样吗？", "它有行列限制，像数独；但彩色区域和不相邻规则更接近 Queens 类谜题。"]]
  },
  "zh-Hant": {
    titleSuffix: "線上貓咪邏輯謎題指南",
    play: "開始玩 Meowdoku",
    learn: "學習規則",
    quick: "快速答案",
    signals: "Meowdoku 重點",
    questions: "玩家常問的 Meowdoku 問題",
    related: "相關 Meowdoku 指南",
    terms: "相關名稱",
    note: "這個頁面把 Meowdoku 的玩法、規則、策略、難度、常見別名和每日遊玩入口整理在一起，方便你快速找到適合自己的下一步。",
    summary: ["Meowdoku 是一個貓咪主題的區域放置邏輯謎題。", "每個彩色房間、每一行、每一列都只能有一隻貓。", "貓不能相鄰，斜角也不可以。"],
    sections: [
      ["核心規則", "先觀察彩色區域，再結合行、列和不相鄰規則排除不可能的格子。不要靠猜，先標記，再放貓。"],
      ["解題思路", "優先找被限制最多的房間。房間如果只剩一行或一列可用，就會形成很強的 Meowdoku 鎖定。"],
      ["為什麼這個頁面有價值", "有些玩家想知道 Meowdoku 怎麼玩、是否像數獨、困難題怎麼解，或 Meow Doku 是否是同一個遊戲。本頁把這些常見問題集中說明。"],
      ["適合誰玩", "如果你喜歡 Sudoku、Queens、Star Battle、Nonogram 或每日邏輯題，Meowdoku 會很容易上手。"],
      ["下一步", "讀完本頁後可以回到首頁從簡單模式開始，也可以繼續查看規則、策略、困難題和常見名稱頁面。"]
    ],
    faqs: [["Meowdoku 是什麼？", "Meowdoku 是一個貓咪主題的邏輯謎題，需要在每個彩色區域放一隻貓。"], ["需要猜嗎？", "不需要。好的 Meowdoku 題目可以透過排除和鎖定推理完成。"], ["和數獨一樣嗎？", "它有行列限制，像數獨；但彩色區域和不相鄰規則更接近 Queens 類謎題。"]]
  },
  ja: {
    titleSuffix: "オンライン猫ロジックパズルガイド",
    play: "Meowdoku を遊ぶ",
    learn: "ルールを見る",
    quick: "要点",
    signals: "Meowdoku のポイント",
    questions: "Meowdoku のよくある質問",
    related: "関連 Meowdoku ガイド",
    terms: "対応する検索語",
    note: "このページは Meowdoku のよくある名前に合わせて、遊び方、ルール、戦略、難易度、別名検索、毎日のプレイ入口を整理しています。",
    summary: ["Meowdoku は猫を置く色分け領域ロジックパズルです。", "各色の部屋、各行、各列に猫は一匹だけ置けます。", "猫は上下左右だけでなく斜めにも隣接できません。"],
    sections: [["基本ルール", "色の部屋を見て、行・列・隣接禁止の条件で置けないマスを消していきます。"], ["解き方", "制約が強い部屋から始めると、行や列のロックが見つかります。"], ["よくある名前", "Meowdoku、Meow Doku、猫数独、Queens パズルなど、似た呼び方から来た人にも分かるように説明しています。"], ["向いている人", "Sudoku、Queens、Star Battle、毎日のロジックパズルが好きな人に向いています。"], ["次の一手", "ホームで簡単モードを遊ぶか、戦略や難問ガイドへ進んでください。"]],
    faqs: [["Meowdoku とは？", "猫を色の部屋に置くロジックパズルです。"], ["推測は必要？", "いいえ。排除とロックで解けます。"], ["数独と同じ？", "行と列は似ていますが、色の部屋と隣接禁止が特徴です。"]]
  },
  ko: {
    titleSuffix: "온라인 고양이 논리 퍼즐 가이드",
    play: "Meowdoku 플레이",
    learn: "규칙 보기",
    quick: "빠른 답변",
    signals: "Meowdoku 핵심",
    questions: "Meowdoku 자주 묻는 질문",
    related: "관련 Meowdoku 가이드",
    terms: "관련 이름",
    note: "이 페이지는 Meowdoku 자주 쓰는 이름에 맞춰 규칙, 전략, 난이도, 자주 쓰는 이름, 매일 플레이入口를 연결합니다.",
    summary: ["Meowdoku는 고양이를 배치하는 색 영역 논리 퍼즐입니다.", "각 색 방, 각 행, 각 열에는 고양이 한 마리만 놓을 수 있습니다.", "고양이는 대각선을 포함해 서로 닿을 수 없습니다."],
    sections: [["기본 규칙", "색 영역을 먼저 보고 행, 열, 인접 금지 규칙으로 불가능한 칸을 지웁니다."], ["풀이 방법", "제약이 강한 방부터 보면 행 또는 열 잠금이 생깁니다."], ["자주 쓰는 이름", "Meowdoku, Meow Doku, 고양이 스도쿠, Queens 퍼즐처럼 비슷한 이름으로 찾아온 사람도 규칙을 바로 이해할 수 있습니다."], ["추천 대상", "Sudoku, Queens, Star Battle, 매일 논리 퍼즐을 좋아한다면 잘 맞습니다."], ["다음 단계", "홈에서 쉬운 모드로 시작하거나 전략/어려운 퍼즐 가이드를 보세요."]],
    faqs: [["Meowdoku란 무엇인가요?", "고양이를 색 영역에 배치하는 논리 퍼즐입니다."], ["추측이 필요한가요?", "아니요. 제거와 잠금 추론으로 풀 수 있습니다."], ["스도쿠와 같은가요?", "행과 열 제약은 비슷하지만 색 영역과 인접 금지 규칙이 다릅니다."]]
  }
};

const genericLocalePacks = {
  es: ["Guía de rompecabezas lógico de gatos", "Jugar Meowdoku", "Ver reglas", "Respuesta rápida", "Puntos clave de Meowdoku", "Preguntas frecuentes sobre Meowdoku", "Guías relacionadas", "Nombres relacionados", "Meowdoku es un rompecabezas lógico de regiones con gatos. Cada región de color, fila y columna necesita un solo gato. Los gatos no pueden tocarse, ni siquiera en diagonal."],
  fr: ["Guide du puzzle logique de chats", "Jouer à Meowdoku", "Voir les règles", "Réponse rapide", "Points clés de Meowdoku", "Questions fréquentes sur Meowdoku", "Guides liés", "Noms lies", "Meowdoku est un puzzle logique à régions avec des chats. Chaque région colorée, ligne et colonne doit contenir un seul chat. Les chats ne peuvent pas se toucher, même en diagonale."],
  de: ["Leitfaden für Katzen-Logikrätsel", "Meowdoku spielen", "Regeln ansehen", "Kurzantwort", "Meowdoku-Kernpunkte", "Häufige Fragen zu Meowdoku", "Verwandte Leitfäden", "Verwandte Namen", "Meowdoku ist ein Logikrätsel mit farbigen Regionen und Katzen. Jede Region, Reihe und Spalte braucht genau eine Katze. Katzen dürfen sich auch diagonal nicht berühren."],
  pt: ["Guia do puzzle lógico de gatos", "Jogar Meowdoku", "Ver regras", "Resposta rápida", "Pontos-chave de Meowdoku", "Perguntas frequentes sobre Meowdoku", "Guias relacionados", "Nomes relacionados", "Meowdoku é um puzzle lógico de regiões com gatos. Cada região colorida, linha e coluna precisa de um gato. Gatos não podem se tocar, nem na diagonal."],
  ru: ["Гид по кошачьей логической головоломке", "Играть в Meowdoku", "Правила", "Краткий ответ", "Ключевые идеи Meowdoku", "Вопросы о Meowdoku", "Похожие руководства", "Похожие названия", "Meowdoku — логическая головоломка с цветными регионами и кошками. В каждом регионе, строке и столбце должна быть одна кошка. Кошки не могут соприкасаться, даже по диагонали."],
  ar: ["دليل لغز القطط المنطقي", "العب Meowdoku", "اعرض القواعد", "إجابة سريعة", "نقاط Meowdoku الأساسية", "أسئلة شائعة عن Meowdoku", "أدلة مرتبطة", "مصطلحات البحث المغطاة", "Meowdoku لغز منطقي بمناطق ملوّنة وقطط. كل منطقة وصف وعمود يحتاج إلى قط واحد فقط. لا يمكن للقطط أن تتلامس حتى قطرياً."],
  hi: ["बिल्ली लॉजिक पज़ल गाइड", "Meowdoku खेलें", "नियम देखें", "त्वरित उत्तर", "Meowdoku के मुख्य संकेत", "Meowdoku प्रश्न", "संबंधित गाइड", "कवर किए गए खोज शब्द", "Meowdoku रंगीन क्षेत्रों और बिल्लियों वाला लॉजिक पज़ल है। हर रंगीन क्षेत्र, पंक्ति और स्तंभ में केवल एक बिल्ली होनी चाहिए। बिल्लियाँ तिरछे भी नहीं छू सकतीं।"],
  id: ["Panduan puzzle logika kucing", "Main Meowdoku", "Lihat aturan", "Jawaban cepat", "Poin penting Meowdoku", "Pertanyaan tentang Meowdoku", "Panduan terkait", "Nama terkait", "Meowdoku adalah puzzle logika wilayah berwarna dengan kucing. Setiap wilayah, baris, dan kolom membutuhkan satu kucing. Kucing tidak boleh bersentuhan, termasuk diagonal."],
  vi: ["Hướng dẫn câu đố logic mèo", "Chơi Meowdoku", "Xem luật", "Trả lời nhanh", "Điểm chính của Meowdoku", "Câu hỏi về Meowdoku", "Hướng dẫn liên quan", "Từ khóa đã bao phủ", "Meowdoku là câu đố logic theo vùng màu với mèo. Mỗi vùng màu, hàng và cột chỉ có một mèo. Mèo không được chạm nhau, kể cả đường chéo."],
  tr: ["Kedi mantık bulmacası rehberi", "Meowdoku oyna", "Kuralları gör", "Kısa cevap", "Meowdoku temel noktaları", "Meowdoku soruları", "İlgili rehberler", "Kapsanan arama terimleri", "Meowdoku renkli bölgeler ve kedilerle oynanan bir mantık bulmacasıdır. Her bölge, satır ve sütunda bir kedi olmalıdır. Kediler çaprazda bile temas edemez."],
  it: ["Guida al puzzle logico con gatti", "Gioca a Meowdoku", "Vedi le regole", "Risposta rapida", "Punti chiave di Meowdoku", "Domande su Meowdoku", "Guide correlate", "Termini di ricerca coperti", "Meowdoku è un puzzle logico a regioni colorate con gatti. Ogni regione, riga e colonna richiede un solo gatto. I gatti non possono toccarsi, nemmeno in diagonale."],
  th: ["คู่มือปริศนาตรรกะแมว", "เล่น Meowdoku", "ดูกติกา", "คำตอบสั้น", "จุดสำคัญของ Meowdoku", "คำถามเกี่ยวกับ Meowdoku", "คู่มือที่เกี่ยวข้อง", "คำค้นหาที่ครอบคลุม", "Meowdoku เป็นปริศนาตรรกะพื้นที่สีพร้อมแมว แต่ละพื้นที่ แถว และคอลัมน์ต้องมีแมวหนึ่งตัว แมวห้ามแตะกันแม้แนวทแยง"],
  pl: ["Przewodnik po kociej łamigłówce logicznej", "Graj w Meowdoku", "Zobacz zasady", "Krótka odpowiedź", "Najważniejsze punkty Meowdoku", "Pytania o Meowdoku", "Powiązane poradniki", "Uwzględnione wyszukiwane hasła", "Meowdoku to logiczna łamigłówka z kolorowymi regionami i kotami. Każdy region, rząd i kolumna potrzebuje jednego kota. Koty nie mogą się stykać, także po przekątnej."],
  nl: ["Gids voor kattenlogicapuzzel", "Speel Meowdoku", "Bekijk regels", "Kort antwoord", "Belangrijke Meowdoku-punten", "Vragen over Meowdoku", "Gerelateerde gidsen", "Gedekte zoektermen", "Meowdoku is een logicapuzzel met gekleurde gebieden en katten. Elk gebied, elke rij en elke kolom heeft één kat nodig. Katten mogen elkaar niet raken, ook niet diagonaal."],
  uk: ["Гід з котячої логічної головоломки", "Грати в Meowdoku", "Правила", "Коротка відповідь", "Ключові моменти Meowdoku", "Питання про Meowdoku", "Пов'язані гайди", "Охоплені пошукові запити", "Meowdoku — логічна головоломка з кольоровими регіонами та котами. У кожному регіоні, рядку й стовпці має бути один кіт. Коти не можуть торкатися навіть по діагоналі."]
};

const genericSections = {
  en: [["Rules", "Use rows, columns, colored regions and the no-touch rule to remove impossible cells."], ["Strategy", "Start with constrained regions, mark impossible cells, and place a cat only when the logic is certain."], ["Other names", "This page connects Meowdoku with cat sudoku, Queens puzzle, daily puzzle and common spelling variants."], ["Next step", "Open the game, start with Easy mode, then read the related guides."]],
  es: [["Reglas", "Usa filas, columnas, regiones de color y la regla de no tocarse para eliminar casillas imposibles."], ["Estrategia", "Empieza por las regiones más limitadas, marca casillas imposibles y coloca un gato solo cuando la lógica sea clara."], ["Nombres relacionados", "Esta página conecta Meowdoku con sudoku de gatos, puzzle Queens, puzzle diario y variantes comunes del nombre."], ["Siguiente paso", "Abre el juego, empieza en modo Fácil y sigue con las guías relacionadas."]],
  fr: [["Règles", "Utilisez les lignes, les colonnes, les régions colorées et la règle sans contact pour éliminer les cases impossibles."], ["Stratégie", "Commencez par les régions les plus contraintes, marquez les cases impossibles et placez un chat seulement quand la logique est certaine."], ["Noms liés", "Cette page relie Meowdoku au sudoku chat, au puzzle Queens, aux puzzles quotidiens et aux variantes du nom."], ["Étape suivante", "Ouvrez le jeu, commencez en mode facile, puis lisez les guides liés."]],
  de: [["Regeln", "Nutze Reihen, Spalten, Farbbereiche und die Nicht-berühren-Regel, um unmögliche Felder auszuschließen."], ["Strategie", "Beginne mit stark eingeschränkten Bereichen, markiere unmögliche Felder und setze eine Katze erst bei sicherer Logik."], ["Ähnliche Namen", "Diese Seite verbindet Meowdoku mit Katzen-Sudoku, Queens-Rätseln, täglichen Puzzles und häufigen Namensvarianten."], ["Nächster Schritt", "Öffne das Spiel, starte mit Leicht und lies danach die passenden Guides."]],
  pt: [["Regras", "Use linhas, colunas, regiões coloridas e a regra sem toque para eliminar casas impossíveis."], ["Estratégia", "Comece pelas regiões mais restritas, marque casas impossíveis e coloque um gato só quando a lógica for certa."], ["Nomes relacionados", "Esta página conecta Meowdoku com sudoku de gatos, puzzle Queens, puzzle diário e variações comuns do nome."], ["Próximo passo", "Abra o jogo, comece no modo fácil e depois leia os guias relacionados."]],
  id: [["Aturan", "Gunakan baris, kolom, wilayah warna, dan aturan tidak bersentuhan untuk menghapus sel yang mustahil."], ["Strategi", "Mulai dari wilayah yang paling terbatas, tandai sel mustahil, lalu pasang kucing hanya saat logikanya pasti."], ["Nama terkait", "Halaman ini menghubungkan Meowdoku dengan sudoku kucing, puzzle Queens, puzzle harian, dan variasi nama umum."], ["Langkah berikutnya", "Buka permainan, mulai dari mode mudah, lalu baca panduan terkait."]],
  it: [["Regole", "Usa righe, colonne, regioni colorate e la regola senza contatto per eliminare le celle impossibili."], ["Strategia", "Inizia dalle regioni più vincolate, segna le celle impossibili e piazza un gatto solo quando la logica è sicura."], ["Nomi correlati", "Questa pagina collega Meowdoku a sudoku con gatti, puzzle Queens, puzzle giornalieri e varianti comuni del nome."], ["Prossimo passo", "Apri il gioco, inizia con facile e poi leggi le guide correlate."]],
  nl: [["Regels", "Gebruik rijen, kolommen, kleurgebieden en de niet-aanraken-regel om onmogelijke vakjes weg te strepen."], ["Strategie", "Begin met de meest beperkte gebieden, markeer onmogelijke vakjes en plaats pas een kat als de logica zeker is."], ["Verwante namen", "Deze pagina verbindt Meowdoku met katten-sudoku, Queens-puzzels, dagelijkse puzzels en veelvoorkomende naamvarianten."], ["Volgende stap", "Open het spel, begin met makkelijk en lees daarna de verwante gidsen."]],
  pl: [["Zasady", "Używaj rzędów, kolumn, kolorowych regionów i zasady braku styku, aby eliminować niemożliwe pola."], ["Strategia", "Zacznij od najbardziej ograniczonych regionów, oznaczaj pola niemożliwe i stawiaj kota tylko wtedy, gdy logika jest pewna."], ["Powiązane nazwy", "Ta strona łączy Meowdoku z sudoku z kotami, Queens puzzle, codziennymi łamigłówkami i częstymi wariantami nazwy."], ["Następny krok", "Otwórz grę, zacznij od łatwego poziomu, a potem przeczytaj powiązane poradniki."]],
  tr: [["Kurallar", "İmkansız kareleri elemek için satırları, sütunları, renkli bölgeleri ve temas etmeme kuralını kullan."], ["Strateji", "En kısıtlı bölgelerden başla, imkansız kareleri işaretle ve kediyi yalnızca mantık kesinleşince yerleştir."], ["İlgili adlar", "Bu sayfa Meowdoku'yu kedi sudoku, Queens bulmacası, günlük bulmaca ve yaygın ad varyasyonlarıyla bağlar."], ["Sonraki adım", "Oyunu aç, kolay modla başla ve ilgili rehberleri oku."]],
  vi: [["Luật chơi", "Dùng hàng, cột, vùng màu và quy tắc không chạm để loại bỏ các ô không thể đặt mèo."], ["Chiến lược", "Bắt đầu từ vùng bị giới hạn nhiều nhất, đánh dấu ô không thể và chỉ đặt mèo khi logic đã chắc chắn."], ["Tên liên quan", "Trang này liên kết Meowdoku với sudoku mèo, puzzle Queens, câu đố hằng ngày và các biến thể tên thường gặp."], ["Bước tiếp theo", "Mở trò chơi, bắt đầu với chế độ dễ rồi đọc các hướng dẫn liên quan."]]
};

const genericTermsLabel = {
  es: "Nombres relacionados",
  fr: "Noms liés",
  de: "Ähnliche Namen",
  pt: "Nomes relacionados",
  id: "Nama terkait",
  it: "Nomi correlati",
  nl: "Verwante namen",
  pl: "Powiązane nazwy",
  tr: "İlgili adlar",
  vi: "Tên liên quan"
};

function makeSiteLocale(values) {
  const [
    play, how, rules, strategy, daily, languagesLabel, language, open, learn, quick, essentials, questions, related,
    terms, note, footer, what, guess, start, answer, sectionRules, sectionStrategy, sectionNames, sectionNext
  ] = values;
  return {
    play, how, rules, strategy, daily, languages: languagesLabel, language, open, learn, quick, essentials,
    questions, related, terms, note, footer, what, guess, start, answer, sectionRules, sectionStrategy,
    sectionNames, sectionNext
  };
}

const siteLocales = {
  en: makeSiteLocale(["Play", "How to Play", "Rules", "Strategy", "Daily", "Languages", "language", "Open", "Learn the rules", "Quick answer", "Puzzle essentials", "Questions players ask about Meowdoku", "Related Meowdoku guides", "Related names", "Meowdoku is a quick cat logic puzzle with colored regions, row and column logic, and a no-touch rule.", "Free online Meowdoku, cat sudoku, Meow Doku, and Queens-style logic puzzles.", "What is Meowdoku?", "Do I need to guess?", "Where should I start?", "Meowdoku is a cat-themed logic puzzle. Place one cat in every colored region, row, and column without letting cats touch.", "Rules", "Strategy", "Other names", "Next step"]),
  ar: makeSiteLocale(["العب", "طريقة اللعب", "القواعد", "الاستراتيجية", "يومي", "اللغات", "اللغة", "افتح", "تعلّم القواعد", "إجابة سريعة", "أساسيات اللغز", "أسئلة اللاعبين عن Meowdoku", "أدلة Meowdoku مرتبطة", "أسماء مرتبطة", "Meowdoku لغز قطط منطقي يعتمد على مناطق ملوّنة وصفوف وأعمدة وقاعدة عدم اللمس.", "ألغاز Meowdoku وcat sudoku وMeow Doku مجانية على الويب.", "ما هو Meowdoku؟", "هل أحتاج إلى التخمين؟", "من أين أبدأ؟", "Meowdoku لغز منطقي بموضوع القطط: ضع قطة في كل منطقة وصف وعمود من دون تلامس.", "القواعد", "الاستراتيجية", "أسماء أخرى", "الخطوة التالية"]),
  bn: makeSiteLocale(["খেলুন", "কীভাবে খেলবেন", "নিয়ম", "কৌশল", "দৈনিক", "ভাষা", "ভাষা", "খুলুন", "নিয়ম শিখুন", "দ্রুত উত্তর", "ধাঁধার মূল কথা", "Meowdoku নিয়ে সাধারণ প্রশ্ন", "সম্পর্কিত Meowdoku গাইড", "সম্পর্কিত নাম", "Meowdoku একটি বিড়াল-থিমযুক্ত যুক্তির ধাঁধা, যেখানে রঙিন অঞ্চল, সারি, কলাম এবং না-ছোঁয়ার নিয়ম আছে।", "ওয়েবে বিনামূল্যে Meowdoku, cat sudoku, Meow Doku এবং Queens-ধাঁচের ধাঁধা।", "Meowdoku কী?", "অনুমান করতে হবে?", "কোথা থেকে শুরু করব?", "Meowdoku হলো বিড়াল-থিমযুক্ত যুক্তির ধাঁধা: প্রতিটি রঙিন অঞ্চল, সারি ও কলামে একটি বিড়াল রাখুন।", "নিয়ম", "কৌশল", "অন্য নাম", "পরের ধাপ"]),
  cs: makeSiteLocale(["Hrát", "Jak hrát", "Pravidla", "Strategie", "Denně", "Jazyky", "jazyk", "Otevřít", "Naučit se pravidla", "Rychlá odpověď", "Základy hádanky", "Otázky hráčů o Meowdoku", "Související průvodci", "Související názvy", "Meowdoku je rychlá kočičí logická hádanka s barevnými oblastmi, řádky, sloupci a pravidlem bez dotyku.", "Online zdarma: Meowdoku, cat sudoku, Meow Doku a logické hádanky stylu Queens.", "Co je Meowdoku?", "Musím hádat?", "Kde začít?", "Meowdoku je kočičí logická hádanka: umístěte jednu kočku do každé oblasti, řádku a sloupce bez dotyku.", "Pravidla", "Strategie", "Další názvy", "Další krok"]),
  de: makeSiteLocale(["Spielen", "Anleitung", "Regeln", "Strategie", "Täglich", "Sprachen", "Sprache", "Öffnen", "Regeln lernen", "Kurzantwort", "Rätsel-Grundlagen", "Fragen zu Meowdoku", "Verwandte Meowdoku-Guides", "Verwandte Namen", "Meowdoku ist ein schnelles Katzen-Logikrätsel mit Farbbereichen, Reihen, Spalten und einer Nicht-berühren-Regel.", "Kostenlose Online-Rätsel: Meowdoku, Cat Sudoku, Meow Doku und Queens-Logik.", "Was ist Meowdoku?", "Muss ich raten?", "Wo soll ich anfangen?", "Meowdoku ist ein Katzen-Logikrätsel: Setze eine Katze in jede Region, Reihe und Spalte, ohne Berührung.", "Regeln", "Strategie", "Andere Namen", "Nächster Schritt"]),
  el: makeSiteLocale(["Παίξτε", "Πώς παίζεται", "Κανόνες", "Στρατηγική", "Καθημερινό", "Γλώσσες", "γλώσσα", "Άνοιγμα", "Μάθετε τους κανόνες", "Γρήγορη απάντηση", "Βασικά του γρίφου", "Ερωτήσεις για το Meowdoku", "Σχετικοί οδηγοί", "Σχετικά ονόματα", "Το Meowdoku είναι γρήγορος γρίφος λογικής με γάτες, χρωματιστές περιοχές, σειρές, στήλες και κανόνα μη επαφής.", "Δωρεάν online Meowdoku, cat sudoku, Meow Doku και γρίφοι τύπου Queens.", "Τι είναι το Meowdoku;", "Χρειάζεται μαντεψιά;", "Από πού να αρχίσω;", "Το Meowdoku είναι γρίφος λογικής με γάτες: βάλτε μία γάτα σε κάθε περιοχή, σειρά και στήλη χωρίς επαφή.", "Κανόνες", "Στρατηγική", "Άλλα ονόματα", "Επόμενο βήμα"]),
  es: makeSiteLocale(["Jugar", "Cómo jugar", "Reglas", "Estrategia", "Diario", "Idiomas", "idioma", "Abrir", "Aprender reglas", "Respuesta rápida", "Claves del puzzle", "Preguntas sobre Meowdoku", "Guías relacionadas", "Nombres relacionados", "Meowdoku es un puzzle lógico de gatos con regiones de color, filas, columnas y regla de no tocarse.", "Meowdoku, cat sudoku, Meow Doku y puzzles tipo Queens gratis online.", "¿Qué es Meowdoku?", "¿Hay que adivinar?", "¿Por dónde empezar?", "Meowdoku es un puzzle lógico con gatos: coloca un gato en cada región, fila y columna sin que se toquen.", "Reglas", "Estrategia", "Otros nombres", "Siguiente paso"]),
  fa: makeSiteLocale(["بازی", "روش بازی", "قوانین", "استراتژی", "روزانه", "زبان‌ها", "زبان", "باز کردن", "قوانین را یاد بگیرید", "پاسخ سریع", "نکات اصلی معما", "پرسش‌های کاربران درباره Meowdoku", "راهنماهای مرتبط", "نام‌های مرتبط", "Meowdoku یک معمای منطقی با گربه‌ها، ناحیه‌های رنگی، ردیف‌ها، ستون‌ها و قانون عدم تماس است.", "Meowdoku، cat sudoku، Meow Doku و معماهای شبیه Queens به‌صورت رایگان آنلاین.", "Meowdoku چیست؟", "آیا باید حدس بزنم؟", "از کجا شروع کنم؟", "Meowdoku معمای منطقی گربه‌ای است: در هر ناحیه، ردیف و ستون یک گربه بگذارید بدون تماس.", "قوانین", "استراتژی", "نام‌های دیگر", "گام بعدی"]),
  fil: makeSiteLocale(["Maglaro", "Paano laruin", "Mga tuntunin", "Estratehiya", "Araw-araw", "Mga wika", "wika", "Buksan", "Alamin ang tuntunin", "Mabilis na sagot", "Mahahalagang punto", "Mga tanong tungkol sa Meowdoku", "Kaugnay na gabay", "Kaugnay na pangalan", "Ang Meowdoku ay cat logic puzzle na may kulay na rehiyon, hilera, kolum, at no-touch rule.", "Libreng online na Meowdoku, cat sudoku, Meow Doku, at Queens-style puzzles.", "Ano ang Meowdoku?", "Kailangan bang manghula?", "Saan magsisimula?", "Ang Meowdoku ay logic puzzle na may pusa: maglagay ng isang pusa sa bawat rehiyon, hilera, at kolum nang hindi nagdidikit.", "Mga tuntunin", "Estratehiya", "Ibang pangalan", "Susunod na hakbang"]),
  fr: makeSiteLocale(["Jouer", "Comment jouer", "Règles", "Stratégie", "Quotidien", "Langues", "langue", "Ouvrir", "Apprendre les règles", "Réponse rapide", "Essentiels du puzzle", "Questions sur Meowdoku", "Guides liés", "Noms liés", "Meowdoku est un puzzle logique de chats avec régions colorées, lignes, colonnes et règle sans contact.", "Meowdoku, cat sudoku, Meow Doku et puzzles de type Queens gratuits en ligne.", "Qu'est-ce que Meowdoku ?", "Faut-il deviner ?", "Par où commencer ?", "Meowdoku est un puzzle logique avec des chats : placez un chat dans chaque région, ligne et colonne sans contact.", "Règles", "Stratégie", "Autres noms", "Étape suivante"]),
  gu: makeSiteLocale(["રમો", "કેવી રીતે રમવું", "નિયમો", "વ્યૂહરચના", "દૈનિક", "ભાષાઓ", "ભાષા", "ખોલો", "નિયમો શીખો", "ઝડપી જવાબ", "કોયડાની મુખ્ય વાતો", "Meowdoku વિશે પ્રશ્નો", "સંબંધિત માર્ગદર્શિકા", "સંબંધિત નામો", "Meowdoku રંગીન ક્ષેત્રો, પંક્તિઓ, કૉલમ અને સ્પર્શ ન કરવાની રીત ધરાવતો બિલાડી તર્ક કોયડો છે.", "મફત ઑનલાઇન Meowdoku, cat sudoku, Meow Doku અને Queens-શૈલી કોયડા.", "Meowdoku શું છે?", "શું અંદાજ લગાવવો પડે?", "ક્યાંથી શરૂ કરું?", "Meowdoku બિલાડી આધારિત તર્ક કોયડો છે: દરેક ક્ષેત્ર, પંક્તિ અને કૉલમમાં એક બિલાડી મૂકો.", "નિયમો", "વ્યૂહરચના", "બીજા નામો", "આગલું પગલું"]),
  ha: makeSiteLocale(["Kunna", "Yadda ake wasa", "Ka'idoji", "Dabara", "Kullum", "Harsuna", "harshe", "Bude", "Koyi ka'idoji", "Amsa gajere", "Muhimman abubuwa", "Tambayoyi game da Meowdoku", "Jagorori masu alaƙa", "Sunaye masu alaƙa", "Meowdoku wasan tunani ne na kuliyoyi da yankuna masu launi, layuka, ginshiƙai da dokar kada su taɓa.", "Meowdoku, cat sudoku, Meow Doku da wasannin Queens kyauta a yanar gizo.", "Menene Meowdoku?", "Dole ne in yi zato?", "Ina zan fara?", "Meowdoku wasan tunani ne: sanya kuliya ɗaya a kowane yanki, layi da ginshiƙi ba tare da taɓawa ba.", "Ka'idoji", "Dabara", "Wasu sunaye", "Mataki na gaba"]),
  he: makeSiteLocale(["שחק", "איך משחקים", "כללים", "אסטרטגיה", "יומי", "שפות", "שפה", "פתח", "למד את הכללים", "תשובה מהירה", "עיקרי החידה", "שאלות על Meowdoku", "מדריכים קשורים", "שמות קשורים", "Meowdoku היא חידת היגיון עם חתולים, אזורים צבעוניים, שורות, עמודות וכלל ללא מגע.", "Meowdoku, cat sudoku, Meow Doku וחידות בסגנון Queens בחינם אונליין.", "מה זה Meowdoku?", "צריך לנחש?", "איפה להתחיל?", "Meowdoku היא חידת היגיון עם חתולים: מקמו חתול בכל אזור, שורה ועמודה בלי מגע.", "כללים", "אסטרטגיה", "שמות אחרים", "הצעד הבא"]),
  hi: makeSiteLocale(["खेलें", "कैसे खेलें", "नियम", "रणनीति", "दैनिक", "भाषाएं", "भाषा", "खोलें", "नियम सीखें", "त्वरित उत्तर", "पहेली की मुख्य बातें", "Meowdoku पर सवाल", "संबंधित गाइड", "संबंधित नाम", "Meowdoku रंगीन क्षेत्रों, पंक्तियों, स्तंभों और नो-टच नियम वाली बिल्ली तर्क पहेली है।", "मुफ्त ऑनलाइन Meowdoku, cat sudoku, Meow Doku और Queens-शैली की पहेलियां।", "Meowdoku क्या है?", "क्या अनुमान लगाना होगा?", "कहां से शुरू करूं?", "Meowdoku बिल्ली-थीम वाली तर्क पहेली है: हर क्षेत्र, पंक्ति और स्तंभ में एक बिल्ली रखें।", "नियम", "रणनीति", "दूसरे नाम", "अगला कदम"]),
  hu: makeSiteLocale(["Játék", "Játékmenet", "Szabályok", "Stratégia", "Napi", "Nyelvek", "nyelv", "Megnyitás", "Szabályok tanulása", "Gyors válasz", "A rejtvény lényege", "Kérdések a Meowdoku-ról", "Kapcsolódó útmutatók", "Kapcsolódó nevek", "A Meowdoku macskás logikai rejtvény színes régiókkal, sorokkal, oszlopokkal és érintésmentes szabállyal.", "Ingyenes online Meowdoku, cat sudoku, Meow Doku és Queens-stílusú rejtvények.", "Mi az a Meowdoku?", "Kell tippelni?", "Hol kezdjem?", "A Meowdoku macskás logikai rejtvény: tegyél egy macskát minden régióba, sorba és oszlopba érintés nélkül.", "Szabályok", "Stratégia", "Más nevek", "Következő lépés"]),
  id: makeSiteLocale(["Main", "Cara bermain", "Aturan", "Strategi", "Harian", "Bahasa", "bahasa", "Buka", "Pelajari aturan", "Jawaban cepat", "Inti puzzle", "Pertanyaan tentang Meowdoku", "Panduan terkait", "Nama terkait", "Meowdoku adalah puzzle logika kucing dengan wilayah warna, baris, kolom, dan aturan tidak bersentuhan.", "Meowdoku, cat sudoku, Meow Doku, dan puzzle gaya Queens gratis online.", "Apa itu Meowdoku?", "Perlu menebak?", "Mulai dari mana?", "Meowdoku adalah puzzle logika kucing: letakkan satu kucing di setiap wilayah, baris, dan kolom tanpa bersentuhan.", "Aturan", "Strategi", "Nama lain", "Langkah berikutnya"]),
  it: makeSiteLocale(["Gioca", "Come giocare", "Regole", "Strategia", "Quotidiano", "Lingue", "lingua", "Apri", "Impara le regole", "Risposta rapida", "Elementi del puzzle", "Domande su Meowdoku", "Guide correlate", "Nomi correlati", "Meowdoku è un puzzle logico con gatti, regioni colorate, righe, colonne e regola senza contatto.", "Meowdoku, cat sudoku, Meow Doku e puzzle stile Queens gratis online.", "Che cos'è Meowdoku?", "Serve indovinare?", "Da dove inizio?", "Meowdoku è un puzzle logico con gatti: piazza un gatto in ogni regione, riga e colonna senza contatto.", "Regole", "Strategia", "Altri nomi", "Passo successivo"]),
  ja: makeSiteLocale(["遊ぶ", "遊び方", "ルール", "攻略", "毎日", "言語", "言語", "開く", "ルールを見る", "短い答え", "パズルの基本", "Meowdokuのよくある質問", "関連ガイド", "関連する名前", "Meowdokuは、色分けされた領域、行、列、隣接禁止ルールを使う猫のロジックパズルです。", "無料で遊べるMeowdoku、猫数独、Meow Doku、Queens風ロジックパズル。", "Meowdokuとは？", "推測は必要？", "どこから始める？", "Meowdokuは猫テーマのロジックパズルです。各領域、行、列に猫を1匹ずつ置き、接触を避けます。", "ルール", "攻略", "別名", "次のステップ"]),
  jv: makeSiteLocale(["Dolanan", "Carane dolanan", "Aturan", "Strategi", "Saben dina", "Basa", "basa", "Bukak", "Sinau aturan", "Wangsulan cekak", "Inti puzzle", "Pitakon babagan Meowdoku", "Pandhuan gegandhengan", "Jeneng gegandhengan", "Meowdoku iku teka-teki logika kucing nganggo wilayah warna, baris, kolom, lan aturan ora kena dempet.", "Meowdoku, cat sudoku, Meow Doku lan puzzle gaya Queens gratis online.", "Apa Meowdoku?", "Perlu nebak?", "Miwiti saka ngendi?", "Meowdoku iku puzzle logika kucing: pasang siji kucing ing saben wilayah, baris, lan kolom tanpa dempet.", "Aturan", "Strategi", "Jeneng liyane", "Langkah sabanjure"]),
  ko: makeSiteLocale(["플레이", "플레이 방법", "규칙", "전략", "데일리", "언어", "언어", "열기", "규칙 배우기", "빠른 답변", "퍼즐 핵심", "Meowdoku 질문", "관련 가이드", "관련 이름", "Meowdoku는 색 영역, 행, 열, 인접 금지 규칙을 쓰는 고양이 논리 퍼즐입니다.", "무료 온라인 Meowdoku, 고양이 스도쿠, Meow Doku, Queens 스타일 퍼즐.", "Meowdoku란?", "찍어야 하나요?", "어디서 시작하나요?", "Meowdoku는 고양이 논리 퍼즐입니다. 각 영역, 행, 열에 고양이 한 마리씩 놓고 닿지 않게 하세요.", "규칙", "전략", "다른 이름", "다음 단계"]),
  ms: makeSiteLocale(["Main", "Cara bermain", "Peraturan", "Strategi", "Harian", "Bahasa", "bahasa", "Buka", "Belajar peraturan", "Jawapan ringkas", "Asas puzzle", "Soalan tentang Meowdoku", "Panduan berkaitan", "Nama berkaitan", "Meowdoku ialah teka-teki logik kucing dengan kawasan warna, baris, lajur dan peraturan tidak bersentuhan.", "Meowdoku, cat sudoku, Meow Doku dan puzzle gaya Queens percuma dalam talian.", "Apa itu Meowdoku?", "Perlu meneka?", "Di mana mula?", "Meowdoku ialah puzzle logik kucing: letak satu kucing dalam setiap kawasan, baris dan lajur tanpa sentuhan.", "Peraturan", "Strategi", "Nama lain", "Langkah seterusnya"]),
  mr: makeSiteLocale(["खेळा", "कसे खेळावे", "नियम", "रणनीती", "दैनिक", "भाषा", "भाषा", "उघडा", "नियम शिका", "झटपट उत्तर", "कोड्याची मुख्य तत्त्वे", "Meowdoku बद्दल प्रश्न", "संबंधित मार्गदर्शक", "संबंधित नावे", "Meowdoku रंगीत क्षेत्रे, रांगा, स्तंभ आणि न-स्पर्श नियम असलेले मांजर तर्क कोडे आहे.", "मोफत ऑनलाइन Meowdoku, cat sudoku, Meow Doku आणि Queens-शैली कोडी.", "Meowdoku म्हणजे काय?", "अंदाज लावावा लागतो का?", "कुठून सुरू करावे?", "Meowdoku मांजर-थीम तर्क कोडे आहे: प्रत्येक क्षेत्र, रांग आणि स्तंभात एक मांजर ठेवा.", "नियम", "रणनीती", "इतर नावे", "पुढील पाऊल"]),
  nl: makeSiteLocale(["Spelen", "Hoe speel je", "Regels", "Strategie", "Dagelijks", "Talen", "taal", "Openen", "Leer de regels", "Kort antwoord", "Puzzelbasis", "Vragen over Meowdoku", "Gerelateerde gidsen", "Verwante namen", "Meowdoku is een kattenlogicapuzzel met kleurgebieden, rijen, kolommen en de regel dat katten elkaar niet raken.", "Gratis online Meowdoku, kattensudoku, Meow Doku en Queens-achtige puzzels.", "Wat is Meowdoku?", "Moet ik gokken?", "Waar begin ik?", "Meowdoku is een kattenlogicapuzzel: plaats één kat in elk gebied, elke rij en elke kolom zonder aanraken.", "Regels", "Strategie", "Andere namen", "Volgende stap"]),
  pa: makeSiteLocale(["ਖੇਡੋ", "ਕਿਵੇਂ ਖੇਡਣਾ", "ਨਿਯਮ", "ਰਣਨੀਤੀ", "ਰੋਜ਼ਾਨਾ", "ਭਾਸ਼ਾਵਾਂ", "ਭਾਸ਼ਾ", "ਖੋਲ੍ਹੋ", "ਨਿਯਮ ਸਿੱਖੋ", "ਛੋਟਾ ਜਵਾਬ", "ਪਹੇਲੀ ਦੇ ਮੁੱਖ ਬਿੰਦੂ", "Meowdoku ਬਾਰੇ ਸਵਾਲ", "ਸੰਬੰਧਿਤ ਗਾਈਡ", "ਸੰਬੰਧਿਤ ਨਾਮ", "Meowdoku ਰੰਗੀਨ ਖੇਤਰਾਂ, ਕਤਾਰਾਂ, ਕਾਲਮਾਂ ਅਤੇ ਨਾ-ਛੂਹਣ ਦੇ ਨਿਯਮ ਵਾਲੀ ਬਿੱਲੀ ਤਰਕ ਪਹੇਲੀ ਹੈ।", "ਮੁਫ਼ਤ ਆਨਲਾਈਨ Meowdoku, cat sudoku, Meow Doku ਅਤੇ Queens-ਸ਼ੈਲੀ ਪਹੇਲੀਆਂ।", "Meowdoku ਕੀ ਹੈ?", "ਕੀ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣਾ ਪਵੇਗਾ?", "ਕਿੱਥੋਂ ਸ਼ੁਰੂ ਕਰੀਏ?", "Meowdoku ਬਿੱਲੀ-ਥੀਮ ਤਰਕ ਪਹੇਲੀ ਹੈ: ਹਰ ਖੇਤਰ, ਕਤਾਰ ਅਤੇ ਕਾਲਮ ਵਿੱਚ ਇੱਕ ਬਿੱਲੀ ਰੱਖੋ।", "ਨਿਯਮ", "ਰਣਨੀਤੀ", "ਹੋਰ ਨਾਮ", "ਅਗਲਾ ਕਦਮ"]),
  pl: makeSiteLocale(["Graj", "Jak grać", "Zasady", "Strategia", "Codziennie", "Języki", "język", "Otwórz", "Poznaj zasady", "Krótka odpowiedź", "Podstawy łamigłówki", "Pytania o Meowdoku", "Powiązane poradniki", "Powiązane nazwy", "Meowdoku to kocia łamigłówka logiczna z kolorowymi regionami, rzędami, kolumnami i zasadą braku styku.", "Darmowe online Meowdoku, cat sudoku, Meow Doku i łamigłówki typu Queens.", "Czym jest Meowdoku?", "Czy trzeba zgadywać?", "Od czego zacząć?", "Meowdoku to kocia łamigłówka: umieść jednego kota w każdym regionie, rzędzie i kolumnie bez styku.", "Zasady", "Strategia", "Inne nazwy", "Następny krok"]),
  pt: makeSiteLocale(["Jogar", "Como jogar", "Regras", "Estratégia", "Diário", "Idiomas", "idioma", "Abrir", "Aprender regras", "Resposta rápida", "Essenciais do puzzle", "Perguntas sobre Meowdoku", "Guias relacionados", "Nomes relacionados", "Meowdoku é um puzzle lógico de gatos com regiões coloridas, linhas, colunas e regra sem toque.", "Meowdoku, cat sudoku, Meow Doku e puzzles estilo Queens grátis online.", "O que é Meowdoku?", "Preciso adivinhar?", "Por onde começo?", "Meowdoku é um puzzle lógico com gatos: coloque um gato em cada região, linha e coluna sem contato.", "Regras", "Estratégia", "Outros nomes", "Próximo passo"]),
  ro: makeSiteLocale(["Joacă", "Cum se joacă", "Reguli", "Strategie", "Zilnic", "Limbi", "limbă", "Deschide", "Învață regulile", "Răspuns rapid", "Esențialul puzzle-ului", "Întrebări despre Meowdoku", "Ghiduri asociate", "Nume asociate", "Meowdoku este un puzzle logic cu pisici, regiuni colorate, rânduri, coloane și regula fără atingere.", "Meowdoku, cat sudoku, Meow Doku și puzzle-uri stil Queens gratuite online.", "Ce este Meowdoku?", "Trebuie să ghicesc?", "De unde încep?", "Meowdoku este un puzzle logic cu pisici: pune o pisică în fiecare regiune, rând și coloană fără atingere.", "Reguli", "Strategie", "Alte nume", "Pasul următor"]),
  ru: makeSiteLocale(["Играть", "Как играть", "Правила", "Стратегия", "Ежедневно", "Языки", "язык", "Открыть", "Изучить правила", "Краткий ответ", "Основы головоломки", "Вопросы о Meowdoku", "Связанные руководства", "Похожие названия", "Meowdoku — логическая головоломка с кошками, цветными регионами, строками, колонками и правилом без касаний.", "Бесплатные онлайн Meowdoku, cat sudoku, Meow Doku и головоломки в стиле Queens.", "Что такое Meowdoku?", "Нужно ли угадывать?", "С чего начать?", "Meowdoku — кошачья логическая головоломка: поставьте одну кошку в каждый регион, строку и колонку без касаний.", "Правила", "Стратегия", "Другие названия", "Следующий шаг"]),
  sv: makeSiteLocale(["Spela", "Så spelar du", "Regler", "Strategi", "Dagligen", "Språk", "språk", "Öppna", "Lär dig reglerna", "Snabbt svar", "Pusslets grunder", "Frågor om Meowdoku", "Relaterade guider", "Relaterade namn", "Meowdoku är ett logikpussel med katter, färgområden, rader, kolumner och regeln att katter inte får röra varandra.", "Gratis online Meowdoku, cat sudoku, Meow Doku och Queens-liknande pussel.", "Vad är Meowdoku?", "Måste jag gissa?", "Var börjar jag?", "Meowdoku är ett kattlogikpussel: placera en katt i varje område, rad och kolumn utan beröring.", "Regler", "Strategi", "Andra namn", "Nästa steg"]),
  sw: makeSiteLocale(["Cheza", "Jinsi ya kucheza", "Kanuni", "Mbinu", "Kila siku", "Lugha", "lugha", "Fungua", "Jifunze kanuni", "Jibu fupi", "Misingi ya fumbo", "Maswali kuhusu Meowdoku", "Miongozo inayohusiana", "Majina yanayohusiana", "Meowdoku ni fumbo la mantiki la paka lenye maeneo ya rangi, mistari, safu na kanuni ya kutogusana.", "Meowdoku, cat sudoku, Meow Doku na mafumbo ya mtindo wa Queens bure mtandaoni.", "Meowdoku ni nini?", "Lazima nibashiri?", "Nianzie wapi?", "Meowdoku ni fumbo la mantiki la paka: weka paka mmoja katika kila eneo, mstari na safu bila kugusana.", "Kanuni", "Mbinu", "Majina mengine", "Hatua inayofuata"]),
  ta: makeSiteLocale(["விளையாடு", "எப்படி விளையாடுவது", "விதிகள்", "தந்திரம்", "தினசரி", "மொழிகள்", "மொழி", "திற", "விதிகளை கற்பீர்", "விரைவு பதில்", "புதிரின் அடிப்படை", "Meowdoku கேள்விகள்", "தொடர்புடைய வழிகாட்டிகள்", "தொடர்புடைய பெயர்கள்", "Meowdoku என்பது நிறப் பகுதிகள், வரிகள், நெடுவரிசைகள் மற்றும் தொடக்கூடாத விதியுடன் கூடிய பூனை தர்க்க புதிர்.", "இலவச ஆன்லைன் Meowdoku, cat sudoku, Meow Doku மற்றும் Queens பாணி புதிர்கள்.", "Meowdoku என்றால் என்ன?", "ஊகம் வேண்டுமா?", "எங்கு தொடங்குவது?", "Meowdoku ஒரு பூனை தர்க்க புதிர்: ஒவ்வொரு பகுதி, வரி, நெடுவரிசையிலும் ஒரு பூனை வை.", "விதிகள்", "தந்திரம்", "மற்ற பெயர்கள்", "அடுத்த படி"]),
  te: makeSiteLocale(["ఆడండి", "ఎలా ఆడాలి", "నియమాలు", "వ్యూహం", "రోజువారీ", "భాషలు", "భాష", "తెరవండి", "నియమాలు నేర్చుకోండి", "త్వరిత సమాధానం", "పజిల్ ముఖ్యాంశాలు", "Meowdoku ప్రశ్నలు", "సంబంధిత గైడ్‌లు", "సంబంధిత పేర్లు", "Meowdoku రంగు ప్రాంతాలు, వరుసలు, నిలువు వరుసలు మరియు తాకరాదు నియమం ఉన్న పిల్లి లాజిక్ పజిల్.", "ఉచిత ఆన్‌లైన్ Meowdoku, cat sudoku, Meow Doku మరియు Queens శైలి పజిల్‌లు.", "Meowdoku అంటే ఏమిటి?", "ఊహించాలా?", "ఎక్కడ మొదలుపెట్టాలి?", "Meowdoku పిల్లి థీమ్ లాజిక్ పజిల్: ప్రతి ప్రాంతం, వరుస, నిలువు వరుసలో ఒక పిల్లిని పెట్టండి.", "నియమాలు", "వ్యూహం", "ఇతర పేర్లు", "తదుపరి దశ"]),
  th: makeSiteLocale(["เล่น", "วิธีเล่น", "กติกา", "กลยุทธ์", "รายวัน", "ภาษา", "ภาษา", "เปิด", "เรียนรู้กติกา", "คำตอบสั้น", "หัวใจของปริศนา", "คำถามเกี่ยวกับ Meowdoku", "คู่มือที่เกี่ยวข้อง", "ชื่อที่เกี่ยวข้อง", "Meowdoku คือปริศนาตรรกะแมวที่มีพื้นที่สี แถว คอลัมน์ และกฎห้ามแตะกัน.", "Meowdoku, cat sudoku, Meow Doku และปริศนาแบบ Queens เล่นฟรีออนไลน์.", "Meowdoku คืออะไร?", "ต้องเดาไหม?", "เริ่มตรงไหน?", "Meowdoku คือปริศนาตรรกะแมว: วางแมวหนึ่งตัวในทุกพื้นที่ แถว และคอลัมน์โดยไม่ให้แตะกัน.", "กติกา", "กลยุทธ์", "ชื่ออื่น", "ขั้นต่อไป"]),
  tr: makeSiteLocale(["Oyna", "Nasıl oynanır", "Kurallar", "Strateji", "Günlük", "Diller", "dil", "Aç", "Kuralları öğren", "Kısa cevap", "Bulmacanın temeli", "Meowdoku soruları", "İlgili rehberler", "İlgili adlar", "Meowdoku renkli bölgeler, satırlar, sütunlar ve temas etmeme kuralı olan kedi mantık bulmacasıdır.", "Ücretsiz online Meowdoku, cat sudoku, Meow Doku ve Queens tarzı bulmacalar.", "Meowdoku nedir?", "Tahmin gerekir mi?", "Nereden başlamalıyım?", "Meowdoku kedi temalı mantık bulmacasıdır: her bölge, satır ve sütuna temas olmadan bir kedi yerleştir.", "Kurallar", "Strateji", "Diğer adlar", "Sonraki adım"]),
  uk: makeSiteLocale(["Грати", "Як грати", "Правила", "Стратегія", "Щодня", "Мови", "мова", "Відкрити", "Вивчити правила", "Коротка відповідь", "Основи головоломки", "Питання про Meowdoku", "Пов'язані гайди", "Пов'язані назви", "Meowdoku — котяча логічна головоломка з кольоровими областями, рядками, стовпцями та правилом без дотику.", "Безкоштовні онлайн Meowdoku, cat sudoku, Meow Doku та головоломки стилю Queens.", "Що таке Meowdoku?", "Чи треба вгадувати?", "З чого почати?", "Meowdoku — логічна головоломка з котами: поставте одного кота в кожну область, рядок і стовпець без дотику.", "Правила", "Стратегія", "Інші назви", "Наступний крок"]),
  ur: makeSiteLocale(["کھیلیں", "کیسے کھیلیں", "قواعد", "حکمت عملی", "روزانہ", "زبانیں", "زبان", "کھولیں", "قواعد سیکھیں", "مختصر جواب", "پہیلی کی بنیاد", "Meowdoku کے سوالات", "متعلقہ گائیڈز", "متعلقہ نام", "Meowdoku بلیوں، رنگین حصوں، قطاروں، کالموں اور نہ چھونے کے اصول والی منطقی پہیلی ہے۔", "مفت آن لائن Meowdoku، cat sudoku، Meow Doku اور Queens طرز کی پہیلیاں۔", "Meowdoku کیا ہے؟", "کیا اندازہ لگانا ہوگا؟", "کہاں سے شروع کروں؟", "Meowdoku بلیوں والی منطقی پہیلی ہے: ہر حصے، قطار اور کالم میں ایک بلی رکھیں بغیر چھونے کے۔", "قواعد", "حکمت عملی", "دوسرے نام", "اگلا قدم"]),
  vi: makeSiteLocale(["Chơi", "Cách chơi", "Luật", "Chiến lược", "Hằng ngày", "Ngôn ngữ", "ngôn ngữ", "Mở", "Học luật", "Trả lời nhanh", "Cốt lõi câu đố", "Câu hỏi về Meowdoku", "Hướng dẫn liên quan", "Tên liên quan", "Meowdoku là câu đố logic mèo với vùng màu, hàng, cột và luật không chạm nhau.", "Meowdoku, cat sudoku, Meow Doku và câu đố kiểu Queens miễn phí trên web.", "Meowdoku là gì?", "Có cần đoán không?", "Bắt đầu ở đâu?", "Meowdoku là câu đố logic mèo: đặt một mèo trong mỗi vùng, hàng và cột mà không chạm nhau.", "Luật", "Chiến lược", "Tên khác", "Bước tiếp theo"]),
  zh: makeSiteLocale(["开始玩", "玩法", "规则", "策略", "每日", "语言", "语言", "打开", "学习规则", "快速答案", "谜题要点", "玩家常问的 Meowdoku 问题", "相关 Meowdoku 指南", "相关名称", "Meowdoku 是一个猫咪主题逻辑谜题，结合彩色区域、行列限制和不相邻规则。", "免费在线 Meowdoku、猫咪数独、Meow Doku 和 Queens 风格逻辑谜题。", "Meowdoku 是什么？", "需要猜吗？", "从哪里开始？", "Meowdoku 是猫咪主题逻辑谜题：每个区域、每行、每列放一只猫，猫不能相邻。", "规则", "策略", "其他名称", "下一步"]),
  "zh-Hant": makeSiteLocale(["開始玩", "玩法", "規則", "策略", "每日", "語言", "語言", "打開", "學習規則", "快速答案", "謎題要點", "玩家常問的 Meowdoku 問題", "相關 Meowdoku 指南", "相關名稱", "Meowdoku 是貓咪主題邏輯謎題，結合彩色區域、行列限制和不相鄰規則。", "免費線上 Meowdoku、貓咪數獨、Meow Doku 和 Queens 風格邏輯謎題。", "Meowdoku 是什麼？", "需要猜嗎？", "從哪裡開始？", "Meowdoku 是貓咪主題邏輯謎題：每個區域、每行、每列放一隻貓，貓不能相鄰。", "規則", "策略", "其他名稱", "下一步"])
};

for (const [code, values] of Object.entries(genericLocalePacks)) {
  if (localePacks[code]) continue;
  const sections = genericSections[code] || genericSections.en;
  localePacks[code] = {
    titleSuffix: values[0],
    play: values[1],
    learn: values[2],
    quick: values[3],
    signals: values[4],
    questions: values[5],
    related: values[6],
    terms: genericTermsLabel[code] || values[7],
    note: values[8],
    summary: [values[8], "Meowdoku / Meow Doku / cat sudoku.", "Rules, strategy, hints and variants are connected here."],
    sections: [["Meowdoku", values[8]], ...sections],
    faqs: [["What is Meowdoku?", values[8]], ["Do I need to guess?", "No. Meowdoku can be solved with elimination and placement logic."], ["Where should I start?", "Start with the rules page, then play Easy mode."]]
  };
}

for (const [code] of languages) {
  const locale = siteLocales[code];
  if (!locale || code === "en") continue;
  const existing = localePacks[code] || {};
  localePacks[code] = {
    ...existing,
    titleSuffix: existing.titleSuffix || `${languages.find(([lang]) => lang === code)?.[2] || "Meowdoku"} - ${languageLabel(code)}`,
    play: locale.play,
    learn: locale.learn,
    quick: locale.quick,
    signals: locale.essentials,
    questions: locale.questions,
    related: locale.related,
    terms: locale.terms,
    note: locale.note,
    summary: existing.summary?.some((item) => item.includes("Rules, strategy"))
      ? [locale.answer, locale.note, languages.find(([lang]) => lang === code)?.[2] || locale.play]
      : (existing.summary || [locale.answer, locale.note, locale.play]),
    sections: existing.sections?.some(([heading]) => /Meowdoku rules|Meowdoku FAQ|Meowdoku strategy|Meowdoku daily/i.test(heading))
      ? [[locale.sectionRules, locale.note], [locale.sectionStrategy, locale.answer], [locale.sectionNames, "Meowdoku, Meow Doku, cat sudoku, cat queens puzzle."], [locale.sectionNext, `${locale.open} ${locale.play}.`]]
      : (existing.sections || [[locale.sectionRules, locale.note], [locale.sectionStrategy, locale.answer]]),
    faqs: existing.faqs?.some(([question]) => /What is|Do I need|Where should/i.test(question))
      ? [[locale.what, locale.answer], [locale.guess, locale.note], [locale.start, `${locale.learn}, ${locale.play}.`]]
      : (existing.faqs || [[locale.what, locale.answer], [locale.guess, locale.note], [locale.start, `${locale.learn}, ${locale.play}.`]])
  };
}

let keywordResearch = { globalKeywordClusters: [], questionClusters: [], languageClusters: {} };
try {
  keywordResearch = JSON.parse(await fs.readFile(path.join(root, "data", "keyword-research.json"), "utf8"));
} catch {
  keywordResearch = { globalKeywordClusters: [], questionClusters: [], languageClusters: {} };
}

const answerTopicSpecs = [
  {
    slug: "what-is-meowdoku",
    question: "What is Meowdoku?",
    title: "What Is Meowdoku? Cat Sudoku and Queens Puzzle Explained",
    intent: "question answer",
    answer: "Meowdoku is a cat-themed logic puzzle where each colored room, row, and column needs exactly one cat, and cats cannot touch, even diagonally.",
    focus: "definition"
  },
  {
    slug: "is-meowdoku-cat-sudoku",
    question: "Is Meowdoku the same as cat sudoku?",
    title: "Is Meowdoku Cat Sudoku? Similarities and Differences",
    intent: "question answer",
    answer: "Meowdoku feels Sudoku-like because rows and columns matter, but it uses cats, colored rooms, and no-touch placement instead of numbers.",
    focus: "comparison"
  },
  {
    slug: "can-cats-touch-diagonally",
    question: "Can cats touch diagonally in Meowdoku?",
    title: "Can Cats Touch Diagonally in Meowdoku?",
    intent: "question answer",
    answer: "No. Cats cannot touch horizontally, vertically, or diagonally. The diagonal rule is one of the easiest mistakes to miss.",
    focus: "rule"
  },
  {
    slug: "best-beginner-strategy",
    question: "What is the best beginner strategy for Meowdoku?",
    title: "Best Beginner Meowdoku Strategy: Mark Before You Place",
    intent: "question answer",
    answer: "The best beginner strategy is to mark impossible cells first, then place a cat only when a room, row, or column has one legal cell left.",
    focus: "strategy"
  },
  {
    slug: "how-assist-mode-works",
    question: "How does assist mode work in Meowdoku?",
    title: "How Meowdoku Assist Mode Works",
    intent: "question answer",
    answer: "Assist mode shows blocked cells around placed cats so players can learn the no-touch rule without changing the puzzle solution.",
    focus: "assist"
  },
  {
    slug: "which-difficulty",
    question: "Which Meowdoku difficulty should I choose?",
    title: "Which Meowdoku Difficulty Should You Choose?",
    intent: "question answer",
    answer: "Choose Easy for 6x6 learning, Normal for a daily balance, and Hard for deeper 8x8 deduction. Every level keeps three hearts.",
    focus: "difficulty"
  },
  {
    slug: "play-without-download",
    question: "Can I play Meowdoku online without downloading an app?",
    title: "Play Meowdoku Online Without Downloading an App",
    intent: "question answer",
    answer: "Yes. Meowdoku Garden runs in the browser, so you can play instantly on mobile, tablet, or desktop.",
    focus: "web play"
  }
];

function makeAnswerTopic(spec) {
  return {
    slug: spec.slug,
    title: spec.title,
    h1: spec.question,
    description: `${spec.answer} This guide also links related Meowdoku rules, strategies, and puzzle names.`,
    intent: spec.intent,
    keywords: ["meowdoku", "meow doku", "cat sudoku", spec.focus, spec.question.toLowerCase()],
    summary: [spec.answer, "Use the related guides to continue from the question into rules, strategy, hints, or daily play.", "The page is written for players who want a direct answer before they start solving."],
    sections: [
      ["Short Answer", spec.answer],
      ["Why It Matters", "This question comes up because Meowdoku looks simple at first, but the colored rooms, rows, columns, and no-touch rule combine into a real deduction puzzle."],
      ["What to Try Next", "Open the board, start on Easy if you are learning, and use marks before placing cats. If you get stuck, check hints, rules, and strategy pages instead of guessing."],
      ["Related Names", "Players may describe the same puzzle as Meowdoku, Meow Doku, cat sudoku, cat queens puzzle, no-touch puzzle, or color-region logic puzzle."]
    ],
    faqs: [
      [spec.question, spec.answer],
      ["Where should I continue?", "Read the rules page, then try a Normal board when the basic no-touch pattern feels clear."],
      ["Is this answer enough to solve a board?", "It gives the starting idea. The related strategy and hints pages explain the deductions in more detail."]
    ]
  };
}

for (const spec of answerTopicSpecs) {
  if (!topics.some((topic) => topic.slug === spec.slug)) topics.push(makeAnswerTopic(spec));
}

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
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function routeFor(slug = "", lang = "en") {
  const cleanSlug = slug.replace(/^\/|\/$/g, "");
  if (lang === "en") return cleanSlug ? `/${cleanSlug}/` : "/";
  return cleanSlug ? `/${lang}/${cleanSlug}/` : `/${lang}/`;
}

function urlFor(slug = "", lang = "en") {
  return `${siteUrl}${routeFor(slug, lang)}`;
}

function languageLabel(code) {
  return languages.find(([lang]) => lang === code)?.[1] || code;
}

function headerHtml(lang = "en") {
  const labels = navLabels(lang);
  return `<header class="site-header">
      <a class="site-brand" href="${routeFor("", lang)}"><img src="/assets/cat-token.png" alt="" class="brand-mark"><span>Meowdoku Garden</span></a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="${routeFor("", lang)}#play">${escapeHtml(labels.play)}</a>
        <a href="${routeFor("how-to-play", lang)}">${escapeHtml(labels.how)}</a>
        <a href="${routeFor("rules", lang)}">${escapeHtml(labels.rules)}</a>
        <a href="${routeFor("strategy", lang)}">${escapeHtml(labels.strategy)}</a>
        <a href="${routeFor("daily", lang)}">${escapeHtml(labels.daily)}</a>
        <a href="${routeFor("languages", lang)}">${escapeHtml(labels.languages)}</a>
      </nav>
      <label class="language-control header-language">
        <span class="panel-label">${escapeHtml(labels.language)}</span>
        <select id="languageSelect" aria-label="Language"></select>
      </label>
    </header>`;
}

function footerHtml(lang = "en") {
  const labels = navLabels(lang);
  const locale = siteLocales[lang] || siteLocales.en;
  const links = ["how-to-play", "rules", "tips", "strategy", "levels", "daily", "queens-puzzle", "cat-sudoku", "variants", "faq"];
  return `<footer class="site-footer">
      <div><img src="/assets/cat-token.png" alt="" class="footer-mark"><strong>Meowdoku Garden</strong><p>${escapeHtml(locale.footer)}</p></div>
      <nav aria-label="Footer navigation"><a href="${routeFor("", lang)}">${escapeHtml(labels.play)}</a>${links.map((slug) => `<a href="${routeFor(slug, lang)}">${escapeHtml(localTopicName(slug, lang))}</a>`).join("")}<a href="${routeFor("languages", lang)}">${escapeHtml(labels.languages)}</a><a href="/sitemap.xml">Sitemap</a></nav>
    </footer>`;
}

function titleCase(slug) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function localTopicName(slug, lang) {
  const topic = topics.find((item) => item.slug === slug);
  return topicNames[slug]?.[lang] || topicFallbackName(slug, lang) || topic?.h1 || titleCase(slug);
}

function topicFallbackName(slug, lang) {
  if (lang === "en") return "";
  const locale = siteLocales[lang];
  if (!locale) return "";
  const names = {
    "how-to-play": locale.how,
    rules: locale.rules,
    tips: locale.sectionStrategy,
    strategy: locale.strategy,
    levels: `${locale.play} - ${locale.sectionRules}`,
    daily: locale.daily,
    "beginner-guide": locale.learn,
    "hard-puzzles": `${locale.strategy} - ${locale.sectionRules}`,
    "queens-puzzle": `${locale.sectionNames} Meowdoku`,
    "cat-sudoku": `${locale.sectionNames} cat sudoku`,
    "color-region-puzzle": locale.essentials,
    "no-touch-rule": locale.rules,
    hints: locale.quick,
    mistakes: locale.questions,
    "meow-doku": locale.terms,
    variants: locale.terms,
    mobile: locale.play,
    faq: locale.questions,
    glossary: locale.terms,
    "what-is-meowdoku": locale.what,
    "is-meowdoku-cat-sudoku": locale.terms,
    "can-cats-touch-diagonally": locale.rules,
    "best-beginner-strategy": locale.strategy,
    "how-assist-mode-works": locale.quick,
    "which-difficulty": locale.sectionRules,
    "play-without-download": locale.play
    , languages: locale.languages
  };
  return names[slug] || "";
}

function navLabels(lang) {
  const locale = siteLocales[lang];
  if (locale) {
    return {
      play: locale.play,
      how: locale.how,
      rules: locale.rules,
      strategy: locale.strategy,
      daily: locale.daily,
      languages: locale.languages,
      language: locale.language,
      open: locale.open
    };
  }
  const labels = {
    en: { play: "Play", how: "How to Play", rules: "Rules", strategy: "Strategy", daily: "Daily", languages: "Languages", language: "language", open: "Open" },
    zh: { play: "开始玩", how: "玩法", rules: "规则", strategy: "策略", daily: "每日", languages: "语言", language: "语言", open: "打开" },
    "zh-Hant": { play: "開始玩", how: "玩法", rules: "規則", strategy: "策略", daily: "每日", languages: "語言", language: "語言", open: "打開" },
    ja: { play: "遊ぶ", how: "遊び方", rules: "ルール", strategy: "戦略", daily: "毎日", languages: "言語", language: "言語", open: "開く" },
    ko: { play: "플레이", how: "방법", rules: "규칙", strategy: "전략", daily: "데일리", languages: "언어", language: "언어", open: "열기" },
    es: { play: "Jugar", how: "Cómo jugar", rules: "Reglas", strategy: "Estrategia", daily: "Diario", languages: "Idiomas", language: "idioma", open: "Abrir" },
    fr: { play: "Jouer", how: "Comment jouer", rules: "Règles", strategy: "Stratégie", daily: "Quotidien", languages: "Langues", language: "langue", open: "Ouvrir" },
    de: { play: "Spielen", how: "Anleitung", rules: "Regeln", strategy: "Strategie", daily: "Täglich", languages: "Sprachen", language: "sprache", open: "Öffnen" },
    pt: { play: "Jogar", how: "Como jogar", rules: "Regras", strategy: "Estratégia", daily: "Diário", languages: "Idiomas", language: "idioma", open: "Abrir" },
    ru: { play: "Играть", how: "Как играть", rules: "Правила", strategy: "Стратегия", daily: "Ежедневно", languages: "Языки", language: "язык", open: "Открыть" }
  };
  if (labels[lang]) return labels[lang];
  return {
    play: "Play",
    how: "Guide",
    rules: "Rules",
    strategy: "Strategy",
    daily: "Daily",
    languages: "Languages",
    language: "Language",
    open: navLabels("en").open
  };
}

function enrichForLanguage(topic, lang) {
  if (lang === "en") {
    const research = keywordResearch.languageClusters?.en || {};
    const researchTerms = Array.isArray(research.terms) ? research.terms : [];
    const researchQuestions = Array.isArray(research.questions) ? research.questions : [];
    const researchSection = researchTerms.length
      ? [["Related Meowdoku names players use", `${researchTerms.slice(0, 10).join(", ")}.`]]
      : [];
    const researchFaqs = researchQuestions.slice(0, 3).map((question) => [
      question,
      topic.summary?.[0] || "Meowdoku is a cat-themed logic puzzle with colored rooms, rows, columns, and no-touch placement."
    ]);
    return {
      ...topic,
      sections: [...topic.sections, ...researchSection],
      faqs: [...researchFaqs, ...topic.faqs].slice(0, 6),
      keywords: [...topic.keywords, ...researchTerms]
    };
  }
  const label = languageLabel(lang);
  const introLine = languages.find(([code]) => code === lang)?.[2] || `Play Meowdoku in ${label}`;
  const pack = localePacks[lang] || fallbackPack(lang);
  const research = keywordResearch.languageClusters?.[lang] || {};
  const researchTerms = Array.isArray(research.terms) ? research.terms : [];
  const researchQuestions = Array.isArray(research.questions) ? research.questions : [];
  const localName = localTopicName(topic.slug, lang) || `${topic.h1} - ${label}`;
  const researchSection = researchTerms.length
    ? [[`${localName} - ${pack.terms || "Related names"}`, `${researchTerms.slice(0, 8).join(", ")}.`]]
    : [];
  const researchFaqs = researchQuestions.slice(0, 3).map((question) => [
    question,
    `${introLine}. ${pack.summary?.[0] || "Meowdoku is a cat logic puzzle."}`
  ]);
  return {
    ...topic,
    title: `${localName} - ${pack.titleSuffix}`,
    h1: localName,
    description: `${introLine}. ${pack.summary[0]} ${pack.summary[1]}`,
    summary: pack.summary,
    sections: [
      ...pack.sections.map(([heading, copy]) => [
      heading.includes("Meowdoku") ? heading : `${heading} - ${localName}`,
      copy.replaceAll("Meowdoku", "Meowdoku")
      ]),
      ...researchSection
    ],
    faqs: [...researchFaqs, ...pack.faqs].slice(0, 6),
    keywords: [...topic.keywords, ...researchTerms, `meowdoku ${label}`, `cat sudoku ${label}`]
  };
}

function uiText(lang) {
  const locale = siteLocales[lang];
  if (locale) {
    return {
      play: locale.play,
      learn: locale.learn,
      quick: locale.quick,
      signals: locale.essentials,
      questions: locale.questions,
      related: locale.related,
      terms: locale.terms,
      note: locale.note
    };
  }
  if (lang === "en") {
    return {
      play: "Play Meowdoku",
      learn: "Learn the rules",
      quick: "Quick answer",
      signals: "Puzzle essentials",
      questions: "Questions players ask about Meowdoku",
      related: "Related Meowdoku guides",
      terms: "Related names",
      note: "Meowdoku is a quick cat logic puzzle with clear rules, friendly visuals, and enough deduction depth for players who enjoy Sudoku, Queens, Star Battle, and daily puzzle games."
    };
  }
  const pack = localePacks[lang] || fallbackPack(lang);
  return {
    play: pack.play || "Play Meowdoku",
    learn: pack.learn || "Learn the rules",
    quick: pack.quick || "Quick Answer",
    signals: pack.signals || "Puzzle essentials",
    questions: pack.questions || "Questions People Ask About Meowdoku",
    related: pack.related || "Related Meowdoku Guides",
    terms: pack.terms || "Related names",
    note: pack.note || "Meowdoku is a quick cat logic puzzle with clear rules, friendly visuals, and enough deduction depth for players who enjoy Sudoku, Queens, Star Battle, and daily puzzle games."
  };
}

function fallbackPack(lang) {
  const label = languageLabel(lang);
  const introLine = languages.find(([code]) => code === lang)?.[2] || `Meowdoku ${label}`;
  const locale = siteLocales[lang] || siteLocales.en;
  return {
    titleSuffix: `${introLine} - ${label}`,
    play: locale.play,
    learn: locale.learn,
    quick: locale.quick,
    signals: locale.essentials,
    questions: locale.questions,
    related: locale.related,
    terms: locale.terms,
    note: locale.note,
    summary: [locale.answer, locale.note, introLine],
    sections: [[locale.sectionRules, locale.note], [locale.sectionStrategy, locale.answer], [locale.sectionNames, `${introLine}: Meowdoku, Meow Doku, cat sudoku, cat queens puzzle.`], [locale.sectionNext, `${locale.open} ${introLine}.`]],
    faqs: [[locale.what, locale.answer], [locale.guess, locale.note], [locale.start, `${locale.learn}, ${locale.play}.`]]
  };
}

function keywordRoute(keyword, lang) {
  const value = keyword.toLowerCase();
  if (value.includes("how") || value.includes("guide") || value.includes("learn") || value.includes("beginner")) return routeFor(value.includes("beginner") ? "beginner-guide" : "how-to-play", lang);
  if (value.includes("rule") || value.includes("touch") || value.includes("diagonal")) return routeFor(value.includes("touch") || value.includes("diagonal") ? "no-touch-rule" : "rules", lang);
  if (value.includes("tip") || value.includes("hint") || value.includes("help")) return routeFor(value.includes("hint") || value.includes("help") ? "hints" : "tips", lang);
  if (value.includes("strategy") || value.includes("advanced")) return routeFor("strategy", lang);
  if (value.includes("hard") || value.includes("8x8")) return routeFor("hard-puzzles", lang);
  if (value.includes("level") || value.includes("easy")) return routeFor("levels", lang);
  if (value.includes("daily")) return routeFor("daily", lang);
  if (value.includes("queen")) return routeFor("queens-puzzle", lang);
  if (value.includes("cat sudoku") || value.includes("sudoku")) return routeFor("cat-sudoku", lang);
  if (value.includes("region") || value.includes("room") || value.includes("color")) return routeFor("color-region-puzzle", lang);
  if (value.includes("mistake") || value.includes("heart")) return routeFor("mistakes", lang);
  if (value.includes("variant") || value.includes("meow doku") || value.includes("dokou") || value.includes("meow sudoku")) return routeFor("variants", lang);
  if (value.includes("mobile") || value.includes("phone")) return routeFor("mobile", lang);
  if (value.includes("faq") || value.includes("answer")) return routeFor("faq", lang);
  return routeFor("glossary", lang);
}

function keywordLinks(keywords, lang) {
  return keywords.slice(0, 14).map((keyword) => `<a href="${keywordRoute(keyword, lang)}">${escapeHtml(keyword)}</a>`).join("");
}

function relatedLinks(currentSlug, lang) {
  const priority = ["how-to-play", "what-is-meowdoku", "is-meowdoku-cat-sudoku", "can-cats-touch-diagonally", "best-beginner-strategy", "how-assist-mode-works", "which-difficulty", "play-without-download", "rules", "tips", "strategy", "levels", "daily", "queens-puzzle", "cat-sudoku", "meow-doku", "variants", "faq", "glossary"];
  return priority.filter((slug) => slug !== currentSlug).slice(0, 7).map((slug) => {
    return `<a href="${routeFor(slug, lang)}">${escapeHtml(localTopicName(slug, lang))}</a>`;
  }).join("");
}

function hreflangLinks(slug) {
  const languageLinks = languages.map(([lang]) => `<link rel="alternate" hreflang="${escapeHtml(lang)}" href="${urlFor(slug, lang)}">`).join("\n    ");
  return `${languageLinks}\n    <link rel="alternate" hreflang="x-default" href="${urlFor(slug, "en")}">`;
}

function pageShell(topic, lang = "en") {
  const data = enrichForLanguage(topic, lang);
  const ui = uiText(lang);
  const canonical = urlFor(topic.slug, lang);
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
  const webPageJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    url: canonical,
    description: data.description,
    isPartOf: { "@type": "WebSite", name: "Meowdoku Garden", url: siteUrl },
    about: ["Meowdoku", "Meow Doku", "Cat Sudoku", "Queens Puzzle", data.intent, ...data.keywords]
  };
  const sections = data.customSectionsHtml || data.sections.map(([heading, copy]) => `<article><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(copy)}</p></article>`).join("\n");
  const faqs = data.faqs.map(([question, answer]) => `<div class="answer-card"><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></div>`).join("\n");
  const keywords = ["Meowdoku", "Meow Doku", "cat sudoku", "cat queens puzzle", "color region puzzle", ...data.keywords];

  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(data.title)}</title>
    <meta name="description" content="${escapeHtml(data.description)}">
    <meta name="keywords" content="${escapeHtml(keywords.join(", "))}">
    <meta name="theme-color" content="#157f83">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Meowdoku">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <link rel="canonical" href="${canonical}">
    ${hreflangLinks(topic.slug)}
    <link rel="icon" type="image/png" href="/assets/cat-token.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/cat-icon-180.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(data.title)}">
    <meta property="og:description" content="${escapeHtml(data.description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${siteUrl}/assets/cat-token.png">
    <link rel="stylesheet" href="/styles.css">
    <script type="application/ld+json">${JSON.stringify(webPageJson)}</script>
    <script type="application/ld+json">${JSON.stringify(faqJson)}</script>
  </head>
  <body>
    ${headerHtml(lang)}
    <main>
      <section class="guide-hero">
        <div class="guide-hero-inner">
          <p class="eyebrow">${escapeHtml(lang === "en" ? `Meowdoku ${data.intent}` : ui.signals)}</p>
          <h1>${escapeHtml(data.h1)}</h1>
          <p class="guide-lede">${escapeHtml(data.description)}</p>
          <div class="guide-actions"><a class="guide-button" href="${routeFor("", lang)}#play">${escapeHtml(ui.play)}</a><a class="guide-button secondary" href="${routeFor("how-to-play", lang)}">${escapeHtml(ui.learn)}</a></div>
        </div>
      </section>
      <section class="guide-section">
        <div class="content-grid">
          <div>
            <h2>${escapeHtml(ui.quick)}</h2>
            <p>${escapeHtml(data.summary.join(" "))}</p>
            <p>${escapeHtml(ui.note)}</p>
          </div>
          <div class="guide-card">
            <h2>${escapeHtml(ui.signals)}</h2>
            <ul>${data.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>
      <section class="guide-section alt">
        <div class="content-grid three">${sections}</div>
      </section>
      <section class="guide-section">
        <h2>${escapeHtml(ui.questions)}</h2>
        <div class="answer-grid">${faqs}</div>
      </section>
      <section class="guide-section alt">
        <div class="content-grid">
          <div>
            <h2>${escapeHtml(ui.related)}</h2>
            <div class="keyword-cloud">${relatedLinks(topic.slug, lang)}</div>
          </div>
          <div class="guide-card">
            <h2>${escapeHtml(ui.terms)}</h2>
            <div class="keyword-cloud">${keywordLinks(keywords, lang)}</div>
          </div>
        </div>
      </section>
    </main>
    ${footerHtml(lang)}
    <script src="/analytics-config.js"></script>
    <script src="/analytics.js"></script>
    <script src="/site-language.js"></script>
    <script src="/pwa.js"></script>
  </body>
</html>
`;
}

let homeTemplate = "";

function localizedHomeSections(lang) {
  const locale = siteLocales[lang] || siteLocales.en;
  return `<section class="guide-section" aria-labelledby="what-is-meowdoku">
      <div class="content-grid">
        <div>
          <p class="eyebrow">${escapeHtml(locale.essentials)}</p>
          <h2 id="what-is-meowdoku">${escapeHtml(locale.what)}</h2>
          <p>${escapeHtml(locale.answer)}</p>
          <p>${escapeHtml(locale.note)}</p>
        </div>
        <div class="guide-card">
          <h3>${escapeHtml(locale.rules)}</h3>
          <ol>
            <li>${escapeHtml(locale.sectionRules)}</li>
            <li>${escapeHtml(locale.sectionStrategy)}</li>
            <li>${escapeHtml(locale.sectionNames)}</li>
          </ol>
          <a href="${routeFor("how-to-play", lang)}" class="text-link">${escapeHtml(locale.learn)}</a>
        </div>
      </div>
    </section>
    <section class="guide-section alt" aria-labelledby="strategy">
      <div class="content-grid three">
        <article>
          <h2 id="strategy">${escapeHtml(locale.strategy)}</h2>
          <p>${escapeHtml(locale.note)}</p>
          <a href="${routeFor("tips", lang)}" class="text-link">${escapeHtml(localTopicName("tips", lang))}</a>
        </article>
        <article>
          <h2>${escapeHtml(locale.sectionRules)}</h2>
          <p>${escapeHtml(locale.answer)}</p>
          <a href="${routeFor("levels", lang)}" class="text-link">${escapeHtml(localTopicName("levels", lang))}</a>
        </article>
        <article>
          <h2>${escapeHtml(locale.languages)}</h2>
          <p>${escapeHtml(locale.footer)}</p>
          <a href="${routeFor("languages", lang)}" class="text-link">${escapeHtml(locale.languages)}</a>
        </article>
      </div>
    </section>
    <section class="guide-section" aria-labelledby="meowdoku-guides">
      <div class="content-grid">
        <div>
          <p class="eyebrow">${escapeHtml(locale.related)}</p>
          <h2 id="meowdoku-guides">${escapeHtml(locale.terms)}</h2>
          <p>${escapeHtml(locale.answer)}</p>
          <p>${escapeHtml(locale.sectionNext)}: ${escapeHtml(locale.play)}.</p>
        </div>
        <div class="guide-card">
          <h3>${escapeHtml(locale.open)}</h3>
          <div class="keyword-cloud">
            <a href="${routeFor("rules", lang)}">${escapeHtml(localTopicName("rules", lang))}</a>
            <a href="${routeFor("strategy", lang)}">${escapeHtml(localTopicName("strategy", lang))}</a>
            <a href="${routeFor("beginner-guide", lang)}">${escapeHtml(localTopicName("beginner-guide", lang))}</a>
            <a href="${routeFor("daily", lang)}">${escapeHtml(localTopicName("daily", lang))}</a>
            <a href="${routeFor("queens-puzzle", lang)}">${escapeHtml(localTopicName("queens-puzzle", lang))}</a>
            <a href="${routeFor("variants", lang)}">${escapeHtml(localTopicName("variants", lang))}</a>
          </div>
        </div>
      </div>
    </section>`;
}

function localizedGameHome(lang) {
  const label = languageLabel(lang);
  const introLine = languages.find(([code]) => code === lang)?.[2] || `Play Meowdoku in ${label}`;
  const description = `${introLine}: play the cat sudoku and Queens-style Meowdoku puzzle online, then continue to rules, tips, strategy, and daily puzzle guides.`;
  return homeTemplate
    .replace('<html lang="en">', `<html lang="${escapeHtml(lang)}">`)
    .replace("<title>Meowdoku Garden - Play the Cat Logic Puzzle Online</title>", `<title>${escapeHtml(introLine)} - Meowdoku Garden</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(description)}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${urlFor("", lang)}">\n    ${hreflangLinks("")}`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(introLine)} - Meowdoku Garden">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(description)}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${urlFor("", lang)}">`)
    .replace('<link rel="stylesheet" href="styles.css">', '<link rel="stylesheet" href="/styles.css">')
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('src="analytics-config.js"', 'src="/analytics-config.js"')
    .replaceAll('src="analytics.js"', 'src="/analytics.js"')
    .replaceAll('src="game.js"', 'src="/game.js"')
    .replaceAll('src="site-language.js"', 'src="/site-language.js"')
    .replaceAll('src="pwa.js"', 'src="/pwa.js"')
    .replace(/<header class="site-header">[\s\S]*?<\/header>/, headerHtml(lang))
    .replace(/<section class="guide-section"[\s\S]*?<\/section>\s*<\/main>/, `${localizedHomeSections(lang)}
    </main>`)
    .replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, footerHtml(lang));
}

function languageHome(lang) {
  if (homeTemplate) return localizedGameHome(lang);
  const label = languageLabel(lang);
  const introLine = languages.find(([code]) => code === lang)?.[2] || `Play Meowdoku in ${label}`;
  const pack = localePacks[lang] || fallbackPack(lang);
  const labels = navLabels(lang);
  const topicCards = topics.map((topic) => `<article><h2>${escapeHtml(localTopicName(topic.slug, lang))}</h2><p>${escapeHtml(pack.note)}</p><a class="text-link" href="${routeFor(topic.slug, lang)}">${escapeHtml(labels.open)} ${escapeHtml(localTopicName(topic.slug, lang))}</a></article>`).join("\n");
  const topic = {
    slug: "",
    title: `${introLine} - Meowdoku Garden`,
    h1: `${introLine}`,
    description: `${introLine}: choose a Meowdoku guide, learn the rules, study strategy, and play the cat sudoku puzzle online.`,
    intent: "language hub",
    keywords: [`meowdoku ${label}`, `cat sudoku ${label}`, "meowdoku languages"],
    summary: [introLine, "Rules, tips, strategy, levels, and puzzle names are linked from this language page.", "Use the header language selector to move between languages."],
    sections: [],
    customSectionsHtml: topicCards,
    faqs: [
      [`Is Meowdoku available for ${label} players?`, "Yes. This language page connects the game, rules, tips, strategy, levels, and related puzzle names."],
      ["Where do I start?", "Open How to Play, then return to the homepage and start Easy mode."],
      ["Does the game detect language automatically?", "Yes. The browser language is used when no saved language preference exists."]
    ]
  };
  return pageShell(topic, lang);
}

function languagesPage(lang = "en") {
  const locale = siteLocales[lang] || siteLocales.en;
  const cards = languages.map(([code, label, heading]) => {
    const pack = localePacks[code] || fallbackPack(code);
    const open = navLabels(code).open || "Open";
    return `<article><h2>${escapeHtml(label)}</h2><p>${escapeHtml(heading)}. ${escapeHtml(pack.note)}</p><a class="text-link" href="${routeFor("", code)}">${escapeHtml(open)} ${escapeHtml(label)}</a></article>`;
  }).join("\n");
  const topic = {
    slug: "languages",
    title: `${locale.languages} - Meowdoku Garden`,
    h1: `${locale.languages} - Meowdoku`,
    description: locale.footer,
    intent: "languages",
    keywords: ["meowdoku languages", "global meowdoku", "cat sudoku languages", "multilingual puzzle"],
    summary: [locale.footer, locale.note, locale.answer],
    sections: [],
    customSectionsHtml: cards,
    faqs: [[locale.what, locale.answer], [locale.start, `${locale.learn}, ${locale.play}.`], [locale.guess, locale.note]]
  };
  return pageShell(topic, lang);
}

async function writePage(route, html) {
  const cleanRoute = route.replace(/^\/|\/$/g, "");
  const dir = cleanRoute ? path.join(out, cleanRoute) : out;
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), html, "utf8");
}

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });

for (const entry of entries) {
  await copyEntry(path.join(root, entry), path.join(out, entry));
}
homeTemplate = await fs.readFile(path.join(root, "index.html"), "utf8");

for (const topic of topics) {
  await writePage(topic.slug, pageShell(topic, "en"));
  for (const [lang] of languages) {
    if (lang === "en") continue;
    await writePage(`${lang}/${topic.slug}`, pageShell(topic, lang));
  }
}

await writePage("languages", languagesPage("en"));
for (const [lang] of languages) {
  if (lang === "en") continue;
  await writePage(`${lang}/languages`, languagesPage(lang));
  await writePage(lang, languageHome(lang));
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

const urls = new Set(["", "languages"]);
for (const topic of topics) urls.add(topic.slug);
for (const [lang] of languages) {
  if (lang === "en") continue;
  urls.add(lang);
  urls.add(`${lang}/languages`);
  for (const topic of topics) urls.add(`${lang}/${topic.slug}`);
}

await fs.writeFile(
  path.join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...urls].map((slug) => `  <url><loc>${siteUrl}/${slug ? `${slug}/` : ""}</loc><changefreq>${slug ? "weekly" : "daily"}</changefreq><priority>${slug ? "0.72" : "1.0"}</priority></url>`).join("\n")}\n</urlset>\n`,
  "utf8"
);
await fs.writeFile(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
await fs.writeFile(path.join(out, "site.webmanifest"), await fs.readFile(path.join(root, "site.webmanifest"), "utf8"), "utf8");
await fs.writeFile(path.join(out, "_headers"), "/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n/sw.js\n  Cache-Control: no-cache\n/site.webmanifest\n  Content-Type: application/manifest+json; charset=utf-8\n", "utf8");
console.log(`Built ${urls.size} indexed routes to ${out}`);
