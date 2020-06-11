const express = require("express");
const router = express.Router();

router.post("/api/proof", (req, res) => {
  res.json(req.body);
  console.log(req.body.Name);
});

router.post("/api/test/:fname/:lname", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

router.put("/api/query", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

module.exports = router;
