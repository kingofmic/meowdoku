(function () {
  const languages = [
    ["ar", "العربية"], ["bn", "বাংলা"], ["cs", "Čeština"], ["de", "Deutsch"],
    ["el", "Ελληνικά"], ["en", "English"], ["es", "Español"], ["fa", "فارسی"],
    ["fil", "Filipino"], ["fr", "Français"], ["gu", "ગુજરાતી"], ["ha", "Hausa"],
    ["he", "עברית"], ["hi", "हिन्दी"], ["hu", "Magyar"], ["id", "Bahasa Indonesia"],
    ["it", "Italiano"], ["ja", "日本語"], ["jv", "Basa Jawa"], ["ko", "한국어"],
    ["mr", "मराठी"], ["ms", "Bahasa Melayu"], ["nl", "Nederlands"], ["pa", "ਪੰਜਾਬੀ"],
    ["pl", "Polski"], ["pt", "Português"], ["ro", "Română"], ["ru", "Русский"],
    ["sv", "Svenska"], ["sw", "Kiswahili"], ["ta", "தமிழ்"], ["te", "తెలుగు"],
    ["th", "ไทย"], ["tr", "Türkçe"], ["uk", "Українська"], ["ur", "اردو"],
    ["vi", "Tiếng Việt"], ["zh", "简体中文"], ["zh-Hant", "繁體中文"]
  ];

  const languageCodes = new Set(languages.map(([code]) => code));
  const select = document.querySelector("#languageSelect");
  if (!select) return;

  function pathParts() {
    return window.location.pathname.split("/").filter(Boolean);
  }

  function pathLanguage() {
    const [first] = pathParts();
    return languageCodes.has(first) ? first : "";
  }

  function browserLang() {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
    for (const candidate of browserLanguages) {
      const normalized = candidate.toLowerCase();
      if (normalized === "zh-hant" || normalized.includes("zh-tw") || normalized.includes("zh-hk") || normalized.includes("zh-mo")) return "zh-Hant";
      const code = normalized.split("-")[0];
      if (languageCodes.has(code)) return code;
    }
    return "en";
  }

  function currentLang() {
    return pathLanguage() || localStorage.getItem("meowdoku-language") || browserLang();
  }

  function orderedLanguages() {
    const preferred = browserLang();
    return [...languages].sort(([aCode, aLabel], [bCode, bLabel]) => {
      if (aCode === preferred) return -1;
      if (bCode === preferred) return 1;
      return aLabel.localeCompare(bLabel, "en");
    });
  }

  function normalizedSlug() {
    const parts = pathParts();
    if (languageCodes.has(parts[0])) parts.shift();
    return parts.join("/");
  }

  function targetPath(nextLang) {
    const slug = normalizedSlug();
    if (nextLang === "en") return slug ? `/${slug}/` : "/";
    return slug ? `/${nextLang}/${slug}/` : `/${nextLang}/`;
  }

  select.innerHTML = "";
  for (const [code, label] of orderedLanguages()) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = label;
    select.appendChild(option);
  }

  select.value = currentLang();
  select.addEventListener("change", () => {
    const nextLang = select.value;
    localStorage.setItem("meowdoku-language", nextLang);
    const nextPath = targetPath(nextLang);
    if (nextPath !== window.location.pathname) window.location.href = nextPath;
  });
})();
