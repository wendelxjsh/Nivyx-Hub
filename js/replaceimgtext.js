const imagens_container = document.querySelector(".imagens-container")
const text_containers = document.querySelector(".texts-container")

const Name_Scripts = [
  
  "The mimic",
  "Brookhaven",
  "Meme sea",
  "Doors",
  "Sama's Revenge",
  "Fisch",
  "Dandy's world",
  "Funky Friday",
  "Evade",
  "Universal"
  
]

let Img_Elements = undefined
let Span_Elements = undefined

function CreateSpansScript() {
  
  const TextElements = []
  
  function CreateSpanElemnt(texto) {

    const text = document.createElement("span")
    text.innerText = texto
    text.style.display = "none"
    text_containers.appendChild(text)
    return text

  }
 
  Name_Scripts.forEach((text_array) => {

    const SpanCreated = CreateSpanElemnt(text_array)

    TextElements.push(SpanCreated)

  })

  return TextElements

}

function CreateImgsScript() {
  
  const ImgsElments = []
  
  function CreateImgElemnt(imgsrc) {

    const image = document.createElement("img")
    image.src = imgsrc
    image.style.display = "none"
    imagens_container.appendChild(image)
    return image

  }
  
  const folders = "/imagem/script-image/"
  
  Name_Scripts.forEach((text_array) => {

    const ImageCreated = CreateImgElemnt(`${folders}${text_array}.png`)

    ImgsElments.push(ImageCreated)

  })

  return ImgsElments

}


function hideElements() {

  if (!Img_Elements || !Span_Elements) {
    console.log("There is no creative element")
    return
  }

  Img_Elements.forEach(img => img.style.display = "none")
  Span_Elements.forEach(text => text.style.display = "none")

}

function displayPair(indeximgtext) {
  if (!Img_Elements || !Span_Elements) {
    console.log("There is no creative element")
    return
  }

  hideElements()

  Img_Elements[indeximgtext].style.display = "block"
  Span_Elements[indeximgtext].style.display = "block"
}

function replacetimg() {
  displayPair(0)
  setTimeout(() => displayPair(1), 2000)
  setTimeout(() => displayPair(2), 4000)
  setTimeout(() => displayPair(3), 6000)
  setTimeout(() => displayPair(4), 8000)
  setTimeout(() => displayPair(5), 10000)
  setTimeout(() => displayPair(6), 12000)
  setTimeout(() => displayPair(7), 14000)
  setTimeout(() => displayPair(8), 16000)
  setTimeout(() => displayPair(9), 18000)
}

function initanimation() {

  if (!Img_Elements || !Span_Elements) {
    console.log("There is no creative element")
    return
  }

  Img_Elements.forEach(img => img.style.animation = "FadeIn 3s forwards")
  Span_Elements.forEach(text => text.style.animation = "FadeIn 3s forwards")

  replacetimg()

}

Img_Elements = CreateImgsScript()
Span_Elements = CreateSpansScript()

setTimeout(()=> {
  
  
  initanimation()
  setInterval(initanimation, 20000)
  
}, 3000)