import { CalendarCheck, Car, ClipboardCheck, Heart } from "lucide-react";
import { useState } from "react";

export const Process = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    { icon: CalendarCheck, title: "Book\nYour Stay" },
    { icon: Car, title: "Drop\nOff" },
    { icon: ClipboardCheck, title: "Daily\nUpdates" },
    { icon: Heart, title: "Happy\nPick Up" },
  ];

  return (
    <section className="py-16 border-b border-border" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end w-full mb-12">
          <div className="flex-grow w-full">
            <div className="flex items-center gap-8 mb-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter whitespace-nowrap leading-none text-foreground">
                OUR PROCESS
              </h2>
              <div className="hidden md:block flex-grow h-[2px] bg-primary mt-4"></div>
            </div>
            <p className="text-lg text-gray-900">
              From booking to pick up — here's how your dog's stay works
            </p>
          </div>
        </div>

        <div className="relative w-full mt-24 overflow-x-clip py-4 -my-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {index === 0 && (
                  <div
                    className={`absolute top-[40px] right-[50%] w-[50vw] h-[2px] transition-colors duration-300 hidden md:block -z-10 ${
                      hoveredIndex === 0 ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  ></div>
                )}

                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-[40px] left-[50%] w-[calc(100%+1rem)] h-[2px] transition-colors duration-300 hidden md:block -z-10 ${
                      hoveredIndex === index || hoveredIndex === index + 1 ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  ></div>
                )}

                {index === steps.length - 1 && (
                  <div
                    className={`absolute top-[40px] left-[50%] w-[50vw] h-[2px] transition-colors duration-300 hidden md:block -z-10 ${
                      hoveredIndex === steps.length - 1 ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  ></div>
                )}

                <div className={`w-20 h-20 rounded-full bg-white border-4 transition-colors duration-300 flex items-center justify-center mb-6 relative z-10 shadow-sm ${
                  hoveredIndex === index ? 'border-primary text-primary' : 'border-border text-muted-foreground'
                }`}>
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm transition-colors duration-300">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-black uppercase tracking-wider text-sm md:text-base whitespace-pre-line text-foreground">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
