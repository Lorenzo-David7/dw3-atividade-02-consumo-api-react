import Image from "next/image";
import Link from "next/link";
import { fetchApi } from "./api";

// Renderiza sob demanda (não tenta chamar a API durante o build).
export const dynamic = "force-dynamic";

const API = "https://rickandmortyapi.com/api/character";
const TOTAL = 40;

// Busca os 40 primeiros personagens em uma única requisição (ids 1 a 40).
async function getPersonagens() {
  const ids = Array.from({ length: TOTAL }, (_, i) => i + 1).join(",");
  const res = await fetchApi(`${API}/${ids}`);
  if (!res.ok) throw new Error("Falha ao carregar personagens");
  return res.json();
}

export default async function Home() {
  const personagens = await getPersonagens();

  return (
    <>
      <h1>Personagens</h1>
      <p className="sub">Os {personagens.length} personagens principais</p>

      <section className="grid">
        {personagens.map((p) => (
          <Link key={p.id} href={`/personagem/${p.id}`} className="card">
            <Image src={p.image} alt={p.name} width={300} height={300} />
            <div className="card-info">
              <h2>{p.name}</h2>
              <span className={`status ${p.status.toLowerCase()}`}>
                {p.status} • {p.species}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
