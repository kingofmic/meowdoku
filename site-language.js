(function () {
  const languages = [
    ["ar", "العربية"], ["bn", "বাংলা"], ["zh", "简体中文"], ["zh-Hant", "繁體中文"],
    ["cs", "Čeština"], ["nl", "Nederlands"], ["en", "English"], ["fil", "Filipino"],
    ["fr", "Français"], ["de", "Deutsch"], ["el", "Ελληνικά"], ["gu", "ગુજરાતી"],
    ["ha", "Hausa"], ["he", "עברית"], ["hi", "हिन्दी"], ["hu", "Magyar"],
    ["id", "Bahasa Indonesia"], ["it", "Italiano"], ["ja", "日本語"], ["jv", "Basa Jawa"],
    ["ko", "한국어"], ["ms", "Bahasa Melayu"], ["mr", "मराठी"], ["pa", "ਪੰਜਾਬੀ"],
    ["fa", "فارسی"], ["pl", "Polski"], ["pt", "Português"], ["ro", "Română"],
    ["ru", "Русский"], ["es", "Español"], ["sw", "Kiswahili"], ["sv", "Svenska"],
    ["ta", "தமிழ்"], ["te", "తెలుగు"], ["th", "ไทย"], ["tr", "Türkçe"],
    ["uk", "Українська"], ["ur", "اردو"], ["vi", "Tiếng Việt"]
  ];

  const languageCodes = new Set(languages.map(([code]) => code));
  const select = document.querySelector("#languageSelect");
  if (!select) return;

  function currentLang() {
    const pathPart = window.location.pathname.split("/").filter(Boolean)[0];
    if (languageCodes.has(pathPart)) return pathPart;
    return localStorage.getItem("meowdoku-language") || "en";
  }

  function targetPath(nextLang) {
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (languageCodes.has(parts[0])) parts.shift();
    const slug = parts.join("/");
    if (slug === "languages") return nextLang === "en" ? "/languages/" : `/${nextLang}/`;
    if (nextLang === "en") return slug ? `/${slug}/` : "/";
    return slug ? `/${nextLang}/${slug}/` : `/${nextLang}/`;
  }

  if (!select.options.length) {
    for (const [code, label] of languages) {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = label;
      select.appendChild(option);
    }
  }

  select.value = currentLang();
  select.addEventListener("change", () => {
    localStorage.setItem("meowdoku-language", select.value);
    window.location.href = targetPath(select.value);
  });
})();
