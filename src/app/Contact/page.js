'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/NavBar';

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            // Usamos FormSubmit para enviar el correo sin backend
            const response = await fetch("https://formsubmit.co/ajax/vargosky@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset(); // Limpiar formulario
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <section id="contacto" className="py-24 bg-slate-950 relative border-t border-slate-900">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Inicie la <span className="text-emerald-500">Operación</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            ¿Listo para profesionalizar su campaña? Deje de adivinar y empiece a operar con datos.
                            Nuestra agenda suele llenarse rápido en periodo electoral.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded border border-slate-800 text-emerald-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Correo Encriptado</h3>
                                    <p className="text-slate-400">contacto@einsoft.cl</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded border border-slate-800 text-emerald-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Línea Directa</h3>
                                    <p className="text-slate-400">+56 9 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-900 rounded border border-slate-800 text-emerald-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Base de Operaciones</h3>
                                    <p className="text-slate-400">Valparaíso, Chile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: EL FORMULARIO */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">

                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Transmisión Recibida</h3>
                                <p className="text-slate-400">
                                    Hemos recibido sus datos de forma segura. Un estratega de Einsof se pondrá en contacto en breve.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-emerald-500 hover:text-emerald-400 text-sm font-medium underline underline-offset-4"
                                >
                                    Enviar nueva solicitud
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Configuración oculta para FormSubmit */}
                                <input type="hidden" name="_subject" value="Nueva Solicitud - Web Einsof" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Nombre</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-700"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Teléfono</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-700"
                                            placeholder="+56 9..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Correo Electrónico</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-700"
                                        placeholder="candidato@partido.cl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Detalles de la Misión</label>
                                    <textarea
                                        required
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-700 resize-none"
                                        placeholder="Cuéntanos brevemente sobre la candidatura o el desafío actual..."
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="w-full bg-white text-slate-950 font-bold py-4 rounded hover:bg-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Encriptando y Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Solicitar Reunión Estratégica
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}