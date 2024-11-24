export default function getDomain() {
  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : "localhost:3000";

  console.log(protocol, domain);

  return `${protocol}://${domain}`;
}
