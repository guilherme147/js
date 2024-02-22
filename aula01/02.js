
//ativ 2
const nota1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const nota2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const media = (nota1 + nota2)/2;
if(media >= 7){
    console.log("O aluno foi aprovado com media", media);
}else{
    console.log("O aluno foi reprovado com nota", media);
}
