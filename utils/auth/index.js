const passport = require("passport");

const LocalStrategy = require("./strategies/local.strategy");
console.log("-------------->LocalStrategy", LocalStrategy);

passport.use(LocalStrategy);
