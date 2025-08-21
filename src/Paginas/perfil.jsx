import React, { useMemo, useRef, useState } from "react";
import {
    Bell, Menu, X, Home, BookOpen, BarChart3, User, Settings, LogOut, Sun, Moon,
    Camera, Trash2, Mail, Phone, IdCard, Calendar, MapPin, Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(3);
    const navigate = useNavigate();

    const rutas = {
        'Inicio': '/inicio',
        'Materias': '/usuario/materias',
        'Calificaciones': '/usuario/calificaciones',
        'Perfil de Usuario': '/usuario/perfiles',
    };

    const menuItems = [
        { icon: Home, label: 'Inicio', active: false },
        { icon: BookOpen, label: 'Materias', active: false },
        { icon: BarChart3, label: 'Calificaciones', active: false },
        { icon: User, label: 'Perfil de Usuario', active: true },
        { icon: Settings, label: 'Configuración', active: false },
        { icon: LogOut, label: 'Cerrar Sesión', active: false },
    ];

    const defaults = {
        nombre: "Amy",
        apellidos: "Morales Cruz",
        correo: "tucorreo@ejemplo.com",
        telefono: "8763-2456",
        carnet: "",
        nacimiento: "",
        rol: "Estudiante",
        direccion: "",
        avatarUrl: "",
    };
    const [form, setForm] = useState(defaults);
    const [preview, setPreview] = useState(defaults.avatarUrl || "");
    const [guardado, setGuardado] = useState(false);
    const fileRef = useRef(null);

    const avatarAlt = useMemo(
        () => `${form?.nombre || ""} ${form?.apellidos || ""}`.trim() || "Avatar",
        [form?.nombre, form?.apellidos]
    );

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        setGuardado(false);
    }

    function handleAvatar(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPreview(url);
        setForm((f) => ({ ...f, avatarFile: file }));
        setGuardado(false);
    }

    function removeAvatar() {
        setPreview("");
        setForm((f) => {
            const { avatarFile, ...rest } = f;
            return { ...rest, avatarUrl: "" };
        });
        if (fileRef.current) fileRef.current.value = "";
    }

    function handleSubmit(e) {
        e.preventDefault();
        setGuardado(true);
        console.log("Perfil guardado:", form);
    }

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-blue-50'} transition-all duration-300`}>
            {/* Sidebar (igual a tu plantilla) */}
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
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${item.active
                                            ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                                            : isLogout
                                                ? 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                                                : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (isLogout) {
                                            navigate('/usuario/login');
                                            return;
                                        }
                                        const to = rutas[item.label];
                                        if (to) navigate(to);
                                    }}
                                >
                                    <Icon size={20} className={`${item.active ? 'text-white' : isLogout ? 'text-gray-500 group-hover:text-red-600' : 'text-gray-500 group-hover:text-green-600'}`} />
                                    {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                                    {item.active && !sidebarCollapsed && <div className="ml-auto w-2 h-2 bg-white rounded-full" />}
                                </a>
                            );
                        })}
                    </nav>

                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top Header (igual a tu plantilla) */}
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

                {/* Main Content: AQUÍ VA LA INFO DE PERFIL */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <section className="mx-auto w-full max-w-6xl">
                        <div className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900">Información del perfil</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Actualiza tus datos personales. El correo no se edita aquí.
                            </p>

                            <div className="mt-6 grid gap-8 md:grid-cols-[280px,1fr]">
                                {/* Columna izquierda: avatar */}
                                <div className="rounded-xl border border-gray-200 bg-white p-4">
                                    <div className="flex flex-col items-center">
                                        <div className="relative h-32 w-32 rounded-full ring-1 ring-gray-200 overflow-hidden bg-gray-100">
                                            {preview ? (
                                                <img src={preview} alt={avatarAlt} className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="grid h-full w-full place-items-center text-gray-400">
                                                    <User className="h-12 w-12" />
                                                </div>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => fileRef.current?.click()}
                                                className="absolute bottom-2 right-2 inline-flex items-center justify-center rounded-full bg-green-600 p-2 text-white shadow hover:bg-green-700"
                                                aria-label="Cambiar avatar"
                                                title="Cambiar avatar"
                                            >
                                                <Camera className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <input
                                            ref={fileRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleAvatar}
                                        />

                                        <div className="mt-4 flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => fileRef.current?.click()}
                                                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
                                            >
                                                Subir foto
                                            </button>
                                            <button
                                                type="button"
                                                onClick={removeAvatar}
                                                className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                Quitar
                                            </button>
                                        </div>

                                        <p className="mt-2 text-[12px] text-gray-500">
                                            PNG/JPG, máx. 2 MB. Usa una imagen cuadrada para mejor encuadre.
                                        </p>
                                    </div>
                                </div>

                                {/* Columna derecha: formulario */}
                                <form onSubmit={handleSubmit} className="grid gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">
                                                <User className="h-4 w-4 text-gray-500" />
                                                Nombre
                                            </span>
                                            <input
                                                name="nombre"
                                                value={form.nombre}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400"
                                                placeholder="Tu nombre"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">Apellidos</span>
                                            <input
                                                name="apellidos"
                                                value={form.apellidos}
                                                onChange={handleChange}
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400"
                                                placeholder="Tus apellidos"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">
                                                <Mail className="h-4 w-4 text-gray-500" />
                                                Correo
                                            </span>
                                            <input
                                                value={form.correo}
                                                disabled
                                                className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 disabled:opacity-90"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">
                                                <Phone className="h-4 w-4 text-gray-500" />
                                                Teléfono
                                            </span>
                                            <input
                                                name="telefono"
                                                value={form.telefono}
                                                onChange={handleChange}
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400"
                                                placeholder="506 8888-8888"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">
                                                <IdCard className="h-4 w-4 text-gray-500" />
                                                Carnet
                                            </span>
                                            <input
                                                name="carnet"
                                                value={form.carnet}
                                                onChange={handleChange}
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-gray-400"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">
                                                <Calendar className="h-4 w-4 text-gray-500" />
                                                Nacimiento
                                            </span>
                                            <input
                                                type="date"
                                                name="nacimiento"
                                                value={form.nacimiento}
                                                onChange={handleChange}
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-gray-400"
                                            />
                                        </label>

                                        <label className="md:col-span-2 block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                Dirección
                                            </span>
                                            <textarea
                                                name="direccion"
                                                value={form.direccion}
                                                onChange={handleChange}
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-gray-400 min-h-[88px] resize-y"
                                                placeholder="Provincia, cantón, distrito…"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 flex items-center gap-2 text-sm text-gray-700">Rol</span>
                                            <select
                                                name="rol"
                                                value={form.rol}
                                                onChange={handleChange}
                                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-gray-400"
                                            >
                                                <option>Estudiante</option>
                                                <option>Profesor</option>
                                                <option>Coordinación</option>
                                                <option>Administración</option>
                                            </select>
                                        </label>
                                    </div>

                                    {/* Acciones */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white"
                                        >
                                            <Lock className="h-4 w-4" />
                                            Cambiar contraseña
                                        </button>

                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center rounded-xl border-2 border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-green-600"
                                        >
                                            Actualizar
                                        </button>
                                    </div>

                                    {guardado && <p className="text-sm text-green-600">Datos actualizados (demo).</p>}
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}