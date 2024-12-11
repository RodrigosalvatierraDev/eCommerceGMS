const express = require('express');
const Order = require('../models/Order');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener órdenes', error: err });
  }
});


router.post('/', async (req, res) => {
  const { customer, deliveryStatus } = req.body;
  try {
    const newOrder = new Order({
      customer,
      deliveryStatus
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear la orden', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Orden eliminada', order });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar la orden', error: err });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
      );
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }
      res.status(200).json(updatedOrder); 
    } catch (err) {
      res.status(500).json({ message: 'Error al actualizar la orden', error: err });
    }
  });

module.exports = router;
