import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clima Agora — Previsão do Tempo",
  description:
    "Consulte a previsão do tempo em tempo real para qualquer cidade do mundo.",
};

export default function LayoutPrincipal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
