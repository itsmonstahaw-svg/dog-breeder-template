import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { locations } from "@/data/locations";
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
import NotFound from "./NotFound";

const LocationPage = () => {
  const { citySlug } = useParams();
  const location = locations.find((l) => l.slug === citySlug);

  useEffect(() => {
    if (location) {
      document.title = `Dog Boarding in ${location.city}, ${location.state} | Treasured Ones Personal Dog Trainer K9 Training`;
    }
  }, [location]);

  if (!location) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero city={`${location.city}, ${location.state}`} />
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

export default LocationPage;
