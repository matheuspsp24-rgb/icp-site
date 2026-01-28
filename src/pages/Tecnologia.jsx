// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-tecnologia-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Tecnologia.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Importação das imagens
import poloImg from '../assets/cursos/polo.png';
import programacaoImg from '../assets/cursos/programacao.png';
import roboticaImg from '../assets/cursos/robotica.png';
import informaticaImg from '../assets/cursos/informatica.png';
import iaImg from '../assets/cursos/ia.png';
import midiasSociaisImg from '../assets/cursos/midias-sociais.png';

gsap.registerPlugin(ScrollTrigger);

const Tecnologia = () => {
    const containerRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Garantir que os elementos estejam visíveis inicialmente
            gsap.set(".course-card", { opacity: 1, y: 0 });
            gsap.set(".header-animate", { opacity: 1, y: 0 });
            gsap.set(".conclusion-section", { opacity: 1, y: 0 });

            // Animação do header
            gsap.from(".header-animate", {
                opacity: 0,
                y: 40,
                duration: 1.2,
                stagger: 0.25,
                ease: "power3.out",
                delay: 0.1
            });

            // Animação dos cards - primeira linha
            gsap.from(".courses-grid .course-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: ".courses-grid",
                    start: "top 95%",
                    toggleActions: "play none none none"
                }
            });

            // Animação da conclusão
            gsap.from(".conclusion-section", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".conclusion-section",
                    start: "top 95%",
                    toggleActions: "play none none none"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const cursos = [
        {
            titulo: "Programação",
            imagem: programacaoImg,
            descricao: "Aprenda a desenvolver websites, aplicativos e sistemas com HTML, CSS, JavaScript e Python."
        },
        {
            titulo: "Robótica",
            imagem: roboticaImg,
            descricao: "Monte e programe robôs, desenvolvendo raciocínio lógico e criatividade para o futuro."
        },
        {
            titulo: "Informática +50 e -50",
            imagem: informaticaImg,
            descricao: "Inclusão digital para todas as idades: computador, internet, e-mail e ferramentas do dia a dia."
        },
        {
            titulo: "Inteligência Artificial",
            imagem: iaImg,
            descricao: "Conceitos de machine learning, chatbots e ferramentas de IA aplicadas ao cotidiano."
        },
        {
            titulo: "Mídias Sociais",
            imagem: midiasSociaisImg,
            descricao: "Domine plataformas digitais, marketing digital e criação de conteúdo profissional."
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <header className="mb-8 text-center header-animate">
                    <h1 className="text-4xl md:text-5xl font-bold text-institutional-blue mb-3">
                        Nossos Programas
                    </h1>
                    <div className="h-1 w-24 bg-institutional-orange mx-auto rounded-full mb-6"></div>

                    {/* Imagem do Polo */}
                    <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
                        <img
                            src={poloImg}
                            alt="Polo de Tecnologia Instituto Casa do Pai"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </header>

                {/* MAIN CONTENT */}
                <main className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-8">

                    {/* Grid de Cards dos Cursos - Layout 2+3 */}
                    <section className="courses-grid mb-6">
                        {/* Primeira linha - 2 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {cursos.slice(0, 2).map((curso, index) => (
                                <article
                                    key={index}
                                    className="course-card bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col md:flex-row"
                                >
                                    <div className="w-full md:w-40 h-32 md:h-auto overflow-hidden flex-shrink-0">
                                        <img
                                            src={curso.imagem}
                                            alt={curso.titulo}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4 flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1 h-6 bg-institutional-orange rounded-full"></div>
                                            <h3 className="text-lg font-bold text-institutional-blue">
                                                {curso.titulo}
                                            </h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {curso.descricao}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Segunda linha - 3 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {cursos.slice(2).map((curso, index) => (
                                <article
                                    key={index + 2}
                                    className="course-card bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="h-32 overflow-hidden">
                                        <img
                                            src={curso.imagem}
                                            alt={curso.titulo}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1 h-5 bg-institutional-orange rounded-full"></div>
                                            <h3 className="text-base font-bold text-institutional-blue">
                                                {curso.titulo}
                                            </h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {curso.descricao}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Divisor simples */}
                    <div className="h-px bg-gradient-to-r from-transparent via-institutional-orange/50 to-transparent my-6"></div>

                    {/* Seção de Conclusão - Mais compacta */}
                    <section className="conclusion-section">
                        <div className="bg-institutional-blue rounded-xl p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
                                    🚀 Tecnologia para Todos
                                </h2>
                                <p className="text-blue-100 leading-relaxed text-center max-w-2xl mx-auto mb-6">
                                    O <strong className="text-white">Polo de Tecnologia do Instituto Casa do Pai</strong> oferece cursos gratuitos de alfabetização digital até programação avançada, preparando jovens e adultos para o mercado de trabalho do século XXI.
                                </p>

                                {/* Estatísticas em linha */}
                                <div className="flex flex-wrap justify-center gap-3">
                                    <div className="text-center px-4 py-2 bg-white/10 rounded-lg">
                                        <span className="text-xl font-bold text-institutional-orange">5+</span>
                                        <span className="text-xs text-blue-100 ml-1">Cursos</span>
                                    </div>
                                    <div className="text-center px-4 py-2 bg-white/10 rounded-lg">
                                        <span className="text-xl font-bold text-institutional-orange">200+</span>
                                        <span className="text-xs text-blue-100 ml-1">Alunos</span>
                                    </div>
                                    <div className="text-center px-4 py-2 bg-white/10 rounded-lg">
                                        <span className="text-xl font-bold text-institutional-orange">100%</span>
                                        <span className="text-xs text-blue-100 ml-1">Gratuito</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer compacto */}
                <footer className="mt-6 text-center">
                    <p className="text-slate-400 text-sm italic">
                        Instituto Casa do Pai • Polo de Tecnologia
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default Tecnologia;
