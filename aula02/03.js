let valores = [];
let maiorNum = 0;
let menorNum = 0;
while(valores.length < 5){
    valores.push(Math.floor(Math.random() * (1 - 100 + 1)) + 100);
}
for(let i = 0; i < valores.length; i++){
    if(valores[i] > maiorNum){
        maiorNum = valores[i]
    }else if(valores[i] < menorNum || menorNum == 0){
        menorNum = valores[i]
    }else if(valores[i] < 0){
        console.log("Apenas numeros positivos inteiros")
    }else if(valores[i] == 0){
        console.log("0 digitado, encerrando entrada de dados")
        break
    }
    
}
console.log("O maior numero é", maiorNum);
console.log("O menor numero é", menorNum);
