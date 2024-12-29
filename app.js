alert('Boas-vindas ao jogo do número secreto!');
let endNumber = 1000;
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute;
let tentativas = 1;

while (chute !== numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 e ${endNumber}`));

    if (chute === numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Muito bem! Você descobriu o número secreto (${numeroSecreto}) usando ${tentativas} ${palavraTentativa}.`);
