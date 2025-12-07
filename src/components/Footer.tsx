import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Instagram, 
  Globe, 
  Radio, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#metricas', label: 'Presença' },
    { href: '#contato', label: 'Contato' }
  ];

  const services = [
    'Assessoria de Imprensa',
    'Produção de Conteúdo',
    'Design Gráfico',
    'Gestão de Mídias Sociais',
    'Produção de Vídeo/Podcast',
    'Marketing Digital'
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://instagram.com/blogdaanareis',
      label: 'Instagram'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      href: 'https://blogdaanareis.com.br',
      label: 'Portal'
    },
    {
      icon: <Radio className="h-5 w-5" />,
      href: 'https://fmcanaa.com.br',
      label: 'Rádio'
    }
  ];

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold mb-4">Ana Reis</h3>
                <p className="text-white/80 leading-relaxed">
                  Comunicação, Design e Publicidade. Conectando marcas e histórias 
                  através de uma comunicação humanizada e eficiente.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Newsletter</h4>
              <p className="text-white/80 text-sm mb-4">
                Receba atualizações sobre novos projetos e insights de comunicação.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button 
                  size="icon" 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a 
                href="mailto:blogdaanareis@gmail.com" 
                className="text-white/80 hover:text-white transition-smooth"
              >
                blogdaanareis@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a 
                href="tel:+5594991915135" 
                className="text-white/80 hover:text-white transition-smooth"
              >
                (94) 9 9191-5135
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-white/80">Canaã dos Carajás - PA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Ana Reis. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Termos de Uso
              </a>
            </div>
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="ghost"
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;