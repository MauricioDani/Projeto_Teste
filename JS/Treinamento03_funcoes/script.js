// var textoInicial = document.getElementById('teste').innerText;
let age = prompt('Quantos anos você tem?','');
let userName = prompt('Qual o seu nome?')
let jsName;

alert(userName);

if(typeof age == 'number'){ 
    alert(confirm(`Você tem ${age} anos?`));
}else if(typeof age == 'string'){
    alert(`Informe um valor válido para este campo!`);
}else{
    alert("Don't know what to do...");
}

if(prompt('Qual o verdadeiro nome do JavaScript?') == 'ECMAScript'){
    alert("That's right!");
}
else{
    alert("Don't you know? 'ECMAScript'! ");
}

/*
let a = 2;
let b = 3;

let result = 5;

console.log(a);
console.log(b);
result = a + b;
console.log(result);

function calcula(a,b) {
    console.log(a+b);
}

function minhaFuncao(texto, reseta = false) {
    var titulo = document.getElementById('teste');
    if(!reseta){
        titulo.innerText = texto;
    } else {
        titulo.innerText = textoInicial;
    }
}

function teste(e) {
    e.innerText = 'jadjahsd';
}
*/
