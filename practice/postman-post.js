const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.json());

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ success: false, msg: "empty" });
  } else {
    return res.status(200).json([...people, { id: 6, name: name }]);
  }
});

app.listen(5000, () => {
  console.log("listening...");
});
