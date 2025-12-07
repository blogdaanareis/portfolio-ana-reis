import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, GraduationCap, Award, Quote } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'CEO do portal de notícias - Blog da Ana Reis',
      description: 'Matérias em primeira mão e notícias com credibilidade',
      type: 'work'
    },
    {
      year: '2018-2024',
      title: 'Analista de MKT e Comunicação | Gestão',
      description: 'Comunicação Corporativa, Criação de Conteúdo, Mídias Sociais, Produção de Podcasts e Vídeos',
      type: 'work'
    },
    {
      year: '2023',
      title: 'MBA - Executivo em Gestão Estratégica de Publicidade e Propaganda',
      description: 'FaculdadePlay Educação Digital',
      type: 'education'
    },
    {
      year: '2014',
      title: 'Administração de Empresas',
      description: 'Faculdade FAMETRO',
      type: 'education'
    }
  ];

  const skills = [
    { name: 'Marketing Digital', level: 95 },
    { name: 'Illustrador', level: 96 },
    { name: 'Editor de vídeo', level: 90 },
    { name: 'Mídias Sociais', level: 84 },
    { name: 'Google AdWords', level: 79 },
    { name: 'Designer gráfico', level: 70 }
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio and Quote */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
              Sobre <span className="gradient-primary bg-clip-text text-transparent">Ana Reis</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Sou Ana Reis, comunicadora e especialista em marketing, com experiência em conteúdo, 
                assessoria de imprensa e estratégias digitais. Fundadora do Portal de notícias 
                <strong className="text-primary"> Blog da Ana Reis</strong> e da 
                <strong className="text-secondary"> Web Rádio FM Canaã</strong>, atuo com forte presença 
                nas redes sociais, conectando marcas, serviços e pessoas por meio de uma comunicação 
                humanizada e eficiente.
              </p>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-primary text-white border-0 shadow-elegant mb-8">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 mb-4 opacity-80" />
                <blockquote className="text-lg font-display italic mb-4">
                  "A oportunidade está nas mãos de quem sabe criar."
                </blockquote>
                <cite className="text-sm opacity-90">— Ana Reis</cite>
              </CardContent>
            </Card>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Habilidades Principais</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-display font-bold mb-8">Trajetória Profissional</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white shadow-elegant">
                      {item.type === 'education' ? (
                        <GraduationCap className="h-5 w-5" />
                      ) : (
                        <Award className="h-5 w-5" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <Badge 
                        variant="secondary" 
                        className="mb-2 bg-primary/10 text-primary border-primary/20"
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.year}
                      </Badge>
                      <h4 className="text-lg font-display font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;