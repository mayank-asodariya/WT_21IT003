function User(username, password) {
    this.username = username;
    this.password = password;
  }
  
  User.prototype.validate = function() {
    if (this.username.length < 6) {
      return "Username must be at least 6 characters long.";
    }
    if (this.password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return true;
  }
  
  // Example usage
  const user = new User("Mayank", "WT_21IT003");
  const validationResult = user.validate();
  if (validationResult === true) {
    console.log("User is valid!");
  } else {
    console.error("User is invalid:", validationResult);
  }
  