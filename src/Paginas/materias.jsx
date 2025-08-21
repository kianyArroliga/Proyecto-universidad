import React, { useState } from "react";
import {
  Bell,
  Menu,
  X,
  Home,
  BookOpen,
  BarChart3,
  User,
  LogOut,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(2);
  const [selectedMateria, setSelectedMateria] = useState("Anatomía Dental");
  const [materiasDesplegadas, setMateriasDesplegadas] = useState(false);
  const [week, setWeek] = useState(1); // Controla la semana actual

  const menuItems = [
    { icon: Home, label: "Inicio", active: false },
    { icon: BookOpen, label: "Materias", active: true },
    { icon: BarChart3, label: "Calificaciones", active: false },
    { icon: User, label: "Perfil de Usuario", active: false },
    { icon: LogOut, label: "Cerrar Sesión", active: false },
  ];

  // Nuevas materias con tareas pendientes
  const materias = [
    "Anatomía Dental",
    "Periodoncia",
    "Endodoncia",
    "Cirugía Oral",
  ];

  // Información de las materias y las tareas pendientes
  const materiaInfo = {
    "Anatomía Dental": {
      codigo: "ANAT-101",
      1: {
        material: "Material de Anatomía - 10 de Septiembre",
        tarea: "Tarea #1 - 15 de Septiembre",
        tareasPendientes: 3,
      },
      2: {
        material: "Material de Anatomía - 17 de Septiembre",
        tarea: "Tarea #2 - 22 de Septiembre",
        tareasPendientes: 2,
      },
    },
    "Periodoncia": {
      codigo: "PERIO-201",
      1: {
        material: "Material de Periodoncia - 12 de Septiembre",
        tarea: "Tarea #1 - 18 de Septiembre",
        tareasPendientes: 2,
      },
      2: {
        material: "Material de Periodoncia - 19 de Septiembre",
        tarea: "Tarea #2 - 24 de Septiembre",
        tareasPendientes: 1,
      },
    },
    "Endodoncia": {
      codigo: "ENDO-305",
      1: {
        material: "Material de Endodoncia - 15 de Septiembre",
        tarea: "Tarea #1 - 20 de Septiembre",
        tareasPendientes: 1,
      },
      2: {
        material: "Material de Endodoncia - 22 de Septiembre",
        tarea: "Tarea #2 - 27 de Septiembre",
        tareasPendientes: 0,
      },
    },
    "Cirugía Oral": {
      codigo: "CIRU-400",
      1: {
        material: "Material de Cirugía Oral - 17 de Septiembre",
        tarea: "Tarea #1 - 22 de Septiembre",
        tareasPendientes: 5,
      },
      2: {
        material: "Material de Cirugía Oral - 24 de Septiembre",
        tarea: "Tarea #2 - 29 de Septiembre",
        tareasPendientes: 4,
      },
    },
  };

  // Maneja el cambio de materia al hacer clic
  const handleMateriaChange = (materia) => {
    setSelectedMateria(materia);
    setMateriasDesplegadas(false); // Cerrar el desplegable después de seleccionar una materia
    setWeek(1); // Reiniciar a la semana 1
  };

  // Función para navegar entre semanas
  const changeWeek = (direction) => {
    const newWeek = direction === "next" ? week + 1 : week - 1;
    if (materiaInfo[selectedMateria][newWeek]) {
      setWeek(newWeek); // Cambiar a la semana siguiente o anterior si existe
    }
  };

  return (
    <div
      className={`flex h-screen ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-green-50 to-blue-50"
      } transition-all duration-300`}
    >
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? "w-20" : "w-72"
        } bg-white shadow-xl transition-all duration-300 ease-in-out border-r border-gray-200`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UL</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Universidad</h2>
                  <p className="text-sm text-green-600 font-medium">Latina</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    item.active
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`${
                      item.active ? "text-white" : "text-gray-500 group-hover:text-green-600"
                    }`}
                  />
                  {!sidebarCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                  {item.active && !sidebarCollapsed && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          {!sidebarCollapsed && (
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <LogOut size={20} />
                <span>Cerrar Sesión</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            {/* User Greeting */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Buenas tardes, <span className="text-green-600">Amy</span>
                </h1>
                <p className="text-gray-600 font-medium">Estudiante de Odontología</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="relative p-3 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell size={20} className="text-gray-600" />
                {notifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {notifications}
                  </div>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Materias */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setMateriasDesplegadas(!materiasDesplegadas)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  {selectedMateria}
                </button>
                {materiasDesplegadas && (
                  <div className="absolute bg-white border shadow-lg rounded-lg mt-2">
                    {materias.map((materia, index) => (
                      <button
                        key={index}
                        onClick={() => handleMateriaChange(materia)}
                        className="px-4 py-2 text-gray-700 hover:bg-green-100 w-full text-left"
                      >
                        {materia}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-sm text-gray-500">Código: {materiaInfo[selectedMateria]?.codigo}</span>
            </div>

            {/* Semana y Navegación */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => changeWeek("prev")}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="font-medium text-gray-700">Semana: {week}</h3>
              <button
                onClick={() => changeWeek("next")}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Mostrar información de la materia seleccionada */}
            <div className="space-y-3">
              {/* Material */}
              <div className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg border transition">
                <span className="text-xl mr-3">📄</span>
                <span className="text-gray-700">{materiaInfo[selectedMateria]?.[week]?.material}</span>
              </div>

              {/* Task */}
              <div className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg border transition">
                <span className="text-xl mr-3">📝</span>
                <span className="text-gray-700">{materiaInfo[selectedMateria]?.[week]?.tarea}</span>
              </div>

              {/* Tareas Pendientes */}
              <div className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg border transition">
                <span className="text-xl mr-3">📅</span>
                <span className="text-gray-700">Tareas Pendientes: {materiaInfo[selectedMateria]?.[week]?.tareasPendientes}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;