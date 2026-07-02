import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border" style={{ backgroundColor: "#F4F6F9" }} id="areas">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl aspect-square md:aspect-[4/3] relative overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Atlanta,%20GA&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter">
                PROUDLY SERVING THESE AREAS
              </h2>
              <p className="text-lg text-muted-foreground font-bold">Serving the Greater Atlanta, GA area for all grooming needs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Atlanta, GA",
                "Marietta, GA",
                "Alpharetta, GA",
                "Roswell, GA"
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-3 bg-zinc-950 p-4 rounded-lg border border-zinc-800 shadow-sm text-white">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-lg">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
