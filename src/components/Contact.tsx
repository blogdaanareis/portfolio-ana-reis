import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Globe, 
  Radio,
  Send,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'E-mail',
      value: 'blogdaanareis@gmail.com',
      href: 'mailto:blogdaanareis@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Telefone',
      value: '(94) 9 9191-5135',
      href: 'tel:+5594991915135'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Localização',
      value: 'Canaã dos Carajás - PA',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      value: '@blogdaanareis',
      href: 'https://instagram.com/blogdaanareis',
      color: 'hover:text-pink-600'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: 'Portal de Notícias',
      value: 'www.blogdaanareis.com.br',
      href: 'https://blogdaanareis.com.br',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Radio className="h-5 w-5" />,
      label: 'Web Rádio',
      value: 'www.fmcanaa.com.br',
      href: 'https://fmcanaa.com.br',
      color: 'hover:text-red-600'
    }
  ];

  const services = [
    'Assessoria de Imprensa',
    'Produção de Conteúdo',
    'Design Gráfico',
    'Gestão de Mídias Sociais',
    'Produção de Vídeo/Podcast',
    'Marketing Digital',
    'Consultoria Completa'
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Vamos <span className="gradient-primary bg-clip-text text-transparent">Conversar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pronta para transformar sua comunicação? Entre em contato e descubra como 
            posso ajudar sua marca a alcançar novos patamares.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Solicitar Proposta</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Serviço desejado</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Prazo desejado</Label>
                    <Input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="Ex: 30 dias, urgente, flexível"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Conte brevemente seu projeto *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva seus objetivos, público-alvo e expectativas..."
                      rows={4}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Proposta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Contact Details */}
            <Card className="border-0 shadow-soft mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-display">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="font-medium hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-soft mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-display">Redes e Plataformas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                        {link.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{link.label}</div>
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`font-medium transition-smooth ${link.color}`}
                        >
                          {link.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-0 gradient-primary text-white shadow-elegant">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-display font-bold mb-2">Agendar Reunião</h3>
                <p className="text-sm opacity-90 mb-4">
                  Prefere conversar ao vivo? Vamos agendar uma call para discutir seu projeto.
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90 transition-smooth"
                >
                  Agendar Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;