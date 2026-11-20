import { MapPin, HandHeart, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: MapPin,
      title: "Local & Trusted",
      description: "Community-rooted and dependable, we treat every dog that stays with us like part of our own family.",
    },
    {
      icon: HandHeart,
      title: "Personal, Loving Care",
      description: "Small, attentive groups and one-on-one attention — never a cage, never an afterthought.",
    },
    {
      icon: BadgeCheck,
      title: "Safe & Dependable",
      description: "Licensed, insured, and always supervised, so you can travel or work knowing your dog is in good hands.",
    },
  ];

  return (
    <section className="py-16 border-b border-border" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-3">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-sm border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-black uppercase tracking-wide text-lg mb-3 text-foreground">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
