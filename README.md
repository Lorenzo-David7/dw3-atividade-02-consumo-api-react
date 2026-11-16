# Catálogo Rick and Morty — Atividade DW3 (2º bimestre)

Aplicação front-end em **React + Next.js** (App Router) que consome a
[Rick and Morty API](https://rickandmortyapi.com/) (pública, sem autenticação).

## Rotas
- `/` — catálogo com os 40 primeiros personagens (cards com imagem, nome, status e espécie). Cada card leva aos detalhes.
- `/personagem/[id]` — detalhes completos do personagem (busca na API pelo id) e botão para voltar ao catálogo.

## Como rodar
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Endpoints usados
- Listagem: `GET https://rickandmortyapi.com/api/character/1,2,3,...,40`
- Detalhe: `GET https://rickandmortyapi.com/api/character/{id}`
