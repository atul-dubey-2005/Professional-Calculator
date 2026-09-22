# 🧮 Ultimate Pro Scientific Calculator

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://professional-calculator-rosy.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A high-performance, modern, full-featured **Scientific Calculator & Workspace** crafted using vanilla **HTML5**, **CSS3 (Glassmorphism UI)**, and modular **ES6+ JavaScript**. Designed with multi-user authentication support, dynamic state management, angle unit conversions, active memory registers, and an interactive slide-out calculation history drawer.

---

## 🌐 Live Demo

🔗 **Live URL:** [https://professional-calculator-rosy.vercel.app/](https://professional-calculator-rosy.vercel.app/)

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
  - [1. User Authentication & Multi-Tenant Data](#1-user-authentication--multi-tenant-data)
  - [2. Advanced Math Engine](#2-advanced-math-engine)
  - [3. Interactive History & Memory System](#3-interactive-history--memory-system)
  - [4. Glassmorphism UI & Accessibility](#4-glassmorphism-ui--accessibility)
- [Technical Architecture](#-technical-architecture)
- [Tech Stack](#-tech-stack)
- [Directory Structure](#-directory-structure)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Browser Compatibility](#-browser-compatibility)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author & Contact](#-author--contact)

---

## 🧐 About The Project

Standard web calculators often lack multi-user support, state persistence, and extended scientific capabilities. **Ultimate Pro Scientific Calculator** addresses these gaps by combining a desktop-grade scientific engine with a modern web experience.

It operates entirely client-side without heavy external dependencies, maintaining high speed, minimal bundle size, and offline availability once loaded.

---

## ✨ Key Features

### 1. User Authentication & Multi-Tenant Data
* **Dual Identifiers:** Users can log in using either their registered **Username** or **Email Address**.
* **Account Isolation:** Each registered user receives an isolated data profile in `localStorage`.
* **Session Persistence:** Uses `sessionStorage` to keep users signed in across tab reloads while allowing secure logouts.
* **Input Validation:** Built-in pattern checks for valid email formatting, password length, and duplicate registration protection.

### 2. Advanced Math Engine
* **Angle Unit Toggle (DEG / RAD):**
  * **Degree (DEG) Mode:** Automatically converts inputs prior to evaluating trigonometric routines.
  * **Radian (RAD) Mode:** Evaluates standard mathematical radians directly via JS `Math`.
* **2nd / Shift Mode:** Toggles secondary scientific functions dynamically on the interface:
  * Inverses: $\arcsin(x)$, $\arccos(x)$, $\arctan(x)$
  * Inverse Hyperbolics: $\text{asinh}(x)$, $\text{acosh}(x)$, $\text{atanh}(x)$
  * Exponents & Roots: $10^x$, $e^x$, $\sqrt[3]{x}$
* **Standard Scientific Functions:**
  * Trigonometry: $\sin$, $\cos$, $\tan$, $\sinh$, $\cosh$, $\tanh$
  * Exponents & Logarithms: $\log_{10}(x)$, $\ln(x)$, $x^2$, $x^3$, $x^y$, $\sqrt{x}$, $1/x$, $\vert{}x\vert{}$
  * Mathematical Constants: $\pi$ ($3.14159265...$), $e$ ($2.71828182...$)
  * Operators & Specials: Factorial ($n!$), Percent ($Default / 100$), Modulo ($\text{mod}$), Negation ($\pm$).

### 3. Interactive History & Memory System
* **5-Register Memory Panel:**
  * `MC`: Clear current user's memory register.
  * `MR`: Recall current stored memory value back to display.
  * `M+`: Add display value to memory register.
  * `M-`: Subtract display value from memory register.
  * `MS`: Store current display value into memory.
  * *Visual Badge Indicator:* Highlights when memory contains non-zero data.
* **Persistent Calculation History Drawer:**
  * Slide-out panel that tracks all calculated expressions per individual user session.
  * **Interactive Recall:** Clicking any expression in the history list copies that value directly back to the active calculator screen.
  * **Clear History Option:** Easily wipe saved records per account.

### 4. Glassmorphism UI & Accessibility
* **Modern Aesthetic:** Dark mode background elevated with translucent frosted-glass panels, backdrop blurs, subtle glowing borders, and tactile key animations.
* **Full Keyboard Bindings:** Input expressions directly via physical keyboard keys without touching the mouse.
* **Fully Responsive:** Auto-adjusts keypads and display scales across mobile, tablet, laptop, and desktop viewport sizes.

---

## 🏗️ Technical Architecture

```
                 +--------------------------+
                 |    User Interface Layer  |
                 | (HTML5 / Glass CSS Grid) |
                 +------------+-------------+
                              |
                     Events & Key Binds
                              |
                              v
                 +--------------------------+
                 |    Controller & Engine   |
                 |   (Modular JavaScript)   |
                 +----+-----------------+---+
                      |                 |
          Tokenization & Math       State & Storage
                      |                 |
                      v                 v
          +-------------------+  +--------------------+
          | Math Execution &  |  | localStorage &     |
          | DEG/RAD Parser    |  | sessionStorage API |
          +-------------------+  +--------------------+
```

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic Structure & Accessibility Attributes)
- **Styling:** CSS3 (CSS Grid, Flexbox, Custom CSS Variables, Glassmorphism Backdrop-Filter)
- **Logic:** Vanilla JavaScript ES6+ (Regex String Parsing, Closure State Management, Event Delegation)
- **Typography & Icons:** Google Fonts (Inter / JetBrains Mono) & FontAwesome v6.5.2

---

## 📂 Directory Structure

```
Professional-Calculator/
│
├── index.html          # Main HTML entry point (Auth views, Calculator UI, History Drawer)
├── style.css           # Glassmorphism design system, Keypad CSS Grid, Responsiveness
├── script.js           # Core Engine (Auth module, Math parser, Memory, History state)
├── README.md           # Project Documentation
└── LICENSE             # Software License (MIT)
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites
Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave). No runtime installation required.

### 1. Clone the Repository
```bash
git clone [https://github.com/atul-dubey-2005/Professional-Calculator.git](https://github.com/atul-dubey-2005/Professional-Calculator.git)
```

### 2. Navigate into the Project Directory
```bash
cd Professional-Calculator
```

### 3. Open in Browser

#### Option A: Direct File Open
Double click `index.html` or open it via terminal:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

#### Option B: Local Web Server (Recommended)
Using Node.js `npx`:
```bash
npx serve .
```
Or using VS Code extension:
Right-click `index.html` $\rightarrow$ Select **"Open with Live Server"**.

---

## ⌨️ Keyboard Shortcuts

| Key Input | Function / Action |
| :--- | :--- |
| `0` – `9` | Numeric Input |
| `.`, `(`, `)` | Decimal Point, Left / Right Parentheses |
| `+`, `-`, `*`, `/` | Standard Mathematical Operators |
| `^` | Exponentiation ($x^y$) |
| `!` | Factorial ($n!$) |
| `Enter` or `=` | Execute / Calculate Result |
| `Backspace` | Delete Last Entered Character (`DEL`) |
| `Escape` | Clear Entire Active Display (`AC`) |

---

## 🌐 Browser Compatibility

| Browser | Supported Version |
| :--- | :--- |
| Google Chrome | 76+ |
| Mozilla Firefox | 70+ |
| Microsoft Edge | 79+ |
| Apple Safari | 13.1+ |
| Opera | 63+ |

---

## 🔮 Future Roadmap

- [ ] 💱 **Unit & Currency Converter:** Real-time exchange rate updates via public REST APIs.
- [ ] 🎨 **Multi-Theme Engine:** Toggle between Glass Dark, OLED Pitch Black, Cyberpunk Neon, and Light Minimalist.
- [ ] 📊 **2D Function Graphing:** Canvas-based plotting engine for visual mathematical functions.
- [ ] 📄 **Export History:** Download calculation records in CSV and PDF formats.
- [ ] 📱 **PWA Support:** Installable desktop/mobile Progressive Web App with full offline capabilities.

---

## 🤝 Contributing

Contributions are welcomed to help improve this project!

1. Fork the Project Repository.
2. Create your Feature Branch:
   ```bash
   git checkout -b feature/NewFeature
   ```
3. Commit your Changes:
   ```bash
   git commit -m "Add NewFeature"
   ```
4. Push to your Branch:
   ```bash
   git push origin feature/NewFeature
   ```
5. Open a **Pull Request** detailing your additions or fixes.

---



---

## 👨‍💻 Author & Contact

**Atul Dubey**

- 📧 **Email:** [atuldubey0214@gmail.com](mailto:atuldubey0214@gmail.com)
- 🔗 **LinkedIn:** [atul-dubey-059197320](https://www.linkedin.com/in/atul-dubey-059197320)
- 🐙 **GitHub:** [@atul-dubey-2005](https://github.com/atul-dubey-2005)
- 🌐 **Live Demo:** [https://professional-calculator-rosy.vercel.app/](https://professional-calculator-rosy.vercel.app/)

---

⭐ **If you find this project useful, feel free to give it a star on GitHub!**
