import { toggleDarkMode, applySavedTheme } from "./utils.mjs";

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