const jwt = require('jwt');

const value = {
    name: "Manash Bandhu",
    accountNumber: 123456,
  };
  
  
  const newToken = jwt.sign(contents, "hsdfjcx");
  console.log(newToken);