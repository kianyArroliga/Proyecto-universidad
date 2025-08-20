import React from 'react';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import MainContent from './MainContent';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-green-700 text-white p-6 space-y-6">
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

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header with User Profile */}
                <div className="flex items-center bg-green-700 text-white p-4 rounded-lg mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center text-xl font-semibold">
                        A
                    </div>
                    <div className="ml-4">
                        <h3 className="text-2xl font-semibold">Buenas tardes, Amy Morales Cruz</h3>
                        <p className="text-sm">Estudiante de Odontología</p>
                    </div>
                    <button className="ml-auto bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500">Notificaciones</button>
                </div>

                {/* Main Content */}
                <MainContent />
            </div>

            {/* User Profile Sidebar */}
            <div className="w-80 bg-gray-800 text-white p-6 rounded-l-lg shadow-lg">
                <UserProfile />
            </div>
        </div>
    );
};

export default Dashboard;