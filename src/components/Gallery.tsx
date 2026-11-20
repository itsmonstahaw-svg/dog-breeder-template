import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Gallery = () => {
  const images = [
    "/pictures/ourwork/pic1.png",
    "/pictures/ourwork/pic2.png",
    "/pictures/ourwork/pic3.png",
    "/pictures/ourwork/pic4.png",
    "/pictures/ourwork/pic5.png",
    "/pictures/ourwork/pic6.png",
    "/pictures/ourwork/pic7.png",
    "/pictures/ourwork/pic8.png",
    "/pictures/ourwork/pic9.png",
    "/pictures/ourwork/pic10.png",
  ];

  const col1 = [images[0], images[1], images[2]];
  const col2 = [images[3], images[4]];
  const col3 = [images[5], images[6], images[7]];
  const col4 = [images[8], images[9]];

  const Column = ({ imgs, className, delayOffset }: { imgs: string[], className?: string, delayOffset: number }) => (
    <div className={`flex flex-col gap-4 ${className || ""}`}>
      {imgs.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: delayOffset + (i * 0.1) }}
          className="rounded-lg overflow-hidden relative group"
        >
          <img
            src={img}
            alt={`Work example ${i + 1}`}
            className="w-full h-48 md:h-52 lg:h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="gallery" className="py-16 border-b border-border" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end w-full mb-12">
          <div className="flex-shrink-0">
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-500 mb-1">
              See Why Our Customers Love Us
            </h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground leading-none">
              See Our Work
            </h2>
          </div>

          <div className="hidden md:block flex-grow h-[2px] bg-primary mx-8 mb-3 lg:mb-4"></div>

          <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded px-6 py-6 flex-shrink-0 mt-6 md:mt-0 mb-1">
            See All Photos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Column imgs={col1} delayOffset={0} />
          <Column imgs={col2} className="lg:mt-16" delayOffset={0.2} />
          <Column imgs={col3} delayOffset={0.4} />
          <Column imgs={col4} className="lg:mt-16" delayOffset={0.6} />
        </div>
      </div>
    </section>
  );
};
