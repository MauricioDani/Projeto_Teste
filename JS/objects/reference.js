let user = { name: 'John' };

let admin = user;
let userNameBackup;


userNameBackup = admin.name;

admin.name = 'Pete'; // changed by the "admin" reference


alert(userNameBackup); // 'John', save the first name
alert(user.name); // 'Pete', changes are seen from the "user" reference