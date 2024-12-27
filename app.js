alert('boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = 0;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt ('escolha um número entre 1 e 10');
    
    if (chute == numeroSecreto) {
        alert(`Muito bem! voce descobriu o numero secreto (${numeroSecreto}) usando ${tentativas} tentativas`);
    } else {
        if (numeroSecreto > chute) {
            alert(`o número secreto é maior que ${chute}`);
         } else {
            alert (`o número secreto é menor que ${chute}`);
            }
            tentativas++;
        }
    }
