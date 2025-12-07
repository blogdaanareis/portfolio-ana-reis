import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">Ana Reis</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-secondary font-display mb-6">
              Comunicação, Design e Publicidade
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Conteúdo jornalístico, campanhas digitais e produção multimídia. 
              Conectando marcas e histórias através de uma comunicação humanizada e eficiente.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth"
              >
                Contrate uma consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver portfólio
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">380K</div>
                <div className="text-sm text-muted-foreground">Visualizações mensais no Instagram</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">75%</div>
                <div className="text-sm text-muted-foreground">Público feminino qualificado</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="aspect-square rounded-2xl bg-gradient-primary shadow-elegant relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-display font-bold mb-4">AR</div>
                    <div className="text-lg">Foto Profissional</div>
                    <div className="text-sm opacity-75">Ana Reis</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;