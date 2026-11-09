# 💌 Valentine Letter — Interactive Love Letter

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-red?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/valentine-letter-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A playful, interactive **Valentine's Day love letter** with envelope animation, a pixel-art cat, floating hearts, and a hilarious dodging NO button. Pure HTML, CSS & JavaScript — no dependencies.

---

## ✨ Features

- 💌 **Envelope intro** with open-letter transition animation
- 💗 **Floating heart particles** — ambient love in the air
- 🐱 **Pixel-art cat** drawn on HTML Canvas holding a heart
- ❤️ **YES / NO interaction** — NO button runs away from cursor!
- 🎊 **Celebration screen** with falling hearts on YES
- 🔁 **Replay button** — relive the love
- 🏹 **Cupid's arrow** bow & shoot interaction
- 📱 **Responsive** — works on mobile and desktop

---

## 🚀 Live Demo

👉 **[https://mrchandrayee.github.io/valentine-letter-project/](https://mrchandrayee.github.io/valentine-letter-project/)**

---

## 🛠️ Run Locally

No build tools or package installation required.

**Option 1 — Open directly:**
```bash
open index.html
```

**Option 2 — Local server:**
```bash
python -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## 📁 Project Structure

```
valentine-letter-project/
├── index.html      # Page structure and semantic controls
├── style.css       # Browser frame, paper texture, retro dialog & responsive styles
├── script.js       # Heart particles, canvas cat, button interactions & replay
└── README.md       # Project documentation
```

---

## 🎮 How It Works

1. **Envelope** — click to open your letter
2. **Cupid's arrow** — aim & release to shoot
3. **Love window** — opens with a pixel-art cat asking "Still love me?"
4. **YES** — triggers celebration with heart rain 🎉
5. **NO** — the button dodges your cursor 😂
6. **Replay** — start over and fall in love again

---

## 💻 Tech Highlights

```javascript
// NO button runs away on hover
function dodge() {
  noBtn.style.position = 'absolute';
  noBtn.style.left = rand() + 'px';
  yesScale += 0.07; // YES grows bigger every dodge
}
noBtn.addEventListener('pointerenter', dodge);
```

---

## 👨‍💻 Author

**mrchandrayee**
- GitHub: [@mrchandrayee](https://github.com/mrchandrayee)
- Profile: [github.com/mrchandrayee/mrchandrayee](https://github.com/mrchandrayee/mrchandrayee)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).
