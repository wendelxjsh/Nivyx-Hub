function openModal(n) {
  document.getElementById('modal' + n).style.display = 'flex';
}

function closeModal(n) {
  document.getElementById('modal' + n).style.display = 'none';
}

function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Script copiado!");
}
