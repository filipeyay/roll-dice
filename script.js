function btnRolar(){
  const numDado = document.getElementById("numDado").value;
  const dadoResultado = document.getElementById("dadoResultado");
  const dadoImg = document.getElementById("dadoImg");
  const valores = [];
  const imagens = [];

  for (let i = 0; i < numDado; i++) {
    const valor = Math.floor(Math.random() * 6) + 1;
    valores.push(valor);
    imagens.push(`<img src="img/${valor}.png" alt="Dado ${valor}">`);
  }

  dadoResultado.textContent = `Dados: ${valores.join(', ')}`;
  dadoImg.innerHTML = imagens.join('');
};
