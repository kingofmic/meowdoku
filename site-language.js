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
  ].sort((a, b) => a[1].localeCompare(b[1], "en"));

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

  select.innerHTML = "";
  for (const [code, label] of languages) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = label;
    select.appendChild(option);
  }

  select.value = currentLang();
  select.addEventListener("change", () => {
    localStorage.setItem("meowdoku-language", select.value);
    window.location.href = targetPath(select.value);
  });
})();
