const { Strategy } = require("passport-local");

const users = [
  { id: 1, email: "salvador@german.com", password: "hola123" },
  { id: 2, email: "usuario2@example.com", password: "password2" },
];

const LocalStrategy = new Strategy(
  {
    usernameField: "email", // Campo utilizado para el email
    passwordField: "password", // Campo utilizado para la contraseña
  },
  (email, password, done) => {
    console.log("-------------->email", email);
    console.log("-------------->password", password);
    // Buscar el usuario en memoria
    const user = users.find((user) => user.email === email);
    if (!user) {
      return done(null, false, { message: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    if (user.password !== password) {
      return done(null, false, { message: "Contraseña incorrecta" });
    }

    // Autenticación exitosa, devolver el usuario
    return done(null, user);
  }
);

module.exports = LocalStrategy;
