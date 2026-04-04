// guardar en localStorage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// obtener de localStorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// obtener parámetro de URL (requerido en el curso)
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// manejar dark mode (reutilizable)
export function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  return isDark;
}

// aplicar tema guardado
export function applySavedTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
    return true;
  }

  return false;
}