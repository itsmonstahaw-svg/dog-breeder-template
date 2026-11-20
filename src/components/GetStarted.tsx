import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, Clock, FileText, Phone } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

export const GetStarted = () => {
  const points = [
    "Licensed & insured",
    "Daily photo & message updates",
    "Free meet-and-greet tour",
    "Small, supervised group sizes",
  ];

  return (
    <section className="relative overflow-hidden py-20 border-b border-border" style={{ backgroundColor: "#ffffff" }}>
      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-primary text-sm font-black uppercase tracking-widest mb-3">Get Started Today</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-foreground leading-[1.02] mb-4">
            Book Your Dog's Stay Today
          </h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-lg text-gray-900 leading-relaxed mb-6">
            A safe, comfortable, home-away-from-home for your dog. Free tours, clear pricing, no surprises.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm font-bold text-gray-900">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded h-12 px-6">
                  <FileText className="w-4 h-4" />
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80">
                <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
                  Get A Free Quote
                </DialogTitle>
                <DialogDescription className="text-center text-gray-400 mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </DialogDescription>
                <QuoteForm />
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              className="border-brand-blue bg-white text-brand-blue hover:bg-white/90 hover:text-brand-blue font-bold rounded h-12 px-6"
              asChild
            >
              <a href="tel:+17196495514">
                <Phone className="w-4 h-4" />
                (719) 649-5514
              </a>
            </Button>
          </div>

          <p className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Clock className="w-3.5 h-3.5" />
            Flexible drop-off &amp; pick-up &middot; Fast response
          </p>
        </motion.div>
      </div>

      {/* Decorative tiles */}
      <div
        aria-hidden="true"
        className="hidden lg:grid absolute -right-16 top-1/2 -translate-y-1/2 grid-cols-4 gap-4 w-[440px] rotate-[-12deg] opacity-80"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-2xl ${i % 3 === 1 ? "bg-primary/15" : i % 3 === 2 ? "bg-brand-blue/15" : "bg-[#F4F6F9]"}`}
          ></div>
        ))}
      </div>
    </section>
  );
};
