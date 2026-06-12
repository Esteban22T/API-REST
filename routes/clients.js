const express = require("express");
const Client = require("../models/client");

const router = express.Router();

router.post("/clients", (req, res) => {
  const client = new Client(req.body);
  client
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/clients", (req, res) => {
  Client.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  Client.findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Cliente no encontrado" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.put("/clients/:id", (req, res) => {
  const { id } = req.params;
  Client.updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.delete("/clients/:id", (req, res) => {
  const { id } = req.params;
  Client.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
