import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Database, BarChart3, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import profilePhoto from './assets/profile-photo.jpg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    'Power BI', 'Qlik Sense', 'Pentaho', 'Node.js', 'React', 'MongoDB', 
    'Apache Airflow', 'PostgreSQL', 'MinIO', 'Python', 'JavaScript'
  ]

  const projects = [
    {
      id: 'licittrack',
      title: 'LicitTrack',
      description: 'Sistema analítico para monitoramento de licitações públicas, com backend em Node.js, frontend em React e banco de dados MongoDB. Integrado a APIs públicas do PNCP, o projeto foi registrado no INPI e hospedado via Netlify.',
      technologies: ['Node.js', 'React', 'MongoDB', 'APIs'],
      category: 'Full Stack'
    },
    {
      id: 'integracao-dados-ambientais',
      title: 'Integração de Dados Ambientais',
      description: 'Pipeline construído com dados das APIs AQICN (qualidade do ar) e MapBiomas (uso do solo). Utilizou Airflow para orquestração, MinIO para armazenamento, Spark para processamento e PostgreSQL para carga de dados.',
      technologies: ['Apache Airflow', 'MinIO', 'PostgreSQL', 'Power BI'],
      category: 'Data Engineering'
    },
    {
      id: 'northwind-analytics',
      title: 'Northwind Analytics',
      description: 'Projeto acadêmico voltado ao setor comercial de uma empresa fictícia. Envolveu o uso do Power BI e Pentaho Data Integration para modelagem dimensional e criação de dashboards interativos.',
      technologies: ['Power BI', 'Pentaho', 'SQL'],
      category: 'Business Intelligence'
    },
    {
      id: 'portal-servicos',
      title: 'Portal de Serviços',
      description: 'Sistema Portal de Serviços de Inteligência de Dados construído com Django no backend e tecnologias web no frontend. Integra dados estratégicos para apoiar a tomada de decisão.',
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
      category: 'Web Development'
    },
    {
      id: 'redealogando',
      title: 'Redealogando',
      description: 'Plataforma informativa criada com HTML5 e CSS3 para apoiar pessoas com depressão e ansiedade. Interface responsiva com foco em acessibilidade e bem-estar digital.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web Development'
    },
    {
      id: 'bigburger',
      title: 'BigBurger',
      description: 'Aplicação Full Stack para gestão de pedidos em hamburguerias. Utilizou React com Context API no frontend, Node.js com Express e MongoDB no backend, com autenticação JWT.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      category: 'Full Stack'
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Fabiana Beda
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-purple-400 transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-colors">Contato</button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Analista de Dados
                </span>
                <br />
                <span className="text-white">& Desenvolvedora</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transformo dados em insights estratégicos e construo soluções tecnológicas inovadoras. 
                Especialista em Business Intelligence, análise de dados e desenvolvimento de sistemas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
                >
                  Ver Projetos
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
                >
                  Entre em Contato
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Fabiana Beda" 
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-purple-400/50 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fabiana Oliveira Beda Macêdo, graduada em Sistemas para Internet pelo IFPB e mestranda em Engenharia Elétrica. 
              Atuo com foco em análise e visualização de dados, integração de informações e apoio à tomada de decisão. 
              Minha trajetória inclui projetos nas áreas de Business Intelligence, dados públicos e ambientais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formação */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    Formação Acadêmica
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-white">Mestrado em Engenharia Elétrica</h4>
                    <p className="text-gray-400">IFPB - Em andamento</p>
                  </div>
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-white">Sistemas para Internet</h4>
                    <p className="text-gray-400">IFPB</p>
                  </div>
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-white">Especialização em Direito Penal</h4>
                    <p className="text-gray-400">Processus</p>
                  </div>
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-white">Direito</h4>
                    <p className="text-gray-400">UniCeub</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tecnologias */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    Tecnologias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-400/30 hover:from-purple-600/30 hover:to-pink-600/30 transition-all cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projetos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma seleção dos meus principais projetos em análise de dados, desenvolvimento web e business intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400 leading-relaxed text-justify">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="bg-purple-600/20 text-purple-300 border-purple-400/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/projeto/${project.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estou sempre aberta a novas oportunidades e colaborações. Entre em contato comigo!
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 max-w-lg w-full"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Conecte-se Comigo</h3>
                <div className="space-y-4">
                  {/* LinkedIn */}
                  <motion.a
                    href="https://linkedin.com/in/fabiana-beda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:bg-slate-800/70 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">LinkedIn</p>
                      <p className="text-gray-400 group-hover:text-purple-400 transition-colors">
                        linkedin.com/in/fabiana-beda
                      </p>
                    </div>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/fabianabeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:bg-slate-800/70 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">GitHub</p>
                      <p className="text-gray-400 group-hover:text-purple-400 transition-colors">
                        github.com/fabianabeda
                      </p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 bg-slate-900/80">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Fabiana Beda. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

