let peso = [];
let idade = [];
let infantil = 0;
let pInfantil = 0;
let infantoJuvenil = 0;
let pInfantoJuvenil = 0;
let jovem = 0;
let pJovem = 0;
let adulto = 0;
let pAdulto = 0;
while(idade.length < 15){
    idade.push(Math.floor(Math.random() * (1 - 50 + 1)) + 50);

}
for(let i = 0; i < idade.length; i++){
    if(idade[i] < 18){
    peso.push(Math.floor(Math.random() * ((i * 2) - (i * 4) + 1)) + (i * 4));
    }else{
        peso.push(Math.floor(Math.random() * (40 - 125 + 1)) + 125);
    }
}
for(let i = 0; i < idade.length; i++){
    if(idade[i] >= 1 & idade[i] <= 10){
        infantil++
        pInfantil = pInfantil + peso[i]
    }
    if(idade[i] >= 11 & idade[i] <= 21){
        infantoJuvenil++
        pInfantoJuvenil = pInfantoJuvenil + peso[i]
    }
    if(idade[i] >= 22 & idade[i] <= 30){
        jovem++
        pJovem = pJovem + peso[i]
    }
    if(idade[i] > 30){
        adulto++
        pAdulto = pAdulto + peso[i]
    }
}
console.log("A media de peso da faixa de idade entre 1 e 10 é",(pInfantil/infantil), "kg.");
console.log("A media de peso da faixa de idade entre 11 e 21 é",(pInfantoJuvenil/infantoJuvenil), "kg.");
console.log("A media de peso da faixa de idade entre 22 e 30 é",(pJovem/jovem), "kg.");
console.log("A media de peso da faixa de idade acima dos 30 é",(pAdulto/adulto), "kg.");