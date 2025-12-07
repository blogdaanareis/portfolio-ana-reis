# Guia de Edição - Ana Reis Portfolio

## 📝 Como Editar o Conteúdo do Site

Este guia explica como editar o conteúdo do site Ana Reis Portfolio de forma simples e eficiente.

### 🏠 Seção Hero (Página Inicial)

**Localização**: `src/components/Hero.tsx`

**Campos Editáveis**:
- **Título Principal**: "Ana Reis" (linha 25)
- **Subtítulo**: "Comunicação, Design e Publicidade" (linha 28)
- **Descrição**: Texto explicativo sobre os serviços (linhas 30-33)
- **Botão Primário**: "Contrate uma consultoria" (linha 39)
- **Botão Secundário**: "Ver portfólio" (linha 46)
- **Métricas**: "380K" e "75%" (linhas 53-62)

### 👤 Seção Sobre

**Localização**: `src/components/About.tsx`

**Campos Editáveis**:
- **Biografia**: Texto principal sobre Ana Reis (linhas 35-42)
- **Citação**: Frase inspiracional (linha 50)
- **Timeline**: Anos, títulos e descrições (linhas 12-29)
- **Habilidades**: Nomes e percentuais (linhas 31-38)

### 🛠️ Seção Serviços

**Localização**: `src/components/Services.tsx`

**Campos Editáveis**:
- **Título da Seção**: "Serviços Especializados" (linha 42)
- **Descrição da Seção**: Texto introdutório (linhas 45-48)
- **Serviços**: Para cada serviço (linhas 11-56):
  - Título do serviço
  - Descrição
  - Lista de características

### 📁 Seção Portfólio

**Localização**: `src/components/Portfolio.tsx`

**Campos Editáveis**:
- **Projetos**: Para cada projeto (linhas 11-66):
  - Título
  - Categoria
  - Descrição
  - Data
  - Localização
  - Tipo (journalism/event/design)

### 📊 Seção Métricas

**Localização**: `src/components/Metrics.tsx`

**Campos Editáveis**:
- **Métricas Principais** (linhas 13-36):
  - Valores (380K, 75%, etc.)
  - Labels descritivos
  - Descrições detalhadas
- **Plataformas** (linhas 38-56):
  - Nomes das plataformas
  - Descrições
  - URLs
- **Cidades** (linhas 58-63):
  - Nomes das cidades
  - Estados
  - Descrições

### 📞 Seção Contato

**Localização**: `src/components/Contact.tsx`

**Campos Editáveis**:
- **Informações de Contato** (linhas 35-49):
  - E-mail: blogdaanareis@gmail.com
  - Telefone: (94) 9 9191-5135
  - Localização: Canaã dos Carajás - PA
- **Links Sociais** (linhas 51-69):
  - URLs do Instagram, Portal e Rádio
- **Lista de Serviços** (linhas 71-79): Opções do formulário

### 🦶 Rodapé

**Localização**: `src/components/Footer.tsx`

**Campos Editáveis**:
- **Descrição da Marca** (linhas 35-39)
- **Links Rápidos** (linhas 41-48)
- **Lista de Serviços** (linhas 50-57)
- **Informações de Contato** (linhas 125-147)

## 🎨 Personalizando Cores e Estilos

### Paleta de Cores

**Localização**: `src/index.css` (linhas 11-30)

**Cores Principais**:
```css
--primary: 330 81% 60%;        /* Magenta #E83E8C */
--secondary: 260 55% 40%;      /* Roxo #5A2D9C */
--foreground: 0 0% 18%;        /* Cinza escuro #2E2E2E */
--muted: 240 5% 96%;           /* Cinza claro #F5F5F7 */
--accent: 240 6% 98%;          /* Off-white #FAFAFC */
```

### Tipografia

**Fontes Utilizadas**:
- **Títulos**: Playfair Display (serif)
- **Corpo**: Inter (sans-serif)

**Para alterar fontes**: Edite a importação no `src/index.css` (linha 8)

## 📱 Responsividade

O site é totalmente responsivo e se adapta automaticamente a:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

## 🔧 Configurações Técnicas

### SEO

**Meta Tags**: `index.html` (linhas 6-22)
- Título da página
- Descrição
- Palavras-chave
- Open Graph tags

**Sitemap**: `public/sitemap.xml`
**Robots**: `public/robots.txt`

### Performance

**Otimizações Implementadas**:
- Lazy loading de imagens
- Compressão de assets
- Minificação de CSS/JS
- Preconnect para fontes

## 🚀 Publicação de Alterações

### Processo de Atualização

1. **Edite os arquivos** conforme este guia
2. **Teste localmente**:
   ```bash
   npm run dev
   ```
3. **Gere a build**:
   ```bash
   npm run build
   ```
4. **Publique** os arquivos da pasta `dist/`

### Backup

**Sempre faça backup** dos arquivos antes de editar:
- Copie a pasta do projeto
- Use controle de versão (Git)
- Mantenha versões anteriores

## 📋 Checklist de Edição

Antes de publicar alterações, verifique:

- [ ] Todos os links funcionam corretamente
- [ ] Imagens carregam sem erro
- [ ] Textos estão sem erros ortográficos
- [ ] Informações de contato estão atualizadas
- [ ] Site funciona em mobile e desktop
- [ ] Formulário de contato está operacional
- [ ] Meta tags estão atualizadas

## 🆘 Suporte

Para dúvidas ou problemas:

1. **Consulte este guia** primeiro
2. **Verifique o console** do navegador para erros
3. **Teste em modo incógnito** para descartar cache
4. **Entre em contato** com o desenvolvedor se necessário

---

**Dica**: Mantenha sempre uma cópia de backup do site funcionando antes de fazer alterações importantes!