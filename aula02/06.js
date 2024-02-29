let times = [];
let jogadores = [];
let peso = 0;
let idade = 0;
let numeroTimes = 40;
let pesoTime = 0;
let idadeTime = 0;
let pesoTotal = 0;
let idadeTotal = 0;
for(let i = 0; i <= numeroTimes; i++){
    let nomeTime = "time" + i
    let jogadores = [];
    let numJogadores = 23;

    for(let j = 1; j <= numJogadores; j++){
        let nome = "jogador" + j;
        peso = Math.floor(Math.random() * (60 - 100 + 1)) + 100;
        idade = Math.floor(Math.random() * (18 - 40 + 1)) + 40;
        jogadores.push({nome: nome, idade: idade, peso: peso});
    }
    times.push({nomeTime: nomeTime, jogadores: jogadores})
}
for(let i = 0; i <= times.length; i++){
    let pesoTime = 0;
    let idadeTime = 0;
    for(let j = 0; j <= jogadores.length; j++){
        pesoTime = pesoTime + times[i].jogadores[j].peso;
        idadeTime = idadeTime + times[i].jogadores[j].idade;
    }
    pesoTotal = pesoTotal + pesoTime;
    idadeTotal = idadeTotal + idadeTime;
    console.log("O time", (i + 1), " tem media de peso de", pesoTime);
    console.log("O time", (i + 1), " tem media de peso de", idadeTime);
}