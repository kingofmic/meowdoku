const puzzlePacks = {
  easy: {
    hearts: 3,
    puzzles: [
      {
        title: { en: "Sunbeam Studio", zh: "阳光工作室", ja: "陽だまり工房", ko: "햇살 작업실" },
        size: 6,
        solution: [[0, 1], [1, 4], [2, 2], [3, 0], [4, 5], [5, 3]]
      },
      {
        title: { en: "Moonlit Pantry", zh: "月光餐柜", ja: "月夜のパントリー", ko: "달빛 찬장" },
        size: 6,
        solution: [[0, 4], [1, 0], [2, 2], [3, 5], [4, 1], [5, 3]]
      }
    ]
  },
  normal: {
    hearts: 3,
    puzzles: [
      {
        title: { en: "Window Garden", zh: "窗边花园", ja: "窓辺の庭", ko: "창가 정원" },
        size: 7,
        solution: [[0, 2], [1, 5], [2, 0], [3, 3], [4, 6], [5, 1], [6, 4]]
      },
      {
        title: { en: "Ribbon Courtyard", zh: "缎带庭院", ja: "リボンの中庭", ko: "리본 안뜰" },
        size: 7,
        solution: [[0, 0], [1, 3], [2, 6], [3, 1], [4, 4], [5, 2], [6, 5]]
      }
    ]
  },
  hard: {
    hearts: 3,
    puzzles: [
      {
        title: { en: "Velvet Rooftops", zh: "天鹅绒屋顶", ja: "ベルベットの屋根", ko: "벨벳 지붕" },
        size: 8,
        solution: [[0, 1], [1, 4], [2, 7], [3, 0], [4, 3], [5, 6], [6, 2], [7, 5]]
      },
      {
        title: { en: "Lantern Maze", zh: "灯笼迷宫", ja: "ランタン迷路", ko: "랜턴 미로" },
        size: 8,
        solution: [[0, 2], [1, 5], [2, 0], [3, 7], [4, 3], [5, 6], [6, 1], [7, 4]]
      }
    ]
  }
};

const i18n = {
  en: {
    eyebrow: "logic puzzle",
    todaysPuzzle: "today's puzzle",
    difficulty: "difficulty",
    language: "language",
    catsLeft: "cats left",
    assist: "Assist",
    place: "Place",
    mark: "Mark",
    undo: "Undo",
    hint: "Hint",
    reset: "Reset",
    next: "Next",
    rules: "rules",
    ruleOne: "One cat in every colored room.",
    ruleTwo: "No two cats share a row or column.",
    ruleThree: "Cats cannot touch, even diagonally.",
    board: "board",
    puzzleComplete: "puzzle complete",
    nextPuzzle: "Next puzzle",
    stayHere: "Stay here",
    bestEmpty: "Best --",
    best: "Best {time}",
    roomsCats: "{rooms} rooms, {cats} cats",
    placeMode: "Place mode",
    markMode: "Mark mode",
    statusStart: "Find every cat nap spot.",
    statusMarked: "Marked as impossible.",
    statusUnmarked: "Mark lifted.",
    statusPicked: "Cat picked back up.",
    statusGood: "Good cat. The room feels calmer.",
    statusNoHearts: "No hearts left. Fresh board?",
    statusUndo: "Last move undone.",
    statusHint: "A warm paw print appears.",
    statusSolved: "Solved. Very elegant.",
    violationRow: "This row already has a cat.",
    violationCol: "This column already has a cat.",
    violationRegion: "This colored room already has a cat.",
    violationTouch: "Cats cannot touch, even diagonally.",
    resultTitle: "Perfect little parade.",
    resultCopy: "Solved in {time} with {hearts} heart{plural} left.",
    easy: "Easy",
    normal: "Normal",
    hard: "Hard"
  },
  zh: {
    eyebrow: "逻辑谜题",
    todaysPuzzle: "今日关卡",
    difficulty: "难度",
    language: "语言",
    catsLeft: "剩余猫咪",
    assist: "辅助",
    place: "放猫",
    mark: "标记",
    undo: "撤销",
    hint: "提示",
    reset: "重开",
    next: "下一关",
    rules: "规则",
    ruleOne: "每个彩色房间放一只猫。",
    ruleTwo: "任意两只猫不能同一行或同一列。",
    ruleThree: "猫不能相邻，斜角也不行。",
    board: "棋盘",
    puzzleComplete: "通关完成",
    nextPuzzle: "下一关",
    stayHere: "留在这里",
    bestEmpty: "最佳 --",
    best: "最佳 {time}",
    roomsCats: "{rooms} 个房间，{cats} 只猫",
    placeMode: "放猫模式",
    markMode: "标记模式",
    statusStart: "找到每只猫的午睡位置。",
    statusMarked: "已标记为不可能。",
    statusUnmarked: "标记已取消。",
    statusPicked: "把猫抱回来了。",
    statusGood: "好位置，房间安静下来了。",
    statusNoHearts: "红心用完，重新来一局。",
    statusUndo: "已撤销上一步。",
    statusHint: "一枚温暖的爪印出现了。",
    statusSolved: "通关，优雅。",
    violationRow: "这一行已经有猫了。",
    violationCol: "这一列已经有猫了。",
    violationRegion: "这个彩色房间已经有猫了。",
    violationTouch: "猫不能相邻，斜角也不行。",
    resultTitle: "猫咪巡游，完美收工。",
    resultCopy: "用时 {time}，剩余 {hearts} 颗红心。",
    easy: "简单",
    normal: "普通",
    hard: "困难"
  },
  ja: {
    eyebrow: "ロジックパズル",
    todaysPuzzle: "今日のパズル",
    difficulty: "難易度",
    language: "言語",
    catsLeft: "残りの猫",
    assist: "補助",
    place: "置く",
    mark: "マーク",
    undo: "戻す",
    hint: "ヒント",
    reset: "リセット",
    next: "次へ",
    rules: "ルール",
    ruleOne: "各色の部屋に猫を1匹置きます。",
    ruleTwo: "同じ行または列に2匹置けません。",
    ruleThree: "猫は斜めも含めて隣接できません。",
    board: "盤面",
    puzzleComplete: "クリア",
    nextPuzzle: "次のパズル",
    stayHere: "このまま",
    bestEmpty: "ベスト --",
    best: "ベスト {time}",
    roomsCats: "{rooms} 部屋、猫 {cats} 匹",
    placeMode: "配置モード",
    markMode: "マークモード",
    statusStart: "猫のお昼寝スポットを探しましょう。",
    statusMarked: "置けない場所としてマークしました。",
    statusUnmarked: "マークを外しました。",
    statusPicked: "猫を戻しました。",
    statusGood: "いい場所です。部屋が落ち着きました。",
    statusNoHearts: "ハートがなくなりました。やり直しましょう。",
    statusUndo: "1手戻しました。",
    statusHint: "あたたかい足跡が見えます。",
    statusSolved: "クリア。とてもエレガント。",
    violationRow: "この行にはすでに猫がいます。",
    violationCol: "この列にはすでに猫がいます。",
    violationRegion: "この色の部屋にはすでに猫がいます。",
    violationTouch: "猫は斜めも含めて隣接できません。",
    resultTitle: "完璧な猫パレード。",
    resultCopy: "{time} でクリア。ハート残り {hearts}。",
    easy: "かんたん",
    normal: "ふつう",
    hard: "むずかしい"
  },
  ko: {
    eyebrow: "논리 퍼즐",
    todaysPuzzle: "오늘의 퍼즐",
    difficulty: "난이도",
    language: "언어",
    catsLeft: "남은 고양이",
    assist: "도움",
    place: "놓기",
    mark: "표시",
    undo: "되돌리기",
    hint: "힌트",
    reset: "다시",
    next: "다음",
    rules: "규칙",
    ruleOne: "각 색깔 방에는 고양이 한 마리만 놓습니다.",
    ruleTwo: "같은 행이나 열에는 두 마리를 놓을 수 없습니다.",
    ruleThree: "고양이는 대각선을 포함해 서로 닿을 수 없습니다.",
    board: "보드",
    puzzleComplete: "퍼즐 완료",
    nextPuzzle: "다음 퍼즐",
    stayHere: "여기 있기",
    bestEmpty: "최고 --",
    best: "최고 {time}",
    roomsCats: "{rooms}개 방, 고양이 {cats}마리",
    placeMode: "놓기 모드",
    markMode: "표시 모드",
    statusStart: "고양이들의 낮잠 자리를 찾아 주세요.",
    statusMarked: "불가능한 칸으로 표시했습니다.",
    statusUnmarked: "표시를 지웠습니다.",
    statusPicked: "고양이를 다시 데려왔습니다.",
    statusGood: "좋은 자리예요. 방이 차분해졌습니다.",
    statusNoHearts: "하트가 모두 사라졌어요. 새로 시작합니다.",
    statusUndo: "마지막 수를 되돌렸습니다.",
    statusHint: "따뜻한 발자국이 나타났습니다.",
    statusSolved: "해결 완료. 아주 우아해요.",
    violationRow: "이 행에는 이미 고양이가 있습니다.",
    violationCol: "이 열에는 이미 고양이가 있습니다.",
    violationRegion: "이 색깔 방에는 이미 고양이가 있습니다.",
    violationTouch: "고양이는 대각선을 포함해 서로 닿을 수 없습니다.",
    resultTitle: "완벽한 고양이 퍼레이드.",
    resultCopy: "{time} 만에 해결. 남은 하트 {hearts}개.",
    easy: "쉬움",
    normal: "보통",
    hard: "어려움"
  }
};

const palette = ["#ffd6b8", "#f7c9d4", "#c9e8df", "#f7e39a", "#c7d9ff", "#d9c8f7", "#bfe3a7", "#f0c2a8"];
const board = document.querySelector("#board");
const levelTitle = document.querySelector("#levelTitle");
const levelMeta = document.querySelector("#levelMeta");
const statusText = document.querySelector("#statusText");
const mistakesEl = document.querySelector("#mistakes");
const timerEl = document.querySelector("#timer");
const bestTimeEl = document.querySelector("#bestTime");
const progressBar = document.querySelector("#progressBar");
const modeBadge = document.querySelector("#modeBadge");
const resultModal = document.querySelector("#resultModal");
const resultTitle = document.querySelector("#resultTitle");
const resultCopy = document.querySelector("#resultCopy");
const difficultyTabs = document.querySelector("#difficultyTabs");
const languageSelect = document.querySelector("#languageSelect");
const celebrationLayer = document.querySelector("#celebrationLayer");
const catCounter = document.querySelector("#catCounter");

let difficulty = localStorage.getItem("meowdoku-difficulty") || "normal";
let lang = localStorage.getItem("meowdoku-language") || "en";
let puzzleIndex = 0;
let mode = "place";
let assistMode = localStorage.getItem("meowdoku-assist") === "on";
let cells = new Map();
let history = [];
let mistakes = currentPack().hearts;
let startedAt = Date.now();
let timer = 0;
let hintCell = null;
let errorCell = null;
let audioContext = null;
let statusKey = "statusStart";
let statusValue = "";

function t(keyName, params = {}) {
  let text = (i18n[lang] || i18n.en)[keyName] || i18n.en[keyName] || keyName;
  for (const [key, value] of Object.entries(params)) {
    text = text.replaceAll(`{${key}}`, value);
  }
  return text;
}

function key(row, col) {
  return `${row},${col}`;
}

function currentPack() {
  return puzzlePacks[difficulty] || puzzlePacks.normal;
}

function currentPuzzle() {
  const pack = currentPack();
  const puzzle = pack.puzzles[puzzleIndex % pack.puzzles.length];
  puzzle.regions ||= buildRegions(puzzle);
  return puzzle;
}

function buildRegions(puzzle) {
  const bias = [
    [0.04, -0.12, 0.08, -0.02, 0.1, -0.08, 0.02, -0.04],
    [-0.06, 0.09, -0.03, 0.07, -0.1, 0.05, -0.01, 0.08],
    [0.08, -0.05, 0.03, -0.11, 0.06, -0.04, 0.09, -0.02],
    [-0.03, 0.06, -0.09, 0.04, -0.02, 0.1, -0.07, 0.05],
    [0.1, -0.02, 0.05, -0.08, 0.03, -0.12, 0.06, -0.01],
    [-0.09, 0.03, -0.06, 0.11, -0.04, 0.07, -0.01, 0.06],
    [0.02, -0.1, 0.07, -0.04, 0.09, -0.03, 0.05, -0.08],
    [-0.04, 0.05, -0.12, 0.02, -0.07, 0.08, -0.01, 0.06]
  ];

  return Array.from({ length: puzzle.size }, (_, row) =>
    Array.from({ length: puzzle.size }, (_, col) => {
      let bestRegion = 0;
      let bestScore = Infinity;
      puzzle.solution.forEach(([sr, sc], region) => {
        const score = Math.abs(sr - row) + Math.abs(sc - col) + bias[row % 8][(col + region) % 8];
        if (score < bestScore) {
          bestScore = score;
          bestRegion = region;
        }
      });
      return bestRegion;
    })
  );
}

function placedCats(exceptKey = null) {
  const cats = [];
  for (const [cellKey, value] of cells.entries()) {
    if (value !== "cat" || cellKey === exceptKey) continue;
    const [row, col] = cellKey.split(",").map(Number);
    cats.push({ row, col, key: cellKey, region: currentPuzzle().regions[row][col] });
  }
  return cats;
}

function placementViolation(row, col) {
  const puzzle = currentPuzzle();
  const cellKey = key(row, col);
  const region = puzzle.regions[row][col];

  for (const cat of placedCats(cellKey)) {
    if (cat.row === row) return t("violationRow");
    if (cat.col === col) return t("violationCol");
    if (cat.region === region) return t("violationRegion");
    if (Math.abs(cat.row - row) <= 1 && Math.abs(cat.col - col) <= 1) return t("violationTouch");
  }

  return "";
}

function isAssistMark(row, col) {
  if (!assistMode || stateAt(row, col) !== "empty") return false;
  return placedCats().some((cat) => Math.abs(cat.row - row) <= 1 && Math.abs(cat.col - col) <= 1);
}

function stateAt(row, col) {
  return cells.get(key(row, col)) || "empty";
}

function setState(row, col, state) {
  cells.set(key(row, col), state);
}

function setStatus(keyName, params = {}) {
  statusKey = keyName;
  statusValue = t(keyName, params);
  statusText.textContent = statusValue;
}

function formatTime(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function bestKey() {
  return `meowdoku-best-${difficulty}-${currentPuzzle().title.en}`;
}

function playTone(type) {
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const tones = {
    place: [440, 660, 0.08],
    mark: [270, 320, 0.05],
    error: [130, 95, 0.12],
    win: [523, 784, 0.22],
    hint: [700, 940, 0.1]
  }[type];

  osc.frequency.setValueAtTime(tones[0], now);
  osc.frequency.exponentialRampToValueAtTime(tones[1], now + tones[2]);
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.07, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.001, now + tones[2] + 0.05);
  osc.connect(gain).connect(audioContext.destination);
  osc.start(now);
  osc.stop(now + tones[2] + 0.06);
}

function renderHearts() {
  mistakesEl.innerHTML = "";
  mistakesEl.setAttribute("aria-label", `${mistakes} / ${currentPack().hearts}`);
  for (let i = 0; i < currentPack().hearts; i += 1) {
    const heart = document.createElement("span");
    heart.className = `heart ${i >= mistakes ? "empty" : ""}`;
    mistakesEl.appendChild(heart);
  }
}

function renderCatCounter(placed, total) {
  catCounter.innerHTML = "";
  catCounter.style.gridTemplateColumns = `repeat(${Math.min(total, 5)}, 34px)`;
  for (let i = 0; i < total; i += 1) {
    const slot = document.createElement("span");
    slot.className = `cat-slot ${i < placed ? "used" : ""}`;
    catCounter.appendChild(slot);
  }
}

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  difficultyTabs.querySelectorAll("button").forEach((button) => {
    button.textContent = t(button.dataset.difficulty);
    button.classList.toggle("active", button.dataset.difficulty === difficulty);
  });
  languageSelect.value = lang;
  statusText.textContent = statusValue || t(statusKey);
  resultTitle.textContent = t("resultTitle");
}

function render() {
  const puzzle = currentPuzzle();
  const placed = [...cells.values()].filter((value) => value === "cat").length;
  const total = puzzle.solution.length;
  const best = localStorage.getItem(bestKey());

  applyLanguage();
  levelTitle.textContent = puzzle.title[lang] || puzzle.title.en;
  levelMeta.textContent = t("roomsCats", { rooms: total, cats: total });
  renderHearts();
  renderCatCounter(placed, total);
  bestTimeEl.textContent = best ? t("best", { time: formatTime(Number(best)) }) : t("bestEmpty");
  progressBar.style.width = `${Math.round((placed / total) * 100)}%`;
  modeBadge.textContent = mode === "place" ? t("placeMode") : t("markMode");
  document.querySelector("#placeMode").classList.toggle("active", mode === "place");
  document.querySelector("#markMode").classList.toggle("active", mode === "mark");
  document.querySelector("#assistMode").classList.toggle("active", assistMode);

  board.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;
  board.innerHTML = "";

  for (let row = 0; row < puzzle.size; row += 1) {
    for (let col = 0; col < puzzle.size; col += 1) {
      const cell = document.createElement("button");
      const state = stateAt(row, col);
      const region = puzzle.regions[row][col];
      cell.className = `cell ${state === "cat" ? "cat" : ""} ${state === "mark" ? "marked" : ""}`;
      if (isAssistMark(row, col)) cell.classList.add("assist-mark");
      if (hintCell === key(row, col)) cell.classList.add("hint");
      if (errorCell === key(row, col)) cell.classList.add("error");
      cell.type = "button";
      cell.role = "gridcell";
      cell.ariaLabel = `row ${row + 1}, column ${col + 1}, room ${region + 1}`;
      cell.style.setProperty("--room-color", palette[region % palette.length]);
      cell.addEventListener("click", () => handleCell(row, col));
      cell.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        markCell(row, col);
      });

      let pressTimer = 0;
      cell.addEventListener("touchstart", () => {
        pressTimer = window.setTimeout(() => markCell(row, col), 420);
      }, { passive: true });
      cell.addEventListener("touchend", () => window.clearTimeout(pressTimer));
      board.appendChild(cell);
    }
  }
}

function handleCell(row, col) {
  if (mode === "mark") {
    markCell(row, col);
    return;
  }
  placeCat(row, col);
}

function markCell(row, col) {
  hintCell = null;
  errorCell = null;
  const before = stateAt(row, col);
  if (before === "cat") return;
  history.push(new Map(cells));
  setState(row, col, before === "mark" ? "empty" : "mark");
  setStatus(before === "mark" ? "statusUnmarked" : "statusMarked");
  playTone("mark");
  render();
}

function placeCat(row, col) {
  hintCell = null;
  errorCell = null;
  const before = stateAt(row, col);
  if (before === "cat") {
    history.push(new Map(cells));
    setState(row, col, "empty");
    setStatus("statusPicked");
    playTone("mark");
    render();
    return;
  }

  const violation = placementViolation(row, col);
  if (violation) {
    mistakes -= 1;
    statusValue = mistakes > 0 ? violation : t("statusNoHearts");
    statusText.textContent = statusValue;
    errorCell = key(row, col);
    playTone("error");
    render();
    window.setTimeout(() => {
      errorCell = null;
      render();
    }, 320);
    if (mistakes <= 0) window.setTimeout(resetPuzzle, 520);
    return;
  }

  history.push(new Map(cells));
  setState(row, col, "cat");
  setStatus("statusGood");
  playTone("place");
  render();
  checkWin();
}

function checkWin() {
  const puzzle = currentPuzzle();
  const cats = placedCats();
  if (cats.length !== puzzle.solution.length) return;

  const rooms = new Set(cats.map((cat) => cat.region));
  if (rooms.size !== puzzle.solution.length) return;
  if (cats.some((cat) => placementViolation(cat.row, cat.col))) return;

  const elapsed = Date.now() - startedAt;
  const best = Number(localStorage.getItem(bestKey()) || 0);
  if (!best || elapsed < best) localStorage.setItem(bestKey(), String(elapsed));
  resultTitle.textContent = t("resultTitle");
  resultCopy.textContent = t("resultCopy", {
    time: formatTime(elapsed),
    hearts: mistakes,
    plural: mistakes === 1 ? "" : "s"
  });
  playTone("win");
  launchCelebration();
  resultModal.classList.remove("hidden");
  setStatus("statusSolved");
  render();
}

function launchCelebration() {
  board.classList.remove("celebrate");
  void board.offsetWidth;
  board.classList.add("celebrate");
  celebrationLayer.innerHTML = "";
  const colors = ["#e86f51", "#157f83", "#e7b84d", "#f7c9d4", "#c7d9ff", "#ffffff"];

  for (let i = 0; i < 90; i += 1) {
    const spark = document.createElement("span");
    spark.className = `spark ${i % 18 === 0 ? "cat-spark" : ""}`;
    spark.style.setProperty("--x", `${Math.random() * 100}%`);
    spark.style.setProperty("--r", `${Math.random() * 180}deg`);
    spark.style.setProperty("--d", `${1.9 + Math.random() * 1.4}s`);
    spark.style.setProperty("--drift", `${-120 + Math.random() * 240}px`);
    spark.style.setProperty("--turns", `${360 + Math.random() * 540}`);
    spark.style.setProperty("--spark-color", colors[i % colors.length]);
    celebrationLayer.appendChild(spark);
  }

  window.setTimeout(() => {
    celebrationLayer.innerHTML = "";
    board.classList.remove("celebrate");
  }, 3600);
}

function resetPuzzle() {
  cells = new Map();
  history = [];
  mistakes = currentPack().hearts;
  hintCell = null;
  errorCell = null;
  startedAt = Date.now();
  statusValue = "";
  statusKey = "statusStart";
  resultModal.classList.add("hidden");
  render();
}

function nextPuzzle() {
  puzzleIndex = (puzzleIndex + 1) % currentPack().puzzles.length;
  resetPuzzle();
}

function giveHint() {
  const target = currentPuzzle().solution.find(([row, col]) => stateAt(row, col) !== "cat");
  if (!target) return;
  hintCell = key(target[0], target[1]);
  setStatus("statusHint");
  playTone("hint");
  render();
}

document.querySelector("#placeMode").addEventListener("click", () => {
  mode = "place";
  render();
});
document.querySelector("#markMode").addEventListener("click", () => {
  mode = "mark";
  render();
});
document.querySelector("#assistMode").addEventListener("click", () => {
  assistMode = !assistMode;
  localStorage.setItem("meowdoku-assist", assistMode ? "on" : "off");
  render();
});
document.querySelector("#undoBtn").addEventListener("click", () => {
  const snapshot = history.pop();
  if (!snapshot) return;
  cells = new Map(snapshot);
  hintCell = null;
  errorCell = null;
  setStatus("statusUndo");
  render();
});
document.querySelector("#hintBtn").addEventListener("click", giveHint);
document.querySelector("#resetBtn").addEventListener("click", resetPuzzle);
document.querySelector("#nextBtn").addEventListener("click", nextPuzzle);
document.querySelector("#modalNext").addEventListener("click", nextPuzzle);
document.querySelector("#modalClose").addEventListener("click", () => resultModal.classList.add("hidden"));
difficultyTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-difficulty]");
  if (!button || button.dataset.difficulty === difficulty) return;
  difficulty = button.dataset.difficulty;
  localStorage.setItem("meowdoku-difficulty", difficulty);
  puzzleIndex = 0;
  resetPuzzle();
});
languageSelect.addEventListener("change", () => {
  lang = languageSelect.value;
  localStorage.setItem("meowdoku-language", lang);
  statusValue = "";
  render();
});

window.setInterval(() => {
  timer = Date.now() - startedAt;
  timerEl.textContent = formatTime(timer);
}, 250);

resetPuzzle();
