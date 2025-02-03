export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  admin: { email: string; name: string };
  links: {
    twitter: string;
    github: string;
    telegram: string;
  };
};
