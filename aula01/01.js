//ativ 01
const num = Math.floor(Math.random() * (10 - (10 * -1) + 1)) + (10 * -1);
if(num > 0){
    console.log("O numero", num, "é positivo");
}else if(num < 0){
    console.log("O numero", num, "é negativo");
}else if(num == 0){
    console.log("O numero é 0");
}