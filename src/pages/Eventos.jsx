import React, { useState } from 'react';
import { Pin, X, Calendar, Clock, Tag } from 'lucide-react';
import Template from './Template';

const eventosData = [
    {
        id: 1,
        title: "Bazar Beneficente",
        frequency: "Mensal (Todo 2º Sábado)",
        description: "Um evento comunitário onde oferecemos roupas, calçados e utensílios a preços acessíveis para a comunidade. Toda a renda é revertida para manutenção dos projetos sociais do instituto.",
        category: "Comunidade",
        color: "bg-yellow-100",
        rotation: "rotate-2"
    },
    {
        id: 2,
        title: "Café com Música",
        frequency: "Trimestral",
        description: "Tarde de música ao vivo e confraternização. Um espaço para revelar talentos locais e promover a cultura na nossa região, acompanhado de um delicioso café da tarde.",
        category: "Cultura",
        color: "bg-blue-100",
        rotation: "-rotate-1"
    },
    {
        id: 3,
        title: "Mutirão da Saúde",
        frequency: "Semestral",
        description: "Em parceria com profissionais voluntários, oferecemos aferição de pressão, teste de glicemia e orientações básicas de saúde para idosos e crianças da comunidade.",
        category: "Saúde",
        color: "bg-green-100",
        rotation: "rotate-3"
    },
    {
        id: 4,
        title: "Dia das Crianças e Lazer",
        frequency: "Anual",
        description: "Uma grande festa dedicada aos pequenos, com brincadeiras, distribuição de brinquedos, lanches e muita diversão. Um dia inesquecível para celebrar a infância.",
        category: "Infantil",
        color: "bg-pink-100",
        rotation: "-rotate-2"
    },
    {
        id: 5,
        title: "Oficina de Artesanato",
        frequency: "Semanal (Quartas-feiras)",
        description: "Aprenda técnicas manuais e desenvolva novas habilidades. Nossas oficinas visam não apenas o lazer, mas também a geração de renda extra para as famílias participantes.",
        category: "Capacitação",
        color: "bg-purple-100",
        rotation: "rotate-1"
    },
    {
        id: 6,
        title: "Sopão Solidário",
        frequency: "Semanal (Sextas-feiras)",
        description: "Distribuição de sopas nutritivas para famílias em situação de vulnerabilidade social. Mais do que alimento, entregamos carinho e esperança.",
        category: "Social",
        color: "bg-orange-100",
        rotation: "-rotate-3"
    }
];

const Eventos = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Function to get distinct rotation class if not in data, but data has it. 
    // Just in case we didn't add it to all items, fallback:
    const getRotation = (index) => {
        const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];
        return rotations[index % rotations.length];
    };

    const getColors = (index) => {
        const colors = ['bg-yellow-100', 'bg-blue-100', 'bg-green-100', 'bg-pink-100', 'bg-orange-100', 'bg-purple-100'];
        return colors[index % colors.length];
    }

    return (
        <Template title="Mural de Eventos">
            <div className="relative">
                {/* Introduction Text */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Fique por dentro das nossas atividades! Aqui no <span className="font-semibold text-institutional-orange">Mural da Comunidade</span>,
                        você encontra os próximos eventos e ações sociais. Clique nos post-its para saber mais.
                    </p>
                </div>

                {/* Mural Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 pb-12">
                    {eventosData.map((evento, index) => {
                        const rotationClass = evento.rotation || getRotation(index);
                        const bgColor = evento.color || getColors(index);

                        return (
                            <div
                                key={evento.id}
                                onClick={() => setSelectedEvent(evento)}
                                className={`
                                    group relative cursor-pointer 
                                    ${bgColor} 
                                    p-6 pt-12 rounded-sm shadow-md hover:shadow-xl
                                    transform transition-all duration-300 ease-out
                                    ${rotationClass} hover:rotate-0 hover:scale-105 hover:z-10
                                    min-h-[280px] flex flex-col
                                `}
                            >
                                {/* Push Pin */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="relative">
                                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-700 absolute top-1 left-1.5 animate-pulse"></div>
                                        <Pin className="w-8 h-8 text-red-600 drop-shadow-md fill-current" />
                                    </div>
                                </div>

                                {/* Tape effect (optional aesthetic touch for realism) */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-white/30 backdrop-blur-sm rotate-2 opacity-60"></div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col items-center text-center space-y-4 font-marker">
                                    <span className="inline-block px-3 py-1 bg-white/60 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 border border-slate-200/50">
                                        {evento.category}
                                    </span>

                                    <h3 className="text-2xl font-bold text-slate-800 leading-tight handwriting-font">
                                        {evento.title}
                                    </h3>

                                    <div className="flex items-center justify-center space-x-2 text-slate-600 text-sm font-medium mt-auto pt-4 border-t border-slate-900/10 w-full">
                                        <Clock size={16} />
                                        <span>{evento.frequency}</span>
                                    </div>

                                    <p className="text-xs text-slate-500 mt-2 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Clique para detalhes
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Modal */}
                {selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                            onClick={() => setSelectedEvent(null)}
                        ></div>

                        {/* Modal Content */}
                        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-fadeIn">
                            {/* Header Stripe */}
                            <div className={`h-4 w-full ${selectedEvent.color || 'bg-institutional-orange'}`}></div>

                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-red-500"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className={`p-3 rounded-lg ${selectedEvent.color || 'bg-slate-100'} bg-opacity-50`}>
                                        <Calendar className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-institutional-orange uppercase tracking-wide block">
                                            {selectedEvent.category}
                                        </span>
                                        <h2 className="text-3xl font-bold text-slate-800">
                                            {selectedEvent.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <Clock className="w-5 h-5 text-institutional-blue mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-slate-700 text-sm">Frequência</h4>
                                            <p className="text-slate-600">{selectedEvent.frequency}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                            <Tag size={18} />
                                            Sobre o Evento
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-justify">
                                            {selectedEvent.description}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="w-full py-3 bg-institutional-blue hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-200"
                                    >
                                        Fechar Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Animations Styles */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </Template>
    );
};

export default Eventos;
