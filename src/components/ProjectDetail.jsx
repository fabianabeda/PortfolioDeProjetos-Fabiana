import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projects.js'

function ProjectDetail() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const projectData = projectsData[projectId]
    if (projectData) {
      setProject(projectData)
    }
  }, [projectId])

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </div>
    )
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
            <Link to="/">
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Fabiana Beda
              </motion.div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Portfólio
              </Button>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="border-purple-400/50 text-purple-300 mb-4">
              {project.category}
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech}
                  variant="secondary" 
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-400/30 text-sm px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Project Image */}
          {project.images && project.images[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20"></div>
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} - Screenshot principal`}
                  className="relative w-full rounded-2xl shadow-2xl border border-purple-500/20"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl text-purple-400 flex items-center gap-2">
                    <Lightbulb className="w-8 h-8" />
                    Sobre o Projeto
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    {project.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-lg">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick Info */}
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-400 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Informações Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Categoria</h4>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-300">
                      {project.category}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-400">Links do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">

                  {project.demoLink && (
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Acessar Aplicação
                    </Button>
                  )}

                  {project.githubLink && (
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Repositório Frontend
                    </Button>
                  )}

                  {project.githubLink1 && (
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white"
                      onClick={() => window.open(project.githubLink1, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Repositório Backend
                    </Button>
                  )}
                  {project.docLink && (
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => window.open(project.docLink, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Relatório (.pdf)
                    </Button>
                  )}

                </CardContent>
              </Card>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Principais Funcionalidades
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça as características e funcionalidades que tornam este projeto único e eficaz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Images */}
      {project.images && project.images.length > 1 && (
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mais Imagens do Projeto
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-20"></div>
                    <img 
                      src={image} 
                      alt={`${project.title} - Screenshot ${index + 2}`}
                      className="relative w-full rounded-xl shadow-xl border border-purple-500/20"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Interessado em saber mais?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Entre em contato comigo para discutir este projeto em detalhes ou para explorar oportunidades de colaboração.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="https://www.linkedin.com/in/fabiana-o-beda-m/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
                      Entre em Contato
                    </Button>
                  </a>
                  <Link to="/">
                    <Button 
                      variant="outline" 
                      className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
                    >
                      Ver Outros Projetos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Fabiana Beda. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ProjectDetail

