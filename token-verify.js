const jwt = require("jsonwebtoken");

const secret = "mysecretkey";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4ODkyNTQzM30.jds9MOAWlrIdkiX7DcRxQvqnuD1haWg8ZzGNnh9O6NA";

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log("-------------->payload", payload);
