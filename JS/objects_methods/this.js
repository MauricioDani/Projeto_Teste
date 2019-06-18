let user = {
    name: "John",
    age: 30,
    sayHi() { alert(this.name); },
    sayBye() { alert("Bye! " + this.name)}
  
  };
  
  user.sayHi(); // John
  user.sayBye(); // Bye! John.