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
      Projeto desenvolvido no Mestrado Profissional em Tecnologia da Informação do IFPB, com foco em soluções analíticas aplicadas ao setor público. O <strong>LicitTrack</strong> surgiu para solucionar a dificuldade enfrentada por gestores públicos, pesquisadores e fornecedores ao acessarem informações sobre licitações. Os dados disponíveis no <strong>Portal Nacional de Contratações Públicas (PNCP)</strong> eram fragmentados, inconsistentes e pouco acessíveis para análise. A proposta do projeto foi consolidar essas informações em uma plataforma analítica única e interativa.

A solução técnica envolveu a construção de um <strong>pipeline de dados</strong> com extração via múltiplos endpoints da API do PNCP. Para acelerar o processo, implementamos requisições paralelas que otimizam o tempo de coleta. Após a extração, os dados JSON foram padronizados e armazenados em um banco <strong>MongoDB</strong>, estruturado para consultas analíticas e suporte a dados aninhados.

Com os dados modelados, desenvolvemos um painel frontend em <strong>React + Tailwind CSS</strong>. O dashboard oferece visualização por indicadores <strong>estratégicos</strong> (valor licitado, evolução anual), <strong>táticos</strong> (modalidades e órgãos contratantes) e <strong>operacionais</strong> (status de licitações, itens mais licitados). O sistema é responsivo, interativo e pensado para autoatendimento (self-service BI).

Uma das seções do painel permite a análise dos <strong>fornecedores participantes</strong> nas licitações, com visualização do número de empresas por ano, tipo jurídico e ranking dos maiores participantes. Essa funcionalidade fornece insights valiosos para tomada de decisão e análise de mercado público.

O sistema também oferece um painel para a <strong>análise dos itens mais licitados</strong>, permitindo observar quais produtos ou serviços concentram maiores volumes em contratos públicos. Os dados são filtráveis por localidade e ano, com totalização e ordenação automática dos valores licitados.

O <strong>LicitTrack</strong> foi <strong>registrado no Instituto Nacional da Propriedade Industrial (INPI)</strong>, o que reforça sua originalidade e caráter inovador. Esse reconhecimento formal fortalece a relevância do projeto como solução tecnológica aplicada à gestão pública e à transparência.

O projeto visa facilitar o acesso e análise de dados públicos, promovendo transparência e eficiência. O desenvolvimento do LicitTrack envolveu o uso de diversas tecnologias modernas.
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
     Este projeto representa uma solução completa de engenharia de dados voltada para a análise de informações ambientais. O objetivo principal foi criar um pipeline robusto e escalável que integrasse dados de diferentes fontes relacionadas ao meio ambiente, permitindo análises abrangentes sobre qualidade do ar e uso do solo.

A arquitetura do projeto foi construída seguindo as melhores práticas de engenharia de dados, utilizando <strong>Apache Airflow</strong> como orquestrador principal. O Airflow gerencia todo o fluxo de trabalho, desde a extração dos dados até a disponibilização final para análise, garantindo execução programada, monitoramento e tratamento de falhas.

Para a <strong>extração de dados</strong>, foram utilizadas duas APIs principais: <strong>AQICN</strong> (Air Quality Index China Network) para dados de qualidade do ar e <strong>MapBiomas</strong> para informações sobre uso e cobertura do solo. Essas APIs fornecem dados atualizados e confiáveis sobre condições ambientais em diferentes regiões.

O <strong>armazenamento</strong> foi implementado utilizando <strong>MinIO</strong>, uma solução de object storage compatível com Amazon S3. O MinIO oferece alta disponibilidade, escalabilidade e segurança para o armazenamento de grandes volumes de dados ambientais em formato bruto e processado.

Para o <strong>processamento</strong> dos dados, foi utilizado <strong>Apache Spark</strong>, que permite o processamento distribuído de grandes volumes de dados. O Spark realiza transformações, limpeza, agregações e enriquecimento dos dados, preparando-os para análise.

A <strong>carga</strong> dos dados processados é realizada em um banco <strong>PostgreSQL</strong>, estruturado com um modelo dimensional otimizado para consultas analíticas. O PostgreSQL oferece robustez, performance e suporte a consultas complexas necessárias para análises ambientais.

Para a <strong>visualização</strong> e análise dos dados, foi desenvolvido um conjunto de dashboards em <strong>Power BI</strong>. Esses painéis permitem análises interativas sobre tendências de qualidade do ar, mudanças no uso do solo, correlações entre diferentes indicadores ambientais e identificação de padrões temporais e geográficos.

O projeto demonstra a aplicação prática de conceitos de Big Data e Data Engineering em problemas ambientais reais, contribuindo para o monitoramento e análise de questões ecológicas importantes.

    `,
    features: [
      'Orquestração com Apache Airflow',
      'Extração de dados via APIs AQICN e MapBiomas',
      'Armazenamento escalável com MinIO',
      'Processamento distribuído com Apache Spark',
      'Banco de dados PostgreSQL otimizado',
      'Dashboards interativos em Power BI',
      'Modelo dimensional para análises',
      'Monitoramento de qualidade do ar',
      'Análise de uso e cobertura do solo',
      'Pipeline automatizado e monitorado'
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
      O <strong>Northwind Analytics</strong> é um projeto acadêmico abrangente que demonstra a aplicação de conceitos de Business Intelligence em um cenário comercial real. Utilizando a base de dados clássica Northwind, que simula uma empresa de comércio internacional, o projeto desenvolveu uma solução completa de BI para análise de vendas, clientes, produtos e operações.

O projeto começou com uma análise detalhada dos requisitos de negócio, identificando as principais necessidades de informação dos gestores comerciais. Foram definidos indicadores-chave de performance (KPIs) relacionados a vendas, lucratividade, performance de produtos, análise de clientes e eficiência operacional.

Para a <strong>modelagem dimensional</strong>, foi utilizado o <strong>Pentaho Data Integration (PDI)</strong>, uma ferramenta ETL robusta e open-source. O PDI foi responsável por extrair dados do sistema transacional, aplicar transformações necessárias e carregar as informações em um data warehouse estruturado seguindo o modelo dimensional de Kimball.

A arquitetura do data warehouse incluiu a criação de <strong>tabelas fato</strong> para vendas, pedidos e devoluções, além de <strong>tabelas dimensão</strong> para clientes, produtos, funcionários, fornecedores, tempo e geografia. Essa estrutura otimizada permite consultas rápidas e análises multidimensionais.

Os <strong>dashboards interativos</strong> foram desenvolvidos no <strong>Power BI</strong>, oferecendo visualizações intuitivas e insights acionáveis. Os painéis incluem análises de vendas por período, performance de produtos, segmentação de clientes, análise geográfica de vendas, e monitoramento de metas comerciais.

O projeto implementou funcionalidades avançadas como <strong>drill-down</strong> e <strong>drill-through</strong>, permitindo aos usuários navegar entre diferentes níveis de detalhe. Também foram criados filtros dinâmicos, segmentadores e indicadores visuais que facilitam a exploração dos dados.

Foram desenvolvidas análises específicas como <strong>análise de coorte</strong> para entender o comportamento de retenção de clientes, <strong>análise ABC</strong> para classificação de produtos por importância, e <strong>análise de tendências</strong> para identificar padrões sazonais nas vendas.

O projeto demonstra proficiência em todo o ciclo de vida de um projeto de BI, desde a análise de requisitos até a entrega de soluções analíticas que suportam a tomada de decisão estratégica e operacional.


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
      'KPIs e indicadores comerciais',
      'Drill-down e drill-through',
      'Análise de coorte e ABC',
      'Identificação de tendências sazonais'
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

