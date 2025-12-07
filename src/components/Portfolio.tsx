import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Rotary Club de Canaã dos Carajás',
      category: 'Matéria Jornalística',
      description: 'Cobertura da doação de cadeiras de rodas para a APAE, reforçando parceria entre entidades e compromisso com inclusão social.',
      date: '08/10/2024',
      location: 'Canaã dos Carajás',
      type: 'journalism',
      image: 'rotary-apae'
    },
    {
      title: 'Roda de Conversa - VHPCD',
      category: 'Realização de Eventos',
      description: 'Organização completa da Roda de Conversa "Valor Humano da Pessoa com Deficiência no Mercado de Trabalho" na Câmara Municipal.',
      date: '25/04/2025',
      location: 'Câmara Municipal de Canaã dos Carajás',
      type: 'event',
      featured: true
    },
    {
      title: 'Hospital Yutaka Takeda',
      category: 'Design de Mídia Social',
      description: 'Criação de identidade visual e materiais para redes sociais, elevando os padrões de comunicação em saúde.',
      date: '2024',
      location: 'Regional',
      type: 'design',
      image: 'hospital-design'
    },
    {
      title: 'Vereador Cleido Braz',
      category: 'Matéria Política',
      description: 'Cobertura jornalística com foco em transparência e princípios políticos em Canaã dos Carajás.',
      date: '2024',
      location: 'Canaã dos Carajás',
      type: 'journalism'
    },
    {
      title: 'Canaã Gastronomia 2025',
      category: 'Cobertura de Eventos',
      description: 'Cobertura completa do festival gastronômico, destacando a cultura local e o turismo regional.',
      date: '2025',
      location: 'Canaã dos Carajás',
      type: 'event'
    },
    {
      title: 'Vivasocial Agency MKT',
      category: 'Criação de Logo',
      description: 'Desenvolvimento de identidade visual completa para agência de marketing, incluindo logo e aplicações.',
      date: '2024',
      location: 'Regional',
      type: 'design'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journalism': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event': return 'bg-green-100 text-green-800 border-green-200';
      case 'design': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journalism': return '📰';
      case 'event': return '🎯';
      case 'design': return '🎨';
      default: return '📋';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Trabalhos <span className="gradient-primary bg-clip-text text-transparent">Recentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos projetos mais impactantes, demonstrando versatilidade e qualidade 
            em comunicação, eventos e design gráfico.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-elegant animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square bg-gradient-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">{getTypeIcon(project.type)}</div>
                      <div className="text-2xl font-display font-bold">Projeto Destaque</div>
                      <div className="text-lg opacity-75">{project.title}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className={`w-fit mb-4 ${getTypeColor(project.type)}`}>
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                  </div>
                  <Button className="w-fit gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth">
                    Ver projeto completo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth border-0 shadow-soft animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-smooth">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{getTypeIcon(project.type)}</div>
                    <div className="text-sm opacity-75">{project.category}</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <Badge className={`w-fit mb-3 ${getTypeColor(project.type)}`}>
                  {project.category}
                </Badge>
                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
          >
            Ver todos os projetos
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;