// make current user information global, to let all scripts access it
window.currentUser = {
    name: "John"
  };
  
  // somewhere else in code
  alert(currentUser.name);  // John
  
  // or, if we have a local variable with the name "currentUser"
  // get it from window explicitly (safe!)
  alert(window.currentUser.name); // John