import React, { useState } from "react";
import { Star, CheckSquare, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import fondo from "../assets/Ulatina-Sede-Heredia.jpg";
import logo from "../assets/logo_ulatina_1.png";

export default function LandingAuth() {
    const [showPwd, setShowPwd] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden text-neutral-900">

            <div className="pointer-events-none fixed inset-0 -z-10">
                <img src={fondo} alt="" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/30" />
            </div>

            {/* Contenido centrado */}
            <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
                <motion.section
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="w-full max-w-5xl"
                >

                    <div className="relative mx-auto rounded-[28px] border border-white/70 bg-white/95 backdrop-blur-xl shadow-2xl">

                        <div className="grid items-center justify-items-center gap-8 rounded-[inherit] bg-white p-6 md:grid-cols-2 md:p-10">

                            {/* IZQUIERDA */}
                            <div className="w-full max-w-md self-center">
                                <div className="mx-auto md:mx-0 w-64 sm:w-72 md:w-96 lg:w-[28rem] shrink-0">
                                    <img src={logo} alt="Universidad Latina de Costa Rica"
                                        className="w-full h-auto object-contain" />
                                </div>

                                <ul className="mt-6 md:mt-8 space-y-3 text-sm text-neutral-700">
                                    <li className="flex items-start gap-2">
                                        <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                                        Panel para docentes y estudiantes
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                                        Tareas, foros y calificaciones en un solo lugar
                                    </li>
                                </ul>

                                <figure className="mt-4 rounded-xl border border-green-100 bg-white/90 p-4 shadow-sm">
                                    <blockquote className="text-sm italic text-neutral-700">
                                        “La educación es el arma más poderosa para cambiar el mundo”.
                                    </blockquote>
                                    <figcaption className="mt-2 text-xs text-neutral-500">— Alguien sabio</figcaption>
                                </figure>

                                {/* Rating */}
                                <div className="mt-6 flex w-full items-center justify-center gap-1" aria-label="Valoración de 5 estrellas">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            {/* DERECHA */}
                            <div className="w-full max-w-md self-center">
                                <h1 className="text-2xl font-bold tracking-tight text-neutral-900 text-center md:text-left">Bienvenido</h1>

                                <form
                                    className="mt-6 space-y-4"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const data = new FormData(e.currentTarget);
                                        console.log(Object.fromEntries(data.entries()));
                                    }}
                                >
                                    <div>
                                        <label htmlFor="email" className="mb-1 block text-sm text-neutral-700">
                                            Correo
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-400"
                                            placeholder="tucorreo@ejemplo.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="mb-1 block text-sm text-neutral-700">
                                            Contraseña
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type={showPwd ? "text" : "password"}
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 pr-12 text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-400"
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPwd((s) => !s)}
                                                aria-pressed={showPwd}
                                                aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md p-1.5 text-neutral-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                            >
                                                {showPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-2 space-y-3">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center
               rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white
               px-4 py-3 font-medium shadow-lg transition-all duration-200
               hover:from-green-700 hover:to-green-800 hover:shadow-xl"
                                        >
                                            Ingresar
                                        </button>

                                        <button
                                            type="button"
                                            className="w-full inline-flex items-center justify-center
               rounded-xl border-2 border-green-600 bg-white text-green-700
               px-4 py-3 font-medium transition-colors duration-200
               hover:bg-green-600 hover:text-white"
                                        >
                                            Profesor
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}
