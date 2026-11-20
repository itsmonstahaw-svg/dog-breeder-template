import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export const About = () => {
  const stats = [
    { value: "500+", label: "Dogs Groomed" },
    { value: "10", label: "Years Experience" },
    { value: "5.0★", label: "Google Rating" },
  ];

  return (
    <section className="py-20 border-b border-border" style={{ backgroundColor: "#ffffff" }}>
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8 border-l-4 border-primary pl-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-foreground">About Us</h2>
            </div>

            <p className="text-lg text-gray-900 leading-relaxed">
              We have been the trusted choice for dog boarding in the Greater Atlanta area for over a decade. We provide a safe, comfortable, and loving home-away-from-home where your dog is cared for like family — every single stay.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-border rounded-lg p-4 text-center" style={{ backgroundColor: "#F4F6F9" }}
                >
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-900 font-medium mt-1 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-md px-8 h-12">
              Book an Appointment
            </Button>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://vibe.filesafe.space/1780936329601011433/assets/0029e37a-a0f6-4482-b58d-a496a75ba253.png"
                alt="Professional dog groomer with a happy dog"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r-4 border-b-4 border-primary rounded-br-xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
