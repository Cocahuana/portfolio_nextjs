/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {   
  distDir: "build",   
  output: "export", 
  reactStrictMode: true,
  images: {
    unoptimized: true, //This build a static (not SSR) web site
  },
};  
module.exports = nextConfig;
 
