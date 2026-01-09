import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata = {
  title: "Vansh Tejnani | Portfolio",
  description: "Software Engineer Portfolio",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}