let idade = [18,55,77,33,64,58];
let altura = [170,155,190,177,168,174];
let mediaAltura = 0;
let numMaiorCinq = 0;
for(let i = 0; i < idade.length; i++){
    if(idade[i] > 50){
        mediaAltura = mediaAltura + altura[i]
        numMaiorCinq++
    }
}
console.log("A media de altura das pessoas acima de 50 anos é", (mediaAltura/numMaiorCinq), "centimetros.");