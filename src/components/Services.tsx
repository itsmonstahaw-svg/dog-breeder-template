import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Overnight Boarding",
      description: "Safe, comfortable overnight stays with cozy sleeping arrangements and round-the-clock care for your dog.",
      image: "/pictures/services/overnight-boarding.png",
      href: "#"
    },
    {
      title: "Doggie Daycare",
      description: "A fun-filled day of supervised play, socialisation, and activities in our spacious daycare facility.",
      image: "/pictures/services/doggie-daycare.png",
      href: "#"
    },
    {
      title: "Spa & Bath",
      description: "Premium bath, blow dry, brush out, ear cleaning, and nail trim — leaving your pup fresh and clean.",
      image: "/pictures/services/spa-bath.png",
      href: "#"
    },
    {
      title: "Training",
      description: "Professional obedience and behavioural training tailored to your dog's age, breed, and personality.",
      image: "/pictures/services/training.png",
      href: "#"
    },
    {
      title: "Playtime & Social",
      description: "Structured group play sessions designed to build confidence, manners, and social skills.",
      image: "/pictures/services/playtime&social.png",
      href: "#"
    },
    {
      title: "Private Suites",
      description: "Luxury private suites for dogs who prefer a quieter, more personalised boarding experience.",
      image: "/pictures/services/private_suites.png",
      href: "#"
    }
  ];

  return (
    <section id="services" className="py-16 border-b border-border" style={{ backgroundColor: "#ffffff" }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end w-full mb-12">
          <div className="flex-grow w-full">
            <div className="flex items-center gap-8 mb-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter whitespace-nowrap leading-none text-foreground">
                OUR SERVICES
              </h2>
              <div className="hidden md:block flex-grow h-[2px] bg-primary mt-4"></div>
            </div>
            <p className="text-lg text-gray-600">
              Professional boarding, daycare, and comprehensive pet care services
            </p>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3px] bg-[#E8EBF0] border-[3px] border-[#E8EBF0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group relative block overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-[4/3] bg-black"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              />

              <div className="absolute inset-0 flex flex-col justify-center p-8 z-10 pointer-events-none">
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <p className="text-white text-lg font-medium leading-relaxed text-center drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="bg-black text-white px-4 py-2.5 text-sm sm:text-base font-black uppercase tracking-wide flex items-center gap-2 shadow-xl rounded-sm">
                  {service.title}
                  <div className="bg-primary text-primary-foreground rounded-full p-0.5 ml-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
