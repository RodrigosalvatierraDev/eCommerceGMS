import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    customer: { firstName: '', lastName: '', productId: '' },
    deliveryStatus: 'Falta entregar', 
  });
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error al obtener las órdenes:', error));
  }, []);

  const handleCreateOrder = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/orders', newOrder)
      .then(response => {
        setOrders([...orders, response.data]);
        setNewOrder({ customer: { firstName: '', lastName: '', productId: '' }, deliveryStatus: 'Falta entregar' });
        setShowModal(false);
      })
      .catch(error => console.error('Error al crear la orden:', error));
  };

  const handleEditOrder = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/orders/${newOrder._id}`, newOrder)
      .then(response => {
        const updatedOrders = orders.map(order => 
          order._id === newOrder._id ? response.data : order
        );
        setOrders(updatedOrders);
        setShowModal(false);
        setIsEditing(false);
      })
      .catch(error => console.error('Error al actualizar la orden:', error));
  };

  const handleDeleteOrder = (id) => {
    axios.delete(`http://localhost:5000/api/orders/${id}`)
      .then(() => {
        setOrders(orders.filter(order => order._id !== id));
      })
      .catch(error => console.error('Error al eliminar la orden:', error));
  };

  const handleOpenModal = (order = null) => {
    if (order) {
      setNewOrder(order);
      setIsEditing(true);
    } else {
      setNewOrder({ customer: { firstName: '', lastName: '', productId: '' }, deliveryStatus: 'Falta entregar' });
      setIsEditing(false);
    }
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold text-white">Gestión de Ordenes</h2>
      <p className="mt-2 text-lg text-gray-300">
        Administra las ordenes disponibles.
      </p>

      <div className="mt-6">
        <button 
          onClick={() => handleOpenModal()} 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          + Agregar Orden
        </button>
      </div>
      <div className="mt-6 overflow-x-auto bg-gray-800 rounded-lg ">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
            <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-700">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Cliente</th>
              <th className="px-6 py-3 text-left">Producto</th>
              <th className="px-6 py-3 text-left">Estado de Entrega</th>
              <th className="px-6 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-700">
                <td className="px-6 py-4">{order._id}</td>
                <td className="px-6 py-4">
                  {order.customer && order.customer.firstName ? `${order.customer.firstName} ${order.customer.lastName}` : 'Cliente no disponible'}
                </td>
                <td className="px-6 py-4">{order.customer ? order.customer.productId : 'Producto no disponible'}</td>
                <td className="px-6 py-4">{order.deliveryStatus}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button 
                    onClick={() => handleOpenModal(order)} 
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDeleteOrder(order._id)} 
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{isEditing ? 'Editar Orden' : 'Crear Orden'}</h2>
            <form onSubmit={isEditing ? handleEditOrder : handleCreateOrder}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input 
                  type="text" 
                  value={newOrder.customer.firstName} 
                  onChange={e => setNewOrder({ ...newOrder, customer: { ...newOrder.customer, firstName: e.target.value } })}
                  placeholder="Nombre" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Apellido</label>
                <input 
                  type="text" 
                  value={newOrder.customer.lastName} 
                  onChange={e => setNewOrder({ ...newOrder, customer: { ...newOrder.customer, lastName: e.target.value } })}
                  placeholder="Apellido" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">ID del Producto</label>
                <input 
                  type="text" 
                  value={newOrder.customer.productId} 
                  onChange={e => setNewOrder({ ...newOrder, customer: { ...newOrder.customer, productId: e.target.value } })}
                  placeholder="ID del Producto" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Estado de Entrega</label>
                <select 
                  value={newOrder.deliveryStatus} 
                  onChange={e => setNewOrder({ ...newOrder, deliveryStatus: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="Falta entregar">Falta entregar</option>
                  <option value="Entregado">Entregado</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)} 
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cerrar
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isEditing ? 'Actualizar' : 'Crear'} Orden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
