const express = require("express");
const router = express.Router();

router.post("/api/proof", (req, res) => {
  res.json(req.body);
  console.log(req.body.Name);
});

router.post("/api/test/:fname", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

module.exports = router;
