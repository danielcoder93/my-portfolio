import { Attribution, cleanAttribution } from "./leads";
const storageKey = "cr-inquiry-source";
export function captureAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  let referrerHost = "";
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : "";
    if (referrerHost === window.location.hostname) referrerHost = "";
  } catch { /* Invalid referrers carry no attribution. */ }
  const current = cleanAttribution({ source: params.get("utm_source"), medium: params.get("utm_medium"),
    campaign: params.get("utm_campaign"), landingPage: window.location.pathname, referrerHost });
  try {
    const stored = sessionStorage.getItem(storageKey);
    if (stored && !current.source && !current.medium && !current.campaign) return cleanAttribution(JSON.parse(stored));
    sessionStorage.setItem(storageKey, JSON.stringify(current));
  } catch { /* Storage may be disabled; the form still works. */ }
  return current;
}
