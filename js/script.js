/* =========================================================
   Dev Dash – script.js
   Single JS file (TC-3 constraint) · Vanilla JS only
   ========================================================= */

"use strict";

/* ── Word Lists ── */
const WORDS = {
  indonesian: {
    easy: [
      "aku","dia","itu","ini","ada","bisa","mau","mau","cara","coba",
      "dua","emas","foto","gula","hari","ikut","jalan","kaca","lama","meja",
      "nama","obat","pagi","roti","satu","tahu","udah","vila","warna","yakin",
      "baju","buku","desa","gigi","hati","ikan","jual","kaki","lari","mata",
      "nasi","orang","palu","raja","sapi","tiga","ular","visi","waktu","xtra",
      "babi","cari","daun","elok","fajar","gaya","hebat","ibu","jago","kota",
      "laut","muda","niat","olah","pasar","ragam","salah","tawa","udara","vokal",
      "wali","anak","baru","cinta","dalam","enak","fana","guna","hidup","indah",
      "jarak","kunci","logam","modal","nomor","opini","putih","ruang","suara","turun",
      "ubah","varsa","watak","xenia","yuk","zona","kebun","lebih","murah","niaga"
    ],
    medium: [
      "belajar","cerdas","dahulu","empati","fasilitas","gelisah","harapan",
      "ikhlas","jadikan","karakter","langsung","manfaat","narasi","optimis",
      "panggil","quality","respon","strategi","tempatan","ungkap","validasi",
      "wawasan","xenial","yayasan","ziarah","adaptasi","bersama","cermat",
      "dampak","efisien","faktual","gagasan","hadirkan","implikasi","jujuran",
      "keadilan","lembaga","motivasi","negative","omzet","pencarian","relawan",
      "spiritual","terbatas","usahakan","variabel","wicara","akhirnya","bagikan",
      "carikan","definisi","ekspresi","formulir","gunakan","hubungan","identitas",
      "jaringan","kendali","layanan","masalah","naikkan","objektif","pelajari",
      "rancangan","sertakan","tentukan","ukurannya","verifikasi","wariskan",
      "amankan","berhasil","ciptakan","direktur","ekonomis","figuran","giatkan",
      "hasilkan","instruksi","jelaskan","kerjakan","lanjutkan","manajemen",
      "nyatakan","operasional","pertumbuhan","raihlah","solusi","tingkatkan",
      "ulaskan","vitalkan","wujudkan"
    ],
    hard: [
      "bertanggung","keseimbangan","pembangunan","perpustakaan","keberlanjutan",
      "kemandirian","perkembangan","pertumbuhan","peningkatan","keberagaman",
      "pemberdayaan","mengoptimalkan","kesinambungan","penanggulangan","ketidakpastian",
      "profesionalisme","kemasyarakatan","keterampilan","pengetahuan","berkelanjutan",
      "pemanfaatan","mengidentifikasi","keberhasilan","pertanggungjawaban",
      "keterbatasannya","pengembangan","perencanaan","implementasi","menghubungkan",
      "kepemimpinan","infrastruktur","memprioritaskan","mempertahankan",
      "keunggulan","keterlibatan","mewujudkan","mengevaluasi","pengendalian",
      "menyelenggarakan","perlindungan","pengawasan","pembangunannya",
      "menginvestasikan","keberlangsungan","penyelenggaraan","ketidakseimbangan",
      "memaksimalkan","mempertimbangkan","keselarasan"
    ]
  },

  english: {
    easy: [
      "ace","bag","cap","dig","egg","fan","gap","hat","ice","jar",
      "kit","log","map","net","oak","pen","run","sky","ten","use",
      "van","wet","mix","yam","zip","arm","bat","cod","den","elf",
      "fix","gym","hop","ink","jot","key","lip","mud","nap","orb",
      "pet","quiz","rob","sat","tip","urn","vow","wax","axe","bay",
      "cat","dot","eve","fog","gnu","hub","imp","job","kin","leg",
      "mob","nod","oil","pad","ray","sea","toy","vat","web","yen",
      "abs","bid","cow","dip","ear","fly","gut","hot","ion","joy",
      "lab","nag","ore","paw","rid","sob","tap","vim","win","zoo",
      "add","bee","cry","dew","elm","fur","god","her","him","its"
    ],
    medium: [
      "ability","balance","cabinet","defense","element","factory","goddess",
      "harvest","improve","journey","kingdom","lantern","monster","notable",
      "outlook","pattern","quality","radical","science","texture","uniform",
      "village","walnut","xylitol","younger","zealous","account","benefit",
      "captain","destiny","evening","feature","general","horizon","inhabit",
      "justice","kitchen","library","measure","network","observe","program",
      "require","session","tonight","upgrade","vibrant","western","achieve",
      "because","connect","develop","economy","fighter","gravity","history",
      "inspect","juncture","knowing","lecture","meaning","natural","opinion",
      "perfect","quarter","request","storage","thought","unified","venture",
      "website","axiomatic","building","compete","dynamic","enhance","flowers",
      "granted","helpful","install","journal","kinetic","logical","managed",
      "nothing","obvious","predict","respond","service","tension","updates",
      "variety","warrior"
    ],
    hard: [
      "abbreviation","accomplishment","acknowledgment","administration",
      "anthropological","bewilderment","circumstances","collaborative",
      "comprehension","concentration","consciousness","contradictory",
      "controversial","counterproductive","deliberation","demonstrate",
      "determination","differentiate","disadvantageous","electromagnetic",
      "establishment","extraterrestrial","extraordinary","formidable",
      "generalization","governmental","hallucination","hypothetically",
      "implementation","incomprehensible","indistinguishable","infrastructure",
      "instantaneous","interdependence","juxtaposition","knowledgeable",
      "macroeconomics","manifestation","misrepresentation","multidisciplinary",
      "overestimation","overexaggerated","paraphernalia","parliamentary",
      "perpendicular","philosophical","photosynthesis","psychological",
      "quantification","questionnaire","reconnaissance","reinforcement",
      "responsibility","revolutionary","sophisticated","straightforward",
      "sustainability","transformation","unconditionally","underdevelopment",
      "unpredictable","unprecedented"
    ]
  },

  programming: {
    easy: [
      "if","for","do","var","let","map","key","get","set","try",
      "put","run","log","use","new","all","add","find","null","void",
      "true","else","this","then","each","list","node","loop","type","path",
      "name","sort","join","push","pop","call","bind","wrap","copy","data",
      "rest","test","mock","stub","file","read","send","open","exit","flag",
      "main","base","case","root","heap","tree","link","exec","pipe","trim",
      "next","skip","stop","emit","load","save","init","drop","fill","swap",
      "last","head","tail","body","hook","ref","cli","api","sdk","env",
      "git","ssh","url","ram","rom","cpu","hex","bin","csv","xml"
    ],
    medium: [
      "function","variable","boolean","object","array","import","export",
      "extends","promise","return","switch","module","static","string",
      "number","interface","package","private","public","default",
      "abstract","callback","closure","context","declare","delegate",
      "exception","execute","finally","foreach","garbage","handler",
      "inherit","iterate","keyword","library","linker","literal","method",
      "mutable","namespace","nullable","operator","optional","override",
      "pointer","pragma","runtime","reducer","request","session",
      "singleton","sorting","template","testing","timeout","trigger",
      "unicode","virtual","wrapper","compile","console","debugger",
      "defined","destructor","factory","generic","mutation","observer",
      "pipeline","registry","renderer","scaffold","scheduler","serialize",
      "stackframe","threading","transpile","undefined","instance","iteration"
    ],
    hard: [
      "asynchronous","encapsulation","polymorphism","inheritance","destructuring",
      "authentication","authorization","concurrency","compilation","containerization",
      "cryptography","dependency","deserialization","deterministic","distributed",
      "documentation","environment","generalization","immutability","initialization",
      "instantiation","interpretation","introspection","localization","memoization",
      "middleware","multithreading","normalization","optimization","orchestration",
      "parameterization","persistency","preprocessing","recursion","refactoring",
      "serialization","specification","synchronization","transactional","virtualization",
      "abstraction","accessibility","atomicity","backpropagation","benchmarking",
      "bytecode","caching","checkpointing","classloader","clientside","clustering",
      "codegeneration","complexity","configuration","continuation","decomposition",
      "deduplication","delegation","deployment","desugaring","dictionary",
      "differential","dispatching","encapsulate","eventloop","exception"
    ]
  }
};

/* ── DOM References ── */
const screens = {
  menu:   document.getElementById("screen-menu"),
  game:   document.getElementById("screen-game"),
  result: document.getElementById("screen-result")
};

// Menu
const categoryBtns   = document.querySelectorAll("#category-options .opt-btn");
const difficultyBtns = document.querySelectorAll("#difficulty-options .opt-btn");
const previewBestScore = document.getElementById("preview-best-score");
const previewBestWps   = document.getElementById("preview-best-wps");
const btnStart         = document.getElementById("btn-start");
const themeToggle      = document.getElementById("theme-toggle");

// Gameplay
const currentScoreEl = document.getElementById("current-score");
const timerDisplay   = document.getElementById("timer-display");
const gameMeta       = document.getElementById("game-meta");
const submittedCount = document.getElementById("submitted-count");
const wordCard       = document.querySelector(".word-card");
const currentWordEl  = document.getElementById("current-word");
const wordHint       = document.getElementById("word-hint");
const wordInput      = document.getElementById("word-input");
const progressBar    = document.getElementById("progress-bar");
const timerBox       = document.querySelector(".timer-box");

// Result
const resultScore     = document.getElementById("result-score");
const resultAccuracy  = document.getElementById("result-accuracy");
const resultWps       = document.getElementById("result-wps");
const resultBestScore = document.getElementById("result-best-score");
const resultBestWps   = document.getElementById("result-best-wps");
const resultCategory  = document.getElementById("result-category");
const btnRestart      = document.getElementById("btn-restart");
const btnMenu         = document.getElementById("btn-menu");

/* ── Game State ── */
const GAME_DURATION = 60;

let state = {
  category:   "english",
  difficulty: "easy",
  score:       0,
  submitted:   0,
  timeLeft:    GAME_DURATION,
  timerID:     null,
  currentWord: "",
  usedWords:   new Set(),
  running:     false,
};

/* ── Local Storage Helpers ── */
function storageKey(category, difficulty, metric) {
  return `devdash_${category}_${difficulty}_${metric}`;
}

function getBest(category, difficulty, metric) {
  const val = localStorage.getItem(storageKey(category, difficulty, metric));
  return val !== null ? parseFloat(val) : 0;
}

function setBest(category, difficulty, metric, value) {
  const current = getBest(category, difficulty, metric);
  if (value > current) {
    localStorage.setItem(storageKey(category, difficulty, metric), value.toString());
    return true;
  }
  return false;
}

/* ── Theme ── */
function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
  localStorage.setItem("devdash_theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("devdash_theme") || "dark";
  applyTheme(saved);
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  applyTheme(isLight ? "dark" : "light");
});

/* ── Screen Navigation ── */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* ── Menu Logic ── */
function setActiveOption(group, value) {
  group.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.value === value);
  });
}

function updatePreview() {
  const bestScore = getBest(state.category, state.difficulty, "score");
  const bestWps   = getBest(state.category, state.difficulty, "wps");
  previewBestScore.textContent = bestScore > 0 ? bestScore : "—";
  previewBestWps.textContent   = bestWps   > 0 ? bestWps.toFixed(2) : "—";
}

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    state.category = btn.dataset.value;
    setActiveOption(categoryBtns, state.category);
    updatePreview();
  });
});

difficultyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    state.difficulty = btn.dataset.value;
    setActiveOption(difficultyBtns, state.difficulty);
    updatePreview();
  });
});

/* ── Word Utilities ── */
function getWordPool() {
  return WORDS[state.category][state.difficulty];
}

function pickWord() {
  const pool = getWordPool();
  let available = pool.filter(w => !state.usedWords.has(w));

  // If all words used, reset tracking
  if (available.length === 0) {
    state.usedWords.clear();
    available = [...pool];
  }

  const word = available[Math.floor(Math.random() * available.length)];
  state.usedWords.add(word);
  return word;
}

function displayWord(word) {
  currentWordEl.textContent = word;
  wordCard.classList.remove("correct", "wrong");
  wordInput.value = "";
  wordInput.focus();
}

/* ── Timer ── */
function updateTimerUI() {
  timerDisplay.textContent = state.timeLeft;
  const pct = (state.timeLeft / GAME_DURATION) * 100;
  progressBar.style.width = pct + "%";

  timerBox.classList.remove("warn", "danger");
  if (state.timeLeft <= 10) {
    timerBox.classList.add("danger");
    progressBar.style.background = "var(--danger)";
  } else if (state.timeLeft <= 20) {
    timerBox.classList.add("warn");
    progressBar.style.background = "var(--warn)";
  } else {
    progressBar.style.background = "var(--accent)";
  }
}

function startTimer() {
  clearInterval(state.timerID);
  state.timerID = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

/* ── Game Flow ── */
function startGame() {
  state.score      = 0;
  state.submitted  = 0;
  state.timeLeft   = GAME_DURATION;
  state.usedWords  = new Set();
  state.running    = true;

  currentScoreEl.textContent  = "0";
  submittedCount.textContent  = "0 typed";

  const catLabels  = { indonesian: "ID", english: "EN", programming: "Code" };
  const diffLabels = { easy: "Easy", medium: "Med", hard: "Hard" };
  gameMeta.textContent = `${diffLabels[state.difficulty]} · ${catLabels[state.category]}`;

  timerBox.classList.remove("warn", "danger");
  progressBar.style.width    = "100%";
  progressBar.style.background = "var(--accent)";

  wordInput.disabled = false;
  wordHint.textContent = "Type the word and press Enter";

  state.currentWord = pickWord();
  displayWord(state.currentWord);
  updateTimerUI();
  startTimer();
  showScreen("game");
}

function endGame() {
  clearInterval(state.timerID);
  state.running = false;
  wordInput.disabled = true;
  wordHint.textContent = "Time's up!";

  const accuracy = state.submitted > 0
    ? Math.round((state.score / state.submitted) * 100)
    : 0;
  const wps = parseFloat((state.score / GAME_DURATION).toFixed(2));

  setBest(state.category, state.difficulty, "score", state.score);
  setBest(state.category, state.difficulty, "wps", wps);

  const bestScore = getBest(state.category, state.difficulty, "score");
  const bestWps   = getBest(state.category, state.difficulty, "wps");

  const catNames = { indonesian: "Indonesian", english: "English", programming: "Programming" };

  resultScore.textContent    = state.score;
  resultAccuracy.textContent = accuracy + "%";
  resultWps.textContent      = wps.toFixed(2);
  resultBestScore.textContent = bestScore;
  resultBestWps.textContent  = bestWps.toFixed(2);
  resultCategory.textContent = `${catNames[state.category]} / ${state.difficulty.charAt(0).toUpperCase() + state.difficulty.slice(1)}`;

  setTimeout(() => showScreen("result"), 300);
}

/* ── Input Handling ── */
wordInput.addEventListener("keydown", (e) => {
  if (!state.running) return;

  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const typed = wordInput.value.trim();
    if (typed === "") return;

    state.submitted++;
    submittedCount.textContent = `${state.submitted} typed`;

    if (typed.toLowerCase() === state.currentWord.toLowerCase()) {
      state.score++;
      currentScoreEl.textContent = state.score;
      wordCard.classList.add("correct");
      wordHint.textContent = "✓ Correct!";

      setTimeout(() => {
        state.currentWord = pickWord();
        displayWord(state.currentWord);
        wordHint.textContent = "Keep going!";
      }, 120);
    } else {
      wordCard.classList.add("wrong");
      wordHint.textContent = `✗  Expected: "${state.currentWord}"`;
      wordInput.value = "";

      setTimeout(() => {
        wordCard.classList.remove("wrong");
        wordHint.textContent = "Try again!";
        wordInput.focus();
      }, 500);
    }
  }
});

// Also allow typing to filter — real-time color hint
wordInput.addEventListener("input", () => {
  if (!state.running) return;
  const typed = wordInput.value;
  const target = state.currentWord;

  if (typed.length === 0) {
    wordCard.style.borderColor = "";
    return;
  }

  const matches = target.toLowerCase().startsWith(typed.toLowerCase());
  wordCard.style.borderColor = matches ? "var(--success)" : "var(--danger)";
});

/* ── Result Buttons ── */
btnRestart.addEventListener("click", () => {
  startGame();
});

btnMenu.addEventListener("click", () => {
  clearInterval(state.timerID);
  state.running = false;
  updatePreview();
  showScreen("menu");
});

/* ── Start Button ── */
btnStart.addEventListener("click", () => {
  startGame();
});

/* ── Init ── */
function init() {
  initTheme();
  setActiveOption(categoryBtns, state.category);
  setActiveOption(difficultyBtns, state.difficulty);
  updatePreview();
  showScreen("menu");
}

init();
