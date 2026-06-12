const mongoose = require("mongoose");

const productServiceSchema = new mongoose.Schema({
  producto_servicio_id: { type: String, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
});

const saleEmbeddedSchema = new mongoose.Schema({
  venta_id: { type: String, required: true },
  fecha: { type: String, required: true },
  total: { type: Number, required: true },
  productos_servicios: { type: [productServiceSchema], default: [] },
});

const clientSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
  ventas: { type: [saleEmbeddedSchema], default: [] },
});

module.exports = mongoose.model("Client", clientSchema);
