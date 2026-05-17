import Link from "next/link";
import "./globals.css";
import SWRegistration from "./SWRegistration";

export const metadata = {
  title: "Libres PWA",
  description: "Contador de partidas libres de billar",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <body>

        <SWRegistration />

        <nav
          style={{
            display: "flex",
            gap: 20,
            padding: 20,
            background: "black"
          }}
        >

          <Link
            href="/"
            style={{ color: "white" }}
          >
            Inicio
          </Link>

          <Link
            href="/reglas"
            style={{ color: "white" }}
          >
            Reglas
          </Link>

        </nav>

        {children}

      </body>
    </html>
  );
}