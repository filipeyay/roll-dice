function btnRoll(params) {
  const numDice = document.getElementById("numDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImg = document.getElementById("diceImg");
  const values = [];
  const images = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImg.innerHTML = images.join("");
}
