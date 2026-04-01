// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Add click animation to writing items
document.querySelectorAll(".writing-item").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Article clicked:", item.querySelector("p").textContent);
    // You can add navigation or modal logic here
  });
});

// Parallax effect on scroll (subtle)
let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const projects = document.querySelectorAll(".project-images");

    projects.forEach((project, index) => {
      const speed = 0.05;
      const yPos = -(scrollTop - project.offsetTop) * speed;
      project.style.transform = `translateY(${yPos}px)`;
    });

    lastScrollTop = scrollTop;
  },
  { passive: true },
);

// Loading animation
window.addEventListener("load", () => {
  document.querySelector("header").style.opacity = "0";
  document.querySelector("header").style.transform = "translateY(20px)";
  document.querySelector("header").style.transition =
    "opacity 0.8s ease, transform 0.8s ease";

  setTimeout(() => {
    document.querySelector("header").style.opacity = "1";
    document.querySelector("header").style.transform = "translateY(0)";
  }, 100);
});

// Add hover effect to interest cards
document.querySelectorAll(".interest-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.zIndex = "10";
  });

  card.addEventListener("mouseleave", function () {
    this.style.zIndex = "1";
  });
});

// Form validation if needed later
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", (e) => {
    console.log("Contact button clicked");
    // Add analytics or tracking here
  });
}
