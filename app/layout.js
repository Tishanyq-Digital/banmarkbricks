import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Banmark Bricks — Quality Bricks & Building Materials in Harare",
  description:
    "Banmark Bricks supplies durable bricks, pit sand, stones and building materials in Harare. Affordable, reliable and trusted construction supplies.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
