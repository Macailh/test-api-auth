const boom = require("@hapi/boom");
const { config } = require("./../config/config");

function checkApiKey(req, res, next) {
  const apiKey = req.headers["api"];
  if (apiKey === config.API_KEY) {
    next();
  } else {
    const error = boom.unauthorized("API Key inválida");
    res.status(error.output.statusCode).json(error.output.payload);
  }
}

module.exports = { checkApiKey };
