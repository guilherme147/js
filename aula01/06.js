//exercicio 6
const num1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
const num2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
const num3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
if(num1 > num2 & num1 > num3){
    numeroMaior = num1;
    console.log("O maior numero é o primeiro", num1);
}else if(num2 > num1 & num2 > num3){
    numeroMaior = num2;
    console.log("O maior numero é o segundo", num2);
}else if(num1 == num2 || num1 > num3){
    numeroMaior = num1;
    console.log("O maior numero é o primeiro e segundo", num1);
}else if(num3 == num2 || num3 > num1){
    numeroMaior = num3;
    console.log("O maior numero é o primeiro e segundo", num3); 
}else if(num1 == num3 || num1 > num2){
    numeroMaior = num1
    console.log("O maior numero é o primeiro e segundo", num1)
}else if(num1 == num2 & num1 == num3){
    numeroMaior = num1
    console.log("Os tres numeros são iguais", num1)
}