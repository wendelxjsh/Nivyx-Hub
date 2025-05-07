import EnableParticleEffect from '/scripts/tsparticule.js'

const panelparticle = document.querySelector("#tsparticles")
const menu_container = document.querySelector(".menu-container")
const introduction_container = document.querySelector(".introduction-container")
const introduction_text = document.getElementById("introduction-text")
const main_container = document.querySelector("main")
const footer_container = document.querySelector(".credits-container")
const nav_container = document.querySelector(".navigation-container")
const button_container = document.querySelector(".navigation-button")
const get_script_button = document.getElementById("click-here")

introduction_text.addEventListener("animationend", () => {
  
  
  introduction_container.style.display = "none"
  menu_container.style.display = "flex"
  main_container.style.display = "flex"
  footer_container.style.display = "flex"
  
})

button_container.addEventListener("click", () => {
  const img = button_container.querySelector(".navigation-button > img")
  
  console.log(img.src)
  
  if (img.src.includes("navigationbuttonon.png")) {
    img.src = "/imagem/navigationbuttonoff.png"
    nav_container.style.left = "0px"
  } else {
    img.src = "/imagem/navigationbuttonon.png"
    nav_container.style.left = "-500px"
  }
})

get_script_button.addEventListener("click", () => {
  
  window.location.href = "https://fir3.net/Nx8Dr2I"
  
})

EnableParticleEffect()