import React, { useState, useEffect } from "react";
import ModalUser from "./ModalUser"; 
import { getUsers, createUser, updateUser, deleteUserById } from "../api/userApi"; 

const UsersManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]); 
  const [editUser, setEditUser] = useState(null); 

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersFromBackend = await getUsers();

        if (Array.isArray(usersFromBackend)) {
          setUsers(usersFromBackend);
        } else {
          console.error("Los datos no son un array", usersFromBackend);
          setUsers([]); 
        }
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
        setUsers([]); 
      }
    };
    fetchUsers();
  }, []); 

  
  const openModal = (user = null) => {
    setEditUser(user); 
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditUser(null); 
  };

  
  const addOrEditUser = async (newUser) => {
    try {
      if (editUser) {
        
        const updatedUser = await updateUser(editUser._id, newUser);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === editUser._id ? updatedUser : user
          )
        );
      } else {
        
        const addedUser = await createUser(newUser);
        setUsers((prevUsers) => [...prevUsers, addedUser]);
      }
      closeModal();
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
  };

  
  const deleteUser = async (id) => {
    try {
      await deleteUserById(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold text-white">Gestión de Usuarios</h2>
      <p className="mt-2 text-lg text-gray-300">Administra los usuarios de la plataforma.</p>

      <div className="mt-6">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          onClick={() => openModal()} 
        >
          + Agregar Usuario
        </button>
      </div>

      <div className="mt-6 overflow-x-auto bg-gray-800 rounded-lg ">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Rol</th>
              <th scope="col" className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-500"
                      onClick={() => openModal(user)} 
                    >
                      Editar
                    </button>
                     {
                          user.role !== 'admin' && (
                            <button
                              className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-500"
                              onClick={() => deleteUser(user._id)} 
                            >
                              Eliminar
                            </button>
                          )
                      }
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No hay usuarios disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <ModalUser
          closeModal={closeModal}
          addOrEditUser={addOrEditUser}
          user={editUser} 
        />
      )}
    </div>
  );
};

export default UsersManager;







