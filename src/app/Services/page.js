import {
    Bot,
    Radio,
    Search,
    Camera,
    Megaphone,
    Users,
    ShieldCheck,
    Layers
} from 'lucide-react';
import Navbar from '@/components/NavBar';

const services = [
    {
        title: "Automatización de Adherentes",
        description: "Bots de WhatsApp y ManyChat (Instagram) para capturar bases de datos y responder a votantes 24/7 sin intervención humana.",
        icon: <Bot className="w-8 h-8 text-emerald-400" />,
        status: "Operativo"
    },
    {
        title: "Einsoft Social Listening",
        description: "Monitoreo de sentimiento y tendencias en tiempo real. Detectamos crisis y oportunidades antes que la competencia.",
        icon: <Search className="w-8 h-8 text-cyan-400" />,
        status: "En Desarrollo Beta" // Destacamos que es tecnología propia
    },
    {
        title: "Micro-Segmentación Electoral",
        description: "No disparamos al aire. Optimizamos pauta digital (Meta/Google) para llegar al votante exacto en su territorio.",
        icon: <Users className="w-8 h-8 text-emerald-400" />, // Agregado estratégico
        status: "Operativo"
    },
    {
        title: "Producción Visual de Campaña",
        description: "Fotografía profesional y dirección de arte. Construimos la imagen del candidato para transmitir autoridad y cercanía.",
        icon: <Camera className="w-8 h-8 text-slate-300" />,
        status: "Operativo"
    },
    {
        title: "Despliegue Territorial",
        description: "Diseño estratégico de Palomas, Pasacalles y Gigantografías. Coherencia visual desde el poste de luz hasta el feed de Instagram.",
        icon: <Layers className="w-8 h-8 text-slate-300" />,
        status: "Operativo"
    },
    {
        title: "Audio-Branding & Jingles",
        description: "Creación de identidad sonora y piezas musicales de campaña diseñadas para la recordación viral.",
        icon: <Radio className="w-8 h-8 text-slate-300" />,
        status: "Operativo"
    }
];

export default function Services() {
    return (
        <section id="tecnologia" className="py-24 bg-slate-950 relative overflow-hidden">
            <Navbar />
            {/* Título de Sección */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Arsenal <span className="text-emerald-500">Tecnológico</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Integramos ingeniería de software con despliegue territorial. Una solución 360° para campañas modernas.
                </p>
            </div>

            {/* Grid de Servicios */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                    >
                        {/* Icono con fondo brillante */}
                        <div className="mb-6 inline-block p-4 rounded-full bg-slate-950 border border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                            {service.icon}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            {service.description}
                        </p>

                        {/* Badge de estado (opcional, le da toque técnico) */}
                        {service.status === "En Desarrollo Beta" && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-400 border border-cyan-800">
                                ● Tecnología Propietaria
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}