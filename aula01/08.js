//ativ 8
const num1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const num2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
const num3 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
if(num1 > num2 & num1 > num3){
    console.log("O numero maior é", num1);
    if(num2 > num3){
        console.log("O segundo maior é", num2);
        console.log("O terceiro maior é", num3);
    }else{
        console.log("O segundo maior é", num3);
        console.log("O terceiro maior é", num2);
    }
}else if(num2 > num1 & num2 > num3){
    console.log("O numero maior é", num2);
    if(num1 > num3){
        console.log("O segundo maior é", num1);
        console.log("O terceiro maior é", num3);
    }else{
        console.log("O segundo maior é", num3);
        console.log("O terceiro maior é", num1);
    }
}else if(num3 > num1 & num3 > num2){
    console.log("O numero maior é", num3);
    if(num1 > num2){
        console.log("O segundo maior é", num1);
        console.log("O terceiro maior é", num2);
    }else{
        console.log("O segundo maior é", num2);
        console.log("O terceiro maior é", num1);
    }
}