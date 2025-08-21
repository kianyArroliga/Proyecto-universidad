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
                { nombre: "Ingeniería de Software III", codigo: "BIS-21", porcenta
