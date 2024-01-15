function balancear(vitoria, derrota){
    let balanceamento = vitoria - derrota
    return balanceamento
}

let saldoRankeadas = balancear(50,40);
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
    nivel = "Broze";
}



