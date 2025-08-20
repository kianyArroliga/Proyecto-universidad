import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-green-700 text-white p-6 space-y-6">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/66/Logo_UNIVERSIDAD_LATINA.svg"
          alt="Logo Universidad Latina"
          className="w-12 h-12 object-contain"
        />
        <h2 className="text-xl ml-4 font-semibold">Universidad Latina</h2>
      </div>
      <ul className="space-y-4">
        <li><a href="/" className="text-white hover:text-gray-300">Inicio</a></li>
        <li><a href="/" className="text-white hover:text-gray-300">Materias</a></li>
        <li><a href="/" className="text-white hover:text-gray-300">Calificaciones</a></li>
        <li><a href="/" className="text-white hover:text-gray-300">Perfil de Usuario</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;