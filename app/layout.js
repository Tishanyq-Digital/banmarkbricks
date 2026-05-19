import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

const SITE_URL = "https://benmarkbricks.co.zw";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Banmark Bricks — Quality Bricks & Building Materials in Harare, Zimbabwe",
    template: "%s | Banmark Bricks",
  },
  description:
    "Banmark Bricks manufactures and supplies quality bricks, pit sand, river sand, gravel, 3/4 stones and face bricks in Harare, Zimbabwe. Affordable, durable and reliable building materials.",
  applicationName: "Banmark Bricks",
  keywords: [
    "Banmark Bricks",
    "bricks Harare",
    "bricks Zimbabwe",
    "building materials Harare",
    "face bricks Zimbabwe",
    "pit sand Harare",
    "river sand Harare",
    "gravel Harare",
    "3/4 stones Zimbabwe",
    "loadbearing bricks",
    "common bricks Zimbabwe",
    "plum rustic bricks",
    "Botswana face bricks",
    "red face bricks Harare",
    "construction materials Zimbabwe",
    "Raynham Harare",
  ],
  authors: [{ name: "Banmark Bricks" }],
  creator: "Banmark Bricks",
  publisher: "Banmark Bricks",
  category: "Construction Materials",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: SITE_URL,
    siteName: "Banmark Bricks",
    title: "Banmark Bricks — Quality Bricks & Building Materials in Harare",
    description:
      "Durable bricks, sand, stones and gravel for builders, contractors and homeowners across Harare, Zimbabwe.",
    images: [
      {
        url: "/images/Red-face-bricks.png",
        width: 1200,
        height: 630,
        alt: "Banmark Bricks — Quality bricks and building materials in Harare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banmark Bricks — Quality Bricks & Building Materials in Harare",
    description:
      "Durable bricks, pit sand, river sand, gravel and stones — supplied across Harare, Zimbabwe.",
    images: ["/images/Red-face-bricks.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  verification: {
    // Add Google Search Console / Bing verification tokens here when ready:
    // google: "your-token",
  },
};

// LocalBusiness structured data so Google can show rich results for local searches
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Banmark Bricks",
  image: `${SITE_URL}/images/logo.png`,
  url: SITE_URL,
  telephone: ["+263778933858", "+263718201581"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 20 Raynham",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -17.8252,
    longitude: 31.0335,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:30",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Harare",
  },
  description:
    "Banmark Bricks manufactures and supplies quality bricks, pit sand, river sand, gravel, 3/4 stones and face bricks in Harare, Zimbabwe.",
  makesOffer: [
    "Plum Rustic Bricks",
    "Botswana Face Bricks",
    "Red Face Bricks",
    "Loadbearing Bricks",
    "Smooth Common Bricks",
    "Common Bricks",
    "Pit Sand",
    "River Sand",
    "Gravel",
    "3/4 Stones",
  ].map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: p } })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
