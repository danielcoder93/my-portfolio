import Head from "next/head";

type SiteHeadProps = {
  title?: string;
  description: string;
  path?: string;
};

const SITE_NAME = "Created Revolution";
const SITE_URL = "https://www.createdrevolution.com";

const SiteHead = ({ title, description, path = "/" }: SiteHeadProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SiteHead;
