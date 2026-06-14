import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const siteUrl = "https://www.meowdoku.xyz";
const entries = ["index.html", "styles.css", "game.js", "site-language.js", "analytics-config.js", "analytics.js", "assets", "_redirects"];

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
      ["Which level is best for SEO visitors learning the game?", "Easy 6x6 is the clearest first experience."],
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
      ["Shareable Search Terms", "Friends may search Meowdoku, Meow Doku, cat sudoku, daily cat puzzle, or Queens puzzle. The site covers those paths."]
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
      ["Search Variations", "Players may search cat sudoku, meow sudoku, meow doku, cat queens puzzle, or Meowdoku online."]
    ],
    faqs: [
      ["Is Cat Sudoku the same as Meowdoku?", "Cat Sudoku is a useful search phrase for Meowdoku-style cat placement logic."],
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
      ["Design Value", "Color-region logic gives Meowdoku its identity and creates SEO overlap with region puzzle, Queens puzzle, and Star Battle searches."]
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
      ["SEO Search Intent", "Many players search Meowdoku hints when they are stuck. A useful hints page should teach the next deduction, not only reveal answers."]
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
    title: "Meow Doku Online - Meowdoku for Players Searching With a Space",
    h1: "Meow Doku Online",
    description: "Looking for Meow Doku, Meowdokou, Meow Sudoku, or Meowdoku? Play the free cat logic puzzle online and learn the rules.",
    intent: "variant keyword",
    keywords: ["meow doku", "meow dokou", "meow sudoku", "meowdoku online"],
    summary: ["Same puzzle idea.", "Common spelling variation.", "Instant browser play."],
    sections: [
      ["Meowdoku or Meow Doku", "Search engines see both versions. Players often add a space because the name sounds like a playful version of Sudoku."],
      ["Other Searches", "Meowdokou, meow sudoku, cat sudoku, cat queens, and color region puzzle are all natural ways people may look for this game."],
      ["Why This Page Exists", "A useful SEO page should help the misspelled or variant searcher find the real game quickly."],
      ["Start Playing", "The homepage has the playable board at the top, with Easy, Normal, and Hard modes."],
      ["Learn the Rules", "If the name brought you here, the core rule is simple: one cat per room, row, and column, with no touching."]
    ],
    faqs: [
      ["Is Meow Doku the same as Meowdoku?", "For this site, yes. Meow Doku is a spacing variation of Meowdoku."],
      ["Is there a download?", "No download is needed for the web version."],
      ["Why target misspellings?", "Because players often discover new games through imperfect searches."]
    ]
  },
  {
    slug: "variants",
    title: "Meowdoku Search Variants - Meow Doku, Cat Sudoku, and Puzzle Names",
    h1: "Meowdoku Search Variants",
    description: "A guide to Meowdoku search variants including Meow Doku, cat sudoku, meow sudoku, cat queens puzzle, and region logic puzzle.",
    intent: "keyword variants",
    keywords: ["meowdoku variants", "meow doku", "cat sudoku", "meow sudoku", "cat queens puzzle"],
    summary: ["Brand term.", "Spacing variants.", "Related puzzle categories."],
    sections: [
      ["Primary Term: Meowdoku", "Meowdoku is the most important search term and the brand anchor for this site."],
      ["Spacing Term: Meow Doku", "Meow Doku catches players who hear the word before seeing it written."],
      ["Category Term: Cat Sudoku", "Cat Sudoku explains the experience to players who understand row and column logic."],
      ["Related Term: Queens Puzzle", "Queens puzzle connects Meowdoku to established placement logic games."],
      ["Long-Tail Terms", "Daily cat logic puzzle, no-touch puzzle, colored room puzzle, and 8x8 cat puzzle help specific search intents land on useful pages."]
    ],
    faqs: [
      ["What is the top keyword?", "Meowdoku is the top keyword."],
      ["Should pages mention variants?", "Yes, but naturally and with useful explanations."],
      ["Do variants help GEO?", "Yes. AI answers often connect synonyms and categories when pages explain them clearly."]
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
      ["No App Store Required", "The browser version makes Meowdoku accessible to search visitors immediately."],
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
      ["Which Keywords Matter?", "Meowdoku matters most, followed by Meow Doku, cat sudoku, meow sudoku, cat queens puzzle, and color region puzzle."]
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
    summary: ["Puzzle vocabulary.", "Beginner-friendly definitions.", "Useful for AI answers."],
    sections: [
      ["Colored Room", "A connected region of cells with the same room identity. Each colored room needs exactly one cat."],
      ["Mark", "A mark is a dot placed on a cell that cannot contain a cat. Marks help track deductions."],
      ["Assist Mode", "Assist mode visually shows cells blocked by the no-touch rule around placed cats."],
      ["Heart", "A heart is one available mistake. Empty hearts show used lives."],
      ["Room Lock", "A room lock happens when all legal cells for a room sit in a single row or column."]
    ],
    faqs: [
      ["Why have a glossary?", "Glossaries help beginners and give search engines clear entity definitions."],
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
  variants: { zh: "Meowdoku 搜索变体", "zh-Hant": "Meowdoku 搜尋變體", ja: "Meowdoku 検索バリエーション", ko: "Meowdoku 검색 변형", es: "Variantes de búsqueda", fr: "Variantes de recherche", de: "Suchvarianten", pt: "Variações de busca", ru: "Варианты поиска" },
  mobile: { zh: "Meowdoku 手机版", "zh-Hant": "Meowdoku 手機版", ja: "Meowdoku モバイル", ko: "Meowdoku 모바일", es: "Meowdoku móvil", fr: "Meowdoku mobile", de: "Meowdoku mobil", pt: "Meowdoku mobile", ru: "Meowdoku на телефоне" },
  faq: { zh: "Meowdoku 常见问题", "zh-Hant": "Meowdoku 常見問題", ja: "Meowdoku FAQ", ko: "Meowdoku FAQ", es: "Preguntas frecuentes", fr: "FAQ Meowdoku", de: "Meowdoku FAQ", pt: "FAQ Meowdoku", ru: "FAQ Meowdoku" },
  glossary: { zh: "Meowdoku 术语表", "zh-Hant": "Meowdoku 術語表", ja: "Meowdoku 用語集", ko: "Meowdoku 용어집", es: "Glosario Meowdoku", fr: "Glossaire Meowdoku", de: "Meowdoku-Glossar", pt: "Glossário Meowdoku", ru: "Глоссарий Meowdoku" }
};

const localePacks = {
  zh: {
    titleSuffix: "在线猫咪逻辑谜题指南",
    play: "开始玩 Meowdoku",
    learn: "学习规则",
    quick: "快速答案",
    signals: "Meowdoku 重点",
    questions: "玩家常问的 Meowdoku 问题",
    related: "相关 Meowdoku 指南",
    terms: "覆盖的搜索词",
    note: "这个页面围绕 Meowdoku 的真实搜索意图组织内容：玩法、规则、策略、难度、变体关键词和每日游玩入口都互相连接。",
    summary: ["Meowdoku 是一个猫咪主题的区域放置逻辑谜题。", "每个彩色房间、每一行、每一列都只能有一只猫。", "猫不能相邻，斜角也不可以。"],
    sections: [
      ["核心规则", "先观察彩色区域，再结合行、列和不相邻规则排除不可能的格子。不要靠猜，先标记，再放猫。"],
      ["解题思路", "优先找被限制最多的房间。一个房间如果只剩一行或一列可用，就会形成很强的 Meowdoku 锁定。"],
      ["为什么这个页面有价值", "搜索 Meowdoku 的人可能想知道怎么玩、是否像数独、困难题怎么解、或者 Meow Doku 是否是同一个游戏。本页直接回答这些意图。"],
      ["适合谁玩", "如果你喜欢 Sudoku、Queens、Star Battle、Nonogram 或每日逻辑题，Meowdoku 会很容易上手。"],
      ["下一步", "读完本页后可以回到首页从简单模式开始，也可以继续查看规则、策略、困难题和搜索变体页面。"]
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
    terms: "涵蓋的搜尋詞",
    note: "這個頁面圍繞 Meowdoku 的真實搜尋意圖整理內容：玩法、規則、策略、難度、變體關鍵字和每日遊玩入口都彼此連結。",
    summary: ["Meowdoku 是一個貓咪主題的區域放置邏輯謎題。", "每個彩色房間、每一行、每一列都只能有一隻貓。", "貓不能相鄰，斜角也不可以。"],
    sections: [
      ["核心規則", "先觀察彩色區域，再結合行、列和不相鄰規則排除不可能的格子。不要靠猜，先標記，再放貓。"],
      ["解題思路", "優先找被限制最多的房間。房間如果只剩一行或一列可用，就會形成很強的 Meowdoku 鎖定。"],
      ["為什麼這個頁面有價值", "搜尋 Meowdoku 的人可能想知道怎麼玩、是否像數獨、困難題怎麼解，或 Meow Doku 是否是同一個遊戲。本頁直接回答這些意圖。"],
      ["適合誰玩", "如果你喜歡 Sudoku、Queens、Star Battle、Nonogram 或每日邏輯題，Meowdoku 會很容易上手。"],
      ["下一步", "讀完本頁後可以回到首頁從簡單模式開始，也可以繼續查看規則、策略、困難題和搜尋變體頁面。"]
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
    note: "このページは Meowdoku の検索意図に合わせて、遊び方、ルール、戦略、難易度、別名検索、毎日のプレイ入口を整理しています。",
    summary: ["Meowdoku は猫を置く色分け領域ロジックパズルです。", "各色の部屋、各行、各列に猫は一匹だけ置けます。", "猫は上下左右だけでなく斜めにも隣接できません。"],
    sections: [["基本ルール", "色の部屋を見て、行・列・隣接禁止の条件で置けないマスを消していきます。"], ["解き方", "制約が強い部屋から始めると、行や列のロックが見つかります。"], ["検索意図", "Meowdoku、Meow Doku、猫数独、Queens パズルを探す人に役立つ説明をまとめています。"], ["向いている人", "Sudoku、Queens、Star Battle、毎日のロジックパズルが好きな人に向いています。"], ["次の一手", "ホームで簡単モードを遊ぶか、戦略や難問ガイドへ進んでください。"]],
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
    terms: "포함된 검색어",
    note: "이 페이지는 Meowdoku 검색 의도에 맞춰 규칙, 전략, 난이도, 검색 변형, 매일 플레이入口를 연결합니다.",
    summary: ["Meowdoku는 고양이를 배치하는 색 영역 논리 퍼즐입니다.", "각 색 방, 각 행, 각 열에는 고양이 한 마리만 놓을 수 있습니다.", "고양이는 대각선을 포함해 서로 닿을 수 없습니다."],
    sections: [["기본 규칙", "색 영역을 먼저 보고 행, 열, 인접 금지 규칙으로 불가능한 칸을 지웁니다."], ["풀이 방법", "제약이 강한 방부터 보면 행 또는 열 잠금이 생깁니다."], ["검색 의도", "Meowdoku, Meow Doku, 고양이 스도쿠, Queens 퍼즐을 찾는 사람에게 필요한 설명을 제공합니다."], ["추천 대상", "Sudoku, Queens, Star Battle, 매일 논리 퍼즐을 좋아한다면 잘 맞습니다."], ["다음 단계", "홈에서 쉬운 모드로 시작하거나 전략/어려운 퍼즐 가이드를 보세요."]],
    faqs: [["Meowdoku란 무엇인가요?", "고양이를 색 영역에 배치하는 논리 퍼즐입니다."], ["추측이 필요한가요?", "아니요. 제거와 잠금 추론으로 풀 수 있습니다."], ["스도쿠와 같은가요?", "행과 열 제약은 비슷하지만 색 영역과 인접 금지 규칙이 다릅니다."]]
  }
};

const genericLocalePacks = {
  es: ["Guía de rompecabezas lógico de gatos", "Jugar Meowdoku", "Ver reglas", "Respuesta rápida", "Puntos clave de Meowdoku", "Preguntas frecuentes sobre Meowdoku", "Guías relacionadas", "Términos de búsqueda cubiertos", "Meowdoku es un rompecabezas lógico de regiones con gatos. Cada región de color, fila y columna necesita un solo gato. Los gatos no pueden tocarse, ni siquiera en diagonal."],
  fr: ["Guide du puzzle logique de chats", "Jouer à Meowdoku", "Voir les règles", "Réponse rapide", "Points clés de Meowdoku", "Questions fréquentes sur Meowdoku", "Guides liés", "Termes de recherche couverts", "Meowdoku est un puzzle logique à régions avec des chats. Chaque région colorée, ligne et colonne doit contenir un seul chat. Les chats ne peuvent pas se toucher, même en diagonale."],
  de: ["Leitfaden für Katzen-Logikrätsel", "Meowdoku spielen", "Regeln ansehen", "Kurzantwort", "Meowdoku-Kernpunkte", "Häufige Fragen zu Meowdoku", "Verwandte Leitfäden", "Abgedeckte Suchbegriffe", "Meowdoku ist ein Logikrätsel mit farbigen Regionen und Katzen. Jede Region, Reihe und Spalte braucht genau eine Katze. Katzen dürfen sich auch diagonal nicht berühren."],
  pt: ["Guia do puzzle lógico de gatos", "Jogar Meowdoku", "Ver regras", "Resposta rápida", "Pontos-chave de Meowdoku", "Perguntas frequentes sobre Meowdoku", "Guias relacionados", "Termos de busca cobertos", "Meowdoku é um puzzle lógico de regiões com gatos. Cada região colorida, linha e coluna precisa de um gato. Gatos não podem se tocar, nem na diagonal."],
  ru: ["Гид по кошачьей логической головоломке", "Играть в Meowdoku", "Правила", "Краткий ответ", "Ключевые идеи Meowdoku", "Вопросы о Meowdoku", "Похожие руководства", "Охваченные поисковые запросы", "Meowdoku — логическая головоломка с цветными регионами и кошками. В каждом регионе, строке и столбце должна быть одна кошка. Кошки не могут соприкасаться, даже по диагонали."],
  ar: ["دليل لغز القطط المنطقي", "العب Meowdoku", "اعرض القواعد", "إجابة سريعة", "نقاط Meowdoku الأساسية", "أسئلة شائعة عن Meowdoku", "أدلة مرتبطة", "مصطلحات البحث المغطاة", "Meowdoku لغز منطقي بمناطق ملوّنة وقطط. كل منطقة وصف وعمود يحتاج إلى قط واحد فقط. لا يمكن للقطط أن تتلامس حتى قطرياً."],
  hi: ["बिल्ली लॉजिक पज़ल गाइड", "Meowdoku खेलें", "नियम देखें", "त्वरित उत्तर", "Meowdoku के मुख्य संकेत", "Meowdoku प्रश्न", "संबंधित गाइड", "कवर किए गए खोज शब्द", "Meowdoku रंगीन क्षेत्रों और बिल्लियों वाला लॉजिक पज़ल है। हर रंगीन क्षेत्र, पंक्ति और स्तंभ में केवल एक बिल्ली होनी चाहिए। बिल्लियाँ तिरछे भी नहीं छू सकतीं।"],
  id: ["Panduan puzzle logika kucing", "Main Meowdoku", "Lihat aturan", "Jawaban cepat", "Poin penting Meowdoku", "Pertanyaan tentang Meowdoku", "Panduan terkait", "Istilah pencarian tercakup", "Meowdoku adalah puzzle logika wilayah berwarna dengan kucing. Setiap wilayah, baris, dan kolom membutuhkan satu kucing. Kucing tidak boleh bersentuhan, termasuk diagonal."],
  vi: ["Hướng dẫn câu đố logic mèo", "Chơi Meowdoku", "Xem luật", "Trả lời nhanh", "Điểm chính của Meowdoku", "Câu hỏi về Meowdoku", "Hướng dẫn liên quan", "Từ khóa đã bao phủ", "Meowdoku là câu đố logic theo vùng màu với mèo. Mỗi vùng màu, hàng và cột chỉ có một mèo. Mèo không được chạm nhau, kể cả đường chéo."],
  tr: ["Kedi mantık bulmacası rehberi", "Meowdoku oyna", "Kuralları gör", "Kısa cevap", "Meowdoku temel noktaları", "Meowdoku soruları", "İlgili rehberler", "Kapsanan arama terimleri", "Meowdoku renkli bölgeler ve kedilerle oynanan bir mantık bulmacasıdır. Her bölge, satır ve sütunda bir kedi olmalıdır. Kediler çaprazda bile temas edemez."],
  it: ["Guida al puzzle logico con gatti", "Gioca a Meowdoku", "Vedi le regole", "Risposta rapida", "Punti chiave di Meowdoku", "Domande su Meowdoku", "Guide correlate", "Termini di ricerca coperti", "Meowdoku è un puzzle logico a regioni colorate con gatti. Ogni regione, riga e colonna richiede un solo gatto. I gatti non possono toccarsi, nemmeno in diagonale."],
  th: ["คู่มือปริศนาตรรกะแมว", "เล่น Meowdoku", "ดูกติกา", "คำตอบสั้น", "จุดสำคัญของ Meowdoku", "คำถามเกี่ยวกับ Meowdoku", "คู่มือที่เกี่ยวข้อง", "คำค้นหาที่ครอบคลุม", "Meowdoku เป็นปริศนาตรรกะพื้นที่สีพร้อมแมว แต่ละพื้นที่ แถว และคอลัมน์ต้องมีแมวหนึ่งตัว แมวห้ามแตะกันแม้แนวทแยง"],
  pl: ["Przewodnik po kociej łamigłówce logicznej", "Graj w Meowdoku", "Zobacz zasady", "Krótka odpowiedź", "Najważniejsze punkty Meowdoku", "Pytania o Meowdoku", "Powiązane poradniki", "Uwzględnione wyszukiwane hasła", "Meowdoku to logiczna łamigłówka z kolorowymi regionami i kotami. Każdy region, rząd i kolumna potrzebuje jednego kota. Koty nie mogą się stykać, także po przekątnej."],
  nl: ["Gids voor kattenlogicapuzzel", "Speel Meowdoku", "Bekijk regels", "Kort antwoord", "Belangrijke Meowdoku-punten", "Vragen over Meowdoku", "Gerelateerde gidsen", "Gedekte zoektermen", "Meowdoku is een logicapuzzel met gekleurde gebieden en katten. Elk gebied, elke rij en elke kolom heeft één kat nodig. Katten mogen elkaar niet raken, ook niet diagonaal."],
  uk: ["Гід з котячої логічної головоломки", "Грати в Meowdoku", "Правила", "Коротка відповідь", "Ключові моменти Meowdoku", "Питання про Meowdoku", "Пов'язані гайди", "Охоплені пошукові запити", "Meowdoku — логічна головоломка з кольоровими регіонами та котами. У кожному регіоні, рядку й стовпці має бути один кіт. Коти не можуть торкатися навіть по діагоналі."]
};

for (const [code, values] of Object.entries(genericLocalePacks)) {
  if (localePacks[code]) continue;
  localePacks[code] = {
    titleSuffix: values[0],
    play: values[1],
    learn: values[2],
    quick: values[3],
    signals: values[4],
    questions: values[5],
    related: values[6],
    terms: values[7],
    note: values[8],
    summary: [values[8], "Meowdoku / Meow Doku / cat sudoku.", "Rules, strategy, hints and variants are connected here."],
    sections: [["Meowdoku", values[8]], ["Rules", "Use rows, columns, colored regions and the no-touch rule to remove impossible cells."], ["Strategy", "Start with constrained regions, mark impossible cells, and place a cat only when the logic is certain."], ["Search intent", "This page connects Meowdoku with cat sudoku, Queens puzzle, daily puzzle and spelling variants."], ["Next step", "Open the game, start with Easy mode, then read the related guides."]],
    faqs: [["What is Meowdoku?", values[8]], ["Do I need to guess?", "No. Meowdoku can be solved with elimination and placement logic."], ["Where should I start?", "Start with the rules page, then play Easy mode."]]
  };
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
      <a class="site-brand" href="/"><img src="/assets/cat-token.png" alt="" class="brand-mark"><span>Meowdoku Garden</span></a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="/#play">${escapeHtml(labels.play)}</a>
        <a href="${routeFor("how-to-play", lang)}">${escapeHtml(labels.how)}</a>
        <a href="${routeFor("rules", lang)}">${escapeHtml(labels.rules)}</a>
        <a href="${routeFor("strategy", lang)}">${escapeHtml(labels.strategy)}</a>
        <a href="${routeFor("daily", lang)}">${escapeHtml(labels.daily)}</a>
        <a href="${lang === "en" ? "/languages/" : routeFor("", lang)}">${escapeHtml(labels.languages)}</a>
      </nav>
      <label class="language-control header-language">
        <span class="panel-label">${escapeHtml(labels.language)}</span>
        <select id="languageSelect" aria-label="Language"></select>
      </label>
    </header>`;
}

function footerHtml(lang = "en") {
  const labels = navLabels(lang);
  const links = ["how-to-play", "rules", "tips", "strategy", "levels", "daily", "queens-puzzle", "cat-sudoku", "variants", "faq"];
  return `<footer class="site-footer">
      <div><img src="/assets/cat-token.png" alt="" class="footer-mark"><strong>Meowdoku Garden</strong><p>Free online Meowdoku, cat sudoku, Meow Doku, and Queens-style logic puzzles.</p></div>
      <nav aria-label="Footer navigation"><a href="/">${escapeHtml(labels.play)}</a>${links.map((slug) => `<a href="${routeFor(slug, lang)}">${escapeHtml(localTopicName(slug, lang))}</a>`).join("")}<a href="${lang === "en" ? "/languages/" : routeFor("", lang)}">${escapeHtml(labels.languages)}</a><a href="/sitemap.xml">Sitemap</a></nav>
    </footer>`;
}

function titleCase(slug) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function localTopicName(slug, lang) {
  return topicNames[slug]?.[lang] || (lang === "en" ? (topics.find((item) => item.slug === slug)?.h1 || titleCase(slug)) : `Meowdoku ${languageLabel(lang)}`);
}

function navLabels(lang) {
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
  return labels[lang] || { play: "Meowdoku", how: "Meowdoku", rules: "Meowdoku", strategy: "Meowdoku", daily: "Meowdoku", languages: languageLabel(lang), language: languageLabel(lang), open: "Meowdoku" };
}

function enrichForLanguage(topic, lang) {
  if (lang === "en") return topic;
  const label = languageLabel(lang);
  const introLine = languages.find(([code]) => code === lang)?.[2] || `Play Meowdoku in ${label}`;
  const pack = localePacks[lang] || fallbackPack(lang);
  const localName = topicNames[topic.slug]?.[lang] || `${topic.h1} - ${label}`;
  return {
    ...topic,
    title: `${localName} - ${pack.titleSuffix}`,
    h1: localName,
    description: `${introLine}. ${pack.summary[0]} ${pack.summary[1]}`,
    summary: pack.summary,
    sections: pack.sections.map(([heading, copy]) => [
      heading.includes("Meowdoku") ? heading : `${heading} - ${localName}`,
      copy.replaceAll("Meowdoku", "Meowdoku")
    ]),
    faqs: pack.faqs,
    keywords: [...topic.keywords, `meowdoku ${label}`, `cat sudoku ${label}`]
  };
}

function uiText(lang) {
  const pack = localePacks[lang] || fallbackPack(lang);
  return {
    play: pack.play || "Play Meowdoku",
    learn: pack.learn || "Learn the rules",
    quick: pack.quick || "Quick Answer",
    signals: pack.signals || "Meowdoku Signals",
    questions: pack.questions || "Questions People Ask About Meowdoku",
    related: pack.related || "Related Meowdoku Guides",
    terms: pack.terms || "Search Terms Covered",
    note: pack.note || "Meowdoku is strongest as a search and GEO topic when pages answer both the exact query and the adjacent intent: rules, strategy, puzzle category, spelling variants, and daily play."
  };
}

function fallbackPack(lang) {
  const label = languageLabel(lang);
  const introLine = languages.find(([code]) => code === lang)?.[2] || `Meowdoku ${label}`;
  return {
    titleSuffix: `Meowdoku ${label}`,
    play: introLine,
    learn: `Meowdoku ${label}`,
    quick: `Meowdoku ${label}`,
    signals: `Meowdoku ${label}`,
    questions: `Meowdoku FAQ`,
    related: `Meowdoku ${label}`,
    terms: `Meowdoku`,
    note: introLine,
    summary: [introLine, `Meowdoku ${label}`, "Meowdoku"],
    sections: [[`Meowdoku ${label}`, introLine], [`Meowdoku`, introLine], [`Meowdoku FAQ`, introLine], [`Meowdoku SEO`, introLine], [`Meowdoku GEO`, introLine]],
    faqs: [[`Meowdoku ${label}?`, introLine], [`Meowdoku?`, introLine], [`Meow Doku?`, introLine]]
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
  const priority = ["how-to-play", "rules", "tips", "strategy", "levels", "daily", "queens-puzzle", "cat-sudoku", "meow-doku", "variants", "faq", "glossary"];
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
    <link rel="canonical" href="${canonical}">
    ${hreflangLinks(topic.slug)}
    <link rel="icon" type="image/png" href="/assets/cat-token.png">
    <link rel="apple-touch-icon" href="/assets/cat-token.png">
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
      <section class="seo-hero">
        <div class="seo-hero-inner">
          <p class="eyebrow">Meowdoku ${escapeHtml(data.intent)}</p>
          <h1>${escapeHtml(data.h1)}</h1>
          <p class="seo-lede">${escapeHtml(data.description)}</p>
          <div class="seo-actions"><a class="seo-button" href="/#play">${escapeHtml(ui.play)}</a><a class="seo-button secondary" href="${routeFor("how-to-play", lang)}">${escapeHtml(ui.learn)}</a></div>
        </div>
      </section>
      <section class="seo-section">
        <div class="content-grid">
          <div>
            <h2>${escapeHtml(ui.quick)}</h2>
            <p>${escapeHtml(data.summary.join(" "))}</p>
            <p>${escapeHtml(ui.note)}</p>
          </div>
          <div class="seo-card">
            <h2>${escapeHtml(ui.signals)}</h2>
            <ul>${data.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>
      <section class="seo-section alt">
        <div class="content-grid three">${sections}</div>
      </section>
      <section class="seo-section">
        <h2>${escapeHtml(ui.questions)}</h2>
        <div class="answer-grid">${faqs}</div>
      </section>
      <section class="seo-section alt">
        <div class="content-grid">
          <div>
            <h2>${escapeHtml(ui.related)}</h2>
            <div class="keyword-cloud">${relatedLinks(topic.slug, lang)}</div>
          </div>
          <div class="seo-card">
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
  </body>
</html>
`;
}

function languageHome(lang) {
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
    summary: [introLine, "All major Meowdoku guides are linked from this language hub.", "Use the header language selector to move between languages."],
    sections: [],
    customSectionsHtml: topicCards,
    faqs: [
      [`Is Meowdoku available for ${label} players?`, "Yes. This language hub connects the game, rules, strategy pages, and SEO entry points."],
      ["Where do I start?", "Open How to Play, then return to the homepage and start Easy mode."],
      ["Does the game detect language automatically?", "Yes. The browser language is used when no saved language preference exists."]
    ]
  };
  return pageShell(topic, lang);
}

function languagesPage() {
  const cards = languages.map(([code, label, heading]) => {
    const pack = localePacks[code] || fallbackPack(code);
    const open = navLabels(code).open || "Open";
    return `<article><h2>${escapeHtml(label)}</h2><p>${escapeHtml(heading)}. ${escapeHtml(pack.note)}</p><a class="text-link" href="${routeFor("", code)}">${escapeHtml(open)} ${escapeHtml(label)}</a></article>`;
  }).join("\n");
  const topic = {
    slug: "languages",
    title: "Meowdoku Languages - Global Cat Sudoku and GEO Entry Pages",
    h1: "Meowdoku Languages",
    description: "Choose a Meowdoku language entry for major world languages and reach localized cat sudoku, rules, tips, and strategy pages.",
    intent: "language SEO",
    keywords: ["meowdoku languages", "global meowdoku", "cat sudoku languages", "multilingual puzzle"],
    summary: ["Meowdoku supports global discovery.", "Every major language has an entry path.", "Language pages help search engines and AI answers map the game."],
    sections: [],
    customSectionsHtml: cards,
    faqs: [
      ["Why does Meowdoku need language pages?", "Language pages help players and search systems discover the right version of the game."],
      ["Are language pages useful for GEO?", "Yes. AI answer engines rely on clear entity-language relationships."],
      ["Can I switch language from any page?", "Yes. The header language selector appears on generated pages and the game homepage."]
    ]
  };
  return pageShell(topic, "en");
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

for (const topic of topics) {
  await writePage(topic.slug, pageShell(topic, "en"));
  for (const [lang] of languages) {
    if (lang === "en") continue;
    await writePage(`${lang}/${topic.slug}`, pageShell(topic, lang));
  }
}

await writePage("languages", languagesPage());
for (const [lang] of languages) {
  if (lang === "en") continue;
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
  for (const topic of topics) urls.add(`${lang}/${topic.slug}`);
}

await fs.writeFile(
  path.join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...urls].map((slug) => `  <url><loc>${siteUrl}/${slug ? `${slug}/` : ""}</loc><changefreq>${slug ? "weekly" : "daily"}</changefreq><priority>${slug ? "0.72" : "1.0"}</priority></url>`).join("\n")}\n</urlset>\n`,
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
console.log(`Built ${urls.size} indexed routes to ${out}`);
