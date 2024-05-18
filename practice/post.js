const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (name) {
    res.status(201).json({ success: true, person: name });
  } else {
    res.status(400).send({ success: false, msg: "Please enter name first!" });
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json(name);
  } else {
    res.status(401).send("Please provide a name!");
  }
});

app.listen(5000, () => {
  console.log("listening...");
});
