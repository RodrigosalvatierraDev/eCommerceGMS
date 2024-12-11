import React, { useState, useEffect } from "react";

const Modal = ({ closeModal, addOrEditUser, user }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRole, setUserRole] = useState("user");
  const [userStatus, setUserStatus] = useState("active");

  
  useEffect(() => {
    if (user) {
      setUserName(user.name || "");
      setUserEmail(user.email || "");
      setUserRole(user.role || "user");
      setUserStatus(user.status || "active");
    }
  }, [user]);

  const handleSubmit = () => {
    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
      role: userRole,
      status: userStatus,
      _id: user?._id, 
    };
    addOrEditUser(newUser); 
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-2xl font-bold mb-4">
          {user ? "Editar Usuario" : "Agregar Usuario"}
        </h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rol</label>
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            >
              <option value="admin">Admin</option>
              <option value="user">Usuario</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Estado</label>
            <select
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            >
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              {user ? "Guardar Cambios" : "Agregar"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
