import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Personagem não encontrado</h1>
      <Link href="/" className="voltar">← Voltar ao catálogo</Link>
    </>
  );
}
