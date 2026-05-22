# Anime & Manga Characters Encyclopedia

A dynamic web catalog and interactive dashboard designed to showcase iconic anime and manga characters. This project functions as a visual landing page that fetches structured data from a live simulated API endpoint and provides advanced filter interactions alongside a custom dual-theme experience.

---

## Chosen Theme
The project focuses on **Manga and Anime Culture**. It features a curated collection of 16 prominent characters categorized by their universe origins (franchises such as One Piece, Naruto, Jujutsu Kaisen, Bleach, and Witch Hat Atelier) and their specific narrative roles (Protagonists, Antagonists/Villains, and Mentors/Supporting characters).

---

## Design & UI Architecture
The user interface features an immersive layout tailored to gaming and entertainment media platforms, built entirely on top of Bootstrap 5 structural utilities.

* **Color Palette & Themes:**
  * **Normal Mode (Default):** A cohesive dark ecosystem utilizing deep grays (`#0d1117`, `#161b22`) for the backdrop to maximize visual comfort, highlighted by high-contrast vivid red (`#ff4a4a`) and light blue (`#58a6ff`) accents on badges and interactive utilities.
  * **Dark Mode (Absolute):** Triggers a deep pitch-black (`#000000`) environment with structural components turning into solid graphite tones to maximize high-contrast readability under zero-light environments.
* **Component Architecture:** The layout displays information inside responsive flexbox grid systems (`d-flex`, `flex-wrap`). The character cards are heavily customized to strip down the default Bootstrap appearance, integrating rigid border adjustments and cohesive content padding.
* **Micro-interactions & Animations:**
  * **Continuous Floating Effect:** The cards are animated natively with an infinite vertical loop (`@keyframes floatLoop`) that gives them a smooth levitation behavior right from the moment they load.
  * **Hover Interactivity & Glow:** When hovering over any card, the floating animation pauses instantly. The card gains a sharp custom red border accent accompanied by a deep, dual-layered red radial box-shadow that creates an intense glowing background effect behind it.

---

## Project Structure
The repository is organized following a clean front-end architecture layout:

```text
├── json/
│   └── db.json         # Mock database container holding structural character profiles
├── .gitignore          # File to exclude specific local files or node modules from version control
├── index.html          # Main application structure and Bootstrap layout shell
├── main.js             # API fetching architecture, rendering routines, and theme toggling
├── package-lock.json   # Automatically generated file for locking dependency versions
├── package.json        # Manifest file describing project configurations and dependencies
├── README.md           # Documentation file detailing project requirements and usage
└── style.css           # Global custom layout rules, floating animations, and dual themes
```

* **`index.html`**: Contains the layout skeleton, header, footer, custom navigation filters, and the target section for dynamic character insertion.
* **`style.css`**: Manages structural styles, the continuous levitation engine, card glow hovering effects, and specific `.dark-mode` overrides.
* **`main.js`**: Handles async-await asynchronous data retrieval, active filter styles handling, DOM manipulation, and theme switching events.
* **`json/db.json`**: Holds the local data registry structure parsed directly by the server.

---

## Layout Gallery & Screenshots
Below are the visual reference captures of the application dashboard across both viewport modes:

### Normal Mode View
![Normal Mode Preview](https://res.cloudinary.com/divgcktiw/image/upload/v1779479855/8e652a97-17f6-4c7a-8c49-a7069d9a2ecb.png)


### Dark Mode View
![Dark Mode Preview](https://res.cloudinary.com/divgcktiw/image/upload/v1779479982/0f8a5b11-2347-44af-ac4a-9db5e32aecb1.png)

---

## Install dependencies
Install JSON Server globally on your machine to orchestrate the simulation of your database endpoint:

```bash
npm install -g json-server
```

---

## Launch the database server
Run the local server environment targeting your structured database file:

```bash
json-server --watch json/db.json
```

*Note: The server will host the live API endpoint locally at http://localhost:3000/characters .*

---

## Run the Front-End application
Open the `index.html` file directly in any modern web browser or execute it using a local development server utility (such as the Live Server extension in VS Code).

---

## Live Deployment
The production environment of this application is fully optimized, compiled, and hosted on Vercel.

👉 **Live Demo Link:** [View Live Project on Vercel](https://anime-character-moba-select.vercel.app/)