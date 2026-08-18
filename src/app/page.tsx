import { Footer } from "@/components/sections/Footer";
import { FoundationStatus } from "@/components/sections/FoundationStatus";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { siteConfig } from "@/config/site";
import { themePresets } from "@/config/theme";
import { homeContent } from "@/content/content";

export default function Home() {
  const activeTheme = themePresets[siteConfig.theme];

  return (
    <>
      <Header site={siteConfig} />
      <main>
        <Hero content={homeContent.hero} themeLabel={activeTheme.label} />
        <FoundationStatus items={homeContent.foundationItems} />
      </main>
      <Footer site={siteConfig} />
    </>
  );
}
