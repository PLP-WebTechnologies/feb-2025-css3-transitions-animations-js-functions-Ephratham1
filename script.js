function handleUserPreferences() {
  const themeKey = "user-theme";
  const body = document.body;
  const themeBtn = document.getElementById("themeToggle");

  // Apply stored theme if available
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // Toggle and save theme on click
  themeBtn.addEventListener("click", () => {
    const current = body.dataset.theme || "light";
    const next = current === "light" ? "dark" : "light";

    localStorage.setItem(themeKey, next);
    applyTheme(next);

    // Animate body on theme change
    body.classList.add("fade");
    setTimeout(() => body.classList.remove("fade"), 500);
  });

  // Helper function to apply theme
  function applyTheme(theme) {
    body.dataset.theme = theme;
    body.className = theme;
  }
}

// Register the function on DOMContentLoaded (outside the function body)
document.addEventListener("DOMContentLoaded", handleUserPreferences);

  