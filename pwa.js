(() => {
  const DISMISS_KEY = "meowdoku-pwa-dismissed-at";
  const INSTALLED_KEY = "meowdoku-pwa-installed";
  const DAY = 24 * 60 * 60 * 1000;
  const SNOOZE_DAYS = 3;

  const copy = {
    en: {
      top: "Add to Home Screen. Open Meowdoku faster.",
      title: "Come back to your cats in one tap",
      reward: "Save your level and best times",
      body: "Add Meowdoku to your home screen for a full-screen puzzle break.",
      install: "Add",
      stepsTitle: "Follow these steps",
      iosSteps: "Tap Share, then choose Add to Home Screen.",
      iosBrowserSteps: "Open this page in Safari, tap Share, then choose Add to Home Screen.",
      browserSteps: "Open the browser menu, then choose Add to Home screen.",
      victoryTitle: "Next level, one tap away",
      victoryBody: "Add Meowdoku to your home screen and return to your saved progress faster."
    },
    zh: {
      top: "添加到主屏幕，下次更快打开 Meowdoku。",
      title: "一键回到你的猫咪关卡",
      reward: "保存关卡进度和最佳时间",
      body: "把 Meowdoku 加到手机桌面，下次直接全屏玩。",
      install: "添加",
      stepsTitle: "按这一步添加",
      iosSteps: "点分享按钮，再选“添加到主屏幕”。",
      iosBrowserSteps: "先用 Safari 打开本页，再点分享按钮，选择“添加到主屏幕”。",
      browserSteps: "打开浏览器菜单，再选择“添加到主屏幕”。",
      victoryTitle: "下一关，一键打开",
      victoryBody: "把 Meowdoku 加到手机桌面，下次更快回到你的关卡进度。"
    },
    "zh-Hant": {
      top: "加入主畫面，下次更快打開 Meowdoku。",
      title: "一鍵回到你的貓咪關卡",
      reward: "保存關卡進度和最佳時間",
      body: "把 Meowdoku 加到手機主畫面，下次直接全螢幕玩。",
      install: "加入",
      stepsTitle: "按這一步加入",
      iosSteps: "點分享按鈕，再選「加入主畫面」。",
      iosBrowserSteps: "先用 Safari 打開本頁，再點分享按鈕，選擇「加入主畫面」。",
      browserSteps: "打開瀏覽器選單，再選「加入主畫面」。",
      victoryTitle: "下一關，一鍵打開",
      victoryBody: "把 Meowdoku 加到手機主畫面，下次更快回到你的關卡進度。"
    },
    ja: {
      top: "ホーム画面に追加して、Meowdoku をすぐ開く。",
      title: "猫パズルにワンタップで戻る",
      reward: "レベル進行とベストタイムを保存",
      body: "Meowdoku をホーム画面に追加して、全画面ですぐ遊べます。",
      install: "追加",
      stepsTitle: "この手順で追加",
      iosSteps: "共有ボタンから「ホーム画面に追加」を選んでください。",
      iosBrowserSteps: "Safari でこのページを開き、共有ボタンから「ホーム画面に追加」を選んでください。",
      browserSteps: "ブラウザのメニューから「ホーム画面に追加」を選んでください。",
      victoryTitle: "次のレベルをすぐ開く",
      victoryBody: "Meowdoku をホーム画面に追加すると、保存した進行にすぐ戻れます。"
    },
    ko: {
      top: "홈 화면에 추가하고 Meowdoku를 더 빠르게 여세요.",
      title: "고양이 퍼즐로 한 번에 돌아오기",
      reward: "레벨 진행과 최고 기록 저장",
      body: "Meowdoku를 홈 화면에 추가하면 전체 화면으로 바로 플레이할 수 있어요.",
      install: "추가",
      stepsTitle: "이 단계로 추가",
      iosSteps: "공유 버튼을 누른 뒤 홈 화면에 추가를 선택하세요.",
      iosBrowserSteps: "이 페이지를 Safari에서 열고 공유 버튼을 누른 뒤 홈 화면에 추가를 선택하세요.",
      browserSteps: "브라우저 메뉴를 열고 홈 화면에 추가를 선택하세요.",
      victoryTitle: "다음 레벨을 한 번에",
      victoryBody: "Meowdoku를 홈 화면에 추가하면 저장된 진행으로 더 빠르게 돌아올 수 있어요."
    }
  };

  let deferredPrompt = null;
  let overlay = null;
  let topBar = null;

  function langKey() {
    const saved = localStorage.getItem("meowdoku-language");
    const html = document.documentElement.lang;
    const raw = saved || html || navigator.language || "en";
    const lowered = raw.toLowerCase();
    if (lowered.startsWith("zh-hant") || lowered.includes("tw") || lowered.includes("hk")) return "zh-Hant";
    const base = lowered.split("-")[0];
    return copy[base] ? base : "en";
  }

  function text(key) {
    return (copy[langKey()] || copy.en)[key] || copy.en[key];
  }

  function isMobile() {
    return matchMedia("(max-width: 860px)").matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function isIos() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function isIosSafari() {
    const ua = navigator.userAgent;
    return isIos() && /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(ua);
  }

  function forcePrompt() {
    return new URLSearchParams(window.location.search).has("install");
  }

  function wasRecentlyDismissed() {
    if (forcePrompt()) return false;
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return dismissedAt && Date.now() - dismissedAt < SNOOZE_DAYS * DAY;
  }

  function canSuggestInstall({ respectSnooze = true } = {}) {
    if (!isMobile() || isStandalone()) return false;
    if (!forcePrompt() && localStorage.getItem(INSTALLED_KEY) === "1") return false;
    return !respectSnooze || !wasRecentlyDismissed();
  }

  function dismissOverlay() {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    overlay?.remove();
    overlay = null;
  }

  function stepsText() {
    if (!isIos()) return text("browserSteps");
    return isIosSafari() ? text("iosSteps") : text("iosBrowserSteps");
  }

  async function requestInstall(container) {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice.catch(() => null);
      deferredPrompt = null;
      if (choice?.outcome === "accepted") {
        localStorage.setItem(INSTALLED_KEY, "1");
        overlay?.remove();
        overlay = null;
        topBar?.remove();
        topBar = null;
      } else {
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
      }
      return;
    }

    const card = container || overlay;
    if (!card) return;
    card.classList.add("is-expanded");
    const steps = card.querySelector(".pwa-install-steps");
    if (steps) steps.textContent = stepsText();
    const primary = card.querySelector(".pwa-install-primary");
    if (primary) primary.textContent = text("stepsTitle");
  }

  function renderTopBar() {
    if (!canSuggestInstall({ respectSnooze: false }) || topBar) return;
    document.body.classList.add("has-pwa-top-bar");
    topBar = document.createElement("aside");
    topBar.className = "pwa-top-bar";
    topBar.innerHTML = `
      <span>${text("top")}</span>
      <button type="button" aria-label="${text("install")}">＋</button>
    `;
    document.body.appendChild(topBar);
    topBar.addEventListener("click", () => renderOverlay({ ignoreSnooze: true }));
  }

  function renderOverlay({ ignoreSnooze = false } = {}) {
    if (!canSuggestInstall({ respectSnooze: !ignoreSnooze }) || overlay) return;

    overlay = document.createElement("aside");
    overlay.className = "pwa-install-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-live", "polite");
    overlay.innerHTML = `
      <div class="pwa-install-sheet">
        <div class="pwa-install-art">
          <img src="/assets/cat-icon-512.png" alt="">
        </div>
        <div class="pwa-install-copy">
          <div class="pwa-install-reward">${text("reward")}</div>
          <strong>${text("title")}</strong>
          <p>${text("body")}</p>
          <p class="pwa-install-steps" aria-live="polite"></p>
        </div>
        <button class="pwa-install-primary" type="button"><span>＋</span>${text("install")}</button>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) dismissOverlay();
    });
    overlay.querySelector(".pwa-install-primary")?.addEventListener("click", () => requestInstall(overlay));
  }

  function renderVictoryInstallPrompt() {
    const slot = document.querySelector("#victoryInstallPrompt");
    if (!slot) return;
    if (!canSuggestInstall({ respectSnooze: false })) {
      slot.hidden = true;
      return;
    }
    slot.hidden = false;
    slot.innerHTML = `
      <div class="victory-install-copy">
        <strong>${text("victoryTitle")}</strong>
        <p>${text("victoryBody")}</p>
        <p class="pwa-install-steps" aria-live="polite"></p>
      </div>
      <button class="pwa-install-primary" type="button"><span>＋</span>${text("install")}</button>
    `;
    slot.querySelector(".pwa-install-primary")?.addEventListener("click", () => requestInstall(slot));
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    setTimeout(() => renderOverlay(), 1200);
  });

  window.addEventListener("appinstalled", () => {
    localStorage.setItem(INSTALLED_KEY, "1");
    overlay?.remove();
    overlay = null;
    topBar?.remove();
    topBar = null;
    document.body.classList.remove("has-pwa-top-bar");
    renderVictoryInstallPrompt();
  });

  window.addEventListener("load", () => {
    renderTopBar();
    setTimeout(() => renderOverlay(), 1800);
  });

  window.addEventListener("meowdoku:victory", () => {
    renderVictoryInstallPrompt();
  });

  window.MeowdokuPWA = {
    showInstallPrompt: () => renderOverlay({ ignoreSnooze: true }),
    showVictoryInstallPrompt: () => renderVictoryInstallPrompt(),
    canSuggestInstall
  };
})();
