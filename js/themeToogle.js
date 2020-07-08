document.addEventListener("DOMContentLoaded", () => {
    const themeStylesheet = document.getElementById("theme");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        if (!themeStylesheet.href.includes("lght")) {
            // if it's dark -> go light
            themeStylesheet.href = "css/lght.css";
        } else {
            // if it's light -> go dark
            themeStylesheet.href = "";
        }
        // save the preference to localStorage
        localStorage.setItem("theme", themeStylesheet.href);
    });
});
