
import React from 'react';

const UserProfile = () => {
    return (
        <div className="w-64 bg-gray-800 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-semibold">
                    A
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold">Amy Morales Cruz</h3>
                    <p className="text-sm text-gray-400">Estudiante de Odontología</p>
                </div>
            </div>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full">
                Editar Perfil
            </button>
        </div>
    );
};

export default UserProfile;