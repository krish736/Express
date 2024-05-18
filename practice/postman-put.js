const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.json());

app.put("/api/postman/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).send({ success: false, msg: `${id} does not exist!` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json(newPeople);
});

app.listen(5000, () => {
  console.log("listening...");
});
