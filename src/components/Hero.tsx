import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Star, ShieldCheck, Scissors, Heart } from "lucide-react";

import { QuoteForm } from "./QuoteForm";

interface HeroProps {
  city?: string;
}

export const Hero = ({ city }: HeroProps) => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1780936329601011433/attachments/32673aac-c3f0-4ab0-aac6-ff5eb2a9777a.png")' }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="w-full max-w-[1100px] mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left — Headline + trust */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5"
          >
            Your Dog Deserves
            <br />
            <span className="text-primary">{city ? `the Best in ${city}.` : "the Best."}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {city
              ? `Stress-free, professional grooming and boarding tailored to your dog's needs in ${city} — done with care every time.`
              : "Stress-free, professional grooming tailored to your dog's needs — done with care every time."}
          </motion.p>

          <motion.a
            href="tel:+17196495514"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-primary transition-colors mb-5"
          >
            <Phone className="w-5 h-5 text-primary" />
            (719) 649-5514
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center lg:justify-start mb-12"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md pl-3 pr-5 py-2">
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-black text-base leading-none">5.0</span>
              <span className="w-px h-4 bg-white/20"></span>
              <span className="text-gray-300 text-sm font-medium whitespace-nowrap">25 Google reviews</span>
            </div>
          </motion.div>

        </div>

        {/* Right — Lead capture form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-black/80 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <div className="mb-6 text-center">
<h2 className="text-3xl font-black text-white tracking-tight uppercase">Get A Free Quote</h2>
            </div>
            <QuoteForm />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
