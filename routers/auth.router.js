const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { config } = require("../config/config");

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    console.log("-------------->router");
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
      };
      const token = jwt.sign(payload, config.JWT_SECRET);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
