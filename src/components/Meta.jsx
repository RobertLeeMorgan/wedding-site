import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Mitzie & Rob | 10 March 2026 Wedding</title>

      <meta
        name="description"
        content="Join us to celebrate the wedding of Mitzie & Rob. Find the date, venue, agenda, RSVP details, and live stream link."
      />

      <meta name="robots" content="noindex, nofollow" />

      {/* Open Graph (WhatsApp / Messenger / Facebook preview) */}
      <meta property="og:title" content="Mitzie & Rob Wedding" />
      <meta
        property="og:description"
        content="Join us to celebrate the wedding of Mitzie & Rob. Find the date, venue, agenda, RSVP details, and live stream link."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mitzie-and-rob.vercel.app/" />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mitzie & Rob Wedding" />
      <meta
        name="twitter:description"
        content="Join us to celebrate the wedding of Mitzie & Rob. Find the date, venue, agenda, RSVP details, and live stream link."
      />
      <meta name="twitter:image" content="/og-image.jpg" />

      <link rel="icon" href="/icon.png" />
      <link rel="canonical" href="https://mitzie-and-rob.vercel.app/" />
    </Head>
  );
}