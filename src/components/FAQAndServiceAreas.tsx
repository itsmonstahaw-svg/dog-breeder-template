import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQAndServiceAreas = () => {
  const faqs = [
    {
      question: "How often should my dog be groomed?",
      answer: "It depends on the breed, coat type, and lifestyle. Generally, most dogs benefit from professional grooming every 4-8 weeks. Short-haired breeds might only need a bath every 8-12 weeks, while long-haired breeds need more frequent maintenance."
    },
    {
      question: "Do I need to make an appointment?",
      answer: "Yes, we work by appointment to ensure every dog gets the dedicated time and attention they deserve without feeling rushed. You can book online or call us."
    },
    {
      question: "Can I stay and watch my dog being groomed?",
      answer: "For the safety and comfort of your pet, we ask that owners do not stay in the grooming area. Dogs often become anxious or overly excited when they can see or hear their owners, which makes the grooming process difficult and potentially unsafe."
    },
    {
      question: "What vaccinations are required?",
      answer: "For the safety of all our furry clients, we require proof of current Rabies, DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus), and Bordetella vaccinations."
    }
  ];

  return (
    <section id="faq-areas" className="py-20 border-b border-border" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-[1200px] mx-auto px-[12px] space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-primary/40 border-b-2">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-foreground hover:text-primary hover:no-underline transition-colors py-6 [&[data-state=open]>svg]:text-primary [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-900 text-base leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[450px]">
            <img
              src="https://vibe.filesafe.space/1780936329601011433/assets/b8747c63-5708-4cab-a942-a34106b7fa40.png"
              alt="Beautifully groomed golden retriever"
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
