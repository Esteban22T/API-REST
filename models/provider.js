const mongoose = require("mongoose");

const productServiceSchema = new mongoose.Schema({
  producto_servicio_id: { type: String, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
});

const purchaseEmbeddedSchema = new mongoose.Schema({
  compra_id: { type: String, required: true },
  fecha: { type: String, required: true },
  total: { type: Number, required: true },
  productos_servicios: { type: [productServiceSchema], default: [] },
});

const providerSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  compras: { type: [purchaseEmbeddedSchema], default: [] },
});

module.exports = mongoose.model("Provider", providerSchema);
