import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/NavBar';

export default function Strategy() {

    // Aquí aplicamos la Ley 3: Definir por antagonismo
    const comparisonData = [
        {
            concept: "El Gasto",
            old: "Derroche en papel y volantes que terminan en la basura.",
            new: "Micro-segmentación digital. Cada peso impacta a un votante real."
        },
        {
            concept: "El Territorio",
            old: "Caminatas a ciegas y 'tincómetro' del candidato.",
            new: "Mapeo de calor digital y despliegue basado en datos."
        },
        {
            concept: "El Mensaje",
            old: "Discursos genéricos para 'caerle bien a todos'.",
            new: "Narrativas quirúrgicas para nichos específicos."
        },
        {
            concept: "La Crisis",
            old: "Reaccionar cuando el escándalo ya está en la prensa.",
            new: "Social Listening: detectamos y neutralizamos la amenaza antes de que crezca."
        }
    ];

    return (
        <section id="estrategia" className="py-24 bg-slate-950 relative">
            <Navbar />
            {/* Fondo sutil (Grid) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ENCABEZADO: Ley 1 (Solución, no producto) */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ingeniería vs. <span className="text-slate-600 line-through decoration-red-500/50">Azar</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Las elecciones modernas no se ganan con buenas intenciones.
                        Se ganan con <span className="text-emerald-400 font-semibold">orden, datos y disciplina estratégica.</span>
                    </p>
                </div>

                {/* COMPARATIVA: Ley 3 (Antagonista) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* LADO IZQUIERDO: EL ANTAGONISTA (La Vieja Política) */}
                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-3 mb-8">
                            <AlertTriangle className="text-red-500 w-8 h-8" />
                            <h3 className="text-2xl font-bold text-slate-300">Campaña Tradicional</h3>
                        </div>

                        <div className="space-y-8">
                            {comparisonData.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <XCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-slate-500 font-mono text-sm uppercase tracking-wider mb-1">{item.concept}</h4>
                                        <p className="text-slate-400 font-medium">{item.old}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LADO DERECHO: EL PROTAGONISTA (Einsoft) */}
                    <div className="relative p-8 rounded-2xl border border-emerald-500/30 bg-slate-900 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">

                        {/* Efecto de brillo superior */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent blur-sm"></div>

                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-emerald-400 w-8 h-8" />
                            <h3 className="text-2xl font-bold text-white">Método Einsoft</h3>
                        </div>

                        <div className="space-y-8">
                            {comparisonData.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-emerald-900/80 font-mono text-sm uppercase tracking-wider mb-1 px-2 py-0.5 bg-emerald-400/10 rounded w-fit inline-block">
                                            {item.concept}
                                        </h4>
                                        <p className="text-white font-medium text-lg">{item.new}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* NARRATIVA FINAL: Ley 2 (Contar una historia) y Ley 5 (Premisas del público) */}
                <div className="mt-24 text-center">
                    <blockquote className="relative max-w-4xl mx-auto p-10 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl">
                        {/* Comillas decorativas */}
                        <span className="absolute top-0 left-4 text-8xl text-slate-800 font-serif leading-none -mt-8">“</span>

                        <p className="text-2xl md:text-3xl text-slate-200 font-light italic leading-relaxed">
                            El caos es el enemigo natural de la victoria. Nosotros no vendemos publicidad;
                            entregamos <span className="text-emerald-400 not-italic font-bold">certeza</span> en un entorno de incertidumbre.
                            Validamos candidatos, protegemos votos y aseguramos el resultado.
                        </p>

                        <footer className="mt-6 text-slate-500 font-mono text-sm">
                            — Filosofía Operativa Einsoft
                        </footer>
                    </blockquote>
                </div>

            </div>
        </section>
    );
}