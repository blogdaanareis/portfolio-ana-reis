import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Instagram, 
  Globe, 
  Radio, 
  Users, 
  Eye, 
  MapPin, 
  TrendingUp,
  ExternalLink 
} from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      icon: <Eye className="h-8 w-8" />,
      value: '380K',
      label: 'Visualizações mensais no Instagram',
      description: 'Conteúdo dinâmico e alta interação',
      color: 'text-pink-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '75%',
      label: 'Público feminino qualificado',
      description: 'Entre 21 e 61 anos com poder de decisão',
      color: 'text-purple-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '4+',
      label: 'Cidades de forte presença',
      description: 'Canaã dos Carajás, Parauapebas, Marabá e Tucuruí',
      color: 'text-blue-600'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: 'Diário',
      label: 'Atualizações no portal',
      description: 'Credibilidade jornalística e tráfego crescente',
      color: 'text-green-600'
    }
  ];

  const platforms = [
    {
      name: 'Portal de Notícias',
      description: 'Blog da Ana Reis - Notícias com credibilidade e atualizações diárias',
      url: 'www.blogdaanareis.com.br',
      icon: <Globe className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      name: 'Web Rádio',
      description: 'FM Canaã - Programas informativos e musicais com alcance regional',
      url: 'www.fmcanaa.com.br',
      icon: <Radio className="h-6 w-6" />,
      color: 'bg-red-500'
    },
    {
      name: 'Instagram',
      description: 'Conteúdo dinâmico com 380 mil visualizações mensais',
      url: '@blogdaanareis',
      icon: <Instagram className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  const locations = [
    { city: 'Canaã dos Carajás', state: 'PA', description: 'Base principal de operações' },
    { city: 'Parauapebas', state: 'PA', description: 'Forte presença regional' },
    { city: 'Marabá', state: 'PA', description: 'Cobertura estratégica' },
    { city: 'Tucuruí', state: 'PA', description: 'Alcance expandido' }
  ];

  return (
    <section id="metricas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Alcance <span className="gradient-primary bg-clip-text text-transparent">Comprovado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Blog da Ana Reis conecta marcas e histórias com milhares de pessoas 
            em toda a região Sudeste do Pará, com público qualificado e engajado.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="text-center border-0 shadow-soft hover:shadow-elegant transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <h3 className="font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Platforms */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-display font-bold mb-8">Presença Multiplataforma</h3>
            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${platform.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {platform.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-mono text-primary">{platform.url}</span>
                          <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Geographic Coverage */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-display font-bold mb-8">Cobertura Regional</h3>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Sudeste do Pará
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Forte presença em cidades estratégicas com alto potencial de consumo 
                  e crescimento regional.
                </p>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-semibold">{location.city} - {location.state}</div>
                        <div className="text-sm text-muted-foreground">{location.description}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Audience Demographics */}
            <Card className="border-0 shadow-soft mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Perfil do Público
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Gênero Feminino</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-primary"></div>
                      </div>
                      <span className="text-sm font-semibold">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Faixa Etária</span>
                    <span className="text-sm font-semibold">21-61 anos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Perfil</span>
                    <span className="text-sm font-semibold">Alto poder de decisão</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;