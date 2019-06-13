function checkAge2(age){
    return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

function min(x,y){
    if(x<y){
        return x;    
    }else{
        return y;
    }
}

function pow(x,n){
    let exp = x;

    for(i = 1;i<n;i++){
        x *= exp;
    }
    return x;
}

let x = prompt("Informe o número base!");
let n = prompt("Informe a exponencial!");

alert(pow(x,n));