import { env } from "@/env.mjs";
import { SiteConfig } from "@/types";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "MitiMara",
  description:
    "Join MitiMara, the decentralized platform that rewards tree planting and verification with Pi tokens. Promote sustainability, boost environmental efforts, and earn rewards. 🌳🌱",
  url: baseUrl,
  ogImage: `${baseUrl}/og.jpg`,
  admin: { email: "kunjonng@gmail.com", name: "KunJon" },
  links: {
    twitter: "https://x.com/MitimaraPi",
    github: "https://github.com/KunJon-analytics/mitimara",
    telegram: "https://t.me/mitimara_pi",
  },
};
