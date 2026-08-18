import { About, Method } from "@/components/sections/MethodAndAbout";
import { Cases, Results, Testimonials } from "@/components/sections/ProofSections";
import { Contact } from "@/components/sections/Contact";
import { Faq, FinalCta } from "@/components/sections/FaqAndCta";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Offers, Problems } from "@/components/sections/ExpertiseAndOffers";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/content";

export default function Home() {
  return (
    <>
      <Header site={siteConfig} notice={homeContent.notice} />
      <main>
        <Hero content={homeContent.hero} actions={siteConfig.actions} />
        <TrustStrip content={homeContent.trust} />
        <Problems content={homeContent.problems} />
        <Offers content={homeContent.offers} action={siteConfig.actions.inquiry} />
        <Method content={homeContent.method} />
        <About content={homeContent.about} />
        <Results content={homeContent.results} />
        <Cases content={homeContent.cases} />
        <Testimonials content={homeContent.testimonials} />
        <Faq content={homeContent.faq} />
        <FinalCta content={homeContent.finalCta} action={siteConfig.actions.finalContact} />
        <Contact content={homeContent.contact} site={siteConfig} />
      </main>
      <Footer site={siteConfig} content={homeContent.footer} />
    </>
  );
}
