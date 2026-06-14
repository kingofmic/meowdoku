(() => {
  const DISMISS_KEY = "meowdoku-pwa-dismissed-at";
  const INSTALLED_KEY = "meowdoku-pwa-installed";
  const DAY = 24 * 60 * 60 * 1000;
  const SNOOZE_DAYS = 14;

  const copy = {
    en: {
      title: "Play Meowdoku like an app",
      body: "Add it to your home screen for a faster, full-screen cat puzzle break.",
      install: "Add to Home",
      later: "Later",
      ios: "Tap Share, then Add to Home Screen.",
      browser: "Open the browser menu, then choose Add to Home screen."
    },
    zh: {
      title: "把 Meowdoku 加到手机桌面",
      body: "下次可以像 App 一样直接打开，玩猫咪逻辑关卡更快。",
      install: "添加到主屏幕",
      later: "稍后",
      ios: "点浏览器分享按钮，再选“添加到主屏幕”。",
      browser: "打开浏览器菜单，再选择“添加到主屏幕”。"
    },
    "zh-Hant": {
      title: "把 Meowdoku 加到手機主畫面",
      body: "下次可以像 App 一樣直接打開，玩貓咪邏輯關卡更快。",
      install: "加入主畫面",
      later: "稍後",
      ios: "點瀏覽器分享按鈕，再選「加入主畫面」。",
      browser: "打開瀏覽器選單，再選「加入主畫面」。"
    },
    ja: {
      title: "Meowdoku をホーム画面へ",
      body: "アプリのようにすぐ開いて、猫パズルを全画面で遊べます。",
      install: "ホームに追加",
      later: "あとで",
      ios: "共有ボタンから「ホーム画面に追加」を選んでください。",
      browser: "ブラウザのメニューから「ホーム画面に追加」を選んでください。"
    },
    ko: {
      title: "Meowdoku를 홈 화면에 추가",
      body: "앱처럼 바로 열고 전체 화면으로 고양이 퍼즐을 즐겨보세요.",
      install: "홈에 추가",
      later: "나중에",
      ios: "공유 버튼을 누른 뒤 홈 화면에 추가를 선택하세요.",
      browser: "브라우저 메뉴를 열고 홈 화면에 추가를 선택하세요."
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

  function shouldShow() {
    if (!isMobile() || isStandalone()) return false;
    if (!forcePrompt() && localStorage.getItem(INSTALLED_KEY) === "1") return false;
    return !wasRecentlyDismissed();
  }

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    banner?.remove();
    banner = null;
  }

  function messageFor(mode) {
    if (mode === "ios") return text("ios");
    if (mode === "browser") return text("browser");
    return text("body");
  }

  function renderBanner(mode = "browser") {
    if (!shouldShow() || banner) return;

    banner = document.createElement("aside");
    banner.className = "pwa-install-card";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.innerHTML = `
      <img src="/assets/cat-icon-192.png" alt="" class="pwa-install-icon">
      <div class="pwa-install-copy">
        <strong>${text("title")}</strong>
        <p>${messageFor(mode)}</p>
      </div>
      <div class="pwa-install-actions">
        ${mode === "prompt" ? `<button class="pwa-install-primary" type="button">${text("install")}</button>` : ""}
        <button class="pwa-install-later" type="button">${text("later")}</button>
      </div>
    `;

    document.body.appendChild(banner);
    banner.querySelector(".pwa-install-later")?.addEventListener("click", dismiss);
    banner.querySelector(".pwa-install-primary")?.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice.catch(() => null);
      deferredPrompt = null;
      if (choice?.outcome === "accepted") {
        localStorage.setItem(INSTALLED_KEY, "1");
      } else {
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
      }
      banner?.remove();
      banner = null;
    });
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    setTimeout(() => renderBanner("prompt"), 1400);
  });

  window.addEventListener("appinstalled", () => {
    localStorage.setItem(INSTALLED_KEY, "1");
    banner?.remove();
    banner = null;
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      if (deferredPrompt) return;
      renderBanner(isIos() ? "ios" : "browser");
    }, 2200);
  });
})();
