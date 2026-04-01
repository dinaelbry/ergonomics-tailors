function toggleExercise(card) {
  card.classList.toggle("active");
}

const total = 10;

function toggleCheck(item) {
  item.classList.toggle("checked");
  updateProgress();
}

function updateProgress() {
  const checked = document.querySelectorAll(".check-item.checked").length;
  const pct = (checked / total) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("check-count").textContent = checked + " / " + total;

  const msgs = [
    "ابدأ بالتفقد 👇",
    "كمّل — أنت في الأول 💪",
    "ممتاز! استمر 🌟",
    "نصف الطريق! 🎯",
    "تقريباً خلصت 🙌",
    "تسلم إيدك! جسمك محمي اليوم ✅ 🎉",
  ];

  const idx =
    checked === 0
      ? 0
      : checked <= 2
        ? 1
        : checked <= 4
          ? 2
          : checked <= 6
            ? 3
            : checked <= 9
              ? 4
              : 5;
  document.getElementById("progress-text").textContent = msgs[idx];
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".problem-card, .tip-item, .ws-card, .ex-card, .break-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
