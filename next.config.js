const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/aboutus",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/allprojects",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/free-website-review",
        permanent: true,
      },
      {
        source: "/book-now",
        destination: "/free-website-review",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
