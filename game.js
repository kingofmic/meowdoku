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
    defaultMode: "Default mode",
    assistMode: "Assist mode",
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
    defaultMode: "默认模式",
    assistMode: "辅助模式",
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
    defaultMode: "通常モード",
    assistMode: "補助モード",
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
    defaultMode: "기본 모드",
    assistMode: "도움 모드",
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

i18n["zh-Hant"] = {
  ...i18n.zh,
  todaysPuzzle: "今日關卡",
  language: "語言",
  catsLeft: "剩餘貓咪",
  defaultMode: "預設模式",
  assistMode: "輔助模式",
  undo: "復原",
  reset: "重開",
  next: "下一關",
  ruleOne: "每個彩色房間放一隻貓。",
  ruleTwo: "任意兩隻貓不能在同一行或同一列。",
  ruleThree: "貓不能相鄰，斜角也不行。",
  roomsCats: "{rooms} 個房間，{cats} 隻貓",
  statusMarked: "已標記為不可能。",
  statusUnmarked: "標記已取消。",
  statusPicked: "把貓抱回來了。",
  statusNoHearts: "紅心用完，重新來一局。",
  statusUndo: "已復原上一步。",
  resultCopy: "用時 {time}，剩餘 {hearts} 顆紅心。",
  normal: "普通"
};

const languageCatalog = [
  ["ar", "العربية"],
  ["bn", "বাংলা"],
  ["zh", "简体中文"],
  ["zh-Hant", "繁體中文"],
  ["cs", "Čeština"],
  ["nl", "Nederlands"],
  ["en", "English"],
  ["fil", "Filipino"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["el", "Ελληνικά"],
  ["gu", "ગુજરાતી"],
  ["ha", "Hausa"],
  ["he", "עברית"],
  ["hi", "हिन्दी"],
  ["hu", "Magyar"],
  ["id", "Bahasa Indonesia"],
  ["it", "Italiano"],
  ["ja", "日本語"],
  ["jv", "Basa Jawa"],
  ["ko", "한국어"],
  ["ms", "Bahasa Melayu"],
  ["mr", "मराठी"],
  ["pa", "ਪੰਜਾਬੀ"],
  ["fa", "فارسی"],
  ["pl", "Polski"],
  ["pt", "Português"],
  ["ro", "Română"],
  ["ru", "Русский"],
  ["es", "Español"],
  ["sw", "Kiswahili"],
  ["sv", "Svenska"],
  ["ta", "தமிழ்"],
  ["te", "తెలుగు"],
  ["th", "ไทย"],
  ["tr", "Türkçe"],
  ["uk", "Українська"],
  ["ur", "اردو"],
  ["vi", "Tiếng Việt"]
];

const shortUiTranslations = {
  hi: { language: "भाषा", catsLeft: "बिल्लियाँ", place: "बिल्ली", mark: "चिह्न", assist: "सहायता", defaultMode: "सामान्य", assistMode: "सहायता", easy: "आसान", normal: "सामान्य", hard: "कठिन" },
  es: { language: "idioma", catsLeft: "gatos", place: "Gato", mark: "Marca", assist: "Ayuda", defaultMode: "Normal", assistMode: "Ayuda", easy: "Fácil", normal: "Normal", hard: "Difícil" },
  fr: { language: "langue", catsLeft: "chats", place: "Chat", mark: "Marquer", assist: "Aide", defaultMode: "Normal", assistMode: "Aide", easy: "Facile", normal: "Normal", hard: "Difficile" },
  ar: { language: "اللغة", catsLeft: "القطط", place: "قط", mark: "علامة", assist: "مساعدة", defaultMode: "عادي", assistMode: "مساعدة", easy: "سهل", normal: "عادي", hard: "صعب" },
  bn: { language: "ভাষা", catsLeft: "বিড়াল", place: "বিড়াল", mark: "চিহ্ন", assist: "সহায়তা", defaultMode: "স্বাভাবিক", assistMode: "সহায়তা", easy: "সহজ", normal: "সাধারণ", hard: "কঠিন" },
  pt: { language: "idioma", catsLeft: "gatos", place: "Gato", mark: "Marca", assist: "Ajuda", defaultMode: "Normal", assistMode: "Ajuda", easy: "Fácil", normal: "Normal", hard: "Difícil" },
  ru: { language: "язык", catsLeft: "коты", place: "Кот", mark: "Метка", assist: "Помощь", defaultMode: "Обычный", assistMode: "Помощь", easy: "Легко", normal: "Норма", hard: "Сложно" },
  ur: { language: "زبان", catsLeft: "بلیاں", place: "بلی", mark: "نشان", assist: "مدد", defaultMode: "عام", assistMode: "مدد", easy: "آسان", normal: "عام", hard: "مشکل" },
  id: { language: "bahasa", catsLeft: "kucing", place: "Kucing", mark: "Tanda", assist: "Bantu", defaultMode: "Normal", assistMode: "Bantu", easy: "Mudah", normal: "Normal", hard: "Sulit" },
  de: { language: "sprache", catsLeft: "katzen", place: "Katze", mark: "Marke", assist: "Hilfe", defaultMode: "Normal", assistMode: "Hilfe", easy: "Leicht", normal: "Normal", hard: "Schwer" },
  tr: { language: "dil", catsLeft: "kediler", place: "Kedi", mark: "İşaret", assist: "Yardım", defaultMode: "Normal", assistMode: "Yardım", easy: "Kolay", normal: "Normal", hard: "Zor" },
  vi: { language: "ngôn ngữ", catsLeft: "mèo", place: "Mèo", mark: "Đánh dấu", assist: "Trợ giúp", defaultMode: "Thường", assistMode: "Trợ giúp", easy: "Dễ", normal: "Vừa", hard: "Khó" },
  it: { language: "lingua", catsLeft: "gatti", place: "Gatto", mark: "Segna", assist: "Aiuto", defaultMode: "Normale", assistMode: "Aiuto", easy: "Facile", normal: "Normale", hard: "Difficile" },
  th: { language: "ภาษา", catsLeft: "แมว", place: "แมว", mark: "ทำเครื่องหมาย", assist: "ช่วย", defaultMode: "ปกติ", assistMode: "ช่วย", easy: "ง่าย", normal: "ปกติ", hard: "ยาก" },
  pl: { language: "język", catsLeft: "koty", place: "Kot", mark: "Znacznik", assist: "Pomoc", defaultMode: "Normalny", assistMode: "Pomoc", easy: "Łatwy", normal: "Normalny", hard: "Trudny" },
  uk: { language: "мова", catsLeft: "коти", place: "Кіт", mark: "Мітка", assist: "Допомога", defaultMode: "Звичайний", assistMode: "Допомога", easy: "Легко", normal: "Норма", hard: "Важко" },
  nl: { language: "taal", catsLeft: "katten", place: "Kat", mark: "Markeer", assist: "Hulp", defaultMode: "Normaal", assistMode: "Hulp", easy: "Makkelijk", normal: "Normaal", hard: "Moeilijk" }
};

function makeGameUi(values) {
  const [
    eyebrow, todaysPuzzle, difficulty, language, catsLeft, defaultMode, assistMode, place, mark, undo, hint, reset, next,
    rules, ruleOne, ruleTwo, ruleThree, board, puzzleComplete, nextPuzzle, stayHere, bestEmpty, bestLabel,
    roomsWord, catsWord, statusStart, statusMarked, statusUnmarked, statusPicked, statusGood, statusNoHearts,
    statusUndo, statusHint, statusSolved, rowViolation, colViolation, regionViolation, touchViolation,
    resultTitle, resultCopy, easy, normal, hard
  ] = values;
  return {
    eyebrow, todaysPuzzle, difficulty, language, catsLeft, assist: assistMode, defaultMode, assistMode, place, mark,
    undo, hint, reset, next, rules, ruleOne, ruleTwo, ruleThree, board, puzzleComplete, nextPuzzle, stayHere,
    bestEmpty, best: `${bestLabel} {time}`, roomsCats: `{rooms} ${roomsWord}, {cats} ${catsWord}`,
    placeMode: place, markMode: mark, statusStart, statusMarked, statusUnmarked, statusPicked, statusGood,
    statusNoHearts, statusUndo, statusHint, statusSolved, violationRow: rowViolation, violationCol: colViolation,
    violationRegion: regionViolation, violationTouch: touchViolation, resultTitle, resultCopy, easy, normal, hard
  };
}

const completeUiTranslations = {
  ar: makeGameUi(["لغز منطقي", "لغز اليوم", "الصعوبة", "اللغة", "قطط متبقية", "الوضع العادي", "وضع المساعدة", "ضع قطة", "علّم", "تراجع", "تلميح", "إعادة", "التالي", "القواعد", "قطة واحدة في كل منطقة ملوّنة.", "لا تتشارك قطتان صفا أو عمودا.", "لا تلمس القطط بعضها، حتى قطريا.", "اللوحة", "اكتمل اللغز", "اللغز التالي", "ابق هنا", "الأفضل --", "الأفضل", "مناطق", "قطط", "اعثر على مكان كل قطة.", "تم وضع علامة كمستحيل.", "أزيلت العلامة.", "تم رفع القطة.", "موضع جيد.", "انتهت القلوب. لنبدأ من جديد.", "تم التراجع عن آخر حركة.", "ظهر تلميح صغير.", "تم الحل.", "هذا الصف فيه قطة بالفعل.", "هذا العمود فيه قطة بالفعل.", "هذه المنطقة فيها قطة بالفعل.", "لا يمكن للقطط أن تلمس بعضها.", "موكب قطط مثالي.", "تم الحل خلال {time} مع {hearts} قلوب متبقية.", "سهل", "عادي", "صعب"]),
  bn: makeGameUi(["যুক্তির ধাঁধা", "আজকের ধাঁধা", "কঠিনতা", "ভাষা", "বাকি বিড়াল", "স্বাভাবিক মোড", "সহায়ক মোড", "বিড়াল বসান", "চিহ্ন দিন", "পূর্বাবস্থা", "ইঙ্গিত", "রিসেট", "পরেরটি", "নিয়ম", "প্রতিটি রঙিন ঘরে একটি বিড়াল।", "দুটি বিড়াল একই সারি বা কলামে নয়।", "বিড়াল পাশাপাশিও নয়, তির্যকভাবেও নয়।", "বোর্ড", "ধাঁধা শেষ", "পরের ধাঁধা", "এখানেই থাকুন", "সেরা --", "সেরা", "ঘর", "বিড়াল", "প্রতিটি বিড়ালের জায়গা খুঁজুন।", "অসম্ভব হিসেবে চিহ্নিত।", "চিহ্ন সরানো হয়েছে।", "বিড়াল তুলে নেওয়া হয়েছে।", "ভালো জায়গা।", "হৃদয় শেষ। নতুন বোর্ড শুরু।", "শেষ চাল ফিরিয়ে নেওয়া হয়েছে।", "একটি ইঙ্গিত দেখা গেল।", "সমাধান হয়েছে।", "এই সারিতে আগে থেকেই বিড়াল আছে।", "এই কলামে আগে থেকেই বিড়াল আছে।", "এই রঙিন ঘরে আগে থেকেই বিড়াল আছে।", "বিড়ালরা স্পর্শ করতে পারে না।", "দারুণ বিড়াল প্যারেড।", "{time} সময়ে সমাধান, {hearts} হৃদয় বাকি।", "সহজ", "সাধারণ", "কঠিন"]),
  cs: makeGameUi(["logická hádanka", "dnešní hádanka", "obtížnost", "jazyk", "zbývá koček", "běžný režim", "režim nápovědy", "Položit kočku", "Označit", "Zpět", "Nápověda", "Restart", "Další", "pravidla", "V každé barevné oblasti je jedna kočka.", "Dvě kočky nesmí sdílet řádek ani sloupec.", "Kočky se nesmí dotýkat ani diagonálně.", "deska", "hádanka dokončena", "Další hádanka", "Zůstat zde", "Nejlepší --", "Nejlepší", "oblastí", "koček", "Najděte místo pro každou kočku.", "Označeno jako nemožné.", "Značka zrušena.", "Kočka byla zvednuta.", "Dobré místo.", "Srdce došla. Nový pokus.", "Poslední tah vrácen.", "Objevila se nápověda.", "Vyřešeno.", "Tento řádek už má kočku.", "Tento sloupec už má kočku.", "Tato oblast už má kočku.", "Kočky se nesmí dotýkat.", "Dokonalý kočičí průvod.", "Vyřešeno za {time}, zbývá {hearts} srdcí.", "Lehké", "Normální", "Těžké"]),
  de: makeGameUi(["Logikrätsel", "heutiges Rätsel", "Schwierigkeit", "Sprache", "Katzen übrig", "Normalmodus", "Hilfemodus", "Katze setzen", "Markieren", "Rückgängig", "Hinweis", "Neu starten", "Weiter", "Regeln", "Eine Katze in jedem farbigen Raum.", "Keine zwei Katzen teilen Reihe oder Spalte.", "Katzen dürfen sich auch diagonal nicht berühren.", "Brett", "Rätsel gelöst", "Nächstes Rätsel", "Hier bleiben", "Bestzeit --", "Bestzeit", "Räume", "Katzen", "Finde jeden Katzenplatz.", "Als unmöglich markiert.", "Markierung entfernt.", "Katze wieder aufgenommen.", "Guter Platz.", "Keine Herzen mehr. Neuer Versuch.", "Letzter Zug rückgängig.", "Ein Hinweis erscheint.", "Gelöst.", "Diese Reihe hat schon eine Katze.", "Diese Spalte hat schon eine Katze.", "Dieser farbige Raum hat schon eine Katze.", "Katzen dürfen sich nicht berühren.", "Perfekte kleine Katzenparade.", "Gelöst in {time} mit {hearts} Herzen übrig.", "Leicht", "Normal", "Schwer"]),
  el: makeGameUi(["λογικός γρίφος", "σημερινός γρίφος", "δυσκολία", "γλώσσα", "γάτες ακόμη", "κανονική λειτουργία", "λειτουργία βοήθειας", "Βάλε γάτα", "Σημείωση", "Αναίρεση", "Υπόδειξη", "Επανεκκίνηση", "Επόμενο", "κανόνες", "Μία γάτα σε κάθε χρωματιστή περιοχή.", "Καμία γάτα στην ίδια σειρά ή στήλη.", "Οι γάτες δεν αγγίζονται ούτε διαγώνια.", "πίνακας", "ο γρίφος ολοκληρώθηκε", "Επόμενος γρίφος", "Μείνε εδώ", "Καλύτερο --", "Καλύτερο", "περιοχές", "γάτες", "Βρες τη θέση κάθε γάτας.", "Σημειώθηκε ως αδύνατο.", "Η σημείωση αφαιρέθηκε.", "Η γάτα σηκώθηκε.", "Καλή θέση.", "Τέλος οι καρδιές. Νέα προσπάθεια.", "Η τελευταία κίνηση αναιρέθηκε.", "Εμφανίστηκε υπόδειξη.", "Λύθηκε.", "Αυτή η σειρά έχει ήδη γάτα.", "Αυτή η στήλη έχει ήδη γάτα.", "Αυτή η περιοχή έχει ήδη γάτα.", "Οι γάτες δεν μπορούν να αγγίζονται.", "Τέλεια παρέλαση γατών.", "Λύθηκε σε {time} με {hearts} καρδιές.", "Εύκολο", "Κανονικό", "Δύσκολο"]),
  es: makeGameUi(["puzle lógico", "puzle de hoy", "dificultad", "idioma", "gatos restantes", "modo normal", "modo ayuda", "Poner gato", "Marcar", "Deshacer", "Pista", "Reiniciar", "Siguiente", "reglas", "Un gato en cada región de color.", "Dos gatos no comparten fila ni columna.", "Los gatos no pueden tocarse, ni en diagonal.", "tablero", "puzle completado", "Siguiente puzle", "Quedarse aquí", "Mejor --", "Mejor", "regiones", "gatos", "Encuentra el sitio de cada gato.", "Marcado como imposible.", "Marca quitada.", "Gato retirado.", "Buen lugar.", "Sin corazones. Nuevo intento.", "Último movimiento deshecho.", "Aparece una pista.", "Resuelto.", "Esta fila ya tiene un gato.", "Esta columna ya tiene un gato.", "Esta región ya tiene un gato.", "Los gatos no pueden tocarse.", "Desfile perfecto de gatos.", "Resuelto en {time} con {hearts} corazones.", "Fácil", "Normal", "Difícil"]),
  fa: makeGameUi(["معمای منطقی", "معمای امروز", "سختی", "زبان", "گربه‌های باقی‌مانده", "حالت عادی", "حالت کمک", "گربه بگذار", "علامت بزن", "واگرد", "راهنمایی", "شروع دوباره", "بعدی", "قوانین", "در هر ناحیه رنگی یک گربه بگذارید.", "دو گربه نباید در یک ردیف یا ستون باشند.", "گربه‌ها حتی قطری هم نباید لمس شوند.", "صفحه", "معما کامل شد", "معمای بعدی", "همین‌جا بمان", "بهترین --", "بهترین", "ناحیه", "گربه", "جای هر گربه را پیدا کنید.", "به‌عنوان ناممکن علامت خورد.", "علامت برداشته شد.", "گربه برداشته شد.", "جای خوبی است.", "قلب‌ها تمام شد. دوباره شروع کنید.", "حرکت آخر برگشت.", "یک راهنمایی ظاهر شد.", "حل شد.", "این ردیف قبلا گربه دارد.", "این ستون قبلا گربه دارد.", "این ناحیه قبلا گربه دارد.", "گربه‌ها نباید همدیگر را لمس کنند.", "رژه کامل گربه‌ها.", "در {time} با {hearts} قلب باقی‌مانده حل شد.", "آسان", "معمولی", "سخت"]),
  fil: makeGameUi(["logic puzzle", "puzzle ngayon", "hirap", "wika", "natitirang pusa", "normal mode", "assist mode", "Ilagay ang pusa", "Markahan", "I-undo", "Hint", "I-reset", "Susunod", "mga tuntunin", "Isang pusa sa bawat may kulay na silid.", "Walang dalawang pusa sa parehong hilera o kolum.", "Hindi maaaring magdikit ang mga pusa, kahit pahilis.", "board", "tapos ang puzzle", "Susunod na puzzle", "Manatili dito", "Best --", "Best", "silid", "pusa", "Hanapin ang puwesto ng bawat pusa.", "Minarkahan bilang imposible.", "Tinanggal ang marka.", "Inalis ang pusa.", "Magandang puwesto.", "Ubos na ang puso. Simula muli.", "Na-undo ang huling galaw.", "May lumitaw na hint.", "Nalutas.", "May pusa na sa hilera na ito.", "May pusa na sa kolum na ito.", "May pusa na sa silid na ito.", "Hindi maaaring magdikit ang mga pusa.", "Perpektong parada ng pusa.", "Nalutas sa {time} na may {hearts} puso.", "Madali", "Normal", "Mahirap"]),
  fr: makeGameUi(["puzzle logique", "puzzle du jour", "difficulté", "langue", "chats restants", "mode normal", "mode aide", "Placer", "Marquer", "Annuler", "Indice", "Réinitialiser", "Suivant", "règles", "Un chat dans chaque région colorée.", "Deux chats ne partagent ni ligne ni colonne.", "Les chats ne peuvent pas se toucher, même en diagonale.", "grille", "puzzle terminé", "Puzzle suivant", "Rester ici", "Meilleur --", "Meilleur", "régions", "chats", "Trouvez la place de chaque chat.", "Marqué comme impossible.", "Marque retirée.", "Chat retiré.", "Bon emplacement.", "Plus de cœurs. Nouvelle tentative.", "Dernier coup annulé.", "Un indice apparaît.", "Résolu.", "Cette ligne a déjà un chat.", "Cette colonne a déjà un chat.", "Cette région a déjà un chat.", "Les chats ne peuvent pas se toucher.", "Parfaite petite parade de chats.", "Résolu en {time} avec {hearts} cœurs restants.", "Facile", "Normal", "Difficile"]),
  gu: makeGameUi(["તર્ક કોયડો", "આજનો કોયડો", "મુશ્કેલી", "ભાષા", "બાકી બિલાડીઓ", "સામાન્ય મોડ", "મદદ મોડ", "બિલાડી મૂકો", "ચિહ્નિત કરો", "પાછું લો", "સૂચન", "રીસેટ", "આગલું", "નિયમો", "દરેક રંગીન વિસ્તારમાં એક બિલાડી.", "બે બિલાડીઓ એક જ પંક્તિ કે કૉલમમાં નહીં.", "બિલાડીઓ તિરછું પણ સ્પર્શી શકતી નથી.", "બોર્ડ", "કોયડો પૂર્ણ", "આગળનો કોયડો", "અહીં રહો", "શ્રેષ્ઠ --", "શ્રેષ્ઠ", "વિસ્તારો", "બિલાડીઓ", "દરેક બિલાડીનું સ્થાન શોધો.", "અશક્ય તરીકે ચિહ્નિત.", "ચિહ્ન દૂર થયું.", "બિલાડી ઉઠાવી.", "સારું સ્થાન.", "હૃદય ખૂટી ગયા. ફરી શરૂ કરો.", "છેલ્લી ચાલ પાછી લીધી.", "સૂચન દેખાયું.", "ઉકેલાઈ ગયું.", "આ પંક્તિમાં પહેલેથી બિલાડી છે.", "આ કૉલમમાં પહેલેથી બિલાડી છે.", "આ વિસ્તારમાં પહેલેથી બિલાડી છે.", "બિલાડીઓ સ્પર્શી શકતી નથી.", "સંપૂર્ણ બિલાડી પરેડ.", "{time} માં ઉકેલાયું, {hearts} હૃદય બાકી.", "સરળ", "સામાન્ય", "કઠિન"]),
  ha: makeGameUi(["wasan tunani", "wasan yau", "wahala", "harshe", "kuliyoyi da suka rage", "yanayi na yau da kullum", "yanayin taimako", "Sanya kuliya", "Alama", "Soke", "Hint", "Sake farawa", "Na gaba", "ka'idoji", "Kuliya daya a kowane yanki mai launi.", "Kuliyoyi biyu ba su raba layi ko ginshiƙi.", "Kuliyoyi ba sa taɓawa, ko a karkace.", "allo", "an gama wasan", "Wasa na gaba", "Zauna nan", "Mafi kyau --", "Mafi kyau", "yankuna", "kuliyoyi", "Nemo wurin kowace kuliya.", "An yi alamar ba zai yiwu ba.", "An cire alama.", "An dauke kuliya.", "Wuri mai kyau.", "Zuciya ta kare. Sake gwadawa.", "An soke motsi na ƙarshe.", "An nuna hint.", "An warware.", "Wannan layi yana da kuliya.", "Wannan ginshiƙi yana da kuliya.", "Wannan yanki yana da kuliya.", "Kuliyoyi ba sa taɓawa.", "Cikakkiyar jerin kuliyoyi.", "An warware cikin {time} da zuciya {hearts}.", "Sauƙi", "Matsakaici", "Mai wahala"]),
  he: makeGameUi(["חידת היגיון", "החידה של היום", "קושי", "שפה", "חתולים נותרו", "מצב רגיל", "מצב עזרה", "הנח חתול", "סמן", "בטל", "רמז", "איפוס", "הבא", "כללים", "חתול אחד בכל אזור צבעוני.", "שני חתולים לא באותה שורה או עמודה.", "חתולים לא נוגעים, גם לא באלכסון.", "לוח", "החידה הושלמה", "החידה הבאה", "להישאר כאן", "שיא --", "שיא", "אזורים", "חתולים", "מצא מקום לכל חתול.", "סומן כבלתי אפשרי.", "הסימון הוסר.", "החתול הוסר.", "מקום טוב.", "נגמרו הלבבות. ניסיון חדש.", "המהלך האחרון בוטל.", "רמז הופיע.", "נפתר.", "בשורה הזו כבר יש חתול.", "בעמודה הזו כבר יש חתול.", "באזור הזה כבר יש חתול.", "חתולים לא יכולים לגעת.", "מצעד חתולים מושלם.", "נפתר ב-{time} עם {hearts} לבבות.", "קל", "רגיל", "קשה"]),
  hi: makeGameUi(["तर्क पहेली", "आज की पहेली", "कठिनाई", "भाषा", "बाकी बिल्लियां", "सामान्य मोड", "सहायता मोड", "बिल्ली रखें", "चिह्न लगाएं", "पूर्ववत", "संकेत", "रीसेट", "अगला", "नियम", "हर रंगीन क्षेत्र में एक बिल्ली।", "दो बिल्लियां एक ही पंक्ति या स्तंभ में नहीं।", "बिल्लियां तिरछे भी नहीं छू सकतीं।", "बोर्ड", "पहेली पूरी", "अगली पहेली", "यहीं रहें", "सर्वश्रेष्ठ --", "सर्वश्रेष्ठ", "क्षेत्र", "बिल्लियां", "हर बिल्ली की जगह खोजें।", "असंभव के रूप में चिह्नित।", "चिह्न हटाया गया।", "बिल्ली उठा ली गई।", "अच्छी जगह।", "दिल खत्म। फिर से शुरू करें।", "आखिरी चाल वापस ली।", "एक संकेत दिखा।", "हल हो गया।", "इस पंक्ति में पहले से बिल्ली है।", "इस स्तंभ में पहले से बिल्ली है।", "इस क्षेत्र में पहले से बिल्ली है।", "बिल्लियां छू नहीं सकतीं।", "बिल्लियों की शानदार परेड।", "{time} में हल, {hearts} दिल बचे।", "आसान", "सामान्य", "कठिन"]),
  hu: makeGameUi(["logikai rejtvény", "mai rejtvény", "nehézség", "nyelv", "macskák hátra", "alap mód", "segéd mód", "Macska", "Jelölés", "Vissza", "Tipp", "Újrakezd", "Következő", "szabályok", "Egy macska minden színes régióban.", "Két macska nem lehet azonos sorban vagy oszlopban.", "A macskák átlósan sem érhetnek össze.", "tábla", "rejtvény kész", "Következő rejtvény", "Maradok", "Legjobb --", "Legjobb", "régió", "macska", "Találd meg minden macska helyét.", "Lehetetlenként jelölve.", "Jelölés törölve.", "Macska felvéve.", "Jó hely.", "Elfogytak a szívek. Újra.", "Utolsó lépés visszavonva.", "Megjelent egy tipp.", "Megoldva.", "Ebben a sorban már van macska.", "Ebben az oszlopban már van macska.", "Ebben a régióban már van macska.", "A macskák nem érhetnek össze.", "Tökéletes macskás menet.", "{time} alatt megoldva, {hearts} szív maradt.", "Könnyű", "Normál", "Nehéz"]),
  id: makeGameUi(["teka-teki logika", "teka-teki hari ini", "tingkat sulit", "bahasa", "kucing tersisa", "mode normal", "mode bantu", "Letakkan kucing", "Tandai", "Urungkan", "Petunjuk", "Ulangi", "Berikutnya", "aturan", "Satu kucing di setiap wilayah berwarna.", "Tidak ada dua kucing pada baris atau kolom yang sama.", "Kucing tidak boleh bersentuhan, termasuk diagonal.", "papan", "teka-teki selesai", "Teka-teki berikutnya", "Tetap di sini", "Terbaik --", "Terbaik", "wilayah", "kucing", "Temukan tempat tidur setiap kucing.", "Ditandai sebagai mustahil.", "Tanda dihapus.", "Kucing diambil kembali.", "Tempat bagus.", "Hati habis. Coba lagi.", "Langkah terakhir dibatalkan.", "Petunjuk muncul.", "Selesai.", "Baris ini sudah punya kucing.", "Kolom ini sudah punya kucing.", "Wilayah ini sudah punya kucing.", "Kucing tidak boleh bersentuhan.", "Parade kucing sempurna.", "Selesai dalam {time} dengan {hearts} hati tersisa.", "Mudah", "Normal", "Sulit"]),
  it: makeGameUi(["puzzle logico", "puzzle di oggi", "difficoltà", "lingua", "gatti rimasti", "modalità normale", "modalità aiuto", "Metti gatto", "Segna", "Annulla", "Indizio", "Ripristina", "Avanti", "regole", "Un gatto in ogni regione colorata.", "Due gatti non condividono riga o colonna.", "I gatti non possono toccarsi, nemmeno in diagonale.", "griglia", "puzzle completato", "Puzzle successivo", "Resta qui", "Migliore --", "Migliore", "regioni", "gatti", "Trova il posto di ogni gatto.", "Segnato come impossibile.", "Segno rimosso.", "Gatto rimosso.", "Bel posto.", "Cuori finiti. Nuovo tentativo.", "Ultima mossa annullata.", "Compare un indizio.", "Risolto.", "Questa riga ha già un gatto.", "Questa colonna ha già un gatto.", "Questa regione ha già un gatto.", "I gatti non possono toccarsi.", "Perfetta piccola parata di gatti.", "Risolto in {time} con {hearts} cuori rimasti.", "Facile", "Normale", "Difficile"]),
  jv: makeGameUi(["teka-teki logika", "teka-teki dina iki", "kangelan", "basa", "kucing isih", "mode biasa", "mode pitulungan", "Pasang kucing", "Tandhani", "Batal", "Pituduh", "Reset", "Sabanjure", "aturan", "Siji kucing ing saben wilayah warna.", "Ora ana kucing loro ing baris utawa kolom padha.", "Kucing ora kena dempet, kalebu diagonal.", "papan", "teka-teki rampung", "Teka-teki sabanjure", "Tetep kene", "Paling apik --", "Paling apik", "wilayah", "kucing", "Goleki papan saben kucing.", "Ditandhani mokal.", "Tandha dibusak.", "Kucing dijupuk maneh.", "Papan apik.", "Ati entek. Miwiti maneh.", "Langkah pungkasan dibatalake.", "Pituduh katon.", "Rampung.", "Baris iki wis ana kucing.", "Kolom iki wis ana kucing.", "Wilayah iki wis ana kucing.", "Kucing ora kena dempet.", "Parade kucing sampurna.", "Rampung ing {time} karo {hearts} ati.", "Gampang", "Normal", "Angel"]),
  ms: makeGameUi(["teka-teki logik", "teka-teki hari ini", "kesukaran", "bahasa", "kucing tinggal", "mod biasa", "mod bantuan", "Letak kucing", "Tanda", "Buat asal", "Petunjuk", "Tetap semula", "Seterusnya", "peraturan", "Satu kucing dalam setiap kawasan berwarna.", "Dua kucing tidak berkongsi baris atau lajur.", "Kucing tidak boleh bersentuhan, termasuk pepenjuru.", "papan", "teka-teki selesai", "Teka-teki seterusnya", "Kekal di sini", "Terbaik --", "Terbaik", "kawasan", "kucing", "Cari tempat setiap kucing.", "Ditanda sebagai mustahil.", "Tanda dibuang.", "Kucing diambil semula.", "Tempat yang baik.", "Hati habis. Cuba lagi.", "Langkah terakhir dibatalkan.", "Petunjuk muncul.", "Selesai.", "Baris ini sudah ada kucing.", "Lajur ini sudah ada kucing.", "Kawasan ini sudah ada kucing.", "Kucing tidak boleh bersentuhan.", "Perarakan kucing sempurna.", "Selesai dalam {time} dengan {hearts} hati.", "Mudah", "Biasa", "Sukar"]),
  nl: makeGameUi(["logicapuzzel", "puzzel van vandaag", "moeilijkheid", "taal", "katten over", "normale modus", "hulpmodus", "Kat plaatsen", "Markeren", "Ongedaan", "Hint", "Reset", "Volgende", "regels", "Eén kat in elk kleurgebied.", "Geen twee katten delen rij of kolom.", "Katten mogen elkaar ook diagonaal niet raken.", "bord", "puzzel voltooid", "Volgende puzzel", "Hier blijven", "Beste --", "Beste", "gebieden", "katten", "Vind de plek van elke kat.", "Gemarkeerd als onmogelijk.", "Markering verwijderd.", "Kat opgepakt.", "Goede plek.", "Geen harten meer. Opnieuw.", "Laatste zet ongedaan.", "Er verschijnt een hint.", "Opgelost.", "Deze rij heeft al een kat.", "Deze kolom heeft al een kat.", "Dit gebied heeft al een kat.", "Katten mogen elkaar niet raken.", "Perfecte kattenparade.", "Opgelost in {time} met {hearts} harten over.", "Makkelijk", "Normaal", "Moeilijk"]),
  pl: makeGameUi(["łamigłówka logiczna", "dzisiejsza łamigłówka", "trudność", "język", "koty zostały", "tryb zwykły", "tryb pomocy", "Postaw kota", "Oznacz", "Cofnij", "Podpowiedź", "Reset", "Dalej", "zasady", "Jeden kot w każdym kolorowym regionie.", "Dwa koty nie mogą być w tym samym rzędzie ani kolumnie.", "Koty nie mogą się stykać, także po przekątnej.", "plansza", "łamigłówka ukończona", "Następna łamigłówka", "Zostań tutaj", "Najlepszy --", "Najlepszy", "regiony", "koty", "Znajdź miejsce dla każdego kota.", "Oznaczono jako niemożliwe.", "Oznaczenie usunięte.", "Kot zabrany.", "Dobre miejsce.", "Serca się skończyły. Nowa próba.", "Cofnięto ostatni ruch.", "Pojawiła się podpowiedź.", "Rozwiązano.", "Ten rząd ma już kota.", "Ta kolumna ma już kota.", "Ten region ma już kota.", "Koty nie mogą się stykać.", "Idealna kocia parada.", "Rozwiązano w {time}, zostało {hearts} serc.", "Łatwy", "Normalny", "Trudny"]),
  pt: makeGameUi(["puzzle lógico", "puzzle de hoje", "dificuldade", "idioma", "gatos restantes", "modo normal", "modo ajuda", "Colocar gato", "Marcar", "Desfazer", "Dica", "Reiniciar", "Próximo", "regras", "Um gato em cada região colorida.", "Dois gatos não compartilham linha nem coluna.", "Gatos não podem se tocar, nem na diagonal.", "tabuleiro", "puzzle concluído", "Próximo puzzle", "Ficar aqui", "Melhor --", "Melhor", "regiões", "gatos", "Encontre o lugar de cada gato.", "Marcado como impossível.", "Marca removida.", "Gato retirado.", "Bom lugar.", "Sem corações. Tente de novo.", "Última jogada desfeita.", "Uma dica apareceu.", "Resolvido.", "Esta linha já tem um gato.", "Esta coluna já tem um gato.", "Esta região já tem um gato.", "Gatos não podem se tocar.", "Perfeita parada de gatos.", "Resolvido em {time} com {hearts} corações.", "Fácil", "Normal", "Difícil"]),
  ro: makeGameUi(["puzzle logic", "puzzle-ul zilei", "dificultate", "limbă", "pisici rămase", "mod normal", "mod asistență", "Pune pisica", "Marchează", "Anulează", "Indiciu", "Resetare", "Următorul", "reguli", "O pisică în fiecare regiune colorată.", "Două pisici nu împart același rând sau coloană.", "Pisicile nu se ating nici pe diagonală.", "tablă", "puzzle complet", "Puzzle următor", "Rămâi aici", "Cel mai bun --", "Cel mai bun", "regiuni", "pisici", "Găsește locul fiecărei pisici.", "Marcat ca imposibil.", "Marcaj eliminat.", "Pisica a fost ridicată.", "Loc bun.", "Nu mai sunt inimi. Încearcă din nou.", "Ultima mutare anulată.", "A apărut un indiciu.", "Rezolvat.", "Acest rând are deja o pisică.", "Această coloană are deja o pisică.", "Această regiune are deja o pisică.", "Pisicile nu se pot atinge.", "Paradă perfectă de pisici.", "Rezolvat în {time} cu {hearts} inimi rămase.", "Ușor", "Normal", "Greu"]),
  ru: makeGameUi(["логическая головоломка", "головоломка дня", "сложность", "язык", "кошек осталось", "обычный режим", "режим помощи", "Поставить кошку", "Отметить", "Отменить", "Подсказка", "Сброс", "Далее", "правила", "Одна кошка в каждом цветном регионе.", "Две кошки не могут быть в одной строке или колонке.", "Кошки не могут касаться, даже по диагонали.", "поле", "головоломка решена", "Следующая головоломка", "Остаться здесь", "Лучшее --", "Лучшее", "регионов", "кошек", "Найдите место для каждой кошки.", "Отмечено как невозможное.", "Отметка снята.", "Кошка убрана.", "Хорошее место.", "Сердца закончились. Новая попытка.", "Последний ход отменен.", "Появилась подсказка.", "Решено.", "В этой строке уже есть кошка.", "В этой колонке уже есть кошка.", "В этом регионе уже есть кошка.", "Кошки не могут касаться.", "Идеальный кошачий парад.", "Решено за {time}, осталось сердец: {hearts}.", "Легко", "Нормально", "Сложно"]),
  sv: makeGameUi(["logikpussel", "dagens pussel", "svårighet", "språk", "katter kvar", "standardläge", "hjälpläge", "Placera katt", "Markera", "Ångra", "Ledtråd", "Starta om", "Nästa", "regler", "En katt i varje färgat område.", "Två katter får inte dela rad eller kolumn.", "Katter får inte röra vid varandra, inte ens diagonalt.", "bräde", "pusslet klart", "Nästa pussel", "Stanna här", "Bästa --", "Bästa", "områden", "katter", "Hitta platsen för varje katt.", "Markerat som omöjligt.", "Markering borttagen.", "Katten lyftes bort.", "Bra plats.", "Inga hjärtan kvar. Försök igen.", "Senaste draget ångrades.", "En ledtråd visas.", "Löst.", "Den här raden har redan en katt.", "Den här kolumnen har redan en katt.", "Det här området har redan en katt.", "Katter får inte röra vid varandra.", "Perfekt liten kattparad.", "Löst på {time} med {hearts} hjärtan kvar.", "Lätt", "Normal", "Svår"]),
  sw: makeGameUi(["fumbo la mantiki", "fumbo la leo", "ugumu", "lugha", "paka waliobaki", "hali ya kawaida", "hali ya msaada", "Weka paka", "Weka alama", "Tengua", "Dokezo", "Anza upya", "Inayofuata", "kanuni", "Paka mmoja katika kila eneo la rangi.", "Paka wawili hawashiriki mstari au safu.", "Paka hawapaswi kugusana, hata kwa mshazari.", "ubao", "fumbo limekamilika", "Fumbo linalofuata", "Baki hapa", "Bora --", "Bora", "maeneo", "paka", "Tafuta nafasi ya kila paka.", "Imewekwa alama kuwa haiwezekani.", "Alama imeondolewa.", "Paka ameondolewa.", "Nafasi nzuri.", "Mioyo imeisha. Jaribu tena.", "Hatua ya mwisho imetenguliwa.", "Dokezo limeonekana.", "Imetatuliwa.", "Mstari huu tayari una paka.", "Safu hii tayari ina paka.", "Eneo hili tayari lina paka.", "Paka hawapaswi kugusana.", "Parade kamili ya paka.", "Imetatuliwa kwa {time} na mioyo {hearts}.", "Rahisi", "Kawaida", "Ngumu"]),
  tr: makeGameUi(["mantık bulmacası", "bugünün bulmacası", "zorluk", "dil", "kalan kediler", "normal mod", "yardım modu", "Kedi yerleştir", "İşaretle", "Geri al", "İpucu", "Sıfırla", "Sonraki", "kurallar", "Her renkli bölgede bir kedi.", "İki kedi aynı satır veya sütunda olamaz.", "Kediler çaprazda bile temas edemez.", "tahta", "bulmaca tamamlandı", "Sonraki bulmaca", "Burada kal", "En iyi --", "En iyi", "bölge", "kedi", "Her kedinin yerini bul.", "İmkansız olarak işaretlendi.", "İşaret kaldırıldı.", "Kedi geri alındı.", "Güzel yer.", "Kalp kalmadı. Yeniden dene.", "Son hamle geri alındı.", "Bir ipucu göründü.", "Çözüldü.", "Bu satırda zaten kedi var.", "Bu sütunda zaten kedi var.", "Bu bölgede zaten kedi var.", "Kediler temas edemez.", "Kusursuz küçük kedi geçidi.", "{time} içinde çözüldü, {hearts} kalp kaldı.", "Kolay", "Normal", "Zor"]),
  ja: makeGameUi(["ロジックパズル", "今日のパズル", "難易度", "言語", "残りの猫", "通常モード", "アシストモード", "猫を置く", "マーク", "戻す", "ヒント", "リセット", "次へ", "ルール", "各色の部屋に猫を1匹置きます。", "同じ行または列に2匹は置けません。", "猫は斜めも含めて隣接できません。", "盤面", "パズル完了", "次のパズル", "ここに残る", "ベスト --", "ベスト", "部屋", "匹", "すべての猫の居場所を見つけましょう。", "置けない場所としてマークしました。", "マークを外しました。", "猫を戻しました。", "いい場所です。", "ハートがなくなりました。もう一度。", "直前の手を戻しました。", "ヒントが現れました。", "解けました。", "この行にはすでに猫がいます。", "この列にはすでに猫がいます。", "この色の部屋にはすでに猫がいます。", "猫は隣接できません。", "完璧な猫のパレード。", "{time} でクリア。残りハート {hearts}。", "かんたん", "ふつう", "むずかしい"]),
  ko: makeGameUi(["논리 퍼즐", "오늘의 퍼즐", "난이도", "언어", "남은 고양이", "기본 모드", "도움 모드", "고양이 놓기", "표시", "되돌리기", "힌트", "초기화", "다음", "규칙", "각 색 영역에 고양이 한 마리.", "고양이 두 마리는 같은 행이나 열에 있을 수 없습니다.", "고양이는 대각선으로도 닿을 수 없습니다.", "보드", "퍼즐 완료", "다음 퍼즐", "여기 있기", "최고 --", "최고", "영역", "마리", "모든 고양이의 자리를 찾으세요.", "불가능한 칸으로 표시했습니다.", "표시를 지웠습니다.", "고양이를 다시 들었습니다.", "좋은 자리예요.", "하트가 없습니다. 다시 시작합니다.", "마지막 수를 되돌렸습니다.", "힌트가 나타났습니다.", "해결했습니다.", "이 행에는 이미 고양이가 있습니다.", "이 열에는 이미 고양이가 있습니다.", "이 색 영역에는 이미 고양이가 있습니다.", "고양이는 서로 닿을 수 없습니다.", "완벽한 고양이 행진.", "{time} 만에 해결, 하트 {hearts}개 남음.", "쉬움", "보통", "어려움"]),
  mr: makeGameUi(["तर्क कोडे", "आजचे कोडे", "कठीणपणा", "भाषा", "उरलेल्या मांजरी", "सामान्य मोड", "मदत मोड", "मांजर ठेवा", "चिन्ह लावा", "मागे घ्या", "सूचना", "रीसेट", "पुढील", "नियम", "प्रत्येक रंगीत भागात एक मांजर.", "दोन मांजरी एकाच रांगेत किंवा स्तंभात नसाव्यात.", "मांजरी तिरक्याही स्पर्श करू शकत नाहीत.", "फळा", "कोडे पूर्ण", "पुढील कोडे", "इथेच रहा", "सर्वोत्तम --", "सर्वोत्तम", "भाग", "मांजरी", "प्रत्येक मांजरीची जागा शोधा.", "अशक्य म्हणून चिन्हांकित.", "चिन्ह काढले.", "मांजर उचलली.", "छान जागा.", "हृदये संपली. पुन्हा सुरू.", "शेवटची चाल मागे घेतली.", "सूचना दिसली.", "सुटले.", "या रांगेत आधीच मांजर आहे.", "या स्तंभात आधीच मांजर आहे.", "या भागात आधीच मांजर आहे.", "मांजरी स्पर्श करू शकत नाहीत.", "परिपूर्ण मांजर परेड.", "{time} मध्ये सुटले, {hearts} हृदये बाकी.", "सोपे", "सामान्य", "कठीण"]),
  pa: makeGameUi(["ਤਰਕ ਪਹੇਲੀ", "ਅੱਜ ਦੀ ਪਹੇਲੀ", "ਮੁਸ਼ਕਲ", "ਭਾਸ਼ਾ", "ਬਾਕੀ ਬਿੱਲੀਆਂ", "ਆਮ ਮੋਡ", "ਮਦਦ ਮੋਡ", "ਬਿੱਲੀ ਰੱਖੋ", "ਨਿਸ਼ਾਨ ਲਗਾਓ", "ਵਾਪਸ", "ਸੰਕੇਤ", "ਰੀਸੈਟ", "ਅਗਲਾ", "ਨਿਯਮ", "ਹਰ ਰੰਗੀਨ ਖੇਤਰ ਵਿੱਚ ਇੱਕ ਬਿੱਲੀ।", "ਦੋ ਬਿੱਲੀਆਂ ਇੱਕੋ ਕਤਾਰ ਜਾਂ ਕਾਲਮ ਵਿੱਚ ਨਹੀਂ।", "ਬਿੱਲੀਆਂ ਤਿਰਛੇ ਵੀ ਨਹੀਂ ਛੂਹ ਸਕਦੀਆਂ।", "ਬੋਰਡ", "ਪਹੇਲੀ ਪੂਰੀ", "ਅਗਲੀ ਪਹੇਲੀ", "ਇੱਥੇ ਰਹੋ", "ਸਭ ਤੋਂ ਵਧੀਆ --", "ਸਭ ਤੋਂ ਵਧੀਆ", "ਖੇਤਰ", "ਬਿੱਲੀਆਂ", "ਹਰ ਬਿੱਲੀ ਦੀ ਜਗ੍ਹਾ ਲੱਭੋ।", "ਅਸੰਭਵ ਵਜੋਂ ਨਿਸ਼ਾਨ ਲਾਇਆ।", "ਨਿਸ਼ਾਨ ਹਟਾਇਆ।", "ਬਿੱਲੀ ਚੁੱਕ ਲਈ।", "ਚੰਗੀ ਜਗ੍ਹਾ।", "ਦਿਲ ਖਤਮ। ਮੁੜ ਕੋਸ਼ਿਸ਼।", "ਆਖਰੀ ਚਾਲ ਵਾਪਸ।", "ਸੰਕੇਤ ਆਇਆ।", "ਹੱਲ ਹੋ ਗਿਆ।", "ਇਸ ਕਤਾਰ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਬਿੱਲੀ ਹੈ।", "ਇਸ ਕਾਲਮ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਬਿੱਲੀ ਹੈ।", "ਇਸ ਖੇਤਰ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਬਿੱਲੀ ਹੈ।", "ਬਿੱਲੀਆਂ ਛੂਹ ਨਹੀਂ ਸਕਦੀਆਂ।", "ਸ਼ਾਨਦਾਰ ਬਿੱਲੀ ਪਰੇਡ।", "{time} ਵਿੱਚ ਹੱਲ, {hearts} ਦਿਲ ਬਾਕੀ।", "ਆਸਾਨ", "ਆਮ", "ਔਖਾ"]),
  ta: makeGameUi(["தர்க்க புதிர்", "இன்றைய புதிர்", "கடினம்", "மொழி", "மீதமுள்ள பூனைகள்", "இயல்பு முறை", "உதவி முறை", "பூனை வை", "குறி", "மீளமை", "குறிப்பு", "மீண்டும்", "அடுத்து", "விதிகள்", "ஒவ்வொரு நிறப் பகுதியில் ஒரு பூனை.", "இரண்டு பூனைகள் ஒரே வரி அல்லது நெடுவரிசையில் இருக்கக்கூடாது.", "பூனைகள் சாய்வாகவும் தொடக்கூடாது.", "பலகை", "புதிர் முடிந்தது", "அடுத்த புதிர்", "இங்கே இரு", "சிறந்தது --", "சிறந்தது", "பகுதிகள்", "பூனைகள்", "ஒவ்வொரு பூனைக்கும் இடம் கண்டுபிடி.", "சாத்தியமில்லை என குறிக்கப்பட்டது.", "குறி நீக்கப்பட்டது.", "பூனை எடுக்கப்பட்டது.", "நல்ல இடம்.", "இதயங்கள் முடிந்தன. மீண்டும் தொடங்கு.", "கடைசி அசைவு மீளப்பட்டது.", "ஒரு குறிப்பு தோன்றியது.", "தீர்ந்தது.", "இந்த வரியில் ஏற்கனவே பூனை உள்ளது.", "இந்த நெடுவரிசையில் ஏற்கனவே பூனை உள்ளது.", "இந்த பகுதியில் ஏற்கனவே பூனை உள்ளது.", "பூனைகள் தொடக்கூடாது.", "சரியான பூனை அணிவகுப்பு.", "{time} நேரத்தில் தீர்ந்தது, {hearts} இதயங்கள் மீதம்.", "எளிது", "சாதாரணம்", "கடினம்"]),
  te: makeGameUi(["లాజిక్ పజిల్", "ఈరోజు పజిల్", "కష్టం", "భాష", "మిగిలిన పిల్లులు", "సాధారణ మోడ్", "సహాయ మోడ్", "పిల్లి పెట్టు", "మార్క్", "రద్దు", "సూచన", "రీసెట్", "తదుపరి", "నియమాలు", "ప్రతి రంగు ప్రాంతంలో ఒక పిల్లి.", "రెండు పిల్లులు ఒకే వరుస లేదా నిలువు వరుసలో ఉండకూడదు.", "పిల్లులు అడ్డంగా కూడా తాకకూడదు.", "బోర్డు", "పజిల్ పూర్తయింది", "తదుపరి పజిల్", "ఇక్కడే ఉండండి", "ఉత్తమం --", "ఉత్తమం", "ప్రాంతాలు", "పిల్లులు", "ప్రతి పిల్లి స్థానం కనుగొనండి.", "అసాధ్యంగా గుర్తించబడింది.", "మార్క్ తీసివేయబడింది.", "పిల్లి తీసివేయబడింది.", "మంచి స్థానం.", "హృదయాలు అయిపోయాయి. మళ్లీ ప్రయత్నించండి.", "చివరి అడుగు రద్దైంది.", "ఒక సూచన వచ్చింది.", "పూర్తయింది.", "ఈ వరుసలో ఇప్పటికే పిల్లి ఉంది.", "ఈ నిలువు వరుసలో ఇప్పటికే పిల్లి ఉంది.", "ఈ ప్రాంతంలో ఇప్పటికే పిల్లి ఉంది.", "పిల్లులు తాకకూడదు.", "అద్భుతమైన పిల్లుల పరేడ్.", "{time} లో పూర్తయింది, {hearts} హృదయాలు మిగిలాయి.", "సులువు", "సాధారణం", "కష్టం"]),
  th: makeGameUi(["ปริศนาตรรกะ", "ปริศนาวันนี้", "ระดับ", "ภาษา", "แมวที่เหลือ", "โหมดปกติ", "โหมดช่วย", "วางแมว", "ทำเครื่องหมาย", "ย้อนกลับ", "คำใบ้", "เริ่มใหม่", "ถัดไป", "กติกา", "มีแมวหนึ่งตัวในแต่ละพื้นที่สี.", "แมวสองตัวห้ามอยู่แถวหรือคอลัมน์เดียวกัน.", "แมวห้ามแตะกัน รวมถึงแนวทแยง.", "กระดาน", "ผ่านปริศนาแล้ว", "ปริศนาถัดไป", "อยู่ที่นี่", "ดีที่สุด --", "ดีที่สุด", "พื้นที่", "แมว", "หาที่นอนให้แมวทุกตัว.", "ทำเครื่องหมายว่าเป็นไปไม่ได้.", "ลบเครื่องหมายแล้ว.", "ยกแมวออกแล้ว.", "ตำแหน่งดี.", "หัวใจหมดแล้ว ลองใหม่.", "ย้อนกลับตาล่าสุดแล้ว.", "มีคำใบ้ปรากฏ.", "แก้สำเร็จ.", "แถวนี้มีแมวแล้ว.", "คอลัมน์นี้มีแมวแล้ว.", "พื้นที่นี้มีแมวแล้ว.", "แมวห้ามแตะกัน.", "ขบวนแมวสมบูรณ์แบบ.", "แก้ได้ใน {time} เหลือหัวใจ {hearts}.", "ง่าย", "ปกติ", "ยาก"]),
  uk: makeGameUi(["логічна головоломка", "головоломка дня", "складність", "мова", "котів лишилось", "звичайний режим", "режим допомоги", "Поставити кота", "Позначити", "Скасувати", "Підказка", "Скинути", "Далі", "правила", "Один кіт у кожній кольоровій області.", "Два коти не можуть бути в одному рядку чи стовпці.", "Коти не можуть торкатися навіть по діагоналі.", "поле", "головоломку завершено", "Наступна головоломка", "Залишитись тут", "Найкраще --", "Найкраще", "областей", "котів", "Знайдіть місце для кожного кота.", "Позначено як неможливе.", "Позначку знято.", "Кота прибрано.", "Гарне місце.", "Серця закінчилися. Спробуйте знову.", "Останній хід скасовано.", "З'явилася підказка.", "Розв'язано.", "У цьому рядку вже є кіт.", "У цьому стовпці вже є кіт.", "У цій області вже є кіт.", "Коти не можуть торкатися.", "Ідеальний котячий парад.", "Розв'язано за {time}, сердець лишилось: {hearts}.", "Легко", "Звичайно", "Складно"]),
  ur: makeGameUi(["منطقی پہیلی", "آج کی پہیلی", "مشکل", "زبان", "باقی بلیاں", "عام موڈ", "مدد موڈ", "بلی رکھیں", "نشان لگائیں", "واپس", "اشارہ", "ری سیٹ", "اگلا", "قواعد", "ہر رنگین حصے میں ایک بلی۔", "دو بلیاں ایک ہی قطار یا کالم میں نہیں۔", "بلیاں ترچھی بھی نہیں چھو سکتیں۔", "بورڈ", "پہیلی مکمل", "اگلی پہیلی", "یہیں رہیں", "بہترین --", "بہترین", "حصے", "بلیاں", "ہر بلی کی جگہ تلاش کریں۔", "ناممکن کے طور پر نشان لگایا۔", "نشان ہٹا دیا گیا۔", "بلی اٹھا لی گئی۔", "اچھی جگہ۔", "دل ختم۔ دوبارہ کوشش کریں۔", "آخری چال واپس لی گئی۔", "ایک اشارہ ظاہر ہوا۔", "حل ہوگئی۔", "اس قطار میں پہلے ہی بلی ہے۔", "اس کالم میں پہلے ہی بلی ہے۔", "اس حصے میں پہلے ہی بلی ہے۔", "بلیاں چھو نہیں سکتیں۔", "کامل بلی پریڈ۔", "{time} میں حل، {hearts} دل باقی۔", "آسان", "عام", "مشکل"]),
  vi: makeGameUi(["câu đố logic", "câu đố hôm nay", "độ khó", "ngôn ngữ", "mèo còn lại", "chế độ thường", "chế độ hỗ trợ", "Đặt mèo", "Đánh dấu", "Hoàn tác", "Gợi ý", "Đặt lại", "Tiếp", "luật chơi", "Mỗi vùng màu có đúng một mèo.", "Hai mèo không cùng hàng hoặc cột.", "Mèo không được chạm nhau, kể cả chéo.", "bàn chơi", "hoàn thành", "Câu đố tiếp theo", "Ở lại", "Tốt nhất --", "Tốt nhất", "vùng", "mèo", "Tìm chỗ nằm cho mỗi mèo.", "Đã đánh dấu là không thể.", "Đã bỏ đánh dấu.", "Đã nhấc mèo lên.", "Vị trí tốt.", "Hết tim. Thử lại.", "Đã hoàn tác bước cuối.", "Một gợi ý xuất hiện.", "Đã giải xong.", "Hàng này đã có mèo.", "Cột này đã có mèo.", "Vùng này đã có mèo.", "Mèo không được chạm nhau.", "Cuộc diễu hành mèo hoàn hảo.", "Giải xong trong {time}, còn {hearts} tim.", "Dễ", "Thường", "Khó"]),
  zh: makeGameUi(["逻辑谜题", "今日关卡", "难度", "语言", "剩余猫咪", "默认模式", "辅助模式", "放猫", "标记", "撤销", "提示", "重开", "下一关", "规则", "每个彩色房间放一只猫。", "任意两只猫不能同一行或同一列。", "猫不能相邻，斜角也不行。", "棋盘", "通关完成", "下一关", "留在这里", "最佳 --", "最佳", "个房间", "只猫", "找到每只猫的午睡位置。", "已标记为不可能。", "标记已取消。", "把猫抱回来了。", "好位置，房间安静下来了。", "红心用完，重新来一局。", "已撤销上一步。", "一枚温暖的爪印出现了。", "通关，优雅。", "这一行已经有猫了。", "这一列已经有猫了。", "这个彩色房间已经有猫了。", "猫不能相邻，斜角也不行。", "猫咪巡游，完美收工。", "用时 {time}，剩余 {hearts} 颗红心。", "简单", "普通", "困难"]),
  "zh-Hant": makeGameUi(["邏輯謎題", "今日關卡", "難度", "語言", "剩餘貓咪", "預設模式", "輔助模式", "放貓", "標記", "復原", "提示", "重開", "下一關", "規則", "每個彩色房間放一隻貓。", "任意兩隻貓不能同一行或同一列。", "貓不能相鄰，斜角也不行。", "棋盤", "通關完成", "下一關", "留在這裡", "最佳 --", "最佳", "個房間", "隻貓", "找到每隻貓的午睡位置。", "已標記為不可能。", "標記已取消。", "把貓抱回來了。", "好位置，房間安靜下來了。", "紅心用完，重新來一局。", "已復原上一步。", "一枚溫暖的爪印出現了。", "通關，優雅。", "這一行已經有貓了。", "這一列已經有貓了。", "這個彩色房間已經有貓了。", "貓不能相鄰，斜角也不行。", "貓咪巡遊，完美收工。", "用時 {time}，剩餘 {hearts} 顆紅心。", "簡單", "普通", "困難"])
};

for (const [code] of languageCatalog) {
  i18n[code] = { ...i18n.en, ...(i18n[code] || {}), ...(shortUiTranslations[code] || {}), ...(completeUiTranslations[code] || {}) };
}

const palette = ["#ffd6b8", "#f7c9d4", "#c9e8df", "#f7e39a", "#c7d9ff", "#d9c8f7", "#bfe3a7", "#f0c2a8"];
const saveProfileKey = "meowdoku-local-profile-v1";
const levelLabels = {
  en: "Level", zh: "关卡", "zh-Hant": "關卡", ja: "レベル", ko: "레벨", es: "Nivel", fr: "Niveau", de: "Level",
  pt: "Nível", ru: "Уровень", ar: "المستوى", hi: "स्तर", id: "Level", vi: "Cấp", tr: "Seviye", it: "Livello",
  th: "เลเวล", pl: "Poziom", nl: "Level", sv: "Nivå", ur: "لیول", fa: "مرحله", he: "רמה"
};
const firstCatLabels = {
  en: "Place the first cat to begin.",
  zh: "放下第一只猫开始计时。",
  "zh-Hant": "放下第一隻貓開始計時。",
  ja: "最初の猫を置くとタイマーが始まります。",
  ko: "첫 고양이를 놓으면 타이머가 시작됩니다.",
  es: "Coloca el primer gato para empezar.",
  fr: "Placez le premier chat pour commencer.",
  de: "Setze die erste Katze, um zu starten.",
  pt: "Coloque o primeiro gato para começar.",
  ru: "Поставьте первую кошку, чтобы начать.",
  ar: "ضع أول قطة للبدء.",
  hi: "शुरू करने के लिए पहली बिल्ली रखें।",
  id: "Letakkan kucing pertama untuk mulai.",
  vi: "Đặt mèo đầu tiên để bắt đầu.",
  tr: "Başlamak için ilk kediyi yerleştir.",
  it: "Posiziona il primo gatto per iniziare.",
  th: "วางแมวตัวแรกเพื่อเริ่มจับเวลา",
  pl: "Postaw pierwszego kota, aby zacząć.",
  nl: "Plaats de eerste kat om te beginnen.",
  sv: "Placera den första katten för att börja.",
  ur: "شروع کرنے کے لیے پہلی بلی رکھیں۔",
  fa: "برای شروع، اولین گربه را بگذارید.",
  he: "הנח את החתול הראשון כדי להתחיל."
};
const shareLocales = {
  en: {
    share: "Share score",
    copy: "Copy",
    copied: "Copied!",
    summary: "Level {level} • {difficulty} • {time} • {hearts} hearts",
    lines: [
      "Every cat found a perfect room.",
      "That was a clean little Meowdoku solve.",
      "The board is calm, the cats are proud.",
      "A tiny logic victory worth sharing."
    ],
    text: "I cleared Meowdoku Level {level} ({difficulty}) in {time} with {hearts} hearts left. Can you beat it?"
  },
  zh: {
    share: "分享成绩",
    copy: "复制",
    copied: "已复制",
    summary: "第 {level} 关 • {difficulty} • {time} • 剩 {hearts} 颗红心",
    lines: ["每只猫都找到了完美房间。", "这一局推理很漂亮。", "棋盘安静了，猫咪也骄傲了。", "这是一场值得分享的小胜利。"],
    text: "我通关了 Meowdoku 第 {level} 关（{difficulty}），用时 {time}，剩 {hearts} 颗红心。你能超过我吗？"
  },
  "zh-Hant": {
    share: "分享成績",
    copy: "複製",
    copied: "已複製",
    summary: "第 {level} 關 • {difficulty} • {time} • 剩 {hearts} 顆紅心",
    lines: ["每隻貓都找到了完美房間。", "這一局推理很漂亮。", "棋盤安靜了，貓咪也驕傲了。", "這是一場值得分享的小勝利。"],
    text: "我通關了 Meowdoku 第 {level} 關（{difficulty}），用時 {time}，剩 {hearts} 顆紅心。你能超過我嗎？"
  },
  ja: {
    share: "スコアを共有",
    copy: "コピー",
    copied: "コピー済み",
    summary: "レベル {level} • {difficulty} • {time} • ハート {hearts}",
    lines: ["すべての猫が完璧な部屋を見つけました。", "きれいなMeowdokuクリアです。", "盤面は静かで、猫たちは誇らしげです。"],
    text: "Meowdoku レベル {level}（{difficulty}）を {time} でクリア。ハート {hearts} 個残し。超えられる？"
  },
  ko: {
    share: "점수 공유",
    copy: "복사",
    copied: "복사됨",
    summary: "레벨 {level} • {difficulty} • {time} • 하트 {hearts}",
    lines: ["모든 고양이가 완벽한 방을 찾았어요.", "깔끔한 Meowdoku 승리입니다.", "보드는 조용하고 고양이는 뿌듯해요."],
    text: "Meowdoku 레벨 {level}({difficulty})을 {time} 만에 클리어했어요. 하트 {hearts}개 남김. 이길 수 있나요?"
  }
};
const generatedPuzzleCache = new Map();
const board = document.querySelector("#board");
const levelTitle = document.querySelector("#levelTitle");
const levelMeta = document.querySelector("#levelMeta");
const statusText = document.querySelector("#statusText");
const mistakesEl = document.querySelector("#mistakes");
const timerEl = document.querySelector("#timer");
const bestTimeEl = document.querySelector("#bestTime");
const progressBar = document.querySelector("#progressBar");
const assistToggle = document.querySelector("#assistMode");
const resultModal = document.querySelector("#resultModal");
const resultTitle = document.querySelector("#resultTitle");
const resultCopy = document.querySelector("#resultCopy");
const resultSummary = document.querySelector("#resultSummary");
const nativeShareBtn = document.querySelector("#nativeShareBtn");
const shareXBtn = document.querySelector("#shareXBtn");
const shareFacebookBtn = document.querySelector("#shareFacebookBtn");
const shareWhatsAppBtn = document.querySelector("#shareWhatsAppBtn");
const shareTelegramBtn = document.querySelector("#shareTelegramBtn");
const copyShareBtn = document.querySelector("#copyShareBtn");
const difficultyTabs = document.querySelector("#difficultyTabs");
const languageSelect = document.querySelector("#languageSelect");
const celebrationLayer = document.querySelector("#celebrationLayer");
const catCounter = document.querySelector("#catCounter");

let difficulty = localStorage.getItem("meowdoku-difficulty") || "normal";
let lang = detectPageLanguage() || localStorage.getItem("meowdoku-language") || detectLanguage();
let puzzleIndex = loadLevelProgress(difficulty);
let mode = "place";
let assistMode = localStorage.getItem("meowdoku-assist") === "on";
let cells = new Map();
let history = [];
let mistakes = currentPack().hearts;
let startedAt = Date.now();
let timer = 0;
let timerStarted = false;
let hintCell = null;
let errorCell = null;
let audioContext = null;
let statusKey = "statusStart";
let statusValue = "";
let latestShare = null;

function t(keyName, params = {}) {
  let text = (i18n[lang] || i18n.en)[keyName] || i18n.en[keyName] || keyName;
  for (const [key, value] of Object.entries(params)) {
    text = text.replaceAll(`{${key}}`, value);
  }
  return text;
}

function shareText(keyName, params = {}) {
  const pack = shareLocales[lang] || shareLocales.en;
  let text = pack[keyName] || shareLocales.en[keyName] || keyName;
  for (const [key, value] of Object.entries(params)) {
    text = text.replaceAll(`{${key}}`, value);
  }
  return text;
}

function achievementLine(levelNumber) {
  const pack = shareLocales[lang] || shareLocales.en;
  const lines = pack.lines || shareLocales.en.lines;
  return lines[(levelNumber - 1) % lines.length];
}

function key(row, col) {
  return `${row},${col}`;
}

function currentPack() {
  return puzzlePacks[difficulty] || puzzlePacks.normal;
}

function readSaveProfile() {
  try {
    return JSON.parse(localStorage.getItem(saveProfileKey) || "{}");
  } catch {
    return {};
  }
}

function writeSaveProfile(profile) {
  localStorage.setItem(saveProfileKey, JSON.stringify({
    version: 1,
    levels: {},
    bestTimes: {},
    ...profile,
    updatedAt: new Date().toISOString()
  }));
}

function loadLevelProgress(levelDifficulty) {
  const profile = readSaveProfile();
  const profileLevel = Number(profile.levels?.[levelDifficulty]);
  if (Number.isFinite(profileLevel) && profileLevel >= 0) return profileLevel;
  const legacy = Number(localStorage.getItem(`meowdoku-level-${levelDifficulty}`) || 0);
  return Number.isFinite(legacy) && legacy >= 0 ? legacy : 0;
}

function saveLevelProgress(levelDifficulty = difficulty, levelIndex = puzzleIndex) {
  const profile = readSaveProfile();
  profile.levels = { ...(profile.levels || {}), [levelDifficulty]: levelIndex };
  profile.currentDifficulty = levelDifficulty;
  localStorage.setItem(`meowdoku-level-${levelDifficulty}`, String(levelIndex));
  writeSaveProfile(profile);
}

function saveBestTime(levelDifficulty, levelNumber, elapsed) {
  const profile = readSaveProfile();
  const byDifficulty = profile.bestTimes?.[levelDifficulty] || {};
  const previous = Number(byDifficulty[levelNumber] || 0);
  if (previous && elapsed >= previous) return;
  profile.bestTimes = {
    ...(profile.bestTimes || {}),
    [levelDifficulty]: { ...byDifficulty, [levelNumber]: elapsed }
  };
  localStorage.setItem(bestKey(levelDifficulty, levelNumber), String(elapsed));
  writeSaveProfile(profile);
}

function loadBestTime(levelDifficulty = difficulty, levelNumber = currentLevelNumber()) {
  const profile = readSaveProfile();
  const profileBest = Number(profile.bestTimes?.[levelDifficulty]?.[levelNumber] || 0);
  if (profileBest) return profileBest;
  return Number(localStorage.getItem(bestKey(levelDifficulty, levelNumber)) || 0);
}

function detectLanguage() {
  const supported = new Set(languageCatalog.map(([code]) => code));
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  for (const candidate of browserLanguages) {
    const normalized = candidate.toLowerCase();
    if (normalized === "zh-hant" || normalized.includes("zh-tw") || normalized.includes("zh-hk") || normalized.includes("zh-mo")) return "zh-Hant";
    const code = normalized.split("-")[0];
    if (supported.has(code)) return code;
  }
  return "en";
}

function detectPageLanguage() {
  const supported = new Set(languageCatalog.map(([code]) => code));
  const firstPathPart = window.location.pathname.split("/").filter(Boolean)[0];
  return supported.has(firstPathPart) ? firstPathPart : "";
}

function currentPuzzle() {
  const pack = currentPack();
  const cacheKey = `${difficulty}-${puzzleIndex}`;
  if (generatedPuzzleCache.has(cacheKey)) return generatedPuzzleCache.get(cacheKey);
  const base = pack.puzzles[puzzleIndex % pack.puzzles.length];
  const variant = Math.floor(puzzleIndex / pack.puzzles.length);
  const puzzle = {
    title: base.title,
    size: base.size,
    solution: transformSolution(base.solution, base.size, variant)
  };
  puzzle.regions = buildRegions(puzzle);
  generatedPuzzleCache.set(cacheKey, puzzle);
  return puzzle;
}

function transformSolution(solution, size, variant) {
  const transform = variant % 8;
  return solution.map(([row, col]) => {
    switch (transform) {
      case 1: return [row, size - 1 - col];
      case 2: return [size - 1 - row, col];
      case 3: return [size - 1 - row, size - 1 - col];
      case 4: return [col, row];
      case 5: return [size - 1 - col, size - 1 - row];
      case 6: return [col, size - 1 - row];
      case 7: return [size - 1 - col, row];
      default: return [row, col];
    }
  });
}

function currentLevelNumber() {
  return puzzleIndex + 1;
}

function startTimer() {
  if (timerStarted) return;
  timerStarted = true;
  startedAt = Date.now() - timer;
}

function stopTimer() {
  if (timerStarted) timer = Date.now() - startedAt;
  timerStarted = false;
}

function elapsedTime() {
  return timerStarted ? Date.now() - startedAt : timer;
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

function bestKey(levelDifficulty = difficulty, levelNumber = currentLevelNumber()) {
  return `meowdoku-best-${levelDifficulty}-level-${levelNumber}`;
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
  catCounter.style.gridTemplateColumns = `repeat(${Math.min(total, 4)}, 1fr)`;
  for (let i = 0; i < total; i += 1) {
    const slot = document.createElement("span");
    slot.className = `cat-slot ${i >= total - placed ? "used" : ""}`;
    catCounter.appendChild(slot);
  }
}

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.documentElement.dir = ["ar", "fa", "he", "ur"].includes(lang) ? "rtl" : "ltr";
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
  timerEl.setAttribute("aria-label", timerStarted ? "Timer running" : "Timer paused");
  nativeShareBtn.textContent = shareText("share");
  copyShareBtn.textContent = shareText("copy");
}

function render() {
  const puzzle = currentPuzzle();
  const placed = [...cells.values()].filter((value) => value === "cat").length;
  const total = puzzle.solution.length;
  const best = loadBestTime();

  applyLanguage();
  levelTitle.textContent = `${t("level")} ${currentLevelNumber()}`;
  levelMeta.textContent = t("roomsCats", { rooms: total, cats: total });
  renderHearts();
  renderCatCounter(placed, total);
  bestTimeEl.textContent = best ? t("best", { time: formatTime(best) }) : t("bestEmpty");
  progressBar.style.width = `${Math.round((placed / total) * 100)}%`;
  assistToggle.textContent = assistMode ? t("assistMode") : t("defaultMode");
  assistToggle.setAttribute("aria-pressed", String(assistMode));
  document.querySelector("#placeMode").classList.toggle("active", mode === "place");
  document.querySelector("#markMode").classList.toggle("active", mode === "mark");
  assistToggle.classList.toggle("active", assistMode);

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

  startTimer();
  history.push(new Map(cells));
  setState(row, col, "cat");
  setStatus("statusGood");
  playTone("place");
  render();
  checkWin();
}

function buildShareData(elapsed, heartsLeft) {
  const level = currentLevelNumber();
  const difficultyLabel = t(difficulty);
  const time = formatTime(elapsed);
  const params = { level, difficulty: difficultyLabel, time, hearts: heartsLeft };
  const url = `${window.location.origin}${routeLanguagePrefix()}#play`;
  const text = shareText("text", params);
  return {
    title: `Meowdoku Level ${level}`,
    url,
    text,
    message: `${text} ${url}`,
    summary: shareText("summary", params),
    achievement: achievementLine(level)
  };
}

function routeLanguagePrefix() {
  const firstPathPart = window.location.pathname.split("/").filter(Boolean)[0];
  const supported = new Set(languageCatalog.map(([code]) => code));
  return supported.has(firstPathPart) && firstPathPart !== "en" ? `/${firstPathPart}/` : "/";
}

function shareUrl(channel) {
  if (!latestShare) return "";
  const url = encodeURIComponent(latestShare.url);
  const text = encodeURIComponent(latestShare.text);
  const message = encodeURIComponent(latestShare.message);
  const urls = {
    x: `https://twitter.com/intent/tweet?text=${message}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://wa.me/?text=${message}`,
    telegram: `https://t.me/share/url?url=${url}&text=${text}`
  };
  return urls[channel] || latestShare.url;
}

function openShare(channel) {
  const target = shareUrl(channel);
  if (!target) return;
  window.open(target, "_blank", "noopener,noreferrer");
}

async function nativeShare() {
  if (!latestShare) return;
  if (navigator.share) {
    try {
      await navigator.share({ title: latestShare.title, text: latestShare.text, url: latestShare.url });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  await copyShareText();
}

async function copyShareText() {
  if (!latestShare) return;
  try {
    await navigator.clipboard.writeText(latestShare.message);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = latestShare.message;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  copyShareBtn.textContent = shareText("copied");
  window.setTimeout(() => {
    copyShareBtn.textContent = shareText("copy");
  }, 1400);
}

function checkWin() {
  const puzzle = currentPuzzle();
  const cats = placedCats();
  if (cats.length !== puzzle.solution.length) return;

  const rooms = new Set(cats.map((cat) => cat.region));
  if (rooms.size !== puzzle.solution.length) return;
  if (cats.some((cat) => placementViolation(cat.row, cat.col))) return;

  const elapsed = elapsedTime();
  saveBestTime(difficulty, currentLevelNumber(), elapsed);
  stopTimer();
  latestShare = buildShareData(elapsed, mistakes);
  resultTitle.textContent = t("resultTitle");
  resultSummary.textContent = latestShare.summary;
  resultCopy.textContent = t("resultCopy", {
    time: formatTime(elapsed),
    hearts: mistakes,
    plural: mistakes === 1 ? "" : "s"
  }) + ` ${latestShare.achievement}`;
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

function resetPuzzle(options = {}) {
  const { autoStart = false } = options;
  cells = new Map();
  history = [];
  mistakes = currentPack().hearts;
  hintCell = null;
  errorCell = null;
  startedAt = Date.now();
  timer = 0;
  timerStarted = false;
  statusValue = "";
  statusKey = autoStart ? "statusStart" : "statusFirstCat";
  latestShare = null;
  resultModal.classList.add("hidden");
  if (autoStart) startTimer();
  render();
}

function nextPuzzle() {
  puzzleIndex += 1;
  saveLevelProgress();
  resetPuzzle({ autoStart: true });
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
document.querySelector("#resetBtn").addEventListener("click", () => resetPuzzle({ autoStart: currentLevelNumber() > 1 }));
document.querySelector("#nextBtn").addEventListener("click", nextPuzzle);
document.querySelector("#modalNext").addEventListener("click", nextPuzzle);
document.querySelector("#modalClose").addEventListener("click", () => resultModal.classList.add("hidden"));
nativeShareBtn.addEventListener("click", nativeShare);
shareXBtn.addEventListener("click", () => openShare("x"));
shareFacebookBtn.addEventListener("click", () => openShare("facebook"));
shareWhatsAppBtn.addEventListener("click", () => openShare("whatsapp"));
shareTelegramBtn.addEventListener("click", () => openShare("telegram"));
copyShareBtn.addEventListener("click", copyShareText);
difficultyTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-difficulty]");
  if (!button || button.dataset.difficulty === difficulty) return;
  difficulty = button.dataset.difficulty;
  localStorage.setItem("meowdoku-difficulty", difficulty);
  puzzleIndex = loadLevelProgress(difficulty);
  resetPuzzle();
});
languageSelect.addEventListener("change", () => {
  lang = languageSelect.value;
  localStorage.setItem("meowdoku-language", lang);
  statusValue = "";
  render();
});

window.setInterval(() => {
  timerEl.textContent = formatTime(elapsedTime());
}, 250);

for (const [code] of languageCatalog) {
  i18n[code].level = levelLabels[code] || levelLabels.en;
  i18n[code].statusFirstCat = firstCatLabels[code] || firstCatLabels.en;
}

function orderedLanguageCatalog() {
  const preferred = detectLanguage();
  return [...languageCatalog].sort(([aCode, aLabel], [bCode, bLabel]) => {
    if (aCode === preferred) return -1;
    if (bCode === preferred) return 1;
    return aLabel.localeCompare(bLabel, "en");
  });
}

for (const [code, label] of orderedLanguageCatalog()) {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = label;
  languageSelect.appendChild(option);
}

saveLevelProgress();
resetPuzzle();
