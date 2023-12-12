/* Texto Giratório / Dark Mode */ 

const text = document.querySelector(".atual-mode p")

text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 15}deg)">${char}</span>`
).join("");




const toggle = document.getElementById("checkbox");

toggle.addEventListener('click', () => {
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light";

    localStorage.setItem("themeSystem", newTheme)
    defineCurrentTheme(newTheme)

})

const themeSystem = localStorage.getItem("themeSystem") || "light"

function defineCurrentTheme(theme){

    document.documentElement.setAttribute("data-theme", theme)

};

if (themeSystem == 'dark') {
    text.innerHTML='felipe'
}


toggle.onclick = function() {
  let bb = 'a'  
};