# JAPOLIC — Developer Infrastructure Landing Page
### Zyner Web Design Internship Assessment Submission

Welcome! This repository contains the complete landing page for **Japolic**, built for the **Zyner Web Design Internship Assessment**.

It is built strictly using **HTML, CSS, JavaScript, and React** (with **Zero Python** required), designed to be clean, modular, and beginner-friendly.

---

## 📂 Project Structure

You have **two complete, working versions** of the landing page:

```text
zynr/
├── assets/                     # Shared high-resolution images
│   ├── japolic_hero_servers.jpg
│   ├── japolic_storage_arch.jpg
│   └── japolic_cluster_dashboard.jpg
│
├── index.html                  # 🌟 Option 1: Standalone HTML5 Version (Double-click to open!)
├── style.css                   # Clean, commented Vanilla CSS design system
├── script.js                   # Clean, commented Vanilla JavaScript (Zero frameworks)
│
├── react-version/              # ⚛️ Option 2: Beginner-Friendly React Version (Vite + React)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/assets/          # React assets
│   └── src/
│       ├── main.jsx            # React root entry
│       ├── App.jsx             # Main page combining all components
│       ├── index.css           # Styling
│       └── components/         # 9 Clean, modular beginner React components
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Solutions.jsx
│           ├── Benefits.jsx
│           ├── UseCases.jsx
│           ├── HowItWorks.jsx
│           ├── ContactForm.jsx
│           ├── Footer.jsx
│           └── AssessmentModal.jsx
│
└── README.md                   # This beginner-friendly guide
```

---

## 🚀 How to Run the Website (No Python Needed!)

### Option 1: Run the Pure HTML/CSS/JS Version (Easiest)
1. Navigate to the root folder `d:\zynr\`.
2. Simply **double-click** [`index.html`](file:///d:/zynr/index.html) to open it in your browser (Chrome, Edge, Brave, Safari, Firefox).
3. Or in VS Code, right-click `index.html` and click **"Open with Live Server"**.
4. Or using Node.js:
   ```bash
   npx serve .
   ```

---

### Option 2: Run the React Version (Vite + React)
1. Open your terminal in the `react-version` folder:
   ```bash
   cd react-version
   ```
2. Install dependencies (only needed once):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the link displayed in the terminal (usually `http://localhost:3000` or `http://localhost:5173`) in your browser.

---

## 🌟 The Client: Japolic (From the Brief)

> **Japolic** is a developer infrastructure company building a new type of high-performance file system.
> It allows developers to connect multiple servers to shared storage and access their data at speeds closer to local disks. It also works with S3, allowing teams to use lower-cost storage for large amounts of data while keeping frequently used data fast and accessible.
> The product is designed for **AI applications and other data-intensive workloads.**

### Target Audiences:
- **Developers (Primary):** Discover and test the product first (fast 1-line installation, POSIX file paths, zero code rewrites).
- **Engineering & AI Teams:** Focus on high GPU utilization, eliminating DataLoader bottlenecks, and fast checkpointing.
- **Infrastructure Leaders (CTOs / FinOps):** Focus on slashing storage bills by leveraging lower-cost S3 tiering.

---

## 🎨 Design Direction & Decisions

- **Aesthetic:** Clean, modern, confident, minimal, and architectural. No AI cliches, no heavy glassmorphism, no exaggerated neon glows.
- **Color Palette:**
  - Background Canvas: Obsidian `#090B0E`
  - Cards & Panels: Technical Slate `#0F131A`
  - Accents: Warm Cadmium Amber `#F59E0B` (represents high-speed NVMe flash storage tiers)
  - Status Indicators: Emerald `#10B981`
  - Typography: Off-White `#F8FAFC` and Slate `#94A3B8`
- **Typography:**
  - Headings & Text: `Plus Jakarta Sans` (clean, modern geometric font)
  - Code & Commands: `JetBrains Mono` (clear monospaced font for terminal snippets)
- **Authenticity:** Strictly follows the client brief without inventing fake statistics, awards, or fake testimonials.

---

## 📑 The 9 Required Landing Page Sections

1. **Navigation Bar:** Japolic logo, working section links, assessment modal trigger, and CTA button. Includes mobile hamburger drawer.
2. **Hero Section:** Strong headline, concise supporting text, primary and secondary CTA buttons, 1-click copyable quickstart command, and enterprise datacenter hardware visual.
3. **Brand Introduction:** Clear narrative explaining why traditional network storage falls short for AI and how Japolic's 3 pillars solve it.
4. **Main Products & Solutions:** 4 core capabilities (Distributed FS, Automated S3 Tiering, AI Pipeline Caching, Cluster & Kubernetes Integration).
5. **Key Benefits:** 4 key benefit cards plus an objective Architectural Approach Comparison table.
6. **Featured Use Cases:** AI Model Training, Model Checkpointing, and Data Analytics, paired with an architectural spotlight image.
7. **How It Works:** 4-step deployment timeline with copyable terminal snippets.
8. **Final CTA & Inquiry Form:** Client-side form with real-time validation (Name, Work Email, Role, Workload, Message) and instant success confirmation card.
9. **Professional Footer:** Brand summary, navigation columns, and assessment brief link.

---

## 🛠️ Technologies Used
- **HTML5:** Semantic, clean structure.
- **CSS3:** Responsive CSS grid, flexbox, custom variables, smooth transitions.
- **JavaScript (ES6+):** Clean, standard vanilla JavaScript.
- **React (v18 / Vite):** Beginner-friendly component-based React architecture.
- **Zero Python:** 100% web-native frontend stack.
