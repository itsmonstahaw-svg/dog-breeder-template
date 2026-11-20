import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { FAQAndServiceAreas } from "@/components/FAQAndServiceAreas";
import { GetStarted } from "@/components/GetStarted";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        <CTA />
        <Services />
        <About />
        <Process />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <FAQAndServiceAreas />
        <GetStarted />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Index;
