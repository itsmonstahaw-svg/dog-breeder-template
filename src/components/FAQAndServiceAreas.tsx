import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const FAQAndServiceAreas = () => {
  const faqs = [
    {
      question: "What does a typical boarding stay include?",
      answer: "Every stay includes comfortable sleeping arrangements, supervised group or private playtime, regular feeding on your dog's normal schedule, daily walks, and lots of love and attention from our team."
    },
    {
      question: "Do I need to make a reservation?",
      answer: "Yes, we work by reservation to ensure every dog receives the care and space they deserve. You can book online or call us directly. We recommend booking in advance, especially around holidays."
    },
    {
      question: "Will I receive updates while my dog is boarding?",
      answer: "Absolutely. We send daily photo and message updates so you can see exactly how your dog is doing. Your peace of mind is just as important to us as your dog's comfort."
    },
    {
      question: "What vaccinations are required for boarding?",
      answer: "For the safety of all our guests, we require proof of current Rabies, DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus), and Bordetella vaccinations before any stay."
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

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-border rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-foreground uppercase tracking-tight">Still have questions?</h3>
                  <p className="text-sm text-gray-600">Call us directly. Real answers, no scripts.</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded h-11 px-6 shrink-0" asChild>
                <a href="tel:+17196495514">Call (719) 649-5514</a>
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/pictures/faq.png"
              alt="Happy dogs at our facility"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
