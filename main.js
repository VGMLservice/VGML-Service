// Lucide Icons
lucide.createIcons();

// Mobile Menu
const toggle = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("mobile-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-up").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
});