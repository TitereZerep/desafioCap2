alert('boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt ('escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Muito bem! voce descobriu o numero secreto (${numeroSecreto})`);
} else {
    alert('você errou :(')
}