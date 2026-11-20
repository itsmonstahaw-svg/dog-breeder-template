import { Clock, ShieldCheck, Award, Heart } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    { icon: Clock, label: "Daily Photo Updates", sub: "So You Never Worry" },
    { icon: ShieldCheck, label: "Licensed & Insured", sub: "Locally Owned" },
    { icon: Award, label: "10+ Years Experience", sub: "Trusted Since 2016" },
    { icon: Heart, label: "500+ Dogs Boarded", sub: "And Counting" },
  ];

  return (
    <section className="bg-black border-b border-primary/20 py-6">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                <badge.icon className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="text-left">
                <div className="text-white font-black text-sm uppercase tracking-wide leading-tight">{badge.label}</div>
                <div className="text-gray-400 text-xs font-medium">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
