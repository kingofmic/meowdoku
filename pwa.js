(() => {
  const DISMISS_KEY = "meowdoku-pwa-dismissed-at";
  const INSTALLED_KEY = "meowdoku-pwa-installed";
  const DAY = 24 * 60 * 60 * 1000;
  const SNOOZE_DAYS = 3;
  const supportedLanguages = ["ar", "bn", "cs", "de", "el", "en", "es", "fa", "fil", "fr", "gu", "ha", "he", "hi", "hu", "id", "it", "ja", "jv", "ko", "mr", "ms", "nl", "pa", "pl", "pt", "ro", "ru", "sv", "sw", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"];

  const copy = {
    ar: ["أضف إلى الشاشة الرئيسية وافتح Meowdoku أسرع.", "ارجع إلى قططك بلمسة واحدة", "احفظ المستوى وأفضل وقت", "أضف Meowdoku إلى الشاشة الرئيسية للعب بملء الشاشة.", "إضافة", "اتبع هذه الخطوات", "اضغط مشاركة، ثم اختر إضافة إلى الشاشة الرئيسية.", "افتح هذه الصفحة في Safari، ثم اضغط مشاركة واختر إضافة إلى الشاشة الرئيسية.", "افتح قائمة المتصفح ثم اختر إضافة إلى الشاشة الرئيسية.", "المستوى التالي بلمسة واحدة", "أضف Meowdoku إلى الشاشة الرئيسية لتعود إلى تقدمك أسرع."],
    bn: ["হোম স্ক্রিনে যোগ করুন, Meowdoku দ্রুত খুলুন।", "এক ট্যাপে আপনার বিড়ালদের কাছে ফিরুন", "লেভেল ও সেরা সময় সংরক্ষণ করুন", "ফুল-স্ক্রিন পাজলের জন্য Meowdoku হোম স্ক্রিনে যোগ করুন।", "যোগ করুন", "এই ধাপগুলো অনুসরণ করুন", "Share চাপুন, তারপর Add to Home Screen বেছে নিন।", "Safari-তে এই পেজ খুলে Share চাপুন, তারপর Add to Home Screen বেছে নিন।", "ব্রাউজার মেনু খুলে Add to Home screen বেছে নিন।", "পরের লেভেল এক ট্যাপে", "Meowdoku হোম স্ক্রিনে যোগ করলে সেভ করা অগ্রগতিতে দ্রুত ফিরবেন।"],
    cs: ["Přidejte na plochu a otevřete Meowdoku rychleji.", "Vraťte se ke kočkám jedním klepnutím", "Uložte úroveň a nejlepší časy", "Přidejte Meowdoku na plochu pro hru na celé obrazovce.", "Přidat", "Postupujte takto", "Klepněte na Sdílet a zvolte Přidat na plochu.", "Otevřete tuto stránku v Safari, klepněte na Sdílet a zvolte Přidat na plochu.", "Otevřete menu prohlížeče a zvolte Přidat na plochu.", "Další úroveň na jedno klepnutí", "Přidejte Meowdoku na plochu a vraťte se k postupu rychleji."],
    de: ["Zum Startbildschirm hinzufügen. Meowdoku schneller öffnen.", "Mit einem Tipp zurück zu deinen Katzen", "Level und Bestzeiten speichern", "Füge Meowdoku zum Startbildschirm hinzu und spiele im Vollbild.", "Hinzufügen", "Folge diesen Schritten", "Tippe auf Teilen und dann auf Zum Home-Bildschirm.", "Öffne diese Seite in Safari, tippe auf Teilen und dann auf Zum Home-Bildschirm.", "Öffne das Browsermenü und wähle Zum Startbildschirm hinzufügen.", "Nächstes Level mit einem Tipp", "Füge Meowdoku hinzu und kehre schneller zu deinem Fortschritt zurück."],
    el: ["Προσθήκη στην αρχική οθόνη. Άνοιξε το Meowdoku πιο γρήγορα.", "Γύρνα στις γάτες σου με ένα πάτημα", "Αποθήκευσε επίπεδο και καλύτερους χρόνους", "Πρόσθεσε το Meowdoku στην αρχική οθόνη για παιχνίδι πλήρους οθόνης.", "Προσθήκη", "Ακολούθησε αυτά τα βήματα", "Πάτησε Κοινή χρήση και μετά Προσθήκη στην αρχική οθόνη.", "Άνοιξε τη σελίδα στο Safari, πάτησε Κοινή χρήση και Προσθήκη στην αρχική οθόνη.", "Άνοιξε το μενού του browser και επίλεξε Προσθήκη στην αρχική οθόνη.", "Επόμενο επίπεδο με ένα πάτημα", "Πρόσθεσε το Meowdoku για να επιστρέφεις γρήγορα στην πρόοδό σου."],
    en: ["Add to Home Screen. Open Meowdoku faster.", "Come back to your cats in one tap", "Save your level and best times", "Add Meowdoku to your home screen for a full-screen puzzle break.", "Add", "Follow these steps", "Tap Share, then choose Add to Home Screen.", "Open this page in Safari, tap Share, then choose Add to Home Screen.", "Open the browser menu, then choose Add to Home screen.", "Next level, one tap away", "Add Meowdoku to your home screen and return to your saved progress faster."],
    es: ["Añade a la pantalla de inicio. Abre Meowdoku más rápido.", "Vuelve a tus gatos con un toque", "Guarda tu nivel y mejores tiempos", "Añade Meowdoku a la pantalla de inicio para jugar a pantalla completa.", "Añadir", "Sigue estos pasos", "Toca Compartir y elige Añadir a pantalla de inicio.", "Abre esta página en Safari, toca Compartir y elige Añadir a pantalla de inicio.", "Abre el menú del navegador y elige Añadir a pantalla de inicio.", "Siguiente nivel a un toque", "Añade Meowdoku y vuelve a tu progreso más rápido."],
    fa: ["به صفحه اصلی اضافه کنید و Meowdoku را سریع‌تر باز کنید.", "با یک لمس به گربه‌هایت برگرد", "مرحله و بهترین زمان‌ها را ذخیره کن", "Meowdoku را برای بازی تمام‌صفحه به صفحه اصلی اضافه کنید.", "افزودن", "این مراحل را دنبال کنید", "روی Share بزنید و Add to Home Screen را انتخاب کنید.", "این صفحه را در Safari باز کنید، Share را بزنید و Add to Home Screen را انتخاب کنید.", "منوی مرورگر را باز کنید و Add to Home screen را انتخاب کنید.", "مرحله بعد فقط با یک لمس", "Meowdoku را اضافه کنید و سریع‌تر به پیشرفت ذخیره‌شده برگردید."],
    fil: ["Idagdag sa Home Screen. Mas mabilis buksan ang Meowdoku.", "Balikan ang mga pusa sa isang tap", "I-save ang level at best times", "Idagdag ang Meowdoku sa home screen para sa full-screen puzzle break.", "Idagdag", "Sundin ang mga hakbang", "I-tap ang Share, tapos piliin ang Add to Home Screen.", "Buksan ito sa Safari, i-tap ang Share, tapos piliin ang Add to Home Screen.", "Buksan ang browser menu at piliin ang Add to Home screen.", "Susunod na level, isang tap", "Idagdag ang Meowdoku para mas mabilis bumalik sa progress mo."],
    fr: ["Ajoute à l’écran d’accueil. Ouvre Meowdoku plus vite.", "Retrouve tes chats en un toucher", "Sauvegarde ton niveau et tes meilleurs temps", "Ajoute Meowdoku à l’écran d’accueil pour jouer en plein écran.", "Ajouter", "Suis ces étapes", "Touche Partager, puis Ajouter à l’écran d’accueil.", "Ouvre cette page dans Safari, touche Partager, puis Ajouter à l’écran d’accueil.", "Ouvre le menu du navigateur puis choisis Ajouter à l’écran d’accueil.", "Niveau suivant en un toucher", "Ajoute Meowdoku et reviens plus vite à ta progression."],
    gu: ["હોમ સ્ક્રીન પર ઉમેરો. Meowdoku ઝડપથી ખોલો.", "એક ટેપમાં તમારી બિલાડીઓ પાસે પાછા આવો", "તમારો લેવલ અને શ્રેષ્ઠ સમય સાચવો", "ફુલ-સ્ક્રીન પઝલ માટે Meowdoku હોમ સ્ક્રીન પર ઉમેરો.", "ઉમેરો", "આ પગલાં અનુસરો", "Share ટેપ કરો, પછી Add to Home Screen પસંદ કરો.", "Safariમાં આ પેજ ખોલો, Share ટેપ કરો અને Add to Home Screen પસંદ કરો.", "બ્રાઉઝર મેનૂ ખોલો અને Add to Home screen પસંદ કરો.", "આગલો લેવલ એક ટેપમાં", "Meowdoku ઉમેરો અને તમારી પ્રગતિ પર ઝડપથી પાછા આવો."],
    ha: ["Ƙara zuwa Home Screen. Buɗe Meowdoku da sauri.", "Koma ga kuliyoyinka da dannawa ɗaya", "Ajiye mataki da mafi kyawun lokaci", "Ƙara Meowdoku zuwa home screen don wasa a cikakken allo.", "Ƙara", "Bi waɗannan matakai", "Danna Share, sannan zaɓi Add to Home Screen.", "Buɗe shafin nan a Safari, danna Share, sannan zaɓi Add to Home Screen.", "Buɗe menu na browser sannan zaɓi Add to Home screen.", "Mataki na gaba da dannawa ɗaya", "Ƙara Meowdoku don komawa ci gabanka da sauri."],
    he: ["הוסף למסך הבית. פתח את Meowdoku מהר יותר.", "חזרה לחתולים שלך בלחיצה אחת", "שמור שלב וזמני שיא", "הוסף את Meowdoku למסך הבית למשחק במסך מלא.", "הוסף", "עקוב אחר השלבים", "הקש שיתוף ואז הוסף למסך הבית.", "פתח את הדף ב-Safari, הקש שיתוף ואז הוסף למסך הבית.", "פתח את תפריט הדפדפן ובחר הוסף למסך הבית.", "השלב הבא בלחיצה אחת", "הוסף את Meowdoku וחזור מהר יותר להתקדמות שלך."],
    hi: ["होम स्क्रीन पर जोड़ें। Meowdoku जल्दी खोलें।", "एक टैप में अपनी बिल्लियों पर लौटें", "लेवल और बेस्ट टाइम सेव करें", "फुल-स्क्रीन पजल के लिए Meowdoku को होम स्क्रीन पर जोड़ें।", "जोड़ें", "इन चरणों का पालन करें", "Share टैप करें, फिर Add to Home Screen चुनें।", "इस पेज को Safari में खोलें, Share टैप करें, फिर Add to Home Screen चुनें।", "ब्राउज़र मेनू खोलें और Add to Home screen चुनें।", "अगला लेवल एक टैप दूर", "Meowdoku जोड़ें और अपनी सेव प्रगति पर जल्दी लौटें।"],
    hu: ["Add hozzá a kezdőképernyőhöz. Nyisd meg gyorsabban a Meowdokut.", "Térj vissza a macskákhoz egy koppintással", "Mentsd a szintet és a legjobb időket", "Add a Meowdokut a kezdőképernyőhöz teljes képernyős játékhoz.", "Hozzáadás", "Kövesd ezeket a lépéseket", "Koppints a Megosztásra, majd a Hozzáadás a kezdőképernyőhöz elemre.", "Nyisd meg Safari-ban, koppints a Megosztásra, majd add hozzá a kezdőképernyőhöz.", "Nyisd meg a böngésző menüjét, és válaszd a Hozzáadás a kezdőképernyőhöz lehetőséget.", "Következő szint egy koppintással", "Add hozzá a Meowdokut, és térj vissza gyorsabban a haladásodhoz."],
    id: ["Tambahkan ke layar utama. Buka Meowdoku lebih cepat.", "Kembali ke kucingmu dengan satu ketuk", "Simpan level dan waktu terbaik", "Tambahkan Meowdoku ke layar utama untuk bermain layar penuh.", "Tambah", "Ikuti langkah ini", "Ketuk Bagikan, lalu pilih Tambahkan ke Layar Utama.", "Buka halaman ini di Safari, ketuk Bagikan, lalu Tambahkan ke Layar Utama.", "Buka menu browser lalu pilih Tambahkan ke layar utama.", "Level berikutnya sekali ketuk", "Tambahkan Meowdoku dan kembali ke progres tersimpan lebih cepat."],
    it: ["Aggiungi alla schermata Home. Apri Meowdoku più velocemente.", "Torna ai tuoi gatti con un tocco", "Salva livello e tempi migliori", "Aggiungi Meowdoku alla Home per giocare a schermo intero.", "Aggiungi", "Segui questi passaggi", "Tocca Condividi, poi Aggiungi a Home.", "Apri questa pagina in Safari, tocca Condividi, poi Aggiungi a Home.", "Apri il menu del browser e scegli Aggiungi a schermata Home.", "Prossimo livello con un tocco", "Aggiungi Meowdoku e torna più in fretta ai tuoi progressi."],
    ja: ["ホーム画面に追加して、Meowdoku をすぐ開く。", "猫パズルにワンタップで戻る", "レベル進行とベストタイムを保存", "Meowdoku をホーム画面に追加して、全画面ですぐ遊べます。", "追加", "この手順で追加", "共有ボタンから「ホーム画面に追加」を選んでください。", "Safari でこのページを開き、共有ボタンから「ホーム画面に追加」を選んでください。", "ブラウザのメニューから「ホーム画面に追加」を選んでください。", "次のレベルをすぐ開く", "Meowdoku をホーム画面に追加すると、保存した進行にすぐ戻れます。"],
    jv: ["Tambah menyang Home Screen. Bukak Meowdoku luwih cepet.", "Bali menyang kucingmu mung sak tap", "Simpen level lan wektu paling apik", "Tambah Meowdoku menyang home screen kanggo main layar wutuh.", "Tambah", "Tindakake langkah iki", "Tutul Share, banjur pilih Add to Home Screen.", "Bukak kaca iki ing Safari, tutul Share, banjur pilih Add to Home Screen.", "Bukak menu browser banjur pilih Add to Home screen.", "Level sabanjure sak tap", "Tambah Meowdoku supaya luwih cepet bali menyang progresmu."],
    ko: ["홈 화면에 추가하고 Meowdoku를 더 빠르게 여세요.", "고양이 퍼즐로 한 번에 돌아오기", "레벨 진행과 최고 기록 저장", "Meowdoku를 홈 화면에 추가하면 전체 화면으로 바로 플레이할 수 있어요.", "추가", "이 단계로 추가", "공유 버튼을 누른 뒤 홈 화면에 추가를 선택하세요.", "이 페이지를 Safari에서 열고 공유 버튼을 누른 뒤 홈 화면에 추가를 선택하세요.", "브라우저 메뉴를 열고 홈 화면에 추가를 선택하세요.", "다음 레벨을 한 번에", "Meowdoku를 홈 화면에 추가하면 저장된 진행으로 더 빠르게 돌아올 수 있어요."],
    mr: ["होम स्क्रीनवर जोडा. Meowdoku पटकन उघडा.", "एका टॅपमध्ये तुमच्या मांजरींकडे परत या", "लेव्हल आणि सर्वोत्तम वेळा जतन करा", "फुल-स्क्रीन पझलसाठी Meowdoku होम स्क्रीनवर जोडा.", "जोडा", "ही पावले पाळा", "Share टॅप करा, मग Add to Home Screen निवडा.", "हे पेज Safari मध्ये उघडा, Share टॅप करा, मग Add to Home Screen निवडा.", "ब्राउझर मेनू उघडा आणि Add to Home screen निवडा.", "पुढचा लेव्हल एका टॅपवर", "Meowdoku जोडा आणि तुमच्या प्रगतीकडे पटकन परत या."],
    ms: ["Tambah ke Skrin Utama. Buka Meowdoku lebih pantas.", "Kembali kepada kucing anda dengan satu ketik", "Simpan tahap dan masa terbaik", "Tambah Meowdoku ke skrin utama untuk bermain skrin penuh.", "Tambah", "Ikut langkah ini", "Ketik Kongsi, kemudian pilih Add to Home Screen.", "Buka halaman ini dalam Safari, ketik Kongsi, kemudian pilih Add to Home Screen.", "Buka menu pelayar dan pilih Add to Home screen.", "Tahap seterusnya dengan satu ketik", "Tambah Meowdoku dan kembali ke kemajuan tersimpan lebih cepat."],
    nl: ["Zet op beginscherm. Open Meowdoku sneller.", "Terug naar je katten met één tik", "Bewaar je level en beste tijden", "Zet Meowdoku op je beginscherm voor fullscreen puzzelen.", "Toevoegen", "Volg deze stappen", "Tik op Delen en kies Zet op beginscherm.", "Open deze pagina in Safari, tik op Delen en kies Zet op beginscherm.", "Open het browsermenu en kies Toevoegen aan beginscherm.", "Volgend level met één tik", "Voeg Meowdoku toe en keer sneller terug naar je voortgang."],
    pa: ["ਹੋਮ ਸਕ੍ਰੀਨ ਵਿੱਚ ਜੋੜੋ। Meowdoku ਜਲਦੀ ਖੋਲ੍ਹੋ।", "ਇੱਕ ਟੈਪ ਨਾਲ ਆਪਣੀਆਂ ਬਿੱਲੀਆਂ ਵੱਲ ਵਾਪਸ ਆਓ", "ਲੇਵਲ ਅਤੇ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮੇਂ ਸੰਭਾਲੋ", "ਫੁੱਲ-ਸਕ੍ਰੀਨ ਪਜ਼ਲ ਲਈ Meowdoku ਹੋਮ ਸਕ੍ਰੀਨ ਵਿੱਚ ਜੋੜੋ।", "ਜੋੜੋ", "ਇਹ ਕਦਮ ਅਪਣਾਓ", "Share ਟੈਪ ਕਰੋ, ਫਿਰ Add to Home Screen ਚੁਣੋ।", "ਇਹ ਪੰਨਾ Safari ਵਿੱਚ ਖੋਲ੍ਹੋ, Share ਟੈਪ ਕਰੋ, ਫਿਰ Add to Home Screen ਚੁਣੋ।", "ਬਰਾਊਜ਼ਰ ਮੀਨੂ ਖੋਲ੍ਹੋ ਅਤੇ Add to Home screen ਚੁਣੋ।", "ਅਗਲਾ ਲੇਵਲ ਇੱਕ ਟੈਪ ਤੇ", "Meowdoku ਜੋੜੋ ਅਤੇ ਆਪਣੀ ਪ੍ਰਗਤੀ ਤੇ ਜਲਦੀ ਵਾਪਸ ਆਓ।"],
    pl: ["Dodaj do ekranu głównego. Otwieraj Meowdoku szybciej.", "Wróć do kotów jednym dotknięciem", "Zapisz poziom i najlepsze czasy", "Dodaj Meowdoku do ekranu głównego, by grać na pełnym ekranie.", "Dodaj", "Wykonaj te kroki", "Stuknij Udostępnij, potem Dodaj do ekranu początkowego.", "Otwórz stronę w Safari, stuknij Udostępnij, potem Dodaj do ekranu początkowego.", "Otwórz menu przeglądarki i wybierz Dodaj do ekranu głównego.", "Następny poziom jednym dotknięciem", "Dodaj Meowdoku i szybciej wracaj do swoich postępów."],
    pt: ["Adicione à tela inicial. Abra Meowdoku mais rápido.", "Volte aos seus gatos com um toque", "Salve seu nível e melhores tempos", "Adicione Meowdoku à tela inicial para jogar em tela cheia.", "Adicionar", "Siga estes passos", "Toque em Compartilhar e escolha Adicionar à Tela de Início.", "Abra esta página no Safari, toque em Compartilhar e escolha Adicionar à Tela de Início.", "Abra o menu do navegador e escolha Adicionar à tela inicial.", "Próximo nível com um toque", "Adicione Meowdoku e volte ao progresso salvo mais rápido."],
    ro: ["Adaugă pe ecranul principal. Deschide Meowdoku mai rapid.", "Revino la pisici cu o atingere", "Salvează nivelul și cei mai buni timpi", "Adaugă Meowdoku pe ecranul principal pentru joc pe tot ecranul.", "Adaugă", "Urmează acești pași", "Atinge Partajare, apoi Adaugă pe ecranul principal.", "Deschide pagina în Safari, atinge Partajare, apoi Adaugă pe ecranul principal.", "Deschide meniul browserului și alege Adaugă pe ecranul principal.", "Nivelul următor la o atingere", "Adaugă Meowdoku și revino mai rapid la progresul salvat."],
    ru: ["Добавьте на главный экран. Открывайте Meowdoku быстрее.", "Вернитесь к котикам одним касанием", "Сохраняйте уровень и лучшие времена", "Добавьте Meowdoku на главный экран для игры во весь экран.", "Добавить", "Следуйте шагам", "Нажмите Поделиться, затем На экран «Домой».", "Откройте страницу в Safari, нажмите Поделиться, затем На экран «Домой».", "Откройте меню браузера и выберите Добавить на главный экран.", "Следующий уровень в одно касание", "Добавьте Meowdoku и быстрее возвращайтесь к прогрессу."],
    sv: ["Lägg till på hemskärmen. Öppna Meowdoku snabbare.", "Tillbaka till katterna med ett tryck", "Spara nivå och bästa tider", "Lägg till Meowdoku på hemskärmen för helskärmsspel.", "Lägg till", "Följ dessa steg", "Tryck på Dela och välj Lägg till på hemskärmen.", "Öppna sidan i Safari, tryck på Dela och välj Lägg till på hemskärmen.", "Öppna webbläsarmenyn och välj Lägg till på hemskärmen.", "Nästa nivå med ett tryck", "Lägg till Meowdoku och återvänd snabbare till dina framsteg."],
    sw: ["Ongeza kwenye skrini ya nyumbani. Fungua Meowdoku haraka.", "Rudi kwa paka wako kwa mguso mmoja", "Hifadhi kiwango na muda bora", "Ongeza Meowdoku kwenye skrini ya nyumbani kwa mchezo wa skrini nzima.", "Ongeza", "Fuata hatua hizi", "Gusa Share, kisha chagua Add to Home Screen.", "Fungua ukurasa huu kwenye Safari, gusa Share, kisha chagua Add to Home Screen.", "Fungua menyu ya kivinjari kisha chagua Add to Home screen.", "Kiwango kinachofuata kwa mguso mmoja", "Ongeza Meowdoku na urudi haraka kwenye maendeleo yako."],
    ta: ["முகப்புத் திரையில் சேர். Meowdoku-வை விரைவாகத் திறக்கவும்.", "ஒரே தட்டலில் உங்கள் பூனைகளிடம் திரும்புங்கள்", "நிலை மற்றும் சிறந்த நேரங்களை சேமிக்கவும்", "முழுத்திரை புதிர்க்காக Meowdoku-வை முகப்புத் திரையில் சேர்க்கவும்.", "சேர்", "இந்த படிகளைப் பின்பற்றவும்", "Share தட்டவும், பின்னர் Add to Home Screen தேர்வு செய்யவும்.", "இந்தப் பக்கத்தை Safari-ல் திறந்து Share தட்டவும், பின்னர் Add to Home Screen தேர்வு செய்யவும்.", "உலாவி மெனுவைத் திறந்து Add to Home screen தேர்வு செய்யவும்.", "அடுத்த நிலை ஒரு தட்டலில்", "Meowdoku-வைச் சேர்த்து உங்கள் முன்னேற்றத்திற்கு விரைவாக திரும்புங்கள்."],
    te: ["హోమ్ స్క్రీన్‌కు జోడించండి. Meowdoku త్వరగా తెరవండి.", "ఒక ట్యాప్‌తో మీ పిల్లుల దగ్గరకు తిరిగి రండి", "లెవల్ మరియు ఉత్తమ సమయాలను సేవ్ చేయండి", "ఫుల్-స్క్రీన్ పజిల్ కోసం Meowdokuని హోమ్ స్క్రీన్‌కు జోడించండి.", "జోడించు", "ఈ దశలను అనుసరించండి", "Share నొక్కి, Add to Home Screen ఎంచుకోండి.", "ఈ పేజీని Safariలో తెరిచి Share నొక్కి, Add to Home Screen ఎంచుకోండి.", "బ్రౌజర్ మెనూ తెరిచి Add to Home screen ఎంచుకోండి.", "తదుపరి లెవల్ ఒక ట్యాప్ దూరంలో", "Meowdoku జోడించి మీ సేవ్ చేసిన పురోగతికి త్వరగా తిరిగి రండి."],
    th: ["เพิ่มไปยังหน้าจอหลัก เปิด Meowdoku ได้เร็วขึ้น", "กลับมาหาแมวของคุณในแตะเดียว", "บันทึกเลเวลและเวลาที่ดีที่สุด", "เพิ่ม Meowdoku ไปยังหน้าจอหลักเพื่อเล่นแบบเต็มจอ", "เพิ่ม", "ทำตามขั้นตอนนี้", "แตะ Share แล้วเลือก Add to Home Screen", "เปิดหน้านี้ใน Safari แตะ Share แล้วเลือก Add to Home Screen", "เปิดเมนูเบราว์เซอร์แล้วเลือก Add to Home screen", "เลเวลถัดไปในแตะเดียว", "เพิ่ม Meowdoku แล้วกลับสู่ความคืบหน้าที่บันทึกไว้ได้เร็วขึ้น"],
    tr: ["Ana ekrana ekle. Meowdoku daha hızlı açılsın.", "Kedilerine tek dokunuşla dön", "Seviyeni ve en iyi süreleri kaydet", "Tam ekran bulmaca için Meowdoku’yu ana ekrana ekle.", "Ekle", "Bu adımları izle", "Paylaş’a dokun, sonra Ana Ekrana Ekle’yi seç.", "Bu sayfayı Safari’de aç, Paylaş’a dokun ve Ana Ekrana Ekle’yi seç.", "Tarayıcı menüsünü aç ve Ana ekrana ekle’yi seç.", "Sonraki seviye tek dokunuşta", "Meowdoku’yu ekle ve kayıtlı ilerlemene daha hızlı dön."],
    uk: ["Додайте на головний екран. Відкривайте Meowdoku швидше.", "Поверніться до котів одним дотиком", "Збережіть рівень і найкращі часи", "Додайте Meowdoku на головний екран для гри на весь екран.", "Додати", "Виконайте ці кроки", "Натисніть Поділитися, потім На початковий екран.", "Відкрийте сторінку в Safari, натисніть Поділитися, потім На початковий екран.", "Відкрийте меню браузера й виберіть Додати на головний екран.", "Наступний рівень в один дотик", "Додайте Meowdoku й швидше повертайтесь до прогресу."],
    ur: ["ہوم اسکرین میں شامل کریں۔ Meowdoku تیزی سے کھولیں۔", "ایک ٹچ میں اپنی بلیوں کے پاس واپس آئیں", "لیول اور بہترین وقت محفوظ کریں", "فل اسکرین پزل کے لیے Meowdoku کو ہوم اسکرین میں شامل کریں۔", "شامل کریں", "یہ مراحل اپنائیں", "Share پر ٹیپ کریں، پھر Add to Home Screen منتخب کریں۔", "یہ صفحہ Safari میں کھولیں، Share پر ٹیپ کریں، پھر Add to Home Screen منتخب کریں۔", "براؤزر مینو کھولیں اور Add to Home screen منتخب کریں۔", "اگلا لیول ایک ٹچ دور", "Meowdoku شامل کریں اور اپنی محفوظ پیش رفت پر جلد واپس آئیں۔"],
    vi: ["Thêm vào màn hình chính. Mở Meowdoku nhanh hơn.", "Quay lại với mèo chỉ bằng một chạm", "Lưu cấp độ và thời gian tốt nhất", "Thêm Meowdoku vào màn hình chính để chơi toàn màn hình.", "Thêm", "Làm theo các bước này", "Nhấn Chia sẻ, rồi chọn Thêm vào Màn hình chính.", "Mở trang này bằng Safari, nhấn Chia sẻ, rồi chọn Thêm vào Màn hình chính.", "Mở menu trình duyệt rồi chọn Thêm vào màn hình chính.", "Cấp tiếp theo chỉ một chạm", "Thêm Meowdoku để quay lại tiến độ đã lưu nhanh hơn."],
    zh: ["添加到主屏幕，下次更快打开 Meowdoku。", "一键回到你的猫咪关卡", "保存关卡进度和最佳时间", "把 Meowdoku 加到手机桌面，下次直接全屏玩。", "添加", "按这一步添加", "点分享按钮，再选“添加到主屏幕”。", "先用 Safari 打开本页，再点分享按钮，选择“添加到主屏幕”。", "打开浏览器菜单，再选择“添加到主屏幕”。", "下一关，一键打开", "把 Meowdoku 加到手机桌面，下次更快回到你的关卡进度。"],
    "zh-Hant": ["加入主畫面，下次更快打開 Meowdoku。", "一鍵回到你的貓咪關卡", "保存關卡進度和最佳時間", "把 Meowdoku 加到手機主畫面，下次直接全螢幕玩。", "加入", "按這一步加入", "點分享按鈕，再選「加入主畫面」。", "先用 Safari 打開本頁，再點分享按鈕，選擇「加入主畫面」。", "打開瀏覽器選單，再選「加入主畫面」。", "下一關，一鍵打開", "把 Meowdoku 加到手機主畫面，下次更快回到你的關卡進度。"]
  };
  const keys = ["top", "title", "reward", "body", "install", "stepsTitle", "iosSteps", "iosBrowserSteps", "browserSteps", "victoryTitle", "victoryBody"];
  const localizedCopy = Object.fromEntries(Object.entries(copy).map(([code, values]) => [code, Object.fromEntries(keys.map((key, index) => [key, values[index]]))]));

  let deferredPrompt = null;
  let overlay = null;
  let topBar = null;

  function normalizeLang(raw) {
    const value = String(raw || "").toLowerCase();
    if (value === "zh-cn" || value === "zh-sg" || value === "zh") return "zh";
    if (value.startsWith("zh-hant") || value.includes("zh-tw") || value.includes("zh-hk") || value.includes("zh-mo")) return "zh-Hant";
    return value.split("-")[0];
  }

  function pathLanguage() {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    return supportedLanguages.includes(first) ? first : "";
  }

  function htmlLanguage() {
    const normalized = normalizeLang(document.documentElement.lang);
    return supportedLanguages.includes(normalized) ? normalized : "";
  }

  function browserLanguage() {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
    for (const candidate of browserLanguages) {
      const normalized = normalizeLang(candidate);
      if (supportedLanguages.includes(normalized)) return normalized;
    }
    return "en";
  }

  function langKey() {
    const fromPath = pathLanguage();
    if (fromPath) return fromPath;
    const fromHtml = htmlLanguage();
    if (fromHtml) return fromHtml;
    const saved = normalizeLang(localStorage.getItem("meowdoku-language"));
    if (supportedLanguages.includes(saved)) return saved;
    return browserLanguage();
  }

  function text(key) {
    return (localizedCopy[langKey()] || localizedCopy.en)[key] || localizedCopy.en[key];
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
        document.body.classList.remove("has-pwa-top-bar");
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
      <button type="button" aria-label="${text("install")}">+</button>
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
        <button class="pwa-install-primary" type="button"><span>+</span>${text("install")}</button>
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
      <button class="pwa-install-primary" type="button"><span>+</span>${text("install")}</button>
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
