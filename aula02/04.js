let valores = [1,-1,3,4,-6,0];
let somaPositivos = 0;
let somaNegativos = 0;
for(let i = 0; i < valores.length; i++){
    if(valores[i] > 0){
        somaPositivos = somaPositivos + valores[i];
        console.log("AAAAA")
    }else if(valores[i] < 0){
        somaNegativos = somaNegativos + valores[i];
    }
}
console.log("A soma dos positivos é", somaPositivos,", e dos negativos", somaNegativos);
console.log("A soma dos positivos com os negativos é", (somaPositivos)+(somaNegativos));