/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'www.ucb.com', 'images.ctfassets.net'],
  },
  "compilerOptions": {
      "module": "esnext",
      "target": "es6",
  },
};


export default nextConfig;
