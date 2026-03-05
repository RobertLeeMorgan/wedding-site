import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Robert Morgan | Web Developer & Designer</title>
      <meta
        name="description"
        content="Full-stack web developer and designer, blending animation and art with interactive, reliable, and maintainable web apps."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph for social sharing */}
      <meta
        property="og:title"
        content="Full-stack web developer and designer, blending animation and art with interactive, reliable, and maintainable web apps."
      />
      <meta
        property="og:description"
        content="I build reliable and intuitive web apps."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.robertmorgan.dev/" />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Full-stack web developer and designer, blending animation and art with interactive, reliable, and maintainable web apps."
      />
      <meta
        name="twitter:description"
        content="I build reliable and intuitive web apps."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/icon.png" />
      <link rel="canonical" href="https://www.robertmorgan.dev/" />
    </Head>
  );
}
