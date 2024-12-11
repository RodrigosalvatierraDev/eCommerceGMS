const Order = require('../models/Order');


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};


const createOrder = async (req, res) => {
  try {
    const { customer, items, total, payment } = req.body;
    const newOrder = new Order({ customer, items, total, payment });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la orden' });
  }
};

module.exports = { getAllOrders, createOrder };
