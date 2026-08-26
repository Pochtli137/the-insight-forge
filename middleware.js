// Basic Auth-grind (Magnus krav 2026-08-26: skydda alla HSNG-verktyg).
// Samma delade credential som Kampanjkollen.
export const config = { matcher: "/(.*)" };

export default function middleware(req) {
  const auth = req.headers.get("authorization") || "";
  const expected = "Basic " + btoa("storefront:123456");
  if (auth === expected) return;
  return new Response("Autentisering krävs", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="GG Intel"' },
  });
}
