import { useEffect } from "react";
import { useRouter } from "next/router";
import { captureAttribution } from "../lib/attribution";
export default function LeadAttribution() {
  const { asPath, isReady } = useRouter();
  useEffect(() => { if (isReady) captureAttribution(); }, [asPath, isReady]);
  return null;
}
