//ativ 7
const num1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const num2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const num3 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
let somaMaior;
if(num1 > num2 & num2 > num3){
    somaMaior = num1 + num2;
    console.log("A soma dos dois maiores é", somaMaior);
}else if(num2 > num1 & num3 > num1){
    somaMaior = num2 + num3;
    console.log("A soma dos dois maiores é", somaMaior);
}else if(num1 > num2 & num3 > num2){
    somaMaior = num1 + num3;
    console.log("A soma dos dois maiores é", somaMaior);
}else if(num1 == num2 & num1 == num3){
    somaMaior = num1 + num2 + num3;
    console.log("Os tres numeros são iguais e a soma deles é", somaMaior);
}