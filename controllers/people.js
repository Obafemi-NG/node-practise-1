let { persons } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: persons });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a valid credential" });
  }
  res.status(201).json({ success: true, data: [...persons, { name: name }] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = persons.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: true, message: `User with id:${id} not found!` });
  }
  const newPerson = persons.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(201).json({ status: true, data: newPerson });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = persons.find((person) => person.id === Number(id));
  if (!person) {
    res
      .status(404)
      .json({ success: true, message: `User with id: ${id} not found!` });
  }
  const newPersons = persons.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPersons });
};

module.exports = { getPeople, createPerson, updatePerson, deletePerson };
