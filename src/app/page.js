// app/page.js
import Link from 'next/link';
import Navbar from '@/components/NavBar.js';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      <Navbar />
      {/* Fondo con gradiente sutil para dar profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-60"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Badge pequeño superior */}
        <div className="mb-6 inline-block px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest">
            Tecnología Electoral • Valparaíso
          </span>
        </div>

        {/* Título Principal */}
        {/* <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight mb-6">
          EINSOFT
        </h1> */}
        {/* En lugar de <h1... >EINSOFT</h1> usa esto: */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          INTELIGENCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">ELECTORAL</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-slate-200 mb-8 font-mono">
          <span className="text-emerald-500 mr-2">{'>'}</span>
          Lo que no se ve, decide la elección_
          <span className="animate-pulse">|</span> {/* Cursor parpadeante */}
        </h2>

        {/* Descripción */}
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Ingeniería de datos y estrategia digital para campañas políticas de alto rendimiento.
          Transformamos el caos de las redes en votos contabilizados.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/Cases" className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-slate-200 transition-all">
            Ver Casos de Éxito
          </Link>
          <Link href="/Services" className="px-8 py-3 border border-slate-700 text-white rounded hover:bg-slate-900 transition-all">
            Nuestra Tecnología
          </Link>
        </div>
      </div>
    </section>
  );
}