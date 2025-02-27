const themeBtn = document.querySelector("#theme-toggle");
const modeLight = document.querySelector("#mode-light");
const modeDark = document.querySelector("#mode-dark");

modeDark.style.display = "none"

const body = document.body;

if(localStorage.getItem("currentTheme") === "dark")
{
    body.classList.add("dark-mode");
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}
else 
{
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}

themeBtn.addEventListener("click", ()=> {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode"))
    {
        modeDark.style.display = "none"
        modeLight.style.display = "inline"
        localStorage.setItem("currentTheme", "light")
    }
    else{
        modeLight.style.display = "none"
        modeDark.style.display = "inline"
        localStorage.setItem("currentTheme", "dark")
    }
});