
// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-educacao-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Educacao.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React from 'react';
import Template from './Template';

// Imagens da galeria
import salaAula from '../assets/Educacao/sala-aula.jpg';
import informaticaCurso from '../assets/Educacao/informatica-curso.jpg';
import programacaoAula from '../assets/Educacao/programacao-aula.jpg';
import roboticaInstitucional from '../assets/Educacao/robotica-institucional.jpg';

// Estilos CSS para efeito de folha de caderno
const notebookStyles = {
    card: {
        background: `
            linear-gradient(to bottom, 
                transparent 0px, 
                transparent 27px, 
                #e5e7eb 27px, 
                #e5e7eb 28px
            )`,
        backgroundSize: '100% 28px',
        backgroundColor: '#fffef5',
        borderLeft: '4px solid #ef4444',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.1), inset 0 0 40px rgba(0,0,0,0.02)',
        position: 'relative',
    },
    // Estilo de caderno para Cultura (rosa/lilás)
    cardCulture: {
        background: `
            linear-gradient(to bottom, 
                transparent 0px, 
                transparent 27px, 
                #e9d5ff 27px, 
                #e9d5ff 28px
            )`,
        backgroundSize: '100% 28px',
        backgroundColor: '#fdf4ff',
        borderLeft: '4px solid #a855f7',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.1), inset 0 0 40px rgba(168,85,247,0.03)',
        position: 'relative',
    },
    holes: {
        position: 'absolute',
        left: '-12px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    hole: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#f1f5f9',
        border: '2px solid #cbd5e1',
    },
    holeCulture: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#faf5ff',
        border: '2px solid #d8b4fe',
    }
};

// Componente de Card estilo Caderno (variant: 'education' ou 'culture')
const NotebookCard = ({ icon, title, description, color, variant = 'education' }) => (
    <div
        className="p-6 pl-8 rounded-lg hover:shadow-xl transition-all hover:-translate-y-1 relative"
        style={variant === 'culture' ? notebookStyles.cardCulture : notebookStyles.card}
    >
        {/* Furos do caderno */}
        <div style={notebookStyles.holes}>
            <div style={variant === 'culture' ? notebookStyles.holeCulture : notebookStyles.hole}></div>
            <div style={variant === 'culture' ? notebookStyles.holeCulture : notebookStyles.hole}></div>
            <div style={variant === 'culture' ? notebookStyles.holeCulture : notebookStyles.hole}></div>
        </div>

        <div className={`w-12 h-12 ${color} rounded-xl mb-4 flex items-center justify-center text-2xl`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 font-['Comic_Sans_MS',_cursive]">{title}</h3>
        <p className="text-slate-600 mt-2 text-sm leading-relaxed" style={{ lineHeight: '28px' }}>
            {description}
        </p>
    </div>
);

const Educacao = () => (
    <Template title="Educação">
        <div className="space-y-6">

            <div className="max-w-6xl mx-auto space-y-16">

                {/* 1. Introdução */}
                <header className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Desde 2007, o Instituto Casa do Pai promove o desenvolvimento humano integral através da educação.
                        Acreditamos que cada indivíduo possui um potencial único, e nossa missão é oferecer as ferramentas
                        necessárias para que esse potencial seja plenamente realizado.
                    </p>
                </header>

                {/* 2. Estatísticas de Impacto */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                        <span className="text-4xl font-bold text-blue-600">18+</span>
                        <p className="text-slate-600 mt-2 text-sm">Anos Transformando Vidas</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                        <span className="text-4xl font-bold text-green-600">500+</span>
                        <p className="text-slate-600 mt-2 text-sm">Alunos Atendidos por Ano</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                        <span className="text-4xl font-bold text-purple-600">20+</span>
                        <p className="text-slate-600 mt-2 text-sm">Cursos e Oficinas</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                        <span className="text-4xl font-bold text-orange-600">100%</span>
                        <p className="text-slate-600 mt-2 text-sm">Gratuito</p>
                    </div>
                </section>

                {/* 3. Grid de Projetos Educacionais - Estilo Caderno */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">📚 Nossos Projetos Educacionais</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <NotebookCard
                            icon="📖"
                            title="Reforço Escolar"
                            description="Acompanhamento pedagógico individualizado para crianças da rede pública no contraturno escolar, focando em matemática, português e ciências."
                            color="bg-blue-100 text-blue-600"
                        />
                        <NotebookCard
                            icon="💻"
                            title="Informática e Tecnologia"
                            description="Cursos de informática para todas as idades: Descomplicando o Celular, WhatsApp, Canva, CapCut, Instagram e criação de conteúdos digitais."
                            color="bg-green-100 text-green-600"
                        />
                        <NotebookCard
                            icon="🤖"
                            title="Robótica e Programação"
                            description="Em parceria com FIRJAN e VALE, oferecemos cursos de Robótica Fab Lab para crianças de 8 a 15 anos e Programação para jovens de 16 a 24 anos."
                            color="bg-purple-100 text-purple-600"
                        />
                        <NotebookCard
                            icon="🎭"
                            title="Teatro e Musicalização"
                            description="Oficinas de teatro e musicalização infantil que estimulam a criatividade, expressão artística e desenvolvimento socioemocional das crianças."
                            color="bg-pink-100 text-pink-600"
                        />
                        <NotebookCard
                            icon="🧠"
                            title="Inteligência Artificial"
                            description="Oficina de IA para jovens e adultos, preparando nossa comunidade para as tecnologias do futuro e ampliando oportunidades no mercado de trabalho."
                            color="bg-cyan-100 text-cyan-600"
                        />
                        <NotebookCard
                            icon="♟️"
                            title="Xadrez Educativo"
                            description="Oficina de xadrez que desenvolve raciocínio lógico, concentração, planejamento estratégico e tomada de decisões em crianças e jovens."
                            color="bg-amber-100 text-amber-600"
                        />
                    </div>
                </section>

                {/* 4. Seção de Cultura */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">🎭 Cultura e Expressão Artística</h2>
                    <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">
                        Valorizamos a cultura como elemento essencial para o desenvolvimento humano.
                        Através de atividades artísticas e culturais, estimulamos o pensamento crítico,
                        a criatividade e fortalecemos a identidade cultural de nossa comunidade.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <NotebookCard
                            icon="🎭"
                            title="Teatro"
                            description="Oficinas de teatro que desenvolvem expressão corporal, oratória, trabalho em equipe e autoconfiança através das artes cênicas."
                            color="bg-rose-100 text-rose-600"
                            variant="culture"
                        />
                        <NotebookCard
                            icon="🎵"
                            title="Musicalização"
                            description="Aulas de música e musicalização infantil que despertam a sensibilidade artística, ritmo e coordenação motora nas crianças."
                            color="bg-violet-100 text-violet-600"
                            variant="culture"
                        />
                        <NotebookCard
                            icon="💃"
                            title="Dança"
                            description="Oficinas de dança que promovem expressão corporal, condicionamento físico e valorização da cultura brasileira."
                            color="bg-fuchsia-100 text-fuchsia-600"
                            variant="culture"
                        />
                        <NotebookCard
                            icon="🎨"
                            title="Artes Visuais"
                            description="Oficinas de desenho, pintura e isogravura que estimulam a criatividade e expressão artística em todas as idades."
                            color="bg-indigo-100 text-indigo-600"
                            variant="culture"
                        />
                        <NotebookCard
                            icon="📚"
                            title="Literatura e Leitura"
                            description="Biblioteca comunitária com mais de 2.000 livros, rodas de leitura e contação de histórias para crianças."
                            color="bg-emerald-100 text-emerald-600"
                            variant="culture"
                        />
                        <NotebookCard
                            icon="🏛️"
                            title="História de Itaguaí"
                            description="Palestras e atividades que resgatam e preservam a memória histórica e cultural do município de Itaguaí."
                            color="bg-amber-100 text-amber-600"
                            variant="culture"
                        />
                    </div>
                </section>

                {/* 5. Cursos Especiais 2026 */}
                <section
                    className="rounded-3xl p-10 relative overflow-hidden"
                    style={{
                        ...notebookStyles.card,
                        backgroundSize: '100% 32px',
                        borderRadius: '24px',
                    }}
                >
                    {/* Furos decorativos grandes */}
                    <div className="absolute left-2 top-1/4 flex flex-col gap-8">
                        <div className="w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-300"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-300"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-300"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-300"></div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8 pl-6">🎓 Programação de Férias 2026</h2>
                    <div className="grid md:grid-cols-3 gap-6 pl-6">
                        <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                                <span className="text-xl">📱</span> Tecnologia Digital
                            </h4>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Descomplicando o Celular</li>
                                <li>• Descomplicando o WhatsApp</li>
                                <li>• Descomplicando o Canva</li>
                                <li>• Descomplicando o CapCut</li>
                                <li>• Criação de Conteúdos</li>
                                <li>• Oficina de Inteligência Artificial</li>
                            </ul>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                <span className="text-xl">💼</span> Empreendedorismo
                            </h4>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Oficina de Biscoitos</li>
                                <li>• Oficina de Trufas</li>
                                <li>• Oficina de Cupcakes</li>
                                <li>• Oficina de Pizzas</li>
                                <li>• Tráfego Pago</li>
                                <li>• Mercado Financeiro</li>
                            </ul>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                                <span className="text-xl">🎨</span> Cultura e Bem-Estar
                            </h4>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Oficina de Teatro</li>
                                <li>• Musicalização Infantil</li>
                                <li>• Oficina de Voz</li>
                                <li>• Oficina de Xadrez</li>
                                <li>• Isogravura</li>
                                <li>• Palestra: História de Itaguaí</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-slate-500 text-sm mt-6 pl-6">
                        📍 Atividades presenciais • A partir de 6 anos • Prioridade para moradores em vulnerabilidade social
                    </p>
                </section>

                {/* 5. Parcerias */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">🤝 Parcerias Estratégicas</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div
                            className="p-8 rounded-2xl relative"
                            style={{
                                ...notebookStyles.card,
                                borderRadius: '16px',
                            }}
                        >
                            <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                                <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 pl-4">FIRJAN</h3>
                            <ul className="text-slate-600 text-sm space-y-2 pl-4" style={{ lineHeight: '28px' }}>
                                <li>📹 Desenvolvedor de Conteúdos para YouTube</li>
                                <li>📊 Assistente de Marketing Digital</li>
                                <li>🔧 Robótica Fab Lab</li>
                            </ul>
                        </div>
                        <div
                            className="p-8 rounded-2xl relative"
                            style={{
                                ...notebookStyles.card,
                                borderRadius: '16px',
                            }}
                        >
                            <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                                <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 pl-4">VALE</h3>
                            <ul className="text-slate-600 text-sm space-y-2 pl-4" style={{ lineHeight: '28px' }}>
                                <li>🤖 Robótica (8 a 15 anos)</li>
                                <li>💻 Programação (16 a 24 anos)</li>
                                <li>🎯 Capacitação profissional</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 6. Diferenciais */}
                <section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-10">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">✨ Por que escolher o Instituto Casa do Pai?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Ensino 100% Gratuito</h4>
                                <p className="text-slate-600 text-sm">Todos os cursos e oficinas são completamente gratuitos para a comunidade.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Parcerias de Excelência</h4>
                                <p className="text-slate-600 text-sm">Cursos em parceria com FIRJAN e VALE, com certificação reconhecida.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Todas as Idades</h4>
                                <p className="text-slate-600 text-sm">Programas para crianças a partir de 6 anos, jovens, adultos e idosos.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Inclusão Digital</h4>
                                <p className="text-slate-600 text-sm">Foco em preparar a comunidade para o mercado de trabalho digital.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Horários de Funcionamento */}
                <section className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">🕐 Horários das Atividades</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h4 className="font-bold text-slate-800 mb-2">Manhã</h4>
                            <p className="text-slate-600 text-sm">08h00 às 12h00</p>
                            <p className="text-blue-600 text-sm mt-2">Reforço Escolar</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h4 className="font-bold text-slate-800 mb-2">Tarde</h4>
                            <p className="text-slate-600 text-sm">13h30 às 17h30</p>
                            <p className="text-blue-600 text-sm mt-2">Informática e Artes</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h4 className="font-bold text-slate-800 mb-2">Noite</h4>
                            <p className="text-slate-600 text-sm">18h30 às 21h30</p>
                            <p className="text-blue-600 text-sm mt-2">Cursos para Jovens e Adultos</p>
                        </div>
                    </div>
                    <p className="text-center text-slate-500 text-sm mt-6">
                        📅 Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h
                    </p>
                </section>

                {/* 8. Galeria de Fotos */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">📸 Nossas Atividades em Ação</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="relative group overflow-hidden rounded-2xl aspect-square">
                            <img
                                src={salaAula}
                                alt="Atividades em sala de aula"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-sm font-medium">Sala de Aula</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl aspect-square">
                            <img
                                src={informaticaCurso}
                                alt="Curso de Informática"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-sm font-medium">Curso de Informática</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl aspect-square">
                            <img
                                src={programacaoAula}
                                alt="Aula de Programação"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-sm font-medium">Aula de Programação</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl aspect-square">
                            <img
                                src={roboticaInstitucional}
                                alt="Robótica e Tecnologia"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-sm font-medium">Robótica e Tecnologia</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Como se Inscrever */}
                <section className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">📝 Como se Inscrever</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        As inscrições estão abertas! Para participar de nossos programas educacionais,
                        compareça à nossa sede com os documentos necessários ou entre em contato:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-3">1</div>
                            <p className="text-slate-600 text-sm">RG e CPF do responsável</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-3">2</div>
                            <p className="text-slate-600 text-sm">Comprovante de residência</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-3">3</div>
                            <p className="text-slate-600 text-sm">Declaração escolar (menores)</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto">
                        <p className="text-slate-700 font-medium">📍 R. Pref. José Maria de Brito, 201</p>
                        <p className="text-slate-600 text-sm">Monte Serrat, Itaguaí - RJ</p>
                        <p className="text-blue-600 font-medium mt-2">📞 (21) 98227-4600</p>
                        <p className="text-blue-600 text-sm">contato@institutocasadopai.org.br</p>
                    </div>
                </section>

            </div>
        </div>
    </Template>
);

export default Educacao;