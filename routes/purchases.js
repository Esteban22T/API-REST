const express = require("express");
const Purchase = require("../models/purchase");

const router = express.Router();

router.post("/purchases", (req, res) => {
  const purchase = new Purchase(req.body);
  purchase
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/purchases", (req, res) => {
  Purchase.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/purchases/:id", (req, res) => {
  const { id } = req.params;
  Purchase.findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Compra no encontrada" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.put("/purchases/:id", (req, res) => {
  const { id } = req.params;
  Purchase.updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.delete("/purchases/:id", (req, res) => {
  const { id } = req.params;
  Purchase.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
