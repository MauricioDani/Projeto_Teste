var number = prompt("Enter a number:", 2);
var prime  = true;

if (number > 1) {
    for(i=2;i<=number;i++){
        for(j=2;j<=i;j++){
            if(i%j==0 && j!=i){
                prime= false;
                break;
            }
        }
        if(prime){
            alert(i);
        }
        prime = true;
    } 
}else{
    alert('Enter a number greater than 1!')
}


