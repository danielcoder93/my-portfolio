import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import LeadAttribution from "../components/LeadAttribution";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <LeadAttribution />
      <Component {...pageProps} />
    </Layout>
  );
}
