import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

export const metadata = {
  title: "Agile Digital Edge | Modern Digital Agency",
  description: "Building Digital Experiences That Give You an Edge. Web Development, Product Design, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} font-sans antialiased text-white`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
