import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Paginas/login"; // Asegúrate de importar tu componente Login


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta predeterminada que redirige a Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Ruta para Login */}
        <Route path="/login" element={<Login />} />

      
      </Routes>
    </Router>
  );
}

export default App;
