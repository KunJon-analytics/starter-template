import { MarketingLayout } from "./_components/layout/marketing-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <MarketingLayout>{children}</MarketingLayout>;
}
