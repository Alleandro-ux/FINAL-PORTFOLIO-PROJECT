// highlight active section on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu-content a");

  function activateMenu() {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 160; // adjust for fixed header
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active-menu");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-menu");
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
  activateMenu(); // run once on page load
});
