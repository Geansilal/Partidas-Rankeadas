function balancear(vitoria, derrota){
    let balanceamento = vitoria - derrota
    return balanceamento
}

vitoria = prompt("Digite a quantidade de vitorias ");
derrota = prompt("Digite a quantidade de derrotas ");

let saldoRankeadas = balancear(vitoria,derrota);
let nivel = " ";

if (saldoRankeadas <= 10){
    nivel = "Ferro";
} else if(saldoRankeadas >= 11 && saldoRankeadas <= 20){
    nivel = "Broze";
} else if(saldoRankeadas >= 21 && saldoRankeadas <= 50){
    nivel = "Prata";
} else if(saldoRankeadas >= 51 && saldoRankeadas <= 80){
    nivel = "Ouro";
} else if(saldoRankeadas >= 81 && saldoRankeadas <= 90){
    nivel = "Diamante";
} else if(saldoRankeadas >= 91 && saldoRankeadas <= 100){
    nivel = "Lendario";
} else if(saldoRankeadas > 101){
    nivel = "Imortal";
}

console.log(`O Herói tem o saldo de **${saldoRankeadas}**, e está no nível de Rank **${nivel}** `);
