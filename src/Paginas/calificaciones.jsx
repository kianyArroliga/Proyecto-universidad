import React, { useState } from 'react'; 
import { Bell, Menu, X, Home, BookOpen, BarChart3, User, Settings, LogOut, Sun, Moon } from 'lucide-react'; 

const Dashboard = () => { 
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false); 
    const [darkMode, setDarkMode] = useState(false); 
    const [notifications, setNotifications] = useState(3); 

    const menuItems = [ 
        { icon: Home, label: 'Inicio', active: true }, 
        { icon: BookOpen, label: 'Materias', active: false }, 
        { icon: BarChart3, label: 'Calificaciones', active: false }, 
        { icon: User, label: 'Perfil de Usuario', active: false }, 
        { icon: Settings, label: 'Configuración', active: false }, 
        { icon: LogOut, label: 'Cerrar Sesión', active: false }, 
    ]; 

    const cuatrimestres = [ 
        { 
            cuatrimestre: "Cuatrimestre 1 | 2025", 
            materias: [ 
                { nombre: "Diseño", codigo: "BSOFT-13", porcentaje: "70%", estado: "Aprobado" }, 
                { nombre: "Matemáticas", codigo: "BSOFT-14", porcentaje: "80%", estado: "Aprobado" }, 
                { nombre: "Arquitectura de Computadoras", codigo: "BSOFT-15", porcentaje: "75%", estado: "Aprobado" }, 
                { nombre: "Física I (Lab)", codigo: "BFIS-01", porcentaje: "60%", estado: "Reprobado" } 
            ] 
        }, 
        { 
            cuatrimestre: "Cuatrimestre 2 | 2025", 
            materias: [ 
                { nombre: "Diseño Conceptual del Software", codigo: "BSOFT-18", porcentaje: "85%", estado: "Aprobado" }, 
                { nombre: "Sistemas Operativos", codigo: "BSOFT-19", porcentaje: "90%", estado: "Aprobado" }, 
                { nombre: "Bases de Datos II", codigo: "BSOFT-20", porcentaje: "88%", estado: "Aprobado" } 
            ] 
        }, 
        { 
            cuatrimestre: "Cuatrimestre 3 | 2025", 
            materias: [ 
                { nombre: "Ingeniería de Software III", codigo: "BIS-21", porcentaje: "95%", estado: "Aprobado" }, 
                { nombre: "Redes de Computadoras", codigo: "BSOFT-25", porcentaje: "80%", estado: "Aprobado" }, 
                { nombre: "Cálculo Diferencial", codigo: "BFIS-02", porcentaje: "76%", estado: "Aprobado" } 
            ] 
        } 
    ];

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-blue-50'} transition-all duration-300`}>
            {/* Sidebar */}
            <div className={`${sidebarCollapsed ? 'w-20' : 'w-72'} bg-white shadow-xl transition-all duration-300 ease-in-out border-r border-gray-200`}>
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
                            const isLogout = item.label === 'Cerrar Sesión';
                            return (
                                <a
                                    key={index}
                                    href="#"
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${item.active ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg' : isLogout ? 'text-gray-600 hover:bg-red-50 hover:text-red-600' : 'text-gray-600 hover:bg-green-50 hover:text-green-700'}`}
                                >
                                    <Icon size={20} className={`${item.active ? 'text-white' : isLogout ? 'text-gray-500 group-hover:text-red-600' : 'text-gray-500 group-hover:text-green-600'}`} />
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
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen">
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
                                <p className="text-gray-600 font-medium">Estudiante de Ingeniería del Software</p>
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
                            <div className="h-8 w-px bg-gray-300"></div>
                            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                                Mi Progreso
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    {cuatrimestres.map((cuatri, index) => (
                        <div key={index}>
                            <div className="p-4 mb-6 bg-green-100 rounded-lg text-center shadow-md mb-4">
                                <h2 className="text-xl font-bold text-gray-800">{cuatri.cuatrimestre}</h2>
                            </div>
                            {cuatri.materias.map((materia, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md mb-4">
                                    <p className="text-gray-700">{materia.nombre}</p>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-600">Código: {materia.codigo}</span>
                                        <span className="text-gray-600">{materia.porcentaje}</span>
                                        <span className={`text-sm font-semibold ${materia.estado === "Aprobado" ? 'text-green-600' : 'text-red-600'}`}>{materia.estado}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
