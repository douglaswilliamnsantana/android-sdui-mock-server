const express = require("express");
const home = require("../screens/home");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    screens: [
      { id: "home", path: "/screens/home" }
    ],
  });
});

router.get("/home", (req, res) => {
  res.json(home);
});

module.exports = router;
