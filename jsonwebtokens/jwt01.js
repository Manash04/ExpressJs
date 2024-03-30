const jwt = require("jsonwebtoken");

// decode , verify , generate

const value = {
  name: "Manash Bandhu",
  accountNumber: 123456,
};

//jwt token

const token = jwt.sign(value, "secret");
console.log(token);
// This token is generated using this "secret" and hence this
// token can only be verified using this secret. 

//OUTPUT
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFuYXNoIEJhbmRodSIsImFjY291bnROdW1iZXIiOjEyMzQ1NiwiaWF0IjoxNzExNzM3NjczfQ.Xynk6CiidUctAgbidAwScGpq6m8LThv41kgBPOh1oa4
