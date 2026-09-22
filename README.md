# 🧮 Ultimate Pro Scientific Calculator

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, full-featured **Scientific Calculator Application** built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Features an integrated **User Authentication System**, **DEG/RAD Angle Modes**, a **2nd/Shift Function Key**, **Memory Registers**, and a **Persistent Per-User Calculation History Drawer**.

---

## 🚀 Live Demo

🔗 **Demo Link:** [https://professional-calculator-rosy.vercel.app/]

---

## ✨ Key Features

### 🔐 User Authentication & Account Isolation
- **Dual Login Methods:** Sign in using either **Username** or **Email**.
- **Secure Registration:** Built-in form validation and duplicate checking.
- **Persistent Sessions:** Utilizes `sessionStorage` for seamless login persistence.
- **Isolated User Data:** History and stored memory values are mapped uniquely to each user in `localStorage`.

### 🔬 Advanced Scientific Engine
- **Angle Units:** Toggle between **Degree (DEG)** and **Radian (RAD)** modes for trigonometric calculations.
- **2nd / Shift Mode:** Reveals inverse trigonometry ($asin$, $acos$, $atan$), inverse hyperbolics ($asinh$, $acosh$, $atanh$), power bases ($10^x$, $e^x$), and cube roots ($\sqrt[3]{x}$).
- **Trigonometry & Hyperbolics:** Full support for `sin`, `cos`, `tan`, `sinh`, `cosh`, `tanh`, and their inverses.
- **Logarithms & Exponents:** Base-10 logarithm ($\log_{10}$), Natural logarithm ($\ln$), $x^2$, $x^3$, $x^y$, square root ($\sqrt{x}$), reciprocal ($1/x$), and absolute value ($\vert{}x\vert{}$).
- **Constants & Operators:** $\pi$, $e$, Factorials ($n!$), Percentages ($\%$), Modulo ($\text{mod}$), and Negation ($\pm$).

### 💾 Memory & History Management
- **Memory Keypad:** `MC` (Clear), `MR` (Recall), `M+` (Add), `M-` (Subtract), and `MS` (Store) with a visual active indicator badge.
- **Interactive History Panel:** Slide-out drawer displaying past calculations. Clicking any saved calculation restores its result directly into the active display screen.

### 🎨 UI/UX & Design
- **Glassmorphism Theme:** Glass effect styling with backdrop blur and fluid CSS animations.
- **Keyboard Support:** Complete keyboard bind system for standard math input and controls.
- **Responsive Design:** Auto-adapting grid layout for desktops, tablets, and mobile browsers.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Grid & Flexbox, CSS Variables, Glassmorphism)
- **Scripting:** JavaScript ES6+ (Regex parsing, Storage API, Event Delegation)
- **Icons:** FontAwesome v6.5.2

---

## 📂 Project Structure


Professional-Calculator/
├── index.html       # Auth forms, Calculator layout, & History drawer markup
├── style.css        # Responsive layout, Glassmorphism design, & Keypad grids
├── script.js        # Auth logic, Scientific Math Engine, Storage & History
└── README.md        # Documentation

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/atul-dubey-2005/Professional-Calculator.git](https://github.com/atul-dubey-2005/Professional-Calculator.git)

2. Navigate to the project directory
cd Professional-Calculator

3. Launch the Application
No build tools or package managers required. Simply open index.html in your web browser:
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html

⌨️ Keyboard Shortcuts
| Key | Action |
|---|---|
| 0 – 9 | Input Digits |
| +, -, *, / | Standard Arithmetic Operators |
| ., (, ) | Decimals and Parentheses |
| ^ | Power Operator (x^y) |
| ! | Factorial (n!) |
| Enter | Evaluate / Calculate (=) |
| Backspace | Delete Last Character (DEL) |
| Escape | Clear All (AC) |
🔮 Future Roadmap
 * [ ] 💱 Real-Time Currency & Unit Converter
 * [ ] 🎨 Custom Theme Selector (Dark, Light, Cyberpunk, OLED Black)
 * [ ] 📊 Function Graphing Engine (2D Plotting)
 * [ ] 📄 Export Calculation History to CSV / PDF
 * [ ] 📱 Progressive Web App (PWA) Support for Offline Mobile Use
🤝 Contributing
Contributions, issues, and feature requests are welcome!
 * Fork the project.
 * Create your feature branch (git checkout -b feature/AmazingFeature).
 * Commit your changes (git commit -m 'Add some AmazingFeature').
 * Push to the branch (git push origin feature/AmazingFeature).
 * Open a Pull Request.

👨‍💻 Author
Atul Dubey
 * 📧 Email: atuldubey0214@gmail.com
 * 🔗 LinkedIn: atul-dubey-059197320
 * 🐙 GitHub: @atul-dubey-2005
⭐ If you found this project helpful, please consider giving it a star on GitHub!

