import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1780936329601011433/assets/7ba9b0b8-dbb2-4691-85d5-df8c4810a2a0.png")' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-20">
        <div className="text-center mb-12">
          <p className="text-primary text-2xl font-black uppercase tracking-widest mb-2">Contact Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
            We're Here to Help
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-2">Call Us</h3>
              <a href="tel:+14235206229" className="text-gray-300 font-bold text-lg hover:text-primary transition-colors">
                (423) 520-6229
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-2">Find Us</h3>
              <p className="text-gray-300 font-bold text-base leading-snug">
                317 W Ponce de Leon Ave<br />Decatur, GA 30030
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-2">Opening Hours</h3>
              <p className="text-gray-300 font-bold text-base">Mon – Sat: 6:30 AM – 6:30 PM</p>
              <p className="text-gray-500 font-bold text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="h-14 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider rounded-sm shadow-2xl">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
