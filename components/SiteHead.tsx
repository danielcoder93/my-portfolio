import Head from "next/head";

type SiteHeadProps = {
  title?: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

const SITE_NAME = "Created Revolution";
const SITE_URL = "https://www.createdrevolution.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Founder-led website and marketing services for HVAC, plumbing, and roofing contractors.",
  founder: {
    "@type": "Person",
    name: "Daniel Coder",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Contractor website design",
    "Local SEO",
    "Google Local Services Ads",
    "Contractor social media",
    "Facebook and Instagram advertising",
  ],
};

const SiteHead = ({
  title,
  description,
  path = "/",
  noIndex = false,
}: SiteHeadProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </Head>
  );
};

export default SiteHead;
