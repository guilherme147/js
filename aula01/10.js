//ativ 10
const timeA = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const timeB = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
console.log("O time A fez", timeA, "gols.");
console.log("O time B fez", timeB, "gols.");
if(timeA > timeB){
    console.log("O time A é o vencedor");
}else{
    console.log("O time B é o vencedor");
}