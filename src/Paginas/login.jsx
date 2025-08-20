import React, { useState } from "react";
import { Star, CheckSquare, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import fondo from "../assets/Ulatina-Sede-Heredia.jpg";
import logo from "../assets/logo_ulatina_1.png";

export default function LandingAuth() {
    const [showPwd, setShowPwd] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-transparent text-neutral-900">
            {/* Fondoooo */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <img src={fondo} alt="" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-white/30" />
            </div>

            {/* Contenido */}
            <main className="relative z-10 mx-auto grid min-h-screen max-w-screen-xl place-items-center px-6">
                <motion.section
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="w-full"
                >
                    {/* Panel */}
                    <div className="relative rounded-3xl border border-neutral-200 bg-white/80 p-2 shadow-none backdrop-blur-xl">
                        <div className="grid gap-0 rounded-[calc(theme(borderRadius.3xl)-8px)] bg-white/40 md:grid-cols-2">

                            {/* IZQUIERDA */}
                            <div className="relative rounded-[inherit] p-10 flex flex-col">
                                {/* Separador vertical */}
                                <div className="pointer-events-none absolute right-0 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent md:block" />

                                {/* Logo */}
                                <img
                                    src={logo}
                                    alt="Universidad Latina de Costa Rica"
                                    className="h-full w-full object-contain"
                                />

                                {/* Lista de features */}
                                <ul className="mt-6 md:mt-8 space-y-3 text-sm text-neutral-700">
                                    <li className="flex items-start gap-2">
                                        <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-neutral-700" />
                                        Panel para docentes y estudiantes
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-neutral-700" />
                                        Tareas, foros y calificaciones en un solo lugar
                                    </li>
                                </ul>

                                {/*La frase miedo*/}
                                <figure className="mt-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                                    <blockquote className="text-sm italic text-neutral-700">
                                        “La educación es el arma más poderosa para cambiar el mundo”.
                                    </blockquote>
                                    <figcaption className="mt-2 text-xs text-neutral-500">
                                        — Alguien sabio
                                    </figcaption>
                                </figure>

                                {/* Las estrellitas esas */}
                                <div
                                    className="my-auto pt-4 flex w-full items-center justify-center gap-1"
                                    aria-label="Valoración de 5 estrellas"
                                >
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>


                            </div>


                            {/* DERECHA */}
                            <div className="rounded-[inherit] p-10">
                                <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>

                                <form
                                    className="mt-6 space-y-4"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const form = e.currentTarget;
                                        const data = new FormData(form);
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
                                            className="block w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-400"
                                            placeholder="tucorreo@ejemplo.com"
                                        />
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPwd ? "text" : "password"}
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 pr-12 text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-400"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPwd((s) => !s)}
                                            aria-pressed={showPwd}
                                            aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center
               rounded-md p-1.5 text-neutral-600
               hover:text-lime-600
               focus:outline-none focus-visible:outline-none
               focus:ring-2 focus:ring-lime-400"
                                        >
                                            {showPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>


                                    <div className="pt-2 space-y-3">
                                        <button
                                            type="submit"
                                            className="
      inline-flex w-full items-center justify-center rounded-xl
      border-2 border-lime-600 bg-lime-600 text-white
      px-4 py-2 text-sm font-medium
      transition-colors duration-200
      hover:bg-white hover:text-lime-600
      active:bg-lime-50 active:text-lime-700
      focus:outline-none focus-visible:outline-none
      focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-white
    "
                                        >
                                            Ingresar
                                        </button>

                                        <button
                                            type="button"
                                            className="
      inline-flex w-full items-center justify-center rounded-xl
      border-2 border-lime-600 bg-white text-lime-600
      px-4 py-2 text-sm font-medium
      transition-colors duration-200
      hover:bg-lime-600 hover:text-white
      active:bg-lime-700 active:text-white
      focus:outline-none focus-visible:outline-none
      focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-white
    "
                                        >
                                            Profesor
                                        </button>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </motion.section >
            </main >
        </div >
    );
}
