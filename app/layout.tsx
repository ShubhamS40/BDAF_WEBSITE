import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ── Core ──
  title: {
    default: "Bima Dispute Action Forum (BDAF) | Insurance Claim Dispute Resolution India",
    template: "%s | BDAF – Insurance Dispute Experts",
  },
  description:
    "BDAF helps policyholders across India fight wrongful insurance claim rejections, delays & underpayments. Expert legal + 20+ years insurance industry knowledge. Health, Life, Motor, Fire & Accidental claim disputes. Pan India. Call 95136-31312.",

  // ── Keywords ──
  keywords: [
    "insurance claim rejection India",
    "insurance dispute resolution",
    "wrongful insurance claim rejection",
    "health insurance claim dispute",
    "life insurance claim rejected",
    "motor insurance dispute",
    "insurance ombudsman complaint",
    "consumer forum insurance complaint",
    "insurance legal notice India",
    "bima vivad",
    "IRDAI complaint",
    "insurance claim delay India",
    "fire insurance claim dispute",
    "accidental insurance claim",
    "BDAF",
    "Bima Dispute Action Forum",
    "insurance complaint New Delhi",
    "Pan India insurance help",
  ],

  // ── Canonical & Locale ──
  metadataBase: new URL("https://www.bdaf.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    url: "https://www.bdaf.in",
    siteName: "Bima Dispute Action Forum",
    title: "BDAF | Fight Wrongful Insurance Claim Rejections – Expert Help Across India",
    description:
      "Facing an insurance claim rejection or delay? BDAF combines legal expertise with 20+ years of insurance industry knowledge to fight for your rightful claim. ₹999 registration. Pan India support.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",      // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Bima Dispute Action Forum – Insurance Claim Dispute Experts India",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "BDAF | Fight Wrongful Insurance Claim Rejections",
    description:
      "Expert insurance dispute resolution for policyholders across India. Health, Life, Motor, Fire & more. ₹999 registration only after case acceptance.",
    images: ["/og-image.png"],
    // site: "@bdaf_in",   // uncomment when Twitter handle is live
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Favicons ──
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },

  // ── Verification (add keys when accounts are set up) ──
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_KEY",
    // yandex: "YOUR_YANDEX_KEY",
  },

  // ── App / PWA ──
  applicationName: "Bima Dispute Action Forum",
  category: "Legal Services",
  classification: "Insurance Dispute Resolution",

  // ── Author / Publisher ──
  authors: [{ name: "Bima Dispute Action Forum", url: "https://www.bdaf.in" }],
  creator: "Bima Dispute Action Forum",
  publisher: "Bima Dispute Action Forum",

  // ── Referrer ──
  referrer: "origin-when-cross-origin",
};

// ── JSON-LD Structured Data ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://www.bdaf.in/#organization",
      name: "Bima Dispute Action Forum",
      alternateName: "BDAF",
      url: "https://www.bdaf.in",
      logo: "https://www.bdaf.in/logo.png",
      description:
        "BDAF is a dedicated insurance dispute assistance platform helping policyholders across India fight wrongful claim rejections, delays, and unfair settlements.",
      telephone: "+919513631312",
      email: "info@bdaf.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "Insurance Dispute Resolution",
        "Health Insurance Claim Dispute",
        "Life Insurance Claim Rejection",
        "Motor Insurance Dispute",
        "Fire & Property Insurance Claim",
        "Accidental Insurance Claim",
        "Consumer Forum Assistance",
        "Insurance Ombudsman Support",
      ],
      priceRange: "₹999 registration fee",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        // "https://www.facebook.com/bdaf.in",
        // "https://www.linkedin.com/company/bdaf",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bdaf.in/#website",
      url: "https://www.bdaf.in",
      name: "Bima Dispute Action Forum",
      publisher: { "@id": "https://www.bdaf.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.bdaf.in/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does BDAF do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "BDAF helps policyholders across India fight wrongful insurance claim rejections, delays, and unfair settlements by combining legal expertise with 20+ years of insurance industry experience.",
          },
        },
        {
          "@type": "Question",
          name: "What is the registration fee at BDAF?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "BDAF charges a one-time registration fee of ₹999 only after case acceptance. There is no upfront cost. A success fee of 20% + GST is charged upon successful resolution.",
          },
        },
        {
          "@type": "Question",
          name: "Which types of insurance disputes does BDAF handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "BDAF handles health insurance disputes, life insurance claim rejections, motor insurance disputes, fire and property claims, accidental claims, and other insurance-related matters across India.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact BDAF?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can call BDAF at 95136-31312, fill out the contact form on the website, or visit their office in New Delhi. Online support is available Pan India.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}