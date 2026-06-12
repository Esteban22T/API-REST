const express = require("express");
const ProductService = require("../models/product");

const router = express.Router();

router.post("/products", (req, res) => {
  const product = new ProductService(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/products", (req, res) => {
  ProductService.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  ProductService.findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Producto/Servicio no encontrado" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  ProductService.updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  ProductService.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
