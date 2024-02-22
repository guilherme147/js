//ativ 9
const num = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
if(num == 1 || num == 2 || num % 2 == 1){
    console.log("O", num, "é impar");
}else if(num % 2 == 0){
    console.log("O", num, "é par");
}