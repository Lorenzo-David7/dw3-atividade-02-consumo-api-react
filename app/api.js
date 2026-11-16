// Busca na API com cache (1h) e uma nova tentativa caso ocorra rate limit (429).
export async function fetchApi(url) {
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (res.status !== 429) return res;
    await new Promise((r) => setTimeout(r, 1000 * (tentativa + 1)));
  }
  return fetch(url, { next: { revalidate: 3600 } });
}
