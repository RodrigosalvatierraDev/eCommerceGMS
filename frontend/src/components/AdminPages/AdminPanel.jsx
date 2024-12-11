import React, { useState } from "react";
import { FiMenu, FiLogOut  } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import ProductsManager from './ProductsManager';
import UsersManager from "./UsersManager";
import Orders from "./Orders";




ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const navigate = useNavigate();

  
  const data1 = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Ventas mensuales",
        data: [30, 45, 60, 20, 90, 65, 120],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const data2 = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Visitas mensuales",
        data: [120, 150, 100, 80, 160, 200, 220],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const data3 = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Productos vendidos",
        data: [15, 25, 30, 40, 50, 55, 70],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const data4 = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Usuarios registrados",
        data: [100, 200, 300, 400, 500, 600, 700],
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Gráfico",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setSidebarOpen(false); 
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-100">Panel</h2>
            <p className="mt-6 text-lg text-gray-300">
              Aquí puedes ver un resumen general del sistema.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              
              <div className="bg-gray-800 p-6 rounded-lg h-80">
                <h3 className="text-xl font-bold text-gray-100">Ventas por mes</h3>
                <div className="w-full h-full">
                  <Line data={data1} options={options} />
                </div>
              </div>

              
              <div className="bg-gray-800 p-6 rounded-lg h-80">
                <h3 className="text-xl font-bold text-gray-100">Visitas mensuales</h3>
                <div className="w-full h-full">
                  <Line data={data2} options={options} />
                </div>
              </div>

              
              <div className="bg-gray-800 p-6 rounded-lg h-80">
                <h3 className="text-xl font-bold text-gray-100">Productos vendidos</h3>
                <div className="w-full h-full">
                  <Line data={data3} options={options} />
                </div>
              </div>

              
              <div className="bg-gray-800 p-6 rounded-lg h-80">
                <h3 className="text-xl font-bold text-gray-100">Usuarios registrados</h3>
                <div className="w-full h-full">
                  <Line data={data4} options={options} />
                </div>
              </div>
            </div>
          </div>
        );
        case "products":
          return <ProductsManager />;
      case "users":
        return <UsersManager />;
      case "orders":
        return <Orders />;
          
        
      
      default: null;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#242E3B]">
      
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 bg-[#242E3B] text-white flex flex-col fixed md:relative h-full z-10 border-r border-gray-700 transition-all duration-300 ease-in-out`}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          <img src="/GMS.png" alt="Logo GMS" />
        </div>
        <nav className="flex-1 p-6 space-y-4">
          <ul className="space-y-2">
            <li
              className={`cursor-pointer p-3 rounded-lg text-lg ${
                activeSection === "dashboard" ? "bg-red-500" : "hover:bg-gray-700"
              }`}
              onClick={() => handleLinkClick("dashboard")}
            >
              Panel
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg text-lg ${
                activeSection === "products" ? "bg-red-500" : "hover:bg-gray-700"
              }`}
              onClick={() => handleLinkClick("products")}
            >
              Productos
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg text-lg ${
                activeSection === "users" ? "bg-red-500" : "hover:bg-gray-700"
              }`}
              onClick={() => handleLinkClick("users")}
            >
              Usuarios
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg text-lg ${
                activeSection === "orders" ? "bg-red-500" : "hover:bg-gray-700"
              }`}
              onClick={() => handleLinkClick("orders")}
            >
              Órdenes
            </li>
            
          </ul>
        </nav>
      </aside>

      
      <div
        className={`flex-1 flex flex-col ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300 ease-in-out`}
      >
        
        <header className="h-20 bg-[#242E3B] shadow flex items-center justify-between px-8 border-b border-gray-700">
            <h1 className="text-2xl font-semibold text-white">Administrador</h1>
          <div className="flex items-center space-x-6">
            
            <button
              className="md:hidden bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setSidebarOpen(!sidebarOpen)} 
            >
              <FiMenu />
            </button>
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={handleLogout}
            >
              <FiLogOut />
            </button>
          </div>
        </header>

        
        <main className="flex-1 bg-[#242E3B] overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
