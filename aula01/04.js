//ativ 4
const num1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const num2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
if(num1 > num2){
    console.log("O numero maior é", num1);
}else if(num2 > num1){
    console.log("O numero maior é", num2);
}else{
    console.log("Os dois numeros são iguais");
}