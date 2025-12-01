'use client'; // Necesario para usar useState y useEffect

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Manejar el efecto de scroll para cambiar el fondo
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Links de navegación (fáciles de editar)
    const navLinks = [
        { name: 'Nuestra Tecnología', href: '/Services' },
        { name: 'Estrategia Electoral', href: '/Strategy' },
        { name: 'Casos de Éxito', href: '/Cases' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3 shadow-lg shadow-black/20'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* LOGO */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group cursor-pointer">
                            <span className="text-2xl font-bold text-white tracking-tighter">
                                EIN<span className="text-emerald-500">SOFT</span>
                            </span>
                            {/* Pequeño punto que brilla al hacer hover */}
                            <span className="ml-1 inline-block w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                        </Link>
                    </div>

                    {/* DESKTOP MENU (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="/Contact"
                            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-950 bg-white rounded hover:bg-slate-200 transition-all transform hover:scale-105"
                        >
                            Agendar Reunión
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU (Dropdown) */}
            <div
                className={`md:hidden absolute w-full bg-slate-950 border-b border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)} // Cerrar menú al hacer click
                            className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 w-full text-center py-3 rounded-lg transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/Contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center px-5 py-3 text-base font-semibold text-slate-950 bg-emerald-500 rounded hover:bg-emerald-400 transition-all mt-4"
                    >
                        Agendar Reunión
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;