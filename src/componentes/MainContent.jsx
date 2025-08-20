import React from 'react';

const MainContent = () => {
    return (
        <div className="flex-1 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Bienvenido al contenido principal</h2>
            <p className="text-gray-700">
                Aquí puedes mostrar todo el contenido que desees para los usuarios.
            </p>
            {/* Puedes agregar más secciones, componentes, etc. */}
        </div>
    );
};

export default MainContent;