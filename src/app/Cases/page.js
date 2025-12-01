import { TrendingUp, Users, CheckCircle, BarChart3, Lock } from 'lucide-react';
import Navbar from '@/components/NavBar';

const cases = [
    {
        id: "OP-001",
        location: "REGIÓN DE VALPARAÍSO",
        role: "CORE (CONCÓN-QUINTERO-VIÑA DEL MAR)",
        result: "ELECTO",
        votes: "16,000+",
        impact: "Primera Mayoría Sectorial",
        description: "Campaña de micro-segmentación territorial. Logramos activar bases dormidas en sectores periféricos mediante WhatsApp Bots.",
        color: "emerald"
    },
    {
        id: "OP-002",
        location: "REGIÓN DE VALPARAÍSO",
        role: "CORE (VALPARAISO-CASA BLANCA-JUAN FERNANDEZ)",
        result: "ELECTO",
        votes: "17,000+",
        impact: "Consolidación Urbana",
        description: "Estrategia mixta digital/terreno. Segmentación de pauta en Meta para blindar votos en mesas críticas de la ciudad puerto.",
        color: "emerald"
    },
    {
        id: "OP-003",
        location: "SENATORIAL V REGIÓN",
        role: "CANDIDATURA SENADO",
        result: "ALTO IMPACTO",
        votes: "25,000+",
        impact: "Alcance Masivo Validado",
        description: "Despliegue de alto volumen. A pesar de la dispersión de votos del partido, logramos fidelizar una base de datos de 25k votantes únicos.",
        color: "blue" // Color diferente porque no fue electo, pero es un exitazo en números
    }
];

export default function CaseStudies() {
    return (
        <section id="casos" className="py-24 bg-slate-950 relative border-t border-slate-900">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Resultados <span className="text-emerald-500">Verificados</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            La teoría no gana elecciones. Aquí están los datos duros de nuestras últimas operaciones en la V Región.
                        </p>
                    </div>

                    {/* Badge de confidencialidad */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded text-xs text-slate-500 font-mono">
                        <Lock size={14} />
                        DATOS SENSIBLES / CLIENTES PROTEGIDOS
                    </div>
                </div>

                {/* Grid de Casos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Barra superior estilo "Folder" */}
                            <div className="h-1 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 group-hover:from-emerald-600 group-hover:to-emerald-400 transition-all"></div>

                            <div className="p-8">
                                {/* ID del caso */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-xs text-slate-500 tracking-widest border border-slate-800 px-2 py-1 rounded">
                                        {item.id}
                                    </span>

                                    {/* Badge de Resultado */}
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${item.result === "ELECTO"
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                        }`}>
                                        {item.result === "ELECTO" ? <CheckCircle size={12} /> : <TrendingUp size={12} />}
                                        {item.result}
                                    </span>
                                </div>

                                {/* Título y Rol */}
                                <h3 className="text-white font-bold text-lg mb-1">{item.role}</h3>
                                <p className="text-emerald-500 text-sm font-mono mb-6">{item.location}</p>

                                {/* La métrica gigante */}
                                <div className="mb-6 p-4 bg-slate-950 rounded border border-slate-800/50 text-center group-hover:border-slate-700 transition-colors">
                                    <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                                        {item.votes}
                                    </div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">
                                        Votos Contabilizados
                                    </div>
                                </div>

                                {/* Descripción */}
                                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}