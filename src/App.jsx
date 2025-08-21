import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Navigate, createRoutesFromElements, ScrollRestoration, Outlet } from 'react-router-dom';

import './App.css';
import Login from './paginas/login';
import MainContent from './componentes/MainContent';
import UserProfile from './componentes/UserProfile';
import Sidebar from './componentes/Sidebar';
import Plantilla from './Paginas/plantilla';
import Inicio from './paginas/inicio';

// --- Componentes mínimos ---
function RootRedirect() {
  // Redirige / -> /usuario/login
  return <Navigate to="/usuario/login" replace />;
}

function LayoutUsuario() {
  return (
    <>
      <ScrollRestoration />
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content area */}
        <div className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

function ErrorPage() {
  return <div style={{ padding: 24 }}>Algo salió mal.</div>;
}

// --- Rutas ---
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/usuario" element={<LayoutUsuario />} errorElement={<ErrorPage />}>
        <Route path="login" element={<Login />} />
        <Route path="main" element={<MainContent />} />
        <Route path="perfil" element={<UserProfile />} />
      </Route>
      <Route path="/plantilla" element={<Plantilla />} />
      <Route path="/inicio" element={<Inicio/>} />
    </>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
