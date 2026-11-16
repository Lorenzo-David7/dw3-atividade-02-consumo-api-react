import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchApi } from "../../api";

const API = "https://rickandmortyapi.com/api/character";

async function getPersonagem(id) {
  const res = await fetchApi(`${API}/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Falha ao carregar personagem");
  return res.json();
}

export default async function Detalhes({ params }) {
  const { id } = await params;
  const p = await getPersonagem(id);
  if (!p) notFound();

  return (
    <>
      <Link href="/" className="voltar">
        ← Voltar ao catálogo
      </Link>

      <article className="detalhes">
        <Image src={p.image} alt={p.name} width={300} height={300} priority />
        <div>
          <h1>{p.name}</h1>
          <ul>
            <li><strong>Status:</strong> {p.status}</li>
            <li><strong>Espécie:</strong> {p.species}</li>
            <li><strong>Tipo:</strong> {p.type || "—"}</li>
            <li><strong>Gênero:</strong> {p.gender}</li>
            <li><strong>Origem:</strong> {p.origin.name}</li>
            <li><strong>Localização atual:</strong> {p.location.name}</li>
            <li><strong>Episódios:</strong> {p.episode.length}</li>
          </ul>
        </div>
      </article>
    </>
  );
}
