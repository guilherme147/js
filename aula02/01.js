let pessoas = [];
let infantil = 0;
let jovem = 0;
let adulto = 0;
let meiaIdade = 0;
let idoso = 0;
while(pessoas.length < 15){
    pessoas.push(Math.floor(Math.random() * (1 - 100 + 1)) + 100);
}
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i] >= 61){
        idoso++
    }
    if(pessoas[i] < 61 & pessoas[i] >= 46){
        meiaIdade++
    }
    if(pessoas[i] < 46 & pessoas[i] >= 31){
        adulto++
    }
    if(pessoas[i] < 31 & pessoas[i] >= 16){
        jovem++
    }
    if(pessoas[i] < 16){
        infantil++
    }
}
console.log("Tem",infantil,"pessoas entre 1 e 15 anos e o percentual sobre o total é",(100*infantil)/pessoas.length, "%.");
console.log("Tem",jovem,"pessoas entre 16 e 30 anos e o percentual sobre o total é",(100*jovem)/pessoas.length, "%.");
console.log("Tem",adulto,"pessoas entre 31 e 45 anos e o percentual sobre o total é",(100*adulto)/pessoas.length, "%.");
console.log("Tem",meiaIdade,"pessoas entre 46 e 60 anos e o percentual sobre o total é",(100*meiaIdade)/pessoas.length, "%.");
console.log("Tem",idoso,"pessoas maiores de 61 anos e o percentual sobre o total é",(100*idoso)/pessoas.length, "%.")

