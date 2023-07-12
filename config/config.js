require("dotenv").config();

const config = {
  API_KEY: process.env.API_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = { config };
