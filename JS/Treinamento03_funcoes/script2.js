var userName;
var password;

userName = prompt('Login:');

if(userName == 'Admin'){
    password = prompt('Password:');
    if(password == 'TheMaster'){
        alert('Welcome!');
    }else if(password == undefined){
        alert('Canceled');
    }else{
        alert('Wrong Password!');
    }
}else if(userName == undefined){
    alert('Canceled!');
}else{
    alert("I don't know!");
}
