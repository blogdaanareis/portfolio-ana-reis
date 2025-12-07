import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Newspaper, 
  PenTool, 
  Palette, 
  Share2, 
  Video, 
  Megaphone,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Newspaper className="h-8 w-8" />,
      title: 'Assessoria de Imprensa',
      description: 'Matérias em primeira mão com credibilidade jornalística. Cobertura de eventos e relacionamento com a mídia.',
      features: ['Releases e notas oficiais', 'Relacionamento com jornalistas', 'Cobertura de eventos', 'Monitoramento de mídia']
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Produção de Conteúdo',
      description: 'Criação de conteúdo estratégico para blogs, redes sociais e materiais corporativos.',
      features: ['Artigos e blog posts', 'E-books e materiais ricos', 'Copywriting persuasivo', 'Conteúdo para redes sociais']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Design Gráfico',
      description: 'Identidade visual completa e materiais gráficos que comunicam a essência da sua marca.',
      features: ['Criação de logos', 'Identidade visual', 'Materiais impressos', 'Design para redes sociais']
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Gestão de Mídias Sociais',
      description: 'Estratégia completa para redes sociais com criação de comunidades e compra de mídia.',
      features: ['Planejamento estratégico', 'Criação de conteúdo', 'Gestão de comunidades', 'Mídia paga']
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Produção de Vídeo/Podcast',
      description: 'Conteúdo audiovisual profissional para engajar seu público e fortalecer sua marca.',
      features: ['Vídeos institucionais', 'Podcasts corporativos', 'Edição profissional', 'Roteirização']
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Marketing Digital',
      description: 'Estratégias digitais completas com foco em resultados e crescimento sustentável.',
      features: ['Google AdWords', 'Pesquisa de mercado', 'Análise de dados', 'Otimização de campanhas']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Serviços <span className="gradient-primary bg-clip-text text-transparent">Especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em comunicação, design e publicidade em um único lugar. 
            Estratégias personalizadas para alcançar melhores resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth border-0 shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center text-white mb-4 group-hover:shadow-glow transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Pronto para <span className="gradient-primary bg-clip-text text-transparent">transformar</span> sua comunicação?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato e descubra como posso ajudar sua marca a alcançar novos patamares.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;