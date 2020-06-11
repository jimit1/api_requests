const express = require("express");
const router = express.Router();

router.post("/api/test", (req, res) => {
  res.json(req.body);
  console.log(req.body.Name);
});

module.exports = router;
