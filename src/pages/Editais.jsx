// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-editais-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Editais.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React, { useState } from 'react';
import Template from './Template';

const editais = [
    { title: "Edital 01.2025 – Aquisição de Tenda – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_86810d1c46f94adfba95202123ff8351.pdf" },
    { title: "Edital 02.2025 – Locação de caminhonete 4X4 – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a68e85efd54a45a7b2f54107e154f4a6.pdf" },
    { title: "Edital 03.2025 – Locação de castra móvel – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a16c3bab257d4e8c99270fa0ca9b752c.pdf" },
    { title: "Edital 04.2025 – Material Gráfico – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_186b9d4ae2444304bedf299a2ee41aad.pdf" },
    { title: "Edital 05.2025 – Material Hospitalar Veterinário – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_7e5da5afbd3d421390f53c401a085e21.pdf" },
    { title: "Edital 06.2025 – Recursos humanos – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3c321f57a1334b5794970e3f998d0451.pdf" },
    { title: "Edital 07.2025 – Serviços de evento – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_13d32963496848a2a54b47272d6f0750.pdf" },
    { title: "Edital 08.2025 – Serviços de Consultoria em Gestão de Projetos e Prestação de Contas – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f7ffb756f60d4d7d83dbdb9e4aac59d6.pdf" },
    { title: "Edital 09.2025 – Serviços Médicos Veterinários – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a5df73bd806443218a7910a5571a3c62.pdf" },
    { title: "Edital 10.2025 – Serviços de Recolhimento de lixo infectante – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_df0f1d8cad624e22897bee4e42ba62b7.pdf" },
    { title: "ERRATA ao Edital 04.2025 – Material Gráfico – Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8c514d57b8ad4d45967b2f47ac3710a1.pdf" },
    { title: "Edital 11.2025 – Supervisor Administrativo – Projeto Caravana Pet", url: "#" },
    { title: "Edital 12.2025 – Van (MIni Bus) – Up Grade", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3d8c04ff4ebe433b9369a361384cb599.pdf" },
    { title: "Prorrogação do Edital 12.2025 – Van (MIni Bus) – Up Grade", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_b973086b6558482da133a3ff1dfbf9b4.pdf" },
    { title: "Edital 13.2025 – Uniforme – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4695afa26d9c490da4d431affc71a140.pdf" },
    { title: "Edital 14.2025 – Software – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_536969b077ce4febba434d0deed28b6f.pdf" },
    { title: "Edital 15.2025 – Material Gráfico – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_81279b5b62ed48f49da3031f37134292.pdf" },
    { title: "Edital 16.2025 – Material de Expediente – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_c6c26dc3c4234eaa93f4fb016da597da.pdf" },
    { title: "Edital 17.2025 – Locação de Veículo – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f5a00439ec1340c2948a9f5350231f15.pdf" },
    { title: "Edital 18.2025 – Locação de Notebook – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f6adbb8a8fe84e52a0903198e0492cd0.pdf" },
    { title: "Edital 19.2025 – Armadilhas – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3e9556422c544382b58059942ea7b34e.pdf" },
    { title: "Edital 44.2025 – Prestação de serviços – Empreender 2", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_40281cf7cc494350886048f5b5f2f069.pdf" },
    { title: "Edital 20.2025 – Serviços de Contabilidade – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_57ddb009d6b24055acd2486520b431b7.pdf" },
    { title: "Edital 21.2025 – Serviço de Comunicação Social – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_33079ad8875c43289e04dc46507f8f64.pdf" },
    { title: "Edital 22.2025 – Serviço de Consultoria Técnica em Saúde – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_49282526913e4c33805e04fe35b77208.pdf" },
    { title: "Edital 24.2025 – Serviço de Coordenação – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_448ec237f3594820befd8c0be3af1e68.pdf" },
    { title: "Edital 25.2025 – Serviços de Supervisão – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_77048b14840e4be794d37e495f3746ca.pdf" },
    { title: "Edital 26.2025 – Serviço de Gestão de Projetos – Projeto Controle de Arbovirose", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_b4019caef10f4749860b9cd06071ed5d.pdf" },
    { title: "Edital 33.2025 – Itens de Alimentação – Up Grade", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_ef19177cb0ba4e3f8cbda4dc13fa5e43.pdf" },
    { title: "Edital 34.2025 - Serviços de Recolhimento de Lixo Infectante - Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_bf676effcffc4f8bb51fbac7310995c8.pdf" },
    { title: "Edital 35.2025 – Empresa de RH", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4c67f6bef8534a929eb7493ae3f851f8.pdf" },
    { title: "Edital 36.2025 – Realização de eventos, Material de Comunicação e divulgação e Logística", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_384841d776d642e29116599d7b000716.pdf" },
    { title: "Edital 37.2025 – Material Permanente - Projeto Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_1c3fb10362104f8db3c6417545a2a6c9.pdf" },
    { title: "Edital 38.2025 – Material de Identificação e Divulgação - Projeto Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8bfcc5bb1a93443cb8f014950c67cabc.pdf" },
    { title: "Edital 39.2025 – Material de Consumo - Itens de Cozinha - Projeto Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_e8987dcd7ad749d7afad68737380d2b4.pdf" },
    { title: "Edital 40.2025 – Prestação de Serviços - Projeto Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_fd3b40d9ace94708a0e3fca679d7fda6.pdf" },
    { title: "Prorrogação dos Editais 37.2025, 38.2025, 39.2025, 40.2025 - Projeto Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3657c29f60b348f393462d838580a212.pdf" },
    { title: "2ª Prorrogação dos Editais 37.2025, 38.2025, 39.2025, 40.2025 - Projeto Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_7653f6d8a07c48e39de12e6bf375374f.pdf" },
    { title: "Edital 27.2025 – Consultoria em Gestão de Projetos e Prestação de Contas - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_7ea3019ade134238a40402758df5acbe.pdf" },
    { title: "Edital 28.2025 – Uniformes - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_acaaed5e6f9e4ddea87114f6f8020f6d.pdf" },
    { title: "Edital 29.2025 – Material Esportivo - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_9864a3e6799d4ff496185f39fa04c421.pdf" },
    { title: "Edital 30.2025 – Material de Divulgação - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a7c68760f4d04c869997faa67291f25f.pdf" },
    { title: "Edital 31.2025 – Locação de Caixa de Som e Aro de Basquete - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_ff1122630aff44519d9b189490e8c16b.pdf" },
    { title: "Edital 43.2025 - Prestação de serviços - UP GRADE", url: "#" },
    { title: "Edital 32.2025 – Recursos Humanos - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_e92d908661ac48f6ad3c5b04d93487ed.pdf" },
    { title: "Edital 41.2025 - Combustível Óleo Diesel S10 - Projeto Up Grade", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_9aae03ec954b4f77a6af1494580c8301.pdf" },
    { title: "Edital 42.2025 - Realização de Evento - Projeto Pró Amor", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_6fc134841c0b4e08a874bbd1a9c0f955.pdf" },
    { title: "Edital 43.2025 - Supervisor Administrative - Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a732ea8bacce449e80afdf5449069fd7.pdf" },
    { title: "Edital 44.2025 - Serviço de Instalação Elétrica - Transformando Realidades", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f62bc33760b44439b1de35d02967f781.pdf" },
    { title: "Edital 45.2025 - Prestação de Serviços - Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f4c812593a6a4853af68d374ceb1fe4d.pdf" },
    { title: "Edital 46.2025 - Prestação de Serviços - Coord de Projetos", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f4c812593a6a4853af68d374ceb1fe4d.pdf" },
    { title: "Edital 47.2025 - Recursos Humanos - Projeto Protege +", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_0c4cc641af634676a6db5f65d325cff9.pdf" },
    { title: "Edital 48.2025 - Serviços Especializados - Projeto Protege +", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8a12ed624302427488582ea313857ec6.pdf" },
    { title: "Edital 49.2025 - Plataforma EAD - Projeto Protege +", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a6c338fca5de4a01810691958c09c51a.pdf" },
    { title: "Edital 50.2025 - Serviço de Produção de Evento - Projeto Protege +", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3ff9a64262f44738ae9a0ca68128d055.pdf" },
    { title: "Edital 51.2025 - Serviços Gráficos - Projeto Protege +", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_29e8a5f0f4c5452eb93de6939033dfd8.pdf" },
    { title: "Edital 52.2025 - Recursos Humanos - Projeto Infância Segura", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_28344314f806460cbb0275dfcd2dd7ba.pdf" },
    { title: "Edital 53.2025 - Serviços Especializados - Projeto Infância Segura", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_684f998a49974ff9a2dc4facf2235ebe.pdf" },
    { title: "Edital 54.2025 - Plataforma EAD - Projeto Infância Segura", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a652aba2f47f46c9b100b08636e93c85.pdf" },
    { title: "Edital 55.2025 - Serviço de Produção de Evento - Projeto Infância Segura", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f245b5e9efdd4b15b6701840d647465d.pdf" },
    { title: "Edital 56.2025 - Serviços Gráficos - Projeto Infância Segura", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_07e333f0827644be9881bdcc43ba4143.pdf" },
    { title: "Edital 57.2025 - Serviços Audiovisuais - Projeto Infância Segura", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_57b6e5db579345d1b79b808a161179e8.pdf" },
    { title: "Edital 58.2025 - Recursos Humanos - Projeto Jovens em Movimento", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a6f9ae9dfec74ed3b1b9ab43f3da8567.pdf" },
    { title: "Edital 59.2025 - Supervisor Administrativo - Projeto Caravana Pet", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f7637e1bc2344aa2b94506e894b53d0b.pdf" },
    { title: "Edital 01.2026 - Recursos Humanos - Projeto Empreender 4", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_e4d1391178be46838c5bd7d93aea8714.pdf" },
    { title: "Edital 02.2026 - Serviços de Consultoria em Gestão de Projetos e Pretsção de Contas - Projeto Empreender 4", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8dd6688e5f224b8cae19b414f5b0f45e.pdf" },
    { title: "Edital 03.2026 - Material de Consumo - Projeto Empreender 4", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_114b858b7e374982a9da3ac6f21f96d5.pdf" },
    { title: "Edital 04.2026 - Setrviços de Adequação de Salas de Aula - Projeto Empreender 4", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4d9a3c05a7c5490a9170be24c5e7e34a.pdf" },
    { title: "Edital 05.2026 - Assessoria de Comunicação - Projeto Empreender 4", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_94b7eb23b90a4d209030909d6ce7215c.pdf" }
];

const resultados = [
    { title: "RESULTADO PRELIMINAR DO EDITAL 01/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_2969cbb3ad0940fb96224051bb25589d.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 02/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_51958666d9ab411f9e4138e7f74f45d3.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 03/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_5e6209d0fa074ccc87f3108a4fcdf3fe.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 04/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_37cc883e9d7d494a9a8a25dd5e68a0eb.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 05/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_89b358a16eba480d889fcf45ad581325.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 06/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f09d44405c664f05933f68310bb31107.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 07/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_6cf3508c913a4072b00a0a2a8207481b.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 08/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_2373ba59af3341abb429491d6583d817.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 09/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a8c26dad7cc9428f859f7b8e929fff00.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 10/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_30108ed9429244dd8bce58e8f0262608.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 01/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_16ffaf2801ed4fd18387b5312490ad25.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 02/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4a63f3ac312946348a2f4bb190352a8f.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 03/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8da346a374d741ba907ac1c0c8710add.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 04/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_af2b6cfcf12f40eb85c753f902ad043d.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 05/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_0ecd680ee94a4b6ca5ae700d59cf86cd.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 06/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_252effe3cf63456fb5f28bb2257bf587.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 07/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_5e12647c2ca3458aa514d015ea68dc0c.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 08/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_bc693acdfa924f21bbe165cf81f102c3.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 09/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_44ad9f734de240d4a7ee28e4b844908f.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 10/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3408666a7ea94ac8953ed50bf2d8be28.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 11/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f7fc2dedf5b54a6c8a6f97b35353047e.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 11/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_c89f625b97f947d7bc3c92c661b90ff9.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 12/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_c73d3996b73d4465a0bc40be988f453a.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 44/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_6dece631b718468ebbf4997d037c0211.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 12/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_895f1bdd39254ecabdf32606de4fa365.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 44/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4d95a701a0154150a2babde567563f37.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 13/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_657b63ae3a634b7d98435185b37119f5.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 14/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_1269c55091c44d099500de7c4dcbabcc.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 15/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_da22d8b460c043bc9caf269678b8ce2d.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 16/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_b4f7a24e8c614611bde872c5feddce36.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 17/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a7435c4e9db94d7cbb4f6175d416e278.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 18/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_859d2c45576e473aa7f0dc7fb3b37edd.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 19/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_24cca83a115b48eda08940d4d5e34fc7.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 20/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8fdd76ca9a714f8c8da8636cb4445f5b.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 21/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_e33f9e5fc4144a7fb8d540646de7b553.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 22/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_45bf08f5890d47a3980982e47c3efcc4.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 24/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_1f49ca5dff50461799126bad6c724cc7.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 25/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_94e60bc53eab47e6bd81238048b5b076.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 26/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_ba3abf373c984919a280e17269facd38.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 13/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_fc090b6f60934cbabe28be36bb5a24cf.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 14/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8fb3dae19aa74e16a7c3ffc46ddd2c9c.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 15/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f79704016da94223b13fb71bd1ca0c7e.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 16/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_d72ea51e5b2746dcbdbd9bea1b1e1e74.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 17/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8ab8cc851933435f843130b4e561082f.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 18/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_0e0ad6ddde054a2483767ebd95cebe6c.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 19/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_eb3b194edb1a4c47a1069d4511d1e049.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 20/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_46bc25283d614af9b305cf502e8068fc.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 21/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_131591965bd24462ad8a32fff15da28e.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 22/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_923825c810df4e2087c9c1dbf5f4fb8e.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 24/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_116095eb63d74b77ba20ccfab460aac4.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 25/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_29493a48957249a5a455c432bac1ec4e.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 26/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_ae29f352323b4ecd8952fd48117b70eb.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 33.2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_ae29f352323b4ecd8952fd48117b70eb.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 33/2025", url: "#" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 34/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_cee45131d36f4067a9aaffe041d6e503.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 34/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_35fa814c932643aab2e724602430535b.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 35/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_039780c0272c445c883faf45d008d19b.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 35/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_97527a4402474e25af725066c28a8374.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 36/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_412a16637f5c45b89ff52c9133eb4f04.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 36/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_2efa6015c62743c182eb69f969dfa49d.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 37/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_fd4ce9fc047941429006010c98f86e30.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 38/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_6eb582fbe68d4e71af4dab16fd74a99f.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 39/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f3d4d045292140f8899afabf2350e38c.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 40/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_1803904c3c3542f8ba6d2d04dd15054f.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 37/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_bfec8724dc2d42dcbb817f2a6d115ffb.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 38/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a93da1c3c875453b93e5a6e4ca2bc860.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 39/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_9a8c9003aea943e3b3fbee7a3ec094a6.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 40/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_bd8ce1ff823742d083afbf7a0afa097b.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 27/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_48ecb7d17f0d4c0f966a8462497da295.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 28/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_d7ee74369a1c407990234de3d6da7f63.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 29/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_532aacb22b974aff98f81313f5f6d67d.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 30/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8b2078b7b4ec41279688a19ef33e00c6.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 31/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_252c30398fe942e88a107ed2fa6c4cc8.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 43/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_721339a5e3c2490f92c77ed04f995ac8.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 32/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_81669fd9d7e347b79d98cb7e5ee62927.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 27/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a8e03d6413294862a293e64964b6a6f1.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 28/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_c048f7e28b134546bc4be832364e3af0.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 29/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8a0de227aefa469c96ecbf7ccab5fff4.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 30/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f53683c24dfb44ab898e9d05fda54f05.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 31/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_b758536f23744b2dbed88c46d6e66df1.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 43/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_b301efeabb884646acca53e90ff4dd96.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 32/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_8608018e6b3e47f2a8cfd5842d7b8c23.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 41/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_37858401b53242f3862c9b55d06a1641.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 41/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_7e3927bdb8df49788d5a4821d648c8d7.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 42/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_e55b35a9204d436a83be30897aee5c9b.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 42/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_c1cba0c4dbc04ff9bad475d366d8bfb7.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 43/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_44a5733723da4dc69768fa94c7beb589.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 43/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_80bb9f904a264665b3a345663e4fc617.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 44/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4331247aeafc460eab6f12194be69759.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 44/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_5ea0b5364f3144f6bae6b4afb9e17e34.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 45/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_124e64ecfda649a4b8fc239d5d6c710c.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 45/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_6d92030fe17f42e3b4fef5e81014be86.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 46/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_9b2912af64cd468e9706a2cfc0325587.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 46/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_5f25f56098234f42a55c93f064019dcf.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 47/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_4a2add7306834f8f8b933156550aa788.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 48/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_5f934dbecca04c0096af1d386a1d7c2f.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 49/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_aef84dca31554566af5ca8cace2226d0.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 50/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_6d62e203e9e74b8f8bf546162245d808.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 51/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_dea14608faca4d0899e836eed8f48d48.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 47/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_bcbbf70d21de4d55a38b888d44d8ef82.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 48/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_ec61abd528004b4c9d25fc734ad7f45a.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 49/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_1013907ab8d94b57938a8071b9c3ea00.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 50/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_43892a3ed2da41babb7eda0d72d11f1a.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 51/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_df4148e93bee4c2ca7687705f7fe96bd.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 52/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_9c15993b216448c4af7bf7df9629709e.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 53/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_eca1ba9dd4204c87b80dcbdd1eb4c1d2.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 54/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_eb0fa31a11ad4586b70f81f61cb73895.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 55/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_406f6a3f93704e6cb071af6dd7d01ed5.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 56/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_d68058f886e44cc7963fe444bf69f7cb.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 57/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_5e5be4e779374b8ba3b4833e2dfd774d.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 58/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_cc0379baab614d1c9fd7bcebcbddacee.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 52/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_04db6b99b707469dbe1cc6f64540cc68.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 53/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_f79074001be94964bf7648d5abfdf970.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 54/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_0c0404f4574c4447b925894b3fced042.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 55/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_44b9f36c58fa413f8a0bc0372812c9bf.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 56/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_094f339c77824ac9a5fd937a9f9cc10b.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 57/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_48c3927cbe6c455b879c3572a247ed29.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 58/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_444218127cd7444a926461d1ccbb0396.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 59/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_d301b2a6727649299b2c4f05b9cac0c9.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 59/2025", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_98c0435c1c7b4c5fb7f97c53f6f6573b.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 01.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_98c0435c1c7b4c5fb7f97c53f6f6573b.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 02.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_1d4ba9a9b138428fa75a8aed3ebbb9c5.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 03.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_21057acf39d242529c335f3b4b5b66d9.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 04.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_7e996188c5ca41d8875fdba88e823e41.pdf" },
    { title: "RESULTADO PRELIMINAR DO EDITAL 05.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_a06a2c8488f540f0835b36a2d1ba762e.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 01.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_3d0b131fa048431aaa426b3883636277.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 02.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_27523fa031384411bf18faf772634145.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 03.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_00aa02e7baad4c7a99e1c78febe6b6a7.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 04.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_12e13d8e1f14489199cbbe06d6326652.pdf" },
    { title: "RESULTADO FINAL DO EDITAL 05.2026", url: "https://www.institutocasadopai.org.br/_files/ugd/2b6395_744b5f927dda44779f8050c1bb18ff7b.pdf" }
];

const Editais = () => {
    const [activeTab, setActiveTab] = useState('editais');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEditais = editais.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredResultados = resultados.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Template title="Editais">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with Search */}
                <div className="mb-12 space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                            Portal de Transparência
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Consulte aqui todos os editais de licitação e resultados dos projetos executados pelo Instituto Casa do Pai.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                        <div className="flex p-1.5 bg-slate-100 rounded-2xl w-full md:w-fit">
                            <button
                                onClick={() => setActiveTab('editais')}
                                className={`flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'editais'
                                    ? 'bg-white text-blue-600 shadow-lg scale-105'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                Editais ({filteredEditais.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('resultados')}
                                className={`flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'resultados'
                                    ? 'bg-white text-green-600 shadow-lg scale-105'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                Resultados ({filteredResultados.length})
                            </button>
                        </div>

                        <div className="relative w-full md:max-w-md group">
                            <input
                                type="text"
                                placeholder="Buscar documentos..."
                                className="w-full px-6 py-3.5 pl-14 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium shadow-inner"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg
                                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="min-h-[400px]">
                    {activeTab === 'editais' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                            {filteredEditais.length > 0 ? (
                                filteredEditais.map((item, index) => (
                                    <div key={index} className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-slate-800 font-bold text-lg leading-tight line-clamp-3 min-h-[4.5rem]">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-8 flex items-center justify-center gap-3 w-full py-4 px-6 bg-slate-50 text-slate-700 font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            Download PDF
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <EmptyState />
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                            {filteredResultados.length > 0 ? (
                                filteredResultados.map((item, index) => (
                                    <div key={index} className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-slate-800 font-bold text-lg leading-tight line-clamp-3 min-h-[4.5rem]">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-8 flex items-center justify-center gap-3 w-full py-4 px-6 bg-slate-50 text-slate-700 font-bold rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            Ver Resultado
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <EmptyState />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Template>
    );
};

const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
        <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Nenhum documento encontrado</h3>
        <p className="text-slate-500 text-center max-w-sm">
            Tente ajustar seus termos de pesquisa para encontrar o que procura.
        </p>
    </div>
);

export default Editais;
