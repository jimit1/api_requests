const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api/test", (req, res) => {
  res.json({ message: "reading the api" });
});

router.get("/api/proof", (req, res) => {
  res.json({ message: "ahhhhh" });
});

//api/count
router.get("/api/count", async (req, res) => {
  let countData = await readFileAsync("data.json");
  countData = JSON.parse(countData);
  countData.count++;
  await writeFileAsync("data.json", JSON.stringify(countData, null, 2));
  res.send(countData);

  // console.log("api has been hit");
  // let counter = JSON.parse(
  //   fs.readFileSync("data.json", "utf8", (err) => console.log(err))
  // );
  // fs.writeFile(
  //   "data.json",
  //   JSON.stringify({ count: counter.count + 1 }),
  //   (err, data) => {
  //     if (err) throw err;
  //     res.json(counter.count);
  //   }
  // );
});

module.exports = router;
