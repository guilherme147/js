//ativ 3
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let anoNasc;
let anoAtual = 2024;
rl.question("Digite sua data de nascimento: ", (data) => {
    anoNasc = data;
    idade = anoAtual -  anoNasc;
    rl.close();
    if(idade >= 18){
        console.log("Sua idade é", idade, "e voce pode votar");
    }else{
        console.log("Sua idade é", idade, "e voce nao pode votar");
    }
})