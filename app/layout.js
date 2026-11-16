import "./globals.css";

export const metadata = {
  title: "Catálogo Rick and Morty",
  description: "Catálogo de personagens consumindo a Rick and Morty API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="topo">
          <a href="/">Rick and Morty • Catálogo</a>
        </header>
        <main className="conteudo">{children}</main>
      </body>
    </html>
  );
}
