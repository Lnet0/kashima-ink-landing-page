import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>
      {/* TÍTULO */}
      <title>Tatuadora em Curitiba | Fineline e Blackwork | Kashima Ink</title>

      {/* DESCRIÇÃO */}
      <meta name="description" content="Tatuadora em Curitiba especializada em fineline e blackwork. Tattoos delicadas, personalizadas e com alto nível de detalhe. Agende agora."/>

      {/* PALAVRAS-CHAVE */}
      <meta name="keywords" content="tatuadora em Curitiba, tatuagem Curitiba, fineline Curitiba, blackwork Curitiba, tattoo Curitiba"/>

      {/* RESPONSIVIDADE */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* INDEXAÇÃO */}
      <meta name="robots" content="index, follow" />

      {/* WhatsApp, Instagram */}
      <meta property="og:title" content="Tatuadora em Curitiba | Kashima Ink" />
      <meta property="og:description" content="Especialista em fineline e blackwork em Curitiba. Agende sua tattoo."/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kashimaink.vercel.app/" />
      <meta property="og:image" content="https://kashimaink.com.br/og-image.jpg" />

      {/* GEO LOCAL */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />

      {/* DADOS ESTRUTURADOS */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          "name": "Kashima Ink",
          "image": "https://kashimaink.vercel.app/og-image.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "telephone": "+5541988366886",
          "url": "https://kashimaink.vercel.app/"
        })}
      </script>
    </Helmet>
  );
}