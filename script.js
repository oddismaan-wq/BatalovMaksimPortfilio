const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMenu() {
  mobileNav.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.textContent = "Menu";
}

menuBtn?.addEventListener("click", () => {
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.textContent = isOpen ? "Menu" : "Close";
});

mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  if (!mobileNav.hidden) closeMenu();
});
