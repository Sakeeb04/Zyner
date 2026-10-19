# Japolic — Web Design Internship Assessment

Hi! I'm Sakeeb, and this is my landing page submission for the **Zyner Web Design Internship Assessment** for the client **Japolic**.

I created two clean, beginner-friendly versions of this landing page:
1. **Vanilla HTML5, CSS3 & JavaScript** (Open directly in any browser)
2. **React (Vite + React)** (Component-based architecture)

Both versions use pure web technologies with **zero Python dependencies**.

---

## The Client: Japolic
According to the assessment brief:
> Japolic is a developer infrastructure company building a new type of high-performance file system. It allows developers to connect multiple servers to shared storage and access their data at speeds closer to local disks. It also works with S3, allowing teams to use lower-cost storage for large amounts of data while keeping frequently used data fast and accessible. The product is designed for AI applications and other data-intensive workloads.

### Target Audiences:
- **Developers (Primary):** They discover and test the product first. They value simple 1-line installation, standard Linux paths (`/mnt/ai-data`), and fast read speeds.
- **Engineering & AI Teams:** They care about keeping GPUs busy and eliminating slow DataLoader wait times during training runs.
- **Infrastructure Leaders / CTOs:** They make final purchasing decisions and care about lowering cloud storage costs by using cheap S3 storage.

---

## How to Run

### 1. Pure HTML/CSS/JS Version (No setup needed)
Just double-click `index.html` to open it in your browser.
Or open it with the VS Code **Live Server** extension.

### 2. React Version (Vite + React)
If you want to view the React version:
```bash
cd react-version
npm install
npm run dev
```
Then open the local URL (usually `http://localhost:3000`) in your browser.

---

## Design Choices & Rationale

- **Colors:**
  - Dark background (`#0b0d11`) — standard for developer infrastructure tools to reduce eye strain.
  - Warm amber accent (`#f59e0b`) — chosen to represent high-speed NVMe flash storage and active cache.
  - Surface cards (`#12161f`) with subtle borders for clean visual hierarchy.
- **Typography:**
  - `Plus Jakarta Sans` for clean, modern headings and body text.
  - `JetBrains Mono` for command-line snippets and technical tags.
- **Layout & Structure:**
  - 1. **Header & Navigation:** Simple logo, section links, and mobile drawer.
  - 2. **Hero:** Clear value proposition, 1-click copyable mount command, and datacenter hardware visual.
  - 3. **About:** Explaining the problem of slow network storage vs expensive local disks.
  - 4. **Solutions:** 4 core capabilities of Japolic.
  - 5. **Why Japolic:** Benefits and a straightforward comparison table.
  - 6. **Use Cases:** Model training, checkpointing, and analytics workflows.
  - 7. **How It Works:** 4-step onboarding timeline.
  - 8. **Contact Form:** Real-time validation with an instant confirmation card.
  - 9. **Footer:** Helpful links, GitHub repository, and status indicator.

---

## Project Structure
```text
zynr/
├── assets/                     # Images (datacenter servers & architecture)
├── index.html                  # HTML5 version
├── style.css                   # Custom CSS styling
├── script.js                   # Vanilla JS (mobile menu, copy button, form)
├── react-version/              # React version (Vite)
│   ├── src/
│   │   ├── components/         # Modular React components
│   │   ├── App.jsx             # Main App
│   │   └── index.css           # Styling
│   └── package.json
└── README.md                   # Project documentation
```

---
*Created by Sakeeb for the Zyner Web Design Internship Assessment.*
