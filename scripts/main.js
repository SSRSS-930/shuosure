const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-site-nav]");

function readStoredTheme() {
  try {
    return localStorage.getItem("shuosure-theme");
  } catch {
    return null;
  }
}

function writeStoredTheme(value) {
  try {
    localStorage.setItem("shuosure-theme", value);
  } catch {
  }
}

const storedTheme = readStoredTheme();
if (storedTheme === "light" || storedTheme === "dark") {
  root.dataset.theme = storedTheme;
}

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function renderThemeIcon() {
  if (!themeToggle) return;
  themeToggle.textContent = currentTheme() === "dark" ? "◑" : "◐";
}

renderThemeIcon();

themeToggle?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  writeStoredTheme(next);
  renderThemeIcon();
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});
