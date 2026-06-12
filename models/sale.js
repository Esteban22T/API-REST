const mongoose = require("mongoose");

const productServiceSchema = new mongoose.Schema({
  producto_servicio_id: { type: String, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
});

const saleSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  cliente_id: { type: String, required: true },
  fecha: { type: String, required: true },
  total: { type: Number, required: true },
  productos_servicios: { type: [productServiceSchema], default: [] },
});

module.exports = mongoose.model("Sale", saleSchema);
