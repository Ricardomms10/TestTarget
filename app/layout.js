import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/componentes/NavBar/NavBar";

export const metadata = {
  title: "App Fibonacci",
  description: "App de teste para cálculo de Fibonacci",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
