import React from 'react';
import {
    Monitor, Cpu, Code2, Users, Rocket,
    Smartphone, MessageSquare, Globe, Sparkles
} from 'lucide-react';
import Template from './Template';

// Importação das imagens
import poloImg from '../assets/cursos/polo.png';
import programacaoImg from '../assets/cursos/programacao.png';
import roboticaImg from '../assets/cursos/robotica.png';
import informaticaImg from '../assets/cursos/informatica.png';
import iaImg from '../assets/cursos/ia.png';
import midiasSociaisImg from '../assets/cursos/midias-sociais.png';

const CourseCard = ({ icon: Icon, title, description, image }) => (
    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col">
        <div className="h-48 overflow-hidden relative">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg">{title}</h3>
            </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {description}
            </p>
            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-institutional-blue uppercase tracking-widest">Polo de Tecnologia</span>
                <Sparkles className="w-4 h-4 text-institutional-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    </div>
);

const Tecnologia = () => {
    const cursos = [
        {
            titulo: "Programação",
            icon: Code2,
            imagem: programacaoImg,
            descricao: "Capacitamos jovens para o desenvolvimento de websites, aplicativos e sistemas, dominando linguagens como HTML, CSS, JavaScript e Python."
        },
        {
            titulo: "Robótica",
            icon: Cpu,
            imagem: roboticaImg,
            descricao: "Promovemos o aprendizado prático em montagem e programação de robôs, desenvolvendo o raciocínio lógico e preparando para as profissões do futuro."
        },
        {
            titulo: "Informática +50 / -50",
            icon: Users,
            imagem: informaticaImg,
            descricao: "Inclusão digital democrática: ensinamos desde o uso básico do computador até ferramentas modernas do dia a dia para todas as gerações."
        },
        {
            titulo: "Inteligência Artificial",
            icon: Sparkles,
            imagem: iaImg,
            descricao: "Exploramos as fronteiras do futuro com conceitos de machine learning, automação e ferramentas de IA aplicadas ao mundo real."
        },
        {
            titulo: "Mídias Sociais",
            icon: Smartphone,
            imagem: midiasSociaisImg,
            descricao: "Domine o marketing digital, gestão de plataformas e criação de conteúdo profissional para impulsionar projetos e carreiras."
        }
    ];

    return (
        <Template title="Tecnologia">
            <div className="max-w-6xl mx-auto space-y-24 pb-12">

                {/* Intro Section */}
                <section className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-institutional-blue/5 text-institutional-blue rounded-full text-sm font-bold tracking-wide uppercase">
                            <Monitor className="w-4 h-4" /> Inclusão e Futuro
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight">
                            Polo de <span className="text-institutional-blue">Tecnologia</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed">
                            Acreditamos que o acesso à tecnologia é um direito fundamental. Nosso polo funciona como um ecossistema de inovação social, preparando nossa comunidade para os desafios da era digital.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-2xl font-bold text-institutional-blue mb-1">200+</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Alunos Ativos</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-2xl font-bold text-institutional-blue mb-1">100%</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Gratuito</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative">
                        <div className="absolute -inset-4 bg-institutional-orange/5 rounded-[3rem] rotate-3"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300">
                            <img
                                src={poloImg}
                                alt="Polo de Tecnologia"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-slate-800">Nossos Programas Digital</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Uma trilha completa de aprendizado, desde a alfabetização digital básica até tecnologias avançadas de ponta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cursos.map((curso, index) => (
                            <CourseCard
                                key={index}
                                icon={curso.icon}
                                title={curso.titulo}
                                description={curso.descricao}
                                image={curso.imagem}
                            />
                        ))}
                    </div>
                </section>

                {/* Final CTA / Impact Box */}
                <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Rocket className="w-64 h-64 -rotate-12" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <Globe className="w-4 h-4" /> Impacto Global, Ação Local
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Tecnologia como Ferramenta de Emancipação</h2>

                        <p className="text-lg text-slate-300 leading-relaxed mb-10">
                            Mais do que ensinar ferramentas, ensinamos nossos alunos a serem protagonistas de suas próprias histórias. A tecnologia no Instituto Casa do Pai é uma ponte para a autonomia, o empreendedorismo e a inclusão social plena.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <MessageSquare className="w-6 h-6 text-institutional-orange" />
                                <span className="text-sm font-medium">Comunidade Conectada</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <Sparkles className="w-6 h-6 text-institutional-orange" />
                                <span className="text-sm font-medium">Inovação Constante</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Template>
    );
};

export default Tecnologia;
