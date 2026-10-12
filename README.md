# CHARUSAT ITUE301 — Practical 2: State Management and Routing in React

**Student Roll Number:** 24CS093  
**Course:** Advanced Web Development Frameworks (ITUE301)  
**Subject:** Practical 2 — State Management and Routing in React  

---

## 📌 Practical Overview

This project builds upon the Practical 1 component architecture by adding multi-page client-side routing using `react-router-dom` (v7) and robust state management using React's `useState` hook.

### Key Implemented Features:
1. **Single-Page Application Routing (`react-router-dom`):**
   - Single top-level `<BrowserRouter>` configured inside `main.jsx`.
   - `<Routes>` and `<Route>` mappings for clean client-side navigation without full-page reloads.
   - Active route highlighting using `<NavLink>` in `NavBar.jsx`.
2. **Routes Architecture:**
   - `/` — **Home Page:** Displays personal introduction, academic details, skills badge grid, and a featured CTA link.
   - `/projects` — **Projects Page:** Showcases 3 sample projects with status indicators and technology tags.
   - `/contact` — **Contact Page:** Features a controlled input form, character counter, live state preview monitor, and conditional tooltip rendering.
   - `*` — **404 Catch-All Route:** Custom `NotFound` page providing clear feedback and a navigation Link back to Home.
3. **State Management (`useState`):**
   - **Dark / Light Theme Toggle:** Global state managed on the root component applying scoped CSS variables (`light-theme` vs. `dark-theme`).
   - **Controlled Input Form:** Real-time state binding (`value` & `onChange`) for text inputs and textarea.
   - **Live Character Counter:** Dynamic tracking of message character length against maximum limit.
   - **Conditional Visibility Toggle:** Boolean state toggle to display or hide submission guidelines.
   - **Real-Time State Synchronization Preview:** Live display card reflecting component state as the user types.

---

## 🚀 How to Run the Project

1. Navigate to the Practical 2 repository directory:
   ```bash
   cd "C:\AWDF Practicals\24CS093_AWDF_Practical-2"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173/
   ```

5. Run Lint checks:
   ```bash
   npm run lint
   ```

6. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Directory Structure

```text
24CS093_AWDF_Practical-2/
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── src/
    ├── main.jsx                 # Entry point with BrowserRouter
    ├── App.jsx                  # Root layout, theme state, Routes definition
    ├── App.css                  # Theme variables (dark/light), styling
    ├── index.css                # Base reset and typography
    ├── components/
    │   ├── Header.jsx           # Portfolio header with themeColor
    │   ├── NavBar.jsx           # NavLink navigation + dark/light toggle
    │   ├── About.jsx            # About Me card and academic info
    │   ├── Skills.jsx           # Dynamic skills rendering (.map)
    │   └── Footer.jsx           # Reusable footer with email & copyright
    └── pages/
        ├── Home.jsx             # Home page route (/)
        ├── Projects.jsx         # Projects showcase route (/projects)
        ├── Contact.jsx          # Controlled form & state monitor route (/contact)
        └── NotFound.jsx         # 404 catch-all route (*)
```
