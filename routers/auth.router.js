const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    console.log("-------------->router");
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
