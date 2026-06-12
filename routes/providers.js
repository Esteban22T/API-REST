const express = require("express");
const Provider = require("../models/provider");

const router = express.Router();

router.post("/providers", (req, res) => {
  const provider = new Provider(req.body);
  provider
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/providers", (req, res) => {
  Provider.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/providers/:id", (req, res) => {
  const { id } = req.params;
  Provider.findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Proveedor no encontrado" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.put("/providers/:id", (req, res) => {
  const { id } = req.params;
  Provider.updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.delete("/providers/:id", (req, res) => {
  const { id } = req.params;
  Provider.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
