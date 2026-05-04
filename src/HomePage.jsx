import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/next" 

// --- IMPORTAÇÃO DAS IMAGENS ---
import artistPortrait from './assets/perfil.jpeg'; 
import heroActionImage from './assets/hero.jpeg';
import whatsappPng from './assets/wpp-icon.png';

import t1 from './assets/tattoo1.jpeg';
import t2 from './assets/tattoo2.jpeg';
import t3 from './assets/tattoo3.jpeg';
import t4 from './assets/tattoo4.jpeg';
import t5 from './assets/tattoo5.jpeg';
import t6 from './assets/tattoo6.jpeg';
import t7 from './assets/tattoo7.jpeg';
import t8 from './assets/tattoo8.jpeg';
import t9 from './assets/tattoo9.jpeg';
import t10 from './assets/tattoo10.jpeg';
import t11 from './assets/tattoo11.jpeg';
import t12 from './assets/tattoo12.jpeg';

// --- FEEDBACKS ---
import f2 from './assets/feedback2.jpeg';
import f3 from './assets/feedback3.jpeg';
import f4 from './assets/feedback4.jpeg';
import f5 from './assets/feedback5.jpeg';
import f6 from './assets/feedback6.jpeg';
import f7 from './assets/feedback7.jpeg';
import f8 from './assets/feedback8.jpeg';
import f9 from './assets/feedback9.jpeg';

const tattooPortfolio = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12];
const feedbacks = [f2, f3, f4, f5, f6, f7, f8, f9];

const whatsappLink = "https://wa.me/5541988366886?text=Olá%20Nicolli%2C%20vi%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento!";

// --- VARIÁVEL DE ANIMAÇÃO (Padrão de surgimento de baixo) ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SectionTitle = ({ title, subtitle }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
    className="text-center mb-16"
  >
    <h2 className="font-serif text-4xl md:text-5xl text-neutral-950 leading-tight">{title}</h2>
    {subtitle && <p className="text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 bg-amber-500 mx-auto mt-8"></div> {/* Destaque em Dourado */}
  </motion.div>
);

const CustomCTA = ({ children, className = "" }) => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 text-amber-200 font-medium rounded-full hover:bg-red-800 transition-all duration-300 text-lg shadow-lg border border-amber-600/30 ${className}`}
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", id: "home" },
    { name: "A Artista", id: "sobre" },
    { name: "Portfólio", id: "portfolio" },
    { name: "Feedbacks", id: "feedbacks" },
    { name: "Instagram", id: "instagram" },
  ];

  // Função Senior para controlar o scroll perfeitamente (com fix para Mobile e Velocidade Customizada)
  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    
    // Fechamos o menu mobile instantaneamente
    setIsOpen(false); 

    // REMOVIDO o setTimeout para resposta instantânea ao clique!
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const targetPosition = elementPosition + window.scrollY - headerOffset;

      // --- INÍCIO DO SCROLL CUSTOMIZADO ---
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      
      // Tempo total (reduzi para 800ms para ficar mais dinâmico)
      const duration = 800; 
      let start = null;

      // Ease-Out Expo
      // Arrancada imediata e freio super suave no final
      const easeOutExpo = (t, b, c, d) => {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        
        // fórmula exponencial
        const run = easeOutExpo(timeElapsed, startPosition, distance, duration);
        
        window.scrollTo(0, run);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // Garante o alinhamento perfeito no último pixel
          window.scrollTo(0, targetPosition);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e, 'home')}>
          <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center text-amber-400 font-serif text-3xl border border-amber-500/50">
            K
          </div>
          <span className="font-serif text-4xl text-white">
            Kashima<span className="text-amber-500"> Ink</span>
          </span>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium text-amber-100/70">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleScroll(e, link.id)}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <CustomCTA className="px-6 py-2 text-base">Agendar</CustomCTA>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-500 p-2 focus:outline-none"
        >
          <div className="space-y-1.5">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-amber-500"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-8 h-0.5 bg-amber-500"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-amber-500"
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-amber-900/30 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-left text-amber-100/80 text-xl font-serif hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <CustomCTA className="w-full">
                Agende seu horário!
              </CustomCTA>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden min-h-screen flex items-center">
    {/* Brilho de fundo para dar sofisticação */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full"></div>
    
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="md:col-span-7 lg:col-span-6"
      >
        <span className="block text-amber-500 font-semibold text-lg mb-4 tracking-widest uppercase">
          Nicolli Kashima • Curitiba-PR
        </span>
        <h1 className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tighter">
          Eternizando sua <span className="text-red-600">história</span> em arte.
        </h1>
        <p className="text-amber-100/60 text-xl mt-10 max-w-xl font-light">
          Especialista em <span className="text-amber-400">Fineline</span> e <span className="text-amber-400">Blackwork</span>. 
          Traços finos, precisão técnica e delicadeza em cada detalhe.
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12"
        >
          <CustomCTA>Crie sua Tattoo personalizada!</CustomCTA>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:col-span-5 lg:col-span-6"
      >
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto border-2 border-amber-900/50 rounded-2xl p-3">
          <img 
            src={heroActionImage} 
            alt="Kashima em ação"
            className="w-full h-full block object-cover rounded-xl" 
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24 bg-white">
      
      {/* 1. O Degradê de transição */}
      <div className="absolute -top-1 left-0 w-full h-14 md:h-20 bg-gradient-to-b from-neutral-900 to-white pointer-events-none"></div>

      {/* 2. O Fio de Ouro */}
      <div className="absolute -top-px left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/80 to-transparent z-10"></div>

      {/* --- 3. NOVA ARTE: SELO FLUTUANTE --- */}
      {/* Usamos -top-6 para ele subir e ficar exatamente no meio da emenda */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-neutral-900 border border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          {/* Ícone de estrela/brilho estilo Fineline (compatível com Lucide/SVGs padrão) */}
          <svg className="text-amber-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12.728-6.364l-9.192 9.192m0-9.192l9.192 9.192" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- TÍTULO DO PORTFÓLIO --- */}
        <SectionTitle 
          title="Portfólio" 
          subtitle="Explore meus trabalhos autorais e composições exclusivas."
        />

        {/* --- GRID MASONRY --- */}
        <div className="mt-16 columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {tattooPortfolio.map((img, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 8) * 0.1 }}
              className="relative group overflow-hidden break-inside-avoid shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={img} 
                alt={`Tattoo ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* --- SEÇÃO FEEDBAKCS --- */}
        <div id="feedbacks" className="mt-40">
          <SectionTitle 
            title="O que dizem os clientes" 
            subtitle="O carinho e a satisfação de quem já tem uma arte Kashima Ink eternizada na pele."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbacks.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                // Estilização do card do print: fundo cinza super claro, borda sutil e sombra
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 bg-neutral-50 p-2"
              >
                <img 
                  src={img} 
                  alt={`Feedback de cliente ${idx + 1}`} 
                  // w-full garante que ocupe a largura do card, e object-cover garante que não achate
                  className="w-full h-auto rounded-xl object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CHAMADA PARA O INSTAGRAM --- */}
        <motion.div 
          id="instagram"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <p className="text-neutral-9  00 text-4xl mb-6 max-w-xl font-serif italic">
            "Acompanhe meu dia a dia, processos criativos e novos projetos em primeira mão no instagram."
          </p>
          <a 
            href="https://instagram.com/kashima.ink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-950 text-amber-500 font-medium rounded-full border border-amber-500/30 hover:bg-neutral-900 hover:border-amber-500 hover:text-amber-400 transition-all duration-300 shadow-lg group"
          >
            {/* Ícone vetorial do Instagram */}
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @kashima.ink
          </a>
        </motion.div>

      </div>
    </section>
  );
};

const AboutSection = () => (
  // Adicionado o 'relative' na section para segurar os efeitos no topo
  <section id="sobre" className="relative py-24 bg-neutral-900 text-white overflow-hidden">
    
    {/* --- NOVOS EFEITOS DE TRANSIÇÃO (CORRIGIDOS) --- */}
    {/* 1. O Degradê: Vem PRIMEIRO no código para ficar no fundo */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none"></div>

    {/* 2. O Fio de Ouro: Vem DEPOIS para ficar por cima. 
           Coloquei amber-500/80 para ficar mais brilhante e z-10 para garantir que nada cubra ele */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/80 to-transparent z-10"></div>

    {/* Adicionado 'relative z-10' para o conteúdo não ficar por baixo do degradê */}
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="order-2 md:order-1"
      >
          <h2 className="font-serif text-5xl mb-10">Nicolli <span className="text-amber-500">Kashima</span></h2>
          <p className="text-neutral-400 text-xl mb-10 leading-relaxed">
              Sou tatuadora há 5 anos e, desde muito nova, sempre fui movida pela paixão pelo desenho. Apesar de ter me formado em aviação, foi na arte que encontrei meu verdadeiro caminho — transformando ideias e sentimentos em traços permanentes na pele.
          </p>
          <p className="text-neutral-400 text-xl mb-10 leading-relaxed">
              Com 22 anos, trago um estilo marcado pelo amor ao Blackwork e ao FineLine, explorando contrastes, detalhes e composições únicas em cada trabalho. Acredito que cada tatuagem conta uma história, e meu objetivo é traduzir a sua de forma autêntica e personalizada.
          </p>
          <p className="text-neutral-400 text-xl mb-10 leading-relaxed">
              Além da arte, sou mãe de dois pets que fazem parte do meu dia a dia e da minha inspiração. Aqui, cada projeto é feito com dedicação, cuidado e muita paixão pelo que faço.
          </p>
      </motion.div>
      
      <motion.div   
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-1 md:order-2 relative"
      >
          <img 
            src={artistPortrait} 
            alt="A Artista" 
            className="w-full h-auto object-cover rounded-2xl shadow-2xl border-b-8 border-red-700 bg-neutral-800" 
          />
          <div className="absolute top-1/2 -right-4 w-24 h-24 bg-amber-500/10 border border-amber-500/20 rounded-full blur-2xl"></div>
      </motion.div>
      
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-neutral-950 border-t border-amber-900/20 text-center flex flex-col items-center">
    <p className="text-neutral-500 text-sm">
      &copy; {new Date().getFullYear()} Kashima Ink • Curitiba - PR <br/>
      <span className="text-amber-500 uppercase tracking-widest text-xs mt-2 block font-bold">Sofisticação em cada traço</span>
    </p>
    
    {/* --- ASSINATURA DO DESENVOLVEDOR --- */}
    <div className="mt-8 pt-4 w-full max-w-xs border-t border-neutral-900/50">
      <p className="text-neutral-500 text-1xs flex items-center justify-center gap-1">
        Desenvolvido por 
        <a 
          href="https://instagram.com/lucio.fioravante" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-500/70 hover:text-amber-500 transition-colors font-medium flex items-center gap-1"
        >
          {/* Pequeno ícone do Instagram ao lado do seu nome */}
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Lucio Fioravante
        </a>
      </p>
    </div>
  </footer>
);

const FloatingWhatsapp = () => (
  <motion.a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 text-white rounded-full shadow-2xl group"
  >
    {/* Pulso Customizado com Delay Maior */}
    <motion.span 
      animate={{ 
        scale: [1, 1.8], // Começa no tamanho real e expande até 1.8x
        opacity: [0.5, 0] // Começa com 50% de opacidade e some
      }}
      transition={{
        duration: 5.0,      // Duração do movimento do pulso
        repeat: Infinity,   // Repete para sempre
        repeatDelay: 1,     // <--- AQUI: Tempo de espera entre os pulsos (3 segundos)
        ease: "easeOut"
      }}
      className="absolute inset-0 rounded-full bg-[#25D366]"
    />
    
    <img 
      src={whatsappPng} 
      alt="WhatsApp" 
      className="w-14 h-14 relative z-10 object-contain"
    />
  </motion.a>
);

export default function KashimaLandingPage() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}