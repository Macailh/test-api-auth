const jwt = require("jsonwebtoken");

const secret = "mysecretkey";

const payload = {
  sub: 1,
  role: "admin",
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log("-------------->token", token);
