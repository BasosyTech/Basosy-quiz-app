# 🧩 Quiz App

A responsive quiz application built with **HTML**, **CSS**, and **Vanilla JavaScript**.
Players pick a category, answer a random set of questions against a countdown timer, and get a final score with a full answer review at the end. The app is fully Arabic (RTL) and driven entirely by JSON data files, so new categories and questions can be added without touching the app logic.

---

## 🎮 Live Demo

🔗 _Add your live demo link here_

---

## ✨ Features

- Multiple quiz categories, each rendered with its own inline SVG icon
- 15 random questions per quiz, selected with an unbiased partial Fisher–Yates shuffle (no repeats)
- Answers shuffled independently for every question
- 15-second countdown per question, auto-advances when time runs out
- Progress indicator (bullets) showing answered vs. remaining questions
- Final score screen with an animated percentage ring (pure CSS `conic-gradient`, no images)
- Full answer review after the quiz — each question is expandable and shows your answer vs. the correct one when wrong
- Fully right-to-left Arabic interface
- Data-driven: categories and questions are loaded from JSON, not hardcoded in the app

---

## 🛠 Technologies Used

- HTML5 (semantic sections, native `<details>`/`<summary>`)
- CSS3 (custom properties, `:has()`, `clamp()` for responsive sizing)
- Vanilla JavaScript (ES6 modules, `fetch`, JSON import attributes)

---

## 📷 Screenshots

### Start Screen & Quiz & Results

![Start Screen](screenshots/start.png)
![Quiz](screenshots/quiz.png)
![Results](screenshots/results.png)

---

## 🚀 How to Run

1. Clone the repository.

```bash
git clone https://github.com/basosytech/Basosy-quiz-app.git
```

2. Open the project folder.
3. Open `index.html`

or

Run it using **Live Server**.

---

## 📁 Project Structure

```
Quiz-App/
│
├── data/
│   ├── categories.json      # list of available categories (logicalName + UiName)
│   ├── faith_law.json       # questions for the "faith & law" category
│   ├── islamic_history.json # questions for the "islamic history" category
│   ├── islamic.json         # questions for the "islamic" category
│   └── ...                  # one JSON file per category
│
├── screenshots/
│   ├── start.png
│   ├── quiz.png
│   └── results.png
│
├── favicon.svg
├── .editorconfig
├── index.html
├── main.js
└── master.css
```

---

## 🗂 Data Format

Adding a new category takes two steps:

**1. Register it in `categories.json`:**

```json
{
  "logicalName": "html",
  "UiName": "HTML"
}
```

**2. Create `data/<logicalName>.json`** with its questions:

```json
{
  "category": "التاريخ الاسلامي",
  "questions": [
    {
      "id": 1,
      "question": "...",
      "answers": [
        { "text": "...", "isCorrect": true },
        { "text": "...", "isCorrect": false }
      ]
    }
  ]
}
```

Each category needs at least 15 questions, since that's how many are drawn per quiz.

---

## 📄 License

This project is for learning and portfolio purposes.

---
## 👨‍💻 Author
**Abdo (BasosyTech)**
- GitHub: [@BasosyTech](https://github.com/BasosyTech)

