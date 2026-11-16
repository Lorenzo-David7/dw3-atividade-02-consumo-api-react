/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // As imagens são carregadas direto pelo navegador, evitando que o servidor
    // Next faça dezenas de requisições e tome rate limit (429) da API.
    unoptimized: true,
  },
};

export default nextConfig;
