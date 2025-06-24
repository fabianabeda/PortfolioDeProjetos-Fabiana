# Portfólio Fabiana Beda - Analista de Dados

## 🚀 Visão Geral

Portfólio moderno e responsivo desenvolvido com React, Tailwind CSS e Framer Motion. O site apresenta um design contemporâneo com gradientes vibrantes, animações suaves e uma experiência de usuário otimizada.

## ✨ Características

- **Design Moderno**: Interface com gradientes roxo-rosa, efeitos glassmorphism e animações fluidas
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações**: Micro-interações e scroll animations com Framer Motion
- **Performance**: Build otimizado com Vite
- **Acessibilidade**: Componentes acessíveis com shadcn/ui

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Styling utilitário
- **shadcn/ui**: Componentes de UI
- **Framer Motion**: Animações
- **Lucide React**: Ícones modernos

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd portfolio-fabiana

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Deploy automático será configurado

### Opção 2: Netlify
1. Faça build do projeto: `pnpm run build`
2. Faça upload da pasta `dist` no [Netlify](https://netlify.com)
3. Configure redirects se necessário

### Opção 3: GitHub Pages
1. Configure GitHub Actions para build automático
2. Deploy da pasta `dist` para gh-pages branch

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   └── ui/         # Componentes de UI (shadcn/ui)
├── App.jsx         # Componente principal
├── App.css         # Estilos globais
└── main.jsx        # Entry point
```

## 🎨 Customização

### Cores
As cores principais estão definidas no `App.css` e podem ser facilmente alteradas:
- **Primária**: Gradiente roxo-rosa (#6366f1 → #8b5cf6)
- **Secundária**: Azul escuro (#1e293b)
- **Accent**: Verde neon (#10b981)

### Conteúdo
Edite o arquivo `App.jsx` para atualizar:
- Informações pessoais
- Projetos
- Tecnologias
- Links de contato

### Foto de Perfil
Substitua `src/assets/profile-photo.jpg` pela sua foto profissional.

## 📱 Seções do Site

1. **Hero Section**: Apresentação principal com foto e CTAs
2. **About Section**: Formação acadêmica e tecnologias
3. **Projects Section**: Grid de projetos com filtros por categoria
4. **Contact Section**: Formulário de contato e links sociais

## 🔧 Scripts Disponíveis

- `pnpm run dev`: Servidor de desenvolvimento
- `pnpm run build`: Build para produção
- `pnpm run preview`: Preview do build
- `pnpm run lint`: Linting do código

## 🌟 Funcionalidades

- [x] Design responsivo
- [x] Animações suaves
- [x] Navegação por scroll suave
- [x] Cards interativos de projetos
- [x] Formulário de contato
- [x] Links sociais
- [x] Performance otimizada

## 📈 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Bundle Size**: ~352KB (gzipped: ~111KB)
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2s

## 🤝 Contribuição

Para contribuir com melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

## 📞 Contato

**Fabiana Beda**
- Email: fabiana@email.com
- LinkedIn: [linkedin.com/in/fabiana-beda](https://linkedin.com/in/fabiana-beda)
- GitHub: [github.com/fabianabeda](https://github.com/fabianabeda)

---

Desenvolvido com ❤️ usando React e Tailwind CSS

