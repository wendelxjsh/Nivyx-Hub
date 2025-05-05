function openModal() {
  document.getElementById("scriptModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("scriptModal").style.display = "none";
}

function copyToClipboard(id) {
  const code = document.getElementById(id).textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("Script copiado!");
  });
}
