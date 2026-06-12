const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  tipo: { type: String, enum: ["Producto", "Servicio"], required: true },
});

module.exports = mongoose.model("ProductService", productSchema);
