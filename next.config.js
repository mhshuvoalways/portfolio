/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    RESEND_KEY: process.env.RESEND_KEY,
  },
};

module.exports = nextConfig;
