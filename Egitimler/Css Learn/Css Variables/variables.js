document.getElementById("dark-theme-btn").addEventListener("click", () => {    /* set the background color to dark color */
    document.documentElement.style.setProperty("--background-color", "#333")
})

document.getElementById("light-theme-btn").addEventListener("click", () => {    /* set the background color to light color */
    document.documentElement.style.setProperty("--background-color", "white")
})