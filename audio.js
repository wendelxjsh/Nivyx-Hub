const AudioButton = document.getElementById("audio-button")
const AudioPlay = document.getElementById("AudioHeader")

AudioButton.addEventListener("click", () => {
  if (AudioButton.src.includes("sem-som.png")) {
    AudioButton.src = "/imagem/com-som.png"
    AudioPlay.play()
  } else {
    AudioButton.src = "/imagem/sem-som.png"
    AudioPlay.pause()
  }
})

AudioButton.addEventListener("dblclick", () => {
  if (AudioButton.src.includes("/imagem/com-som.png")) {
    let NumAleatorio = Math.floor(Math.random() * 2) + 1

    if (NumAleatorio === 1) {
      AudioPlay.src = "/audio/darling_franxx_sound.mp3"
    } else {
      AudioPlay.src = "/audio/lich_sound.mp3"
    }
    
    AudioPlay.load()
    AudioPlay.play()
  }
})