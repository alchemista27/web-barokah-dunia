import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import SectionReveal from "./components/SectionReveal";
import "./styles/main.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/transitions.css";
import "./styles/modal.css";

export const metadata: Metadata = {
  title: "PT Barokah Dunia Semesta — Bringing Nature's Finest Art into Your Home",
  description:
    "PT Barokah Dunia Semesta exports premium handcrafted rattan furniture and botanical products from Indonesia to the global market. Sustainable, authentic, and internationally certified.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/logo.webp" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWA />
        <SectionReveal />
      </body>
    </html>
  );
}
