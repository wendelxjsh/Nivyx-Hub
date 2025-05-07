// Abre o modal com o conteúdo do script
function openModal(scriptNumber) {
  const modal = document.getElementById("scriptModal");
  const scriptContent = document.getElementById("scriptContent");
  const copyButton = document.getElementById("copyButton");

  // Define o conteúdo com base no botão clicado
  switch (scriptNumber) {
    case 1:
      scriptContent.textContent = `loadstring(game:HttpGet("https://raw.githubusercontent.com/WendelHub/ShinraHub/main/BloxFruits"))()`;
      break;
    case 2:
      scriptContent.textContent = `loadstring(game:HttpGet("https://raw.githubusercontent.com/WendelHub/ShinraHub/main/BlueLock"))()`;
      break;
    case 3:
      scriptContent.textContent = `loadstring(game:HttpGet("https://raw.githubusercontent.com/WendelHub/ShinraHub/main/Brookhaven"))()`;
      break;
    case 4:
      scriptContent.textContent = `loadstring(game:HttpGet("https://raw.githubusercontent.com/WendelHub/ShinraHub/main/MemeSea"))()`;
      break;
    default:
      scriptContent.textContent = "";
  }

  modal.style.display = "block";

  // Botão de copiar
  copyButton.onclick = function () {
    navigator.clipboard.writeText(scriptContent.textContent)
      .then(() => {
        alert("Script copiado para a área de transferência!");
      })
      .catch(err => {
        alert("Erro ao copiar o script: " + err);
      });
  };
}

// Fecha o modal
function closeModal() {
  const modal = document.getElementById("scriptModal");
  modal.style.display = "none";
}

// Fecha o modal ao clicar fora da caixa
window.onclick = function (event) {
  const modal = document.getElementById("scriptModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
