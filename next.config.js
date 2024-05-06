/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    RESEND_KEY: process.env.RESEND_KEY,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
