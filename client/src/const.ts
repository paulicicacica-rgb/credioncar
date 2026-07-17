export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Affiliate apply link. All primary call-to-action buttons point here so the
// tracking parameters (including the affiliate id `a`) are always carried through.
export const APPLY_URL =
  "https://afflat3c2.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=27618&c=918277&a=798445&k=3A5B8807DBB503C57DB58630C7B502D1&l=36989&s1=FBSP";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
