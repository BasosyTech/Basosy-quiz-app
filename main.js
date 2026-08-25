import categories from "./data/categories.json" with { type: "json" };
// Get main Elements
/* Start Section */
const startSection = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const categoriesNamesBox = document.querySelector(".category-list");
/* Quiz App Section */
const quizSection = document.getElementById("quiz-app");
const categoryElement = document.querySelector(".category-name");
const maxQuestionNum = document.getElementById("max-question-number");
const currentQuestionNum = document.getElementById("current-question-number");
const quizTitle = document.querySelector(".quiz-title");
const answerArea = document.querySelector(".answer-area");
const bullets = document.querySelector(".bullets");
const countdownElement = document.querySelector(".countdown");
const form = document.forms[0];
/* Result Section */
const resultSection = document.getElementById("result-screen");
const resultScreenCircle = resultSection.querySelector(".result-screen__score");
const yourScore = resultSection.querySelector(".score-value");
const totalScore = resultSection.querySelector(".total-score");
const endGameMessage = resultSection.querySelector(".result-screen__message");
const answerReview = resultSection.querySelector(
  ".result-screen__answer-review",
);
const playAgain = resultSection.querySelector("#play-again");
// constants Vaiables
const QUESTIONS_PER_QUIZ = 15;
const categoryColors = ["#EAF2FB", "#e8f8f0", "#bde0fe", "#ffe5d9", "#fcf6bd"];
const defaultIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <path d="M320 96C196.3 96 96 196.3 96 320s100.3 224 224 224 224-100.3 224-224S443.7 96 320 96zm0 384c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"/>
</svg>`;
const categoriesIcons = {
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M128 96L162.9 491.8L319.5 544L477.1 491.8L512 96L128 96zM436.2 223.9L252.4 223.9L256.5 273.3L432.1 273.3L418.5 421.7L320.6 448.7L320.6 449L319.5 449L220.8 421.7L214.8 345.9L262.5 345.9L266 384L319.5 398.5L373.2 384L379.2 321.8L212.3 321.8L199.5 176.2L440.6 176.2L436.2 223.9z" />
    </svg>`,
  islamic_history: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z" />
    </svg>`,
  islamic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M64 320C64 178.6 178.6 64 320 64C353 64 384.6 70.3 413.6 81.7C421 84.6 425.1 92.4 423.4 100.1C421.7 107.8 414.6 113.1 406.7 112.5C401.9 112.2 397 112 392.1 112C277.2 112 184.1 205.1 184.1 320C184.1 434.9 277.2 528 392.1 528C397 528 401.9 527.8 406.7 527.5C414.6 527 421.7 532.2 423.4 539.9C425.1 547.6 421 555.4 413.6 558.3C384.6 569.7 353 576 320 576C178.6 576 64 461.4 64 320zM439.4 201.4C442.9 194.3 453.1 194.3 456.6 201.4L488.1 265.2C489.5 268 492.2 270 495.3 270.5L565.7 280.7C573.6 281.8 576.7 291.5 571 297.1L520.1 346.7C517.8 348.9 516.8 352.1 517.3 355.2L529.3 425.3C530.6 433.1 522.4 439.1 515.4 435.4L452.4 402.3C449.6 400.8 446.3 400.8 443.5 402.3L380.5 435.4C373.5 439.1 365.2 433.1 366.6 425.3L378.6 355.2C379.1 352.1 378.1 348.9 375.8 346.7L325 297.1C319.3 291.5 322.4 281.9 330.3 280.7L400.7 270.5C403.8 270 406.5 268.1 407.9 265.2L439.4 201.4z" />
    </svg>`,
  faith_law: `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 576.000000 576.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,576.000000) scale(0.100000,-0.100000)" stroke="none">
    <path d="M2775 5605 c-59 -43 -99 -65 -118 -65 -15 0 -68 20 -117 45 -49 25 -95 45 -102 45 -6 0 -49 -36 -94 -80 -57 -56 -89 -80 -106 -80 -13 0 -64 14 -113 30 -49 17 -96 30 -105 30 -9 0 -42 -35 -72 -77 -82 -115 -86 -117 -160 -109 -35 4 -88 11 -118 15 -30 5 -59 6 -63 4 -4 -3 -30 -49 -58 -104 -36 -73 -56 -102 -75 -109 -14 -6 -74 -10 -132 -10 l-108 0 -37 -113 c-29 -89 -42 -116 -60 -124 -13 -6 -71 -19 -129 -28 l-105 -18 -18 -105 c-9 -58 -22 -116 -28 -129 -8 -18 -35 -31 -124 -60 l-113 -37 0 -108 c0 -58 -4 -118 -10 -132 -7 -19 -36 -39 -109 -75 -55 -28 -102 -54 -104 -58 -3 -4 2 -56 10 -115 9 -58 13 -117 9 -130 -3 -14 -40 -48 -96 -87 -50 -36 -90 -72 -90 -81 0 -9 14 -56 30 -105 17 -49 30 -100 30 -115 0 -19 -21 -46 -80 -105 -44 -44 -80 -86 -80 -94 0 -8 20 -54 45 -103 25 -49 45 -101 45 -116 0 -17 -24 -61 -66 -119 l-66 -93 66 -94 c40 -57 66 -105 66 -120 0 -15 -20 -67 -45 -116 -25 -49 -45 -95 -45 -101 0 -6 36 -49 80 -96 51 -54 80 -92 80 -107 0 -12 -14 -62 -30 -111 -17 -49 -30 -96 -30 -105 0 -9 40 -47 90 -84 60 -45 92 -76 96 -93 4 -14 0 -71 -9 -127 -11 -76 -12 -104 -4 -113 7 -6 48 -30 92 -53 122 -65 119 -60 123 -199 l4 -118 96 -34 c114 -39 147 -66 157 -130 3 -24 11 -72 17 -106 l10 -61 111 -21 c77 -15 118 -28 133 -42 12 -12 35 -63 53 -120 24 -74 36 -99 49 -100 9 0 66 -4 125 -8 104 -7 109 -9 132 -37 13 -16 40 -64 61 -107 l38 -78 61 7 c33 3 78 10 100 15 74 15 109 -4 178 -99 l61 -84 43 7 c24 3 69 15 100 26 99 34 113 29 229 -84 l62 -59 92 46 c54 27 107 46 126 46 23 0 57 -17 121 -60 48 -33 91 -60 95 -60 4 0 44 25 89 56 112 77 131 78 248 20 l92 -47 37 30 c20 16 46 39 57 51 36 41 97 80 125 80 15 0 47 -7 70 -15 23 -8 64 -21 91 -29 l50 -15 47 61 c101 132 120 141 240 122 121 -20 113 -23 160 63 70 130 87 143 187 143 38 0 87 3 107 6 33 6 39 11 54 53 63 173 80 193 171 205 27 4 69 11 95 17 51 12 49 8 74 154 9 52 29 91 57 109 12 8 61 29 108 46 l86 31 7 46 c3 25 6 73 6 107 0 90 15 109 144 178 l78 43 -6 45 c-15 102 -18 160 -12 184 8 31 40 65 123 128 l62 47 -15 50 c-8 27 -21 68 -29 91 -27 77 -16 117 50 180 20 19 50 52 66 72 l30 37 -46 90 c-60 121 -59 146 10 237 75 98 75 94 6 196 -75 110 -75 126 -13 252 l44 88 -70 72 c-102 103 -107 120 -73 219 11 31 23 76 26 100 l7 43 -86 63 c-97 72 -112 99 -96 180 5 25 11 71 15 101 l6 55 -96 48 c-110 56 -125 76 -125 164 0 32 -3 82 -6 110 l-7 53 -100 32 c-125 41 -136 54 -161 196 l-17 100 -62 10 c-34 6 -82 14 -106 17 -65 11 -92 43 -130 158 l-33 97 -104 0 c-139 0 -150 6 -210 120 -27 50 -53 95 -59 99 -5 5 -39 4 -75 -2 -36 -5 -92 -10 -125 -11 l-59 -1 -69 93 c-40 53 -76 92 -86 92 -10 0 -57 -13 -106 -30 -49 -16 -99 -30 -111 -30 -15 0 -53 29 -107 80 -47 44 -90 80 -96 80 -6 0 -52 -20 -101 -45 -49 -25 -101 -45 -114 -45 -14 0 -66 29 -120 65 -52 36 -96 65 -98 65 -2 0 -43 -30 -93 -65z m295 -245 c319 -28 618 -109 885 -241 153 -76 161 -80 275 -154 225 -145 501 -407 630 -595 8 -12 32 -45 54 -73 55 -74 136 -215 196 -342 103 -216 172 -446 212 -700 26 -168 31 -510 10 -665 -40 -290 -119 -556 -236 -795 -245 -497 -632 -884 -1129 -1129 -129 -63 -330 -142 -410 -161 -12 -3 -69 -16 -127 -30 -186 -44 -327 -59 -560 -59 -224 -1 -306 7 -520 50 -298 60 -674 222 -891 383 -26 20 -57 43 -70 51 -127 86 -330 283 -464 450 -104 130 -185 256 -267 421 -92 185 -132 288 -178 464 -126 482 -116 940 31 1420 17 55 35 105 39 110 4 6 13 28 20 50 31 97 202 418 259 487 6 7 39 51 73 98 80 110 348 378 458 458 47 34 91 67 98 73 41 34 345 208 367 210 2 0 34 13 70 30 35 16 71 29 78 29 7 0 17 4 23 9 30 29 366 113 544 135 217 28 350 32 530 16z"/>
    <path d="M2669 5270 c-508 -46 -987 -251 -1375 -590 -104 -91 -246 -244 -322 -347 -26 -34 -50 -63 -54 -63 -5 0 -8 -5 -8 -11 0 -5 -17 -36 -38 -67 -108 -159 -216 -388 -278 -587 -237 -752 -92 -1549 396 -2185 75 -97 287 -312 385 -389 44 -35 90 -72 103 -82 12 -10 25 -19 28 -19 3 0 25 -14 50 -30 376 -259 875 -407 1349 -399 624 11 1205 258 1650 704 507 506 757 1187 695 1895 -62 708 -454 1370 -1050 1770 -452 304 -1000 447 -1531 400z m541 -65 c740 -108 1387 -565 1734 -1226 163 -312 248 -639 262 -1009 23 -583 -172 -1147 -549 -1595 -592 -703 -1556 -990 -2452 -730 -782 226 -1398 866 -1600 1659 -281 1110 267 2254 1303 2720 215 97 502 173 737 195 137 13 426 6 565 -14z"/>
    <path d="M2631 5069 c-479 -56 -925 -264 -1276 -598 -73 -70 -189 -199 -238 -266 -20 -27 -41 -55 -46 -61 -5 -7 -44 -64 -86 -129 -166 -256 -258 -489 -307 -775 -27 -160 -28 -422 -3 -585 33 -217 128 -529 216 -712 48 -100 148 -276 181 -318 5 -5 25 -32 45 -60 111 -151 339 -375 472 -462 31 -20 58 -39 61 -42 3 -4 44 -30 92 -59 261 -158 598 -271 907 -302 809 -81 1601 289 2048 959 198 296 327 652 363 1000 65 644 -151 1273 -599 1746 -75 79 -215 203 -277 245 -27 19 -50 37 -52 42 -2 4 -7 8 -12 8 -4 0 -39 20 -77 45 -180 120 -496 246 -738 294 -197 39 -484 52 -674 30z m1334 -1100 c59 -116 106 -239 103 -267 l-3 -27 -38 38 c-20 21 -37 35 -37 30 0 -4 9 -73 20 -153 39 -296 110 -952 110 -1022 0 -94 -23 -199 -55 -253 -32 -56 -108 -122 -154 -135 -99 -27 -238 3 -332 73 l-27 19 -97 -48 c-95 -47 -102 -49 -184 -49 -77 0 -92 3 -141 30 -47 26 -107 87 -145 148 -9 14 -20 10 -88 -30 -124 -72 -310 -144 -388 -150 -69 -6 -157 13 -208 44 -54 34 -114 101 -153 171 -22 40 -51 80 -64 88 -38 25 -87 2 -168 -80 -69 -69 -73 -76 -134 -227 -35 -85 -76 -172 -93 -192 -145 -176 -359 111 -335 448 8 106 27 201 41 197 6 -1 10 -65 11 -155 1 -165 14 -239 59 -326 30 -61 58 -81 109 -81 58 0 100 50 155 186 24 60 59 137 78 172 97 177 244 280 322 226 12 -9 52 -61 87 -115 69 -107 114 -148 196 -175 98 -32 243 -4 431 83 42 20 77 41 77 47 -1 6 -7 38 -15 71 -18 72 -19 185 -4 257 15 70 70 128 122 128 97 0 186 -224 147 -369 -7 -29 -29 -62 -62 -97 l-50 -53 58 -38 c54 -36 62 -38 147 -42 64 -2 109 2 154 14 58 16 63 19 56 39 -4 11 -8 64 -8 117 0 93 2 99 40 174 61 120 140 170 190 121 57 -57 78 -249 37 -341 -13 -27 -30 -58 -39 -68 -15 -16 -15 -19 -3 -28 33 -21 100 -31 181 -27 138 6 186 55 174 176 -11 107 -63 544 -99 837 -19 149 -38 317 -41 375 -5 65 -13 113 -22 127 -16 25 -14 53 13 143 8 28 19 48 24 45 5 -3 25 -37 45 -76z m472 -96 c71 -152 105 -241 93 -248 -5 -3 -25 9 -45 26 l-36 32 6 -49 c3 -27 25 -213 50 -414 82 -677 93 -832 65 -966 -14 -66 -46 -137 -59 -130 -4 3 -6 58 -3 123 3 89 -2 170 -22 328 -43 349 -95 819 -111 1009 -10 107 -22 190 -31 207 -18 35 -18 61 1 124 20 68 23 75 30 75 4 0 31 -53 62 -117z m-1587 -12 c0 -5 -7 -27 -14 -50 -14 -37 -13 -42 2 -53 40 -29 62 -71 62 -115 0 -87 -44 -143 -114 -143 -47 0 -60 25 -52 102 7 70 49 200 77 240 20 27 39 37 39 19z m784 -82 c73 -85 86 -211 39 -365 -15 -49 -27 -111 -27 -139 -1 -44 2 -50 21 -53 16 -2 26 4 35 22 6 14 15 26 20 26 10 0 11 2 -7 -58 -35 -118 -127 -78 -112 48 3 28 20 93 37 145 16 52 30 108 30 123 0 49 -28 127 -62 172 -18 24 -37 49 -43 56 -9 13 11 64 26 64 4 0 23 -19 43 -41z m-1969 -248 c22 -10 59 -39 83 -64 47 -52 53 -86 26 -138 -15 -30 -16 -30 -70 -23 -32 3 -54 2 -54 -3 0 -21 -76 -96 -126 -125 -30 -16 -54 -34 -54 -39 0 -15 130 -10 223 9 48 10 87 15 87 11 0 -11 -112 -66 -169 -83 -63 -18 -124 -21 -152 -6 -13 8 -19 21 -19 47 0 38 25 67 134 156 l46 39 -32 22 c-29 19 -33 27 -31 62 6 102 11 128 29 141 23 17 31 16 79 -6z m1410 -201 c111 -48 124 -74 80 -168 l-24 -53 -58 32 c-32 18 -69 42 -82 55 l-24 23 27 65 c16 37 30 66 31 66 2 0 24 -9 50 -20z m-127 -143 c4 -32 -32 -117 -49 -117 -17 0 -119 58 -146 83 -29 26 -29 33 3 111 l25 64 82 -57 c63 -44 83 -63 85 -84z m660 -143 c4 -33 -12 -91 -32 -117 -13 -17 -17 -17 -76 13 -33 17 -64 38 -67 46 -5 13 21 133 34 156 2 4 34 -10 71 -31 55 -32 68 -43 70 -67z m-1318 -135 c-24 -87 -25 -132 -5 -149 12 -10 19 -7 40 16 29 32 34 15 11 -41 -19 -45 -46 -59 -74 -39 -19 13 -22 25 -22 78 0 62 12 111 46 182 25 53 27 35 4 -47z m-511 -29 c-23 -90 -24 -133 -3 -151 14 -12 20 -9 40 16 19 23 24 26 24 12 0 -30 -27 -85 -48 -96 -14 -7 -25 -6 -42 6 -21 15 -22 21 -18 97 3 61 11 95 32 139 16 32 30 57 31 55 2 -2 -5 -37 -16 -78z m1161 -671 c-36 -131 -20 -200 34 -142 28 30 32 24 15 -28 -23 -69 -76 -84 -100 -28 -9 23 -9 46 -1 94 10 59 60 191 69 181 2 -2 -5 -37 -17 -77z m-836 -1 c18 -51 -11 -116 -86 -192 -78 -80 -102 -83 -35 -4 61 73 82 115 66 134 -12 15 -24 15 -62 -1 -16 -7 -17 -4 -11 21 11 48 43 75 84 72 27 -2 37 -9 44 -30z m1466 -139 c-24 -89 -25 -132 -4 -150 14 -12 20 -9 40 16 19 23 24 26 24 12 0 -30 -27 -85 -48 -96 -14 -7 -25 -6 -42 6 -21 15 -22 21 -18 97 4 63 11 94 33 138 16 32 30 56 32 54 2 -2 -5 -37 -17 -77z m504 -1 c41 -58 6 -150 -93 -249 -71 -71 -113 -94 -66 -36 85 104 116 152 113 176 -2 20 -9 27 -31 29 -16 2 -34 -1 -41 -7 -35 -29 -21 47 16 86 29 31 81 31 102 1z"/>
    <path d="M2979 2770 c-10 -6 -22 -32 -29 -58 -10 -45 -9 -55 15 -115 15 -37 31 -69 35 -72 8 -5 102 72 119 98 17 26 -14 83 -68 125 -47 35 -49 36 -72 22z"/>
    <path d="M3557 2625 c-47 -48 -55 -85 -28 -128 11 -18 29 -41 39 -51 19 -16 22 -15 76 35 63 57 67 74 33 134 -32 57 -72 60 -120 10z"/>
    <path d="M2782 3673 c-10 -17 -15 -54 -13 -80 2 -21 48 -15 78 11 31 27 27 38 -26 69 -29 17 -30 17 -39 0z"/>
    <path d="M1594 3429 c-18 -20 -18 -21 1 -35 27 -20 55 -18 55 5 0 52 -24 65 -56 30z"/>
    <path d="M1686 3404 c-8 -31 -10 -29 32 -37 37 -7 44 10 15 35 -33 28 -41 28 -47 2z"/>
    </g>
  </svg>
`,
};
// State
const gameState = {
  category: null,
  questions: [],
  playerAnswers: [],
  selectedQuestions: [],
  currentIndex: 0,
  countdown: null,
  correctAnswers: 0,
  isQuestionProcessed: false,
};
// event listeners
startButton.addEventListener("click", (e) => {
  const selectedCategory = startSection.querySelector(
    `input[name="category"]:checked`,
  );
  if (selectedCategory) {
    startQuiz(selectedCategory.value);
  } else {
    categoriesNamesBox.classList.add("shake");
    categoriesNamesBox.addEventListener(
      "animationend",
      (e) => e.currentTarget.classList.remove("shake"),
      { once: true },
    );
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedInput = form.querySelector('input[name="questions"]:checked');
  if (!selectedInput) {
    answerArea.classList.add("shake");
    answerArea.addEventListener(
      "animationend",
      () => answerArea.classList.remove("shake"),
      { once: true },
    );
    return;
  }
  cancelAnimationFrame(gameState.countdown);
  gameState.countdown = null;
  checkTheAnswer();
});
playAgain.addEventListener("click", () => location.reload());
renderCategories();
async function startQuiz(quizfile) {
  try {
    const quizData = await getQuizData(quizfile);
    gameState.questions = quizData.questions;
    gameState.category = quizData.category;
    categoryElement.textContent = gameState.category;
    gameState.selectedQuestions = getRandomQuestions();
    maxQuestionNum.textContent = gameState.selectedQuestions.length;
    addBullets();
    startSection.hidden = true;
    quizSection.hidden = false;
    showQuestion();
    startCountDown();
  } catch (error) {
    console.error("Failed to start quiz:", error);
  }
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
  }
  return array;
}
function getRandomQuestions() {
  const totalQuestions = gameState.questions.length;
  if (totalQuestions < QUESTIONS_PER_QUIZ)
    throw new Error("Not enough questions");
  const indices = Array.from({ length: totalQuestions }, (_, i) => i);
  const selectedQuestions = [];
  for (let i = 0; i < QUESTIONS_PER_QUIZ; i++) {
    const randomIndex = i + Math.floor(Math.random() * (totalQuestions - i));
    [indices[i], indices[randomIndex]] = [indices[randomIndex], indices[i]];
    const chosenQuestion = structuredClone(gameState.questions[indices[i]]);
    shuffle(chosenQuestion.answers);
    selectedQuestions.push(chosenQuestion);
  }
  return selectedQuestions;
}
function addBullets() {
  const numberOfBullets = gameState.selectedQuestions.length;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfBullets; i++) {
    let bullet = document.createElement("span");
    bullet.dataset.index = i;
    fragment.append(bullet);
  }
  bullets.append(fragment);
}
function showQuestion() {
  gameState.isQuestionProcessed = false;
  quizTitle.textContent =
    gameState.selectedQuestions[gameState.currentIndex].question;
  currentQuestionNum.textContent = gameState.currentIndex + 1;
  bullets
    .querySelector(`span[data-index="${gameState.currentIndex}"]`)
    .classList.add("done");
  const fragment = document.createDocumentFragment();
  answerArea.textContent = "";
  gameState.selectedQuestions[gameState.currentIndex].answers.forEach(
    (answerObj, index) => {
      const answerElement = document.createElement("div");
      answerElement.classList.add("answer");
      answerElement.innerHTML = `<input type="radio" name="questions" id="answer_${index + 1}" data-index=${index} />
      <label for="answer_${index + 1}">${answerObj.text}</label>
      `;
      fragment.append(answerElement);
    },
  );
  answerArea.append(fragment);
}
function startCountDown() {
  const durationInSeconds = 15;
  const endTime = Date.now() + durationInSeconds * 1000;
  let lastRenderedSecond = durationInSeconds;
  showTimer(durationInSeconds);
  function tick() {
    const remaining = endTime - Date.now();
    if (remaining <= 0) {
      cancelAnimationFrame(gameState.countdown);
      gameState.countdown = null;
      checkTheAnswer();
      showTimer(0);
      return;
    }
    const secondsLeft = Math.ceil(remaining / 1000);
    if (lastRenderedSecond !== secondsLeft) {
      lastRenderedSecond = secondsLeft;
      showTimer(secondsLeft);
    }
    gameState.countdown = requestAnimationFrame(tick);
  }
  gameState.countdown = requestAnimationFrame(tick);
}
function showTimer(time) {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  countdownElement.textContent = `${minutes}:${seconds}`;
}
function renderCategories() {
  const fragment = document.createDocumentFragment();
  categories.forEach((category, index) => {
    const categoryBox = document.createElement("div");
    categoryBox.classList.add("category-list-box");
    const currentColor = categoryColors[index % categoryColors.length];
    categoryBox.style.backgroundColor = currentColor;
    categoryBox.innerHTML = `
      <input type="radio" name="category" id="${category.logicalName}" value="${category.logicalName}" />
      <label for="${category.logicalName}">
        ${categoriesIcons[category.logicalName] ?? defaultIcon}
        <span class="category-text">${category.uiName}</span>
      </label>`;
    fragment.append(categoryBox);
  });
  categoriesNamesBox.append(fragment);
}
async function getQuizData(quizfile) {
  const response = await fetch(`./data/${quizfile}.json`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}
function checkTheAnswer() {
  if (gameState.isQuestionProcessed) return;
  gameState.isQuestionProcessed = true;
  const selectedInput = form.querySelector('input[name="questions"]:checked');
  const currentQuestion = gameState.selectedQuestions[gameState.currentIndex];
  const correctAnswer = currentQuestion.answers.find(
    (answer) => answer.isCorrect,
  );
  const selectedAnswer = selectedInput
    ? currentQuestion.answers[selectedInput.dataset.index]
    : undefined;
  gameState.playerAnswers.push({
    playerAnswers: selectedAnswer?.text ?? "لايوجد اجابة",
    correctAnswer: correctAnswer.text,
    isCorrect: selectedAnswer?.isCorrect ?? false,
  });
  if (selectedAnswer?.isCorrect) gameState.correctAnswers++;
  if (gameState.currentIndex < gameState.selectedQuestions.length - 1) {
    gameState.currentIndex++;
    showQuestion();
    startCountDown();
  } else {
    cancelAnimationFrame(gameState.countdown);
    gameState.countdown = null;
    showFinalScreen();
  }
}
function showFinalScreen() {
  const successPercentage =
    (gameState.correctAnswers / gameState.selectedQuestions.length) * 100;
  yourScore.textContent = gameState.correctAnswers;
  totalScore.textContent = gameState.selectedQuestions.length;
  endGameMessage.textContent = getFinalMessage(successPercentage);
  answerReview.innerHTML = "";
  answerReview.append(createAnswerReviewArea());
  quizSection.hidden = true;
  resultSection.hidden = false;
  resultScreenCircle.style.setProperty("--success-percent", `0%`);
  resultScreenCircle.style.setProperty("--total-percent", "0%");
  resultScreenCircle.offsetHeight;
  resultScreenCircle.style.setProperty(
    "--success-percent",
    `${successPercentage}%`,
  );
  resultScreenCircle.style.setProperty("--total-percent", "100%");
}
function getFinalMessage(percentage) {
  let finalMessage;
  if (percentage >= 90) finalMessage = "ممتاز جداً! معلوماتك قوية وراسخة. 🌟🚀";
  else if (percentage >= 70)
    finalMessage = "عمل رائع! أنت ملم بالموضوع بشكل ممتاز. 🧠👏";
  else if (percentage >= 50)
    finalMessage = "لا بأس! راجع الإجابات بالأسفل لتطوير مهاراتك. 🧐📚";
  else finalMessage = "استمر! كل خطأ هو فرصة جديدة للتعلم. 🎯🛠️";
  return finalMessage;
}
function createAnswerReviewArea() {
  const fragment = document.createDocumentFragment();
  gameState.selectedQuestions.forEach((question, index) => {
    const result = gameState.playerAnswers[index];
    // Dom Elements
    const reviewCard = document.createElement("details");
    const questionTitle = document.createElement("summary");
    const questionNum = document.createElement("span");
    const reviewCardContent = document.createElement("div");
    const yourAnswer = document.createElement("p");
    const correctAnswerElement = !result.isCorrect
      ? document.createElement("p")
      : null;
    // Add Classes To Elements
    reviewCard.classList.add(
      "answer-review__card",
      result.isCorrect
        ? "answer-review__card--correct"
        : "answer-review__card--wrong",
    );
    questionTitle.classList.add("answer-review__summary");
    questionNum.classList.add("answer-review__question-num");
    reviewCardContent.classList.add("answer-review__content");
    yourAnswer.classList.add("answer-review__your-answer");
    correctAnswerElement?.classList.add("answer-review__correct-answer");
    // Add Content To Elements
    questionNum.textContent = `س${index + 1} `;
    yourAnswer.innerHTML = `<span>اجابتك: </span>${result.playerAnswers}`;
    if (correctAnswerElement)
      correctAnswerElement.innerHTML = `<span>الاجابة الصحيحة: </span>${result.correctAnswer}`;
    // Append Elements
    reviewCardContent.append(yourAnswer);
    if (!result.isCorrect) reviewCardContent.append(correctAnswerElement);
    questionTitle.append(questionNum, question.question);
    reviewCard.append(questionTitle, reviewCardContent);
    fragment.append(reviewCard);
  });
  return fragment;
}
