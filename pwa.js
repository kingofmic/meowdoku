(() => {
  const DISMISS_KEY = "meowdoku-pwa-dismissed-at";
  const INSTALLED_KEY = "meowdoku-pwa-installed";
  const DAY = 24 * 60 * 60 * 1000;
  const SNOOZE_DAYS = 3;

  const copy = {
    en: {
      title: "Make Meowdoku one tap",
      body: "Add the game shortcut so your next cat puzzle opens full-screen from your home screen.",
      install: "Add Meowdoku",
      later: "Not now",
      stepsTitle: "Add it from your browser",
      iosSteps: "Tap Share, then choose Add to Home Screen.",
      browserSteps: "Open the browser menu, then choose Add to Home screen.",
      victoryTitle: "Want the next level one tap away?",
      victoryBody: "Add Meowdoku to your home screen and come back to your saved level faster."
    },
    zh: {
      title: "把 Meowdoku 变成一键打开",
      body: "添加到手机桌面，下次直接全屏继续玩猫咪关卡。",
      install: "添加 Meowdoku",
      later: "暂时不要",
      stepsTitle: "从浏览器添加",
      iosSteps: "点分享按钮，再选“添加到主屏幕”。",
      browserSteps: "打开浏览器菜单，再选择“添加到主屏幕”。",
      victoryTitle: "下一关想一键打开吗？",
      victoryBody: "把 Meowdoku 加到手机桌面，下次直接回到你的关卡进度。"
    },
    "zh-Hant": {
      title: "把 Meowdoku 變成一鍵打開",
      body: "加入手機主畫面，下次直接全螢幕繼續玩貓咪關卡。",
      install: "加入 Meowdoku",
      later: "暫時不要",
      stepsTitle: "從瀏覽器加入",
      iosSteps: "點分享按鈕，再選「加入主畫面」。",
      browserSteps: "打開瀏覽器選單，再選「加入主畫面」。",
      victoryTitle: "下一關想一鍵打開嗎？",
      victoryBody: "把 Meowdoku 加到手機主畫面，下次直接回到你的關卡進度。"
    },
    ja: {
      title: "Meowdoku をワンタップで",
      body: "ホーム画面に追加すると、次の猫パズルを全画面ですぐ開けます。",
      install: "Meowdoku を追加",
      later: "あとで",
      stepsTitle: "ブラウザから追加",
      iosSteps: "共有ボタンから「ホーム画面に追加」を選んでください。",
      browserSteps: "ブラウザのメニューから「ホーム画面に追加」を選んでください。",
      victoryTitle: "次のレベルをすぐ開きますか？",
      victoryBody: "Meowdoku をホーム画面に追加すると、保存した進行にすぐ戻れます。"
    },
    ko: {
      title: "Meowdoku를 한 번에 열기",
      body: "홈 화면에 추가하면 다음 고양이 퍼즐을 전체 화면으로 바로 열 수 있어요.",
      install: "Meowdoku 추가",
      later: "나중에",
      stepsTitle: "브라우저에서 추가",
      iosSteps: "공유 버튼을 누른 뒤 홈 화면에 추가를 선택하세요.",
      browserSteps: "브라우저 메뉴를 열고 홈 화면에 추가를 선택하세요.",
      victoryTitle: "다음 레벨을 바로 열까요?",
      victoryBody: "Meowdoku를 홈 화면에 추가하면 저장된 진행으로 더 빠르게 돌아올 수 있어요."
    }
  };

  let deferredPrompt = null;
  let banner = null;

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

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    banner?.remove();
    banner = null;
    const inline = document.querySelector("#victoryInstallPrompt");
    if (inline) inline.hidden = true;
  }

  function stepsText() {
    return isIos() ? text("iosSteps") : text("browserSteps");
  }

  async function requestInstall(container) {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice.catch(() => null);
      deferredPrompt = null;
      if (choice?.outcome === "accepted") {
        localStorage.setItem(INSTALLED_KEY, "1");
        banner?.remove();
        banner = null;
        renderVictoryInstallPrompt({ force: true });
        return;
      }
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
      return;
    }

    const card = container || banner;
    if (!card) return;
    card.classList.add("is-expanded");
    const steps = card.querySelector(".pwa-install-steps");
    if (steps) steps.textContent = stepsText();
  }

  function renderBanner() {
    if (!canSuggestInstall() || banner) return;

    banner = document.createElement("aside");
    banner.className = "pwa-install-card";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.innerHTML = `
      <img src="/assets/cat-icon-192.png" alt="" class="pwa-install-icon">
      <div class="pwa-install-copy">
        <strong>${text("title")}</strong>
        <p>${text("body")}</p>
        <p class="pwa-install-steps" aria-live="polite"></p>
      </div>
      <div class="pwa-install-actions">
        <button class="pwa-install-primary" type="button">${text("install")}</button>
        <button class="pwa-install-later" type="button">${text("later")}</button>
      </div>
    `;

    document.body.appendChild(banner);
    banner.querySelector(".pwa-install-primary")?.addEventListener("click", () => requestInstall(banner));
    banner.querySelector(".pwa-install-later")?.addEventListener("click", dismiss);
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
      <div class="victory-install-actions">
        <button class="pwa-install-primary" type="button">${text("install")}</button>
        <button class="pwa-install-later" type="button">${text("later")}</button>
      </div>
    `;
    slot.querySelector(".pwa-install-primary")?.addEventListener("click", () => requestInstall(slot));
    slot.querySelector(".pwa-install-later")?.addEventListener("click", dismiss);
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    setTimeout(renderBanner, 1200);
  });

  window.addEventListener("appinstalled", () => {
    localStorage.setItem(INSTALLED_KEY, "1");
    banner?.remove();
    banner = null;
    renderVictoryInstallPrompt();
  });

  window.addEventListener("load", () => {
    setTimeout(renderBanner, 1800);
  });

  window.addEventListener("meowdoku:victory", () => {
    renderVictoryInstallPrompt();
  });

  window.MeowdokuPWA = {
    showInstallPrompt: () => renderBanner(),
    showVictoryInstallPrompt: () => renderVictoryInstallPrompt(),
    canSuggestInstall
  };
})();
