let readlineSync = require('readline-sync')
let num = readlineSync.question("Digite um número(par): ");

while(num%2 !== 0) {
    num = readlineSync.question("Preciso de um número par: ");
}

const str = "#";
let meio = num/2;
let img = [];
let base = "";

for(let j = 0; j < num; j++)
    base += str;

for(let i = 1; i < meio; i++) {
    let linha = "";
    for(let j = 0; j < meio; j++)
        if(j == 0 || j >= i || i == 0)
            linha += str;
        else
            linha += " ";
        img.push(linha+linha.split('').reverse());
}

for(let i = 1; i < meio; i++) {
    let linha = "";
    for(let j = meio; j > 0; j--)
        if(j == meio || j == i)
            linha += str;
        else
            linha += " ";
        img.push(linha+linha.split('').reverse());
}

img.push(base);

for(let i = 0; i < num-1; i++)
    console.log(img[i].toString().split(',').join(''));

console.log("");

for(let i = num-2; i > -1; i--)
    console.log(img[i].toString().split(',').join(''));
