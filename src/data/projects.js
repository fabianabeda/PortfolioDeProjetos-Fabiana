import licit from '../assets/licit.png';
import licit1 from '../assets/licit1.png';
import licit2 from '../assets/licit2.png';
import desm from '../assets/desm.png';
import desm1 from '../assets/desm1.png';
import desm2 from '../assets/desm2.png';
import desm3 from '../assets/desm3.png';
import desm4 from '../assets/desm4.png';
import desm5 from '../assets/desm5.png';
import north from '../assets/north.png';
import north1 from '../assets/north1.png';
import north2 from '../assets/north2.png';
import north3 from '../assets/north3.png';
import north4 from '../assets/north4.png';
import north5 from '../assets/north5.png';
import portal from '../assets/portal.png';
import portal1 from '../assets/portal1.png';
import portal2 from '../assets/portal2.png';
import portal3 from '../assets/portal3.png';
import rede from '../assets/rede.png';
import rede1 from '../assets/rede1.png';
import rede2 from '../assets/rede2.png';
import rede3 from '../assets/rede3.png';
import bigburger from '../assets/bigburger.png';


export const projectsData = {
  'licittrack': {
    title: 'LicitTrack',
    subtitle: 'Sistema Analítico para Licitações Públicas',
    category: 'Full Stack',
    technologies: ['Node.js', 'React', 'MongoDB', 'APIs'],
    description: 'Sistema analítico para monitoramento de licitações públicas, com backend em Node.js, frontend em React e banco de dados MongoDB. Integrado a APIs públicas do PNCP, o projeto foi registrado no INPI e hospedado via Netlify.',
    fullDescription: `
      <strong>Projeto desenvolvido no Mestrado Profissional em Tecnologia da Informação do IFPB</strong>, com foco em soluções analíticas aplicadas ao setor público. O <strong>LicitTrack</strong> surgiu para solucionar a dificuldade enfrentada por gestores públicos, pesquisadores e fornecedores ao acessarem informações sobre licitações. Os dados disponíveis no <strong>Portal Nacional de Contratações Públicas (PNCP)</strong> eram fragmentados, inconsistentes e pouco acessíveis para análise. A proposta do projeto foi consolidar essas informações em uma plataforma analítica única e interativa.

Para isso, foi necessário estruturar uma solução tecnológica capaz de automatizar a coleta, tratamento e visualização dos dados de licitações públicas. O desafio incluía lidar com grande volume de dados distribuídos em múltiplos endpoints e com formatos variados.

A solução foi a construção de um <strong>pipeline de dados</strong>, com extração automatizada via <strong>API REST do PNCP</strong>. Como os dados estavam dispersos em diversos endpoints, implementamos <strong>requisições paralelas em Python</strong> para acelerar o processo. Após a coleta, os dados no formato <strong>JSON</strong> foram tratados e padronizados utilizando <strong>dicionários em Python</strong> e armazenados no <strong>MongoDB</strong>, respeitando sua estrutura aninhada para facilitar consultas analíticas.

Com os dados organizados, foram definidos <strong>indicadores-chave de performance (KPIs)</strong> nos níveis estratégico, tático e operacional. Em seguida, desenvolvemos um <strong>painel interativo</strong> com <strong>React</strong> e <strong>Tailwind CSS</strong>, apresentando informações como <strong>valor total licitado</strong>, <strong>evolução por ano</strong>, <strong>principais órgãos contratantes</strong>, <strong>itens mais licitados</strong> e <strong>status das licitações</strong> — tudo com foco na experiência do usuário e autoatendimento.

Mesmo sem uma equipe formal de governança de dados, adotamos boas práticas no tratamento: mantivemos os dados brutos em uma etapa intermediária, padronizamos campos e nomenclaturas e aplicamos <strong>índices no MongoDB</strong> para garantir performance nas consultas.

Como resultado, o <strong>LicitTrack</strong> tornou-se uma ferramenta robusta para análise de licitações públicas, promovendo transparência e inteligência analítica na gestão pública. O projeto foi <strong>registrado no Instituto Nacional da Propriedade Industrial (INPI)</strong>, reconhecendo sua originalidade e potencial inovador.
    `,
    features: [
      'Pipeline de dados com extração via API do PNCP',
      'Requisições paralelas para otimização de performance',
      'Banco de dados MongoDB para consultas analíticas',
      'Dashboard interativo em React + Tailwind CSS',
      'Indicadores estratégicos, táticos e operacionais',
      'Análise de fornecedores participantes',
      'Painel de itens mais licitados',
      'Sistema responsivo e self-service BI',
      'Registro no INPI'
    ],
    images: [
      licit,
      licit1,
      licit2,
    ],
    docLink: null,
    demoLink: null,
    githubLink: 'https://github.com/fabianabeda/data-driven-frontend',
    githubLink1: 'https://github.com/fabianabeda/datadriven_back',
  },
  'integracao-dados-ambientais': {
    title: 'Integração de Dados Ambientais',
    subtitle: 'Pipeline de Dados para Análise Ambiental',
    category: 'Data Engineering',
    technologies: ['Apache Airflow', 'MinIO', 'PostgreSQL', 'Power BI'],
    description: 'Pipeline construído com dados das APIs AQICN (qualidade do ar) e MapBiomas (uso do solo). Utilizou Airflow para orquestração, MinIO para armazenamento, Spark para processamento e PostgreSQL para carga de dados.',
    fullDescription: `
     <strong>Projeto desenvolvido no Mestrado Profissional em Tecnologia da Informação do IFPB</strong>, na disciplina de <strong>Integração de Dados</strong>, com foco na aplicação de práticas de engenharia de dados para questões ambientais. O projeto <strong>Integração de Dados Ambientais</strong> teve como objetivo consolidar informações sobre qualidade do ar e uso do solo, permitindo análises mais precisas sobre os impactos ambientais em áreas urbanas.

Embora os dados estivessem publicamente disponíveis, eles se encontravam em formatos distintos, em fontes separadas, e de difícil integração. Nosso desafio foi criar uma arquitetura robusta que automatizasse a coleta, padronização e análise desses dados, tornando-os acessíveis para estudos e decisões estratégicas em políticas ambientais.

Construímos um <strong>pipeline de dados escalável e automatizado</strong> utilizando o <strong>Apache Airflow</strong> como orquestrador principal. O Airflow coordenou o processo de extração, transformação e carga, com monitoramento e tratamento de falhas. A <strong>extração de dados</strong> foi realizada por meio de duas APIs: <strong>AQICN</strong>, que fornece dados de qualidade do ar, e <strong>MapBiomas</strong>, que disponibiliza informações sobre uso e cobertura do solo.

Os dados coletados foram armazenados em um <strong>Data Lake baseado no MinIO</strong>, organizado em camadas <strong>Raw</strong>, <strong>Staging</strong> e <strong>Trusted</strong>, garantindo rastreabilidade, versionamento e controle de qualidade. Em seguida, utilizamos o <strong>Apache Spark</strong> para processar grandes volumes de dados, convertendo arquivos <strong>JSON</strong> em <strong>Parquet</strong>, realizando transformações, enriquecimentos e agregações necessárias para análise.

Após o processamento, os dados foram carregados em um banco <strong>PostgreSQL</strong> modelado com foco em <strong>consultas analíticas</strong>. Para a <strong>visualização</strong>, desenvolvemos dashboards no <strong>Power BI</strong> com indicadores ambientais como <strong>níveis de poluição por região</strong>, <strong>mudanças no uso do solo</strong> e <strong>identificação de áreas de queimadas</strong>.

Todo o ambiente foi <strong>containerizado com Docker</strong>, assegurando reprodutibilidade, escalabilidade e facilidade de implantação em diferentes contextos.

Como resultado, conseguimos transformar dados desconexos em <strong>insights ambientais claros e acessíveis</strong>, promovendo o uso inteligente de dados públicos e aplicando práticas modernas de engenharia e governança de dados para apoiar decisões em prol do meio ambiente.
    `,
    features: [
      'Orquestração com Apache Airflow',
      'Extração de dados via APIs AQICN e MapBiomas',
      'Armazenamento escalável com MinIO',
      'Processamento distribuído com Apache Spark',
      'Banco de dados PostgreSQL otimizado',
      'Dashboards interativos em Power BI',
      'Modelo dimensional para análises',
      'Análises ambientais de qualidade do ar e uso do solo'
    ],
  images: [
    desm,
    desm1,
    desm2,
    desm3,
    desm4,
    desm5,
  ],
  demoLink: 'https://app.powerbi.com/view?r=eyJrIjoiM2UwMjc0MWMtNGM0Ni00ZjAxLWJmYjItOTBlMjE1Y2UxY2RkIiwidCI6IjVhM2UxZWI5LWM3NzctNDQ1YS04MjQyLWQ4MjVhNDYxYjEyYiJ9', 
  githubLink: null,
  githubLink1: 'https://github.com/marinamaracaja/integracao-dados-ifpb',
  },
  'northwind-analytics': {
    title: 'Northwind Analytics',
    subtitle: 'Business Intelligence para Análise Comercial',
    category: 'Business Intelligence',
    technologies: ['Power BI', 'Pentaho', 'SQL'],
    description: 'Projeto acadêmico voltado ao setor comercial de uma empresa fictícia. Envolveu o uso do Power BI e Pentaho Data Integration para modelagem dimensional e criação de dashboards interativos.',
    fullDescription: `
      O projeto <strong>Northwind Analytics</strong> foi desenvolvido na disciplina <strong>Inteligência Empresarial</strong> do curso de <strong>Tecnologia em Sistemas para Internet</strong> no <strong>IFPB</strong>, com o objetivo de aplicar conceitos de <strong>Business Intelligence</strong> em um cenário comercial simulado.

Utilizando a base de dados <strong>Northwind</strong>, que representa uma empresa fictícia de comércio internacional, a proposta foi transformar dados operacionais brutos em informações relevantes para o suporte à tomada de decisão. A empresa possuía registros dispersos e não estruturados, dificultando análises estratégicas e gerenciais.

A solução foi construída com o <strong>Pentaho Data Integration (PDI)</strong>, responsável por todo o processo de <strong>ETL</strong>: extração dos dados do sistema transacional, aplicação de regras de negócio, tratamento e carga para um <strong>Data Warehouse</strong> modelado em estrela. A estrutura incluiu uma <strong>tabela fato</strong> de vendas e <strong>tabelas dimensão</strong> como Cliente, Produto, Funcionário, Tempo e Região.

Para análise e visualização dos dados, desenvolvemos <strong>dashboards interativos</strong> no <strong>Power BI</strong>, contemplando <strong>indicadores estratégicos, táticos e operacionais</strong>. Entre os principais insights entregues estão o <strong>faturamento por período e por região</strong>, <strong>análise de desempenho de produtos</strong>, <strong>ticket médio por cliente</strong> e <strong>acompanhamento de metas comerciais</strong>.

O projeto demonstrou domínio completo do <strong>ciclo de vida de uma solução de BI</strong> — desde a identificação de requisitos até a entrega de um <strong>sistema analítico funcional</strong>, com foco em clareza, desempenho e autonomia para os usuários finais.

    `,
    features: [
      'Modelagem dimensional com Pentaho PDI',
      'Data warehouse estruturado (Star Schema)',
      'ETL automatizado para carga de dados',
      'Dashboards interativos em Power BI',
      'Análise de vendas e lucratividade',
      'Segmentação e análise de clientes',
      'Performance de produtos e fornecedores',
      'Análise geográfica de vendas',
      'KPIs e indicadores comerciais'
    ],    
    images: [
      north,
      north1,
      north2,
      north3,
      north4,
      north5,
    ],
    docLink: '/files/northwind.pdf',
    demoLink: null, 
    githubLink1: null,
    githubLink: null,
  },
  'portal-servicos': {
    title: 'Portal de Serviços',
    subtitle: 'Sistema de Inteligência de Dados',
    category: 'Web Development',
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
    description: 'Sistema Portal de Serviços de Inteligência de Dados construído com Django no backend e tecnologias web no frontend. Integra dados estratégicos para apoiar a tomada de decisão.',
    fullDescription: `
      O <strong>Portal de Serviços de Inteligência de Dados</strong> é uma plataforma web robusta desenvolvida para centralizar e disponibilizar informações estratégicas de forma organizada e acessível. O projeto foi construído com foco na criação de uma solução escalável que pudesse atender às necessidades de diferentes usuários e departamentos de uma organização.

A arquitetura do sistema foi desenvolvida utilizando <strong>Django</strong>, um framework web Python conhecido por sua robustez, segurança e capacidade de desenvolvimento rápido. O Django fornece uma base sólida para o backend, incluindo ORM para gerenciamento de banco de dados, sistema de autenticação, administração automática e proteções de segurança integradas.

O <strong>frontend</strong> foi desenvolvido utilizando tecnologias web modernas, incluindo <strong>HTML5</strong> semântico, <strong>CSS3</strong> com técnicas avançadas de layout e <strong>JavaScript</strong> para interatividade. A interface foi projetada seguindo princípios de UX/UI, garantindo uma experiência de usuário intuitiva e responsiva em diferentes dispositivos.

O portal integra <strong>dados estratégicos</strong> de múltiplas fontes, processando e apresentando informações de forma contextualizada. O sistema inclui funcionalidades para coleta automatizada de dados, processamento em tempo real, e geração de relatórios personalizados.

A plataforma oferece diferentes <strong>níveis de acesso</strong> baseados em perfis de usuário, garantindo que cada pessoa tenha acesso apenas às informações relevantes para sua função. Isso inclui dashboards executivos, relatórios operacionais e análises detalhadas para diferentes departamentos.

O sistema implementa <strong>APIs RESTful</strong> para integração com outros sistemas, permitindo que dados sejam consumidos por aplicações externas ou que informações de terceiros sejam incorporadas ao portal. Essa arquitetura modular facilita a expansão e manutenção do sistema.

Para garantir <strong>performance</strong> e <strong>escalabilidade</strong>, foram implementadas técnicas de cache, otimização de consultas ao banco de dados, e estruturas de dados eficientes. O sistema também inclui monitoramento de performance e logs detalhados para facilitar a manutenção.

A <strong>segurança</strong> foi uma prioridade no desenvolvimento, incluindo autenticação robusta, autorização baseada em roles, proteção contra ataques comuns (CSRF, XSS, SQL Injection), e criptografia de dados sensíveis.

O projeto demonstra competência em desenvolvimento full-stack, desde a concepção da arquitetura até a implementação de funcionalidades complexas, sempre mantendo foco na qualidade do código e na experiência do usuário.

    `,
    features: [
      'Backend robusto em Django',
      'Frontend responsivo com HTML5/CSS3/JS',
      'Integração de dados estratégicos',
      'Sistema de autenticação e autorização',
      'Dashboards personalizados por perfil',
      'APIs RESTful para integração',
      'Relatórios automatizados',
      'Interface intuitiva e responsiva',
      'Processamento de dados em tempo real',
      'Sistema de cache para performance',
      'Logs e monitoramento integrados',
      'Segurança avançada implementada'
    ],
    images: [
      portal,
      portal1,
      portal2,
      portal3,
    ],
    docLink: '/files/RelatorioFinal.pdf',
    demoLink: null, 
    githubLink: 'https://github.com/fabianabeda/Portal_de_Servicos_de_Inteligencia_de_Dados',
    githubLink1: null,
  },
  'redealogando': {
    title: 'Redealogando',
    subtitle: 'Plataforma de Apoio ao Bem-Estar Mental',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'Plataforma informativa criada com HTML5 e CSS3 para apoiar pessoas com depressão e ansiedade. Interface responsiva com foco em acessibilidade e bem-estar digital.',
    fullDescription: `
O <strong>Redealogando</strong> é uma plataforma web dedicada ao apoio de pessoas que enfrentam desafios relacionados à saúde mental, especificamente depressão e ansiedade. O projeto foi desenvolvido com uma abordagem centrada no usuário, priorizando acessibilidade, usabilidade e bem-estar digital.

A plataforma foi construída utilizando tecnologias web fundamentais - <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>JavaScript</strong> - demonstrando que soluções impactantes podem ser criadas com ferramentas essenciais quando aplicadas com expertise e cuidado no design.

O <strong>design da interface</strong> foi cuidadosamente planejado considerando os aspectos psicológicos dos usuários. Foram utilizadas cores suaves e harmoniosas, tipografia legível, espaçamento adequado e elementos visuais que transmitem calma e acolhimento. A paleta de cores foi escolhida baseada em estudos sobre psicologia das cores e seu impacto no bem-estar mental.

A <strong>acessibilidade</strong> foi uma prioridade fundamental no desenvolvimento. O site implementa as diretrizes WCAG (Web Content Accessibility Guidelines), incluindo navegação por teclado, textos alternativos para imagens, contraste adequado, estrutura semântica clara e compatibilidade com leitores de tela.

O <strong>conteúdo informativo</strong> foi estruturado de forma clara e empática, oferecendo recursos sobre saúde mental, técnicas de enfrentamento, informações sobre quando buscar ajuda profissional, e direcionamento para recursos de apoio. Todo o conteúdo foi revisado para garantir linguagem acolhedora e não estigmatizante.

A plataforma inclui <strong>recursos interativos</strong> desenvolvidos em JavaScript, como questionários de autoavaliação, exercícios de respiração guiada, diário de humor digital, e ferramentas de mindfulness. Esses recursos foram projetados para serem simples de usar, mesmo para pessoas em momentos de vulnerabilidade.

O <strong>design responsivo</strong> garante que a plataforma funcione perfeitamente em diferentes dispositivos, desde smartphones até desktops. Isso é especialmente importante considerando que muitas pessoas acessam recursos de saúde mental através de dispositivos móveis.

Foram implementadas <strong>funcionalidades de privacidade</strong> robustas, garantindo que informações pessoais dos usuários sejam protegidas. O site não coleta dados desnecessários e inclui informações claras sobre privacidade e uso de dados.

A plataforma também oferece <strong>recursos de emergência</strong>, incluindo links diretos para linhas de apoio, chat de crise, e informações sobre como buscar ajuda imediata em situações de risco.

O projeto demonstra como a tecnologia pode ser utilizada de forma ética e responsável para abordar questões sociais importantes, sempre priorizando o bem-estar e a segurança dos usuários.

    `,
    features: [
      'Interface acolhedora e terapêutica',
      'Design responsivo para todos os dispositivos',
      'Acessibilidade completa (WCAG)',
      'Conteúdo informativo sobre saúde mental',
      'Exercícios interativos de bem-estar',
      'Questionários de autoavaliação',
      'Diário de humor digital',
      'Exercícios de respiração guiada',
      'Recursos de mindfulness',
      'Links para apoio profissional',
      'Funcionalidades de emergência',
      'Proteção rigorosa de privacidade',
      'Linguagem empática e não estigmatizante'
    ],
    images: [
      rede,
      rede1,
      rede2,
      rede3,
    ],
    docLink: null,
    demoLink: 'https://fabianabeda.github.io/PortfolioDeProjetos/pages/redealogando.html', 
    githubLink: null,
    githubLink1: null,
  },
  'bigburger': {
    title: 'BigBurger',
    subtitle: 'Sistema de Gestão para Hamburguerias',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    description: 'Aplicação Full Stack para gestão de pedidos em hamburguerias. Utilizou React com Context API no frontend, Node.js com Express e MongoDB no backend, com autenticação JWT.',
    fullDescription: `
      O <strong>BigBurger</strong> é uma aplicação full-stack completa desenvolvida para otimizar a gestão de pedidos em hamburguerias. O projeto demonstra a implementação de uma solução moderna e escalável que atende às necessidades específicas do setor de food service, desde o pedido do cliente até a entrega final.

A arquitetura da aplicação segue o padrão <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js), proporcionando uma base tecnológica robusta e moderna. Esta escolha permite desenvolvimento ágil, manutenção facilitada e escalabilidade horizontal conforme o crescimento do negócio.

O <strong>frontend</strong> foi desenvolvido em <strong>React</strong>, utilizando hooks modernos e <strong>Context API</strong> para gerenciamento de estado global. A interface oferece experiências diferenciadas para clientes, funcionários e administradores, com componentes reutilizáveis e design responsivo que funciona perfeitamente em tablets, smartphones e desktops.

Para os <strong>clientes</strong>, a aplicação oferece um cardápio interativo com imagens dos produtos, descrições detalhadas, opções de personalização, carrinho de compras intuitivo e acompanhamento de pedidos em tempo real. A interface é otimizada para facilitar o processo de pedido e reduzir o tempo de decisão.

O <strong>painel administrativo</strong> permite gestão completa do cardápio, controle de estoque, relatórios de vendas, análise de performance dos produtos, gestão de funcionários e configurações do sistema. Dashboards visuais apresentam métricas importantes como vendas por período, produtos mais vendidos e análise de lucratividade.

O <strong>backend</strong> foi construído com <strong>Node.js</strong> e <strong>Express</strong>, implementando uma API RESTful robusta que gerencia todas as operações do sistema. A arquitetura inclui middleware para autenticação, validação de dados, tratamento de erros e logging de operações.

O sistema de <strong>autenticação</strong> utiliza <strong>JWT (JSON Web Tokens)</strong> para garantir segurança nas transações e controle de acesso baseado em roles. Diferentes níveis de permissão são implementados para clientes, funcionários, gerentes e administradores.

O banco de dados <strong>MongoDB</strong> foi escolhido pela flexibilidade no armazenamento de dados variados (produtos, pedidos, usuários, configurações) e pela capacidade de escalar horizontalmente. O schema foi otimizado para consultas rápidas e relatórios eficientes.

A <strong>containerização</strong> com <strong>Docker</strong> facilita o deployment e garante consistência entre ambientes de desenvolvimento, teste e produção. O projeto inclui docker-compose para orquestração de serviços e configuração simplificada.

Funcionalidades avançadas incluem <strong>notificações em tempo real</strong> para atualizações de pedidos, <strong>integração com sistemas de pagamento</strong>, <strong>relatórios automatizados</strong>, e <strong>backup automático</strong> de dados críticos.

O sistema também implementa <strong>otimizações de performance</strong> como cache de consultas frequentes, compressão de imagens, lazy loading de componentes e otimização de bundle para reduzir tempo de carregamento.
    `,
    features: [
      'Frontend React com Context API',
      'Backend Node.js + Express',
      'Banco de dados MongoDB',
      'Autenticação JWT com roles',
      'Interface responsiva multi-dispositivo',
      'Cardápio interativo e personalizável',
      'Carrinho de compras intuitivo',
      'Acompanhamento de pedidos em tempo real',
      'Painel administrativo completo',
      'Gestão de estoque integrada',
      'Relatórios e dashboards visuais',
      'Notificações em tempo real',
      'Containerização com Docker',
      'API RESTful documentada',
      'Sistema de backup automático',
      'Otimizações de performance'
    ],
    images: [
      bigburger,

    ],
    docLink: null,
    demoLink: null, 
    githubLink: 'https://github.com/fabianabeda/bigburger-interface',
    githubLink1: 'https://github.com/fabianabeda/bigburger-api',
  }
}

