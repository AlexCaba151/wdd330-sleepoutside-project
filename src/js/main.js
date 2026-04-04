import { toggleDarkMode, applySavedTheme } from "./utils.mjs";
const menuBtn = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const toggleBtn = document.getElementById("darkModeToggle");
const icon = document.getElementById("icon");

// aplicar tema al cargar
const isDark = applySavedTheme();
icon.textContent = isDark ? "☀️" : "🌙";

// evento
toggleBtn.addEventListener("click", () => {
  const dark = toggleDarkMode();
  icon.textContent = dark ? "☀️" : "🌙";
});

