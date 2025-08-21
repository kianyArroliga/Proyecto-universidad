
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
                            return (
                                <a
                                    key={index}
                                    href="#"
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                        item.active
                                            ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                                    }`}
                                >
                                    <Icon size={20} className={`${item.active ? 'text-white' : 'text-gray-500 group-hover:text-green-600'}`} />
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
                            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                                <Settings size={20} />
                                <span>Configuración</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
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
                            <div className="h-8 w-px bg-gray-300"></div>
                            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                                Mi Progreso
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            {[
                                { title: 'Materias Activas', value: '6', color: 'from-blue-500 to-blue-600', icon: BookOpen },
                                { title: 'Promedio General', value: '8.7', color: 'from-green-500 to-green-600', icon: BarChart3 },
                                { title: 'Tareas Pendientes', value: '3', color: 'from-orange-500 to-orange-600', icon: Bell },
                                { title: 'Días hasta Examen', value: '12', color: 'from-purple-500 to-purple-600', icon: Home },
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                                                <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                                            </div>
                                            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                                                <Icon size={24} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Welcome Card */}
                        <div className="bg-gradient-to-r from-green-600 via-green-700 to-blue-700 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-2">¡Bienvenida de vuelta, Amy! 👋</h2>
                                <p className="text-green-100 text-lg mb-6">
                                    Tienes 2 clases hoy y 3 tareas por entregar esta semana. ¡Sigues en buen ritmo!
                                </p>
                                <div className="flex space-x-4">
                                    <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                                        Ver Horario
                                    </button>
                                    <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-colors">
                                        Mis Tareas
                                    </button>
                                </div>
                            </div>
                            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
                            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-16 translate-x-16"></div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Próximas Clases', desc: 'Ve tu horario de hoy', color: 'from-blue-50 to-blue-100', textColor: 'text-blue-700' },
                                { title: 'Tareas Pendientes', desc: 'Revisa lo que tienes por hacer', color: 'from-orange-50 to-orange-100', textColor: 'text-orange-700' },
                                { title: 'Recursos de Estudio', desc: 'Accede a materiales y guías', color: 'from-purple-50 to-purple-100', textColor: 'text-purple-700' },
                                { title: 'Foros de Discusión', desc: 'Conecta con tus compañeros', color: 'from-green-50 to-green-100', textColor: 'text-green-700' },
                                { title: 'Biblioteca Digital', desc: 'Busca libros y artículos', color: 'from-indigo-50 to-indigo-100', textColor: 'text-indigo-700' },
                                { title: 'Centro de Ayuda', desc: 'Obtén soporte académico', color: 'from-pink-50 to-pink-100', textColor: 'text-pink-700' },
                            ].map((action, index) => (
                                <div key={index} className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-100`}>
                                    <h3 className={`text-lg font-semibold ${action.textColor} mb-2`}>{action.title}</h3>
                                    <p className="text-gray-600 text-sm">{action.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;