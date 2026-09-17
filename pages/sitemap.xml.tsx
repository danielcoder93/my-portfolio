import { GetServerSideProps } from "next";

const SITE_URL = "https://www.createdrevolution.com";

const pages = [
  "",
  "/services",
  "/industries",
  "/our-work",
  "/about",
  "/free-website-review",
  "/privacy",
];

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path || "/"}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
