const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️ Ljust läge" : "🌙 Mörkt läge";
  toggleBtn.setAttribute("aria-label", isDark ? "Växla till ljust läge" : "Växla till mörkt läge");
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    // toggla knapp
    document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // visa rätt innehåll
    const tabId = button.dataset.tab;
    document.querySelectorAll(".tab-content").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
  });
});