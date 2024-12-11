const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    productId: { type: String, required: true },
  },
  deliveryStatus: {
    type: String,
    enum: ['Falta entregar', 'Entregado'],
    default: 'Falta entregar',
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
