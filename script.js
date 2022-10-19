function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = Number(document.getElementById("myInput").value);
  var inputVal2 = Number(document.getElementById("myInput2").value);
  var soma = Math.sqrt(Math.pow(inputVal, 2) + Math.pow(inputVal2, 2));
  // Displaying the value
  alert(soma);
}

// Contador
let cont = Number(document.getElementById("number").innerHTML);

function acresc() {
  let acresc = ++cont;
  document.getElementById("number").innerHTML = acresc;
}

function decresc() {
  let decresc = --cont;
  document.getElementById("number").innerHTML = decresc;
}

function reset() {
  document.getElementById("number").innerHTML = 0;
}

// Rolagem de dados
// let quant = 0;
// let dado = document.getElementById("dado").innerHTML;
// dado.addEventListener("click", rolagem);

function rolagem() {
  switch (dado) {
    case "d4":
      dado = 4;
      alert(dado);
      quant++;
      document.getElementById("resulRolagem").innerHTML = quant + "d" + dado;
      break;
    case "d6":
      alert(quant);
      break;
  }
}

function rolar() {
  switch (dado) {
    case d4:
      d4 = Math.floor(Math.random() * 4) + 1;
      break;
    case d6:
      d6 = Math.floor(Math.random() * 6) + 1;
      break;
    case d8:
      d8 = Math.floor(Math.random() * 8) + 1;
      break;
    case d10:
      d10 = Math.floor(Math.random() * 10) + 1;
      break;
    case d12:
      d12 = Math.floor(Math.random() * 12) + 1;
      break;
    case d20:
      d20 = Math.floor(Math.random() * 20) + 1;
      break;
    case d100:
      d100 = Math.floor(Math.random() * 100) + 1;
      break;
  }
}

// Jogo de adivinhação

const resposta = Math.floor(Math.random() * 10 + 1);
let tentativas = 0;

document.getElementById("submitButton").onclick = function () {
  let palpite = Number(document.getElementById("numeroEscolhido").value);
  tentativas += 1;
  if (palpite == resposta) {
    alert(`${resposta} é a resposta!. Te levou ${tentativas} tentativas`);
  } else if (palpite < resposta) {
    alert("Muito pequeno");
  } else {
    alert("Muito grande");
  }
};

// Conversor de temperatura

document.getElementById("submit").onclick = function () {
  let temp;
  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  } else if (document.getElementById("fButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  } else {
    document.getElementById("tempLabel").innerHTML =
      "Selecione uma opção acima.";
  }
};

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);
function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
