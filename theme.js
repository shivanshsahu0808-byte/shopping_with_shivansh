const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

function updateThemeButton (){
    if(!themeToggle) {
        return;
    }
    if(document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light-Mode";
    } else {
        themeToggle.textContent = "Dark-Mode";
    }
}

if(themeToggle) {
    themeToggle.addEventListener("click",function(){
        document.body.classList.toggle("dark-theme");

        if(document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme","dark");
        } else {
            localStorage.setItem("theme","light");
        }
        updateThemeButton();
    });
}
updateThemeButton();