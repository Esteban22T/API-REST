const express = require("express");
const Sale = require("../models/sale");

const router = express.Router();

router.post("/sales", (req, res) => {
  const sale = new Sale(req.body);
  sale
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/sales", (req, res) => {
  Sale.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/sales/:id", (req, res) => {
  const { id } = req.params;
  Sale.findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Venta no encontrada" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.put("/sales/:id", (req, res) => {
  const { id } = req.params;
  Sale.updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.delete("/sales/:id", (req, res) => {
  const { id } = req.params;
  Sale.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
