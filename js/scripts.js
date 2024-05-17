//---------- BOTON MENU DESPLEGABLE
const btnPanel = document.getElementById("btn-panel");
const panel = document.getElementById("panel");
const enlaces = document.querySelectorAll(".enlace");

const togglePanel = btnPanel.addEventListener("click", () =>{
    if (panel.className == "panel"){
        panel.classList.add("panel-is-active");
    } else {
        panel.classList.remove("panel-is-active");
        panel.classList.add("panel");
    }
})

enlaces.forEach(function(enlace, index){
    enlace.addEventListener("click", function(){
        panel.classList.remove("panel-is-active");
        panel.classList.add("panel");
    })
})
//---------- BOTON SCROLL
const btnScroll = document.getElementById("btn-scroll");

window.addEventListener("scroll", (e) =>{
    let scrollTop = window.pageYOffset || documentElement.scrollTop;

    if (scrollTop > 700){
        btnScroll.classList.remove("hidden")
    } else {
        btnScroll.classList.add("hidden")
    }
})
btnScroll.addEventListener("click", (e) =>{
    if (btnScroll){
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }
})
//----------- BOTON DARK LIGHT MODE
const btnDarkMode = document.getElementById("btn-dark-mode");
const elementsDark = document.querySelectorAll(".dark-mode");
const elementsDark1 = document.querySelectorAll(".dark-mode-header");

const iconMoon = document.getElementById("icon-moon");
const iconSun = document.getElementById("icon-sun");

btnDarkMode.addEventListener("click", () =>{
    elementsDark.forEach((el) => {
        el.classList.toggle("dark-mode")
    })
    elementsDark1.forEach((el) => {
        el.classList.toggle("dark-mode-header")
    })

    if (document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "true")
    } else {
        localStorage.setItem("theme", "false")
    }
})
    if (localStorage.getItem("theme") === "true"){
        document.body.classList.add("dark-mode");
        iconMoon.classList.add("ocult")
        iconMoon.classList.add("ocult")
        iconSun.classList.remove("ocult")
    } else {
        document.body.classList.remove("dark-mode");
        iconMoon.classList.remove("ocult")
        iconSun.classList.add("ocult")
    }

btnDarkMode.addEventListener("click", ()=>{
    if (iconMoon.classList.contains("ocult")){
        iconMoon.classList.remove("ocult")
        iconSun.classList.add("ocult")
    } else {
        iconMoon.classList.add("ocult")
        iconSun.classList.remove("ocult")
    }
})
//---------------- SCROLL HEADER
const header = document.querySelector(".header");
const btnPanelOff = document.querySelector(".cont-btn");
let prevY = window.scrollY;
window.addEventListener("scroll", () =>{
    if(prevY > window.scrollY){
        header.classList.remove("headerOff");
        btnDarkMode.classList.remove("darkModeOff");
        btnPanelOff.classList.remove("btnPanelOff");
    } else {
        header.classList.add("headerOff");
        btnDarkMode.classList.add("darkModeOff");
        btnPanelOff.classList.add("btnPanelOff");
    }
    prevY = window.scrollY;
});