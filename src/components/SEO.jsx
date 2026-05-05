import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      {/* --- BÁSICO --- */}
      <title>Kashima Ink | Tatuadora em Curitiba</title>
      <meta name="description" content="Tatuadora especialista em Fineline e Blackwork em Curitiba-PR. Traços finos, precisão e arte personalizada. Agende seu horário com Nicolli Kashima." />
      <meta name="keywords" content="tatuadora curitiba, fineline curitiba, blackwork curitiba, tattoo curitiba, kashima ink" />
      <link rel="canonical" href="https://kashimaink.com.br" /> {/* troca pela URL real */}

      {/* --- OPEN GRAPH (preview no WhatsApp, Instagram, Facebook) --- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kashimaink.com.br" />
      <meta property="og:title" content="Kashima Ink | Tatuadora em Curitiba" />
      <meta property="og:description" content="Especialista em Fineline e Blackwork. Arte personalizada e exclusiva em Curitiba-PR." />
      <meta property="og:image" content="https://kashimaink.com.br/og-image.jpg" /> {/* imagem 1200x630px */}
      <meta property="og:locale" content="pt_BR" />

      {/* --- TWITTER CARD --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kashima Ink | Tatuadora em Curitiba" />
      <meta name="twitter:description" content="Especialista em Fineline e Blackwork. Arte personalizada em Curitiba-PR." />
      <meta name="twitter:image" content="https://kashimaink.com.br/og-image.jpg" />

      {/* --- SEO LOCAL (aparece em buscas "perto de mim") --- */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Kashima Ink",
          "description": "Estúdio de tatuagem especializado em Fineline e Blackwork",
          "url": "https://kashimaink.com.br",
          "telephone": "+55-41-98836-6886",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "sameAs": [
            "https://instagram.com/kashima.ink"
          ]
        })}
      </script>
    </Helmet>
  );
}