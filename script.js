document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMenu() {
  mobileNav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.textContent = "Menu";
}

function toggleMenu() {
  const isOpen = mobileNav.classList.contains("open");
  if (isOpen) closeMenu();
  else {
    mobileNav.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.textContent = "Close";
  }
}

menuBtn?.addEventListener("click", toggleMenu);

mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  if (mobileNav.classList.contains("open")) closeMenu();
});

// Закрыть меню при ресайзе на десктоп
window.addEventListener("resize", () => {
  if (window.innerWidth >= 721) closeMenu();
});
