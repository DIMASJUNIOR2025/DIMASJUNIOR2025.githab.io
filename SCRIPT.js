function search() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    alert("Digite algo para pesquisar");
    return;
  }
  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
}

function voice() {
  alert("Busca por voz simulada 🎤");
}

function camera() {
  alert("Busca por imagem simulada 📷");
}
