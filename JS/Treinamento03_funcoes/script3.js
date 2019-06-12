var i = 2;
var number;

for(i;i<=10;i++){
    if(!(i % 2)){
        alert(i);
    }
}

i = 0
while(i<3){
    alert(`number ${i}!`)
    i++
}

while(true){
    number = prompt('Enter a number greater than 100!',0)
    if ( number >= 100 || number == undefined || number == '' ){
        break;
    }
}