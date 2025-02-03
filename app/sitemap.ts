import type { MetadataRoute } from "next";

import { env } from "@/env.mjs";

const addPathToBaseURL = (path: string) => `${env.NEXT_PUBLIC_APP_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/"].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }));

  return [...routes];
}
