import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { QuoteForm } from "./QuoteForm";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
      subLinks: [
        { name: "Full Groom", href: "#" },
        { name: "Bath & Brush", href: "#" },
        { name: "Puppy Trim", href: "#" },
        { name: "Nail Trimming", href: "#" },
        { name: "De-Shedding", href: "#" },
        { name: "Spa Upgrades", href: "#" },
      ]
    },
    { name: "Gallery", href: "#" },
    {
      name: "Service Areas",
      href: "#areas",
      subLinks: [
        { name: "Atlanta, GA", href: "#" },
        { name: "Marietta, GA", href: "#" },
        { name: "Alpharetta, GA", href: "#" },
        { name: "Roswell, GA", href: "#" },
      ],
    },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const businessName = "Taylored Paws Grooming";
  const initials = "TPG";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black shadow-sm border-b border-primary"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container max-w-[1400px] flex h-20 items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <div className={`font-black text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-tighter uppercase flex items-center gap-2 transition-colors duration-300 text-white`}>
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded bg-primary text-primary-foreground font-black text-[10px] sm:text-xs shrink-0">
              {initials}
            </div>
            <div className="flex flex-col leading-tight justify-center text-left text-[10px] sm:text-[11px] md:text-xs max-w-[130px] sm:max-w-[180px] lg:max-w-none">
              <span>{businessName}</span>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-6 text-sm font-bold uppercase tracking-wider">
          {links.map((link) => (
            <div key={link.name} className="relative group py-6">
              <a
                href={link.href}
                className="whitespace-nowrap transition-colors duration-300 flex items-center gap-1 text-white hover:text-primary"
              >
                {link.name}
                {(link.name === "Services" || link.name === "Service Areas") && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </a>

              {link.subLinks && (
                <div className="absolute top-[80%] left-0 min-w-[260px] bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 overflow-hidden z-50">
                  <div className="flex flex-col py-2">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        className="px-5 py-3 text-[13px] font-bold text-black uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90">
                Get Free Quote
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
          <Button variant="outline" className="font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center gap-2" asChild>
            <a href="tel:+14235206229">
              <Phone className="h-4 w-4" />
              (423) 520-6229
            </a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <nav className="flex flex-col gap-6 mt-10">
              {links.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <a
                    href={link.href}
                    className="text-lg font-bold uppercase tracking-wider flex items-center gap-1"
                    onClick={() => !link.subLinks && setIsOpen(false)}
                  >
                    {link.name}
                    {(link.name === "Services" || link.name === "Service Areas") && (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </a>
                  {link.subLinks && (
                    <div className="flex flex-col pl-4 gap-4 border-l-2 border-primary/20">
                      {link.subLinks.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 mt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full font-bold uppercase">Get Free Quote</Button>
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
                <Button variant="outline" className="w-full font-bold bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center gap-2" asChild>
                  <a href="tel:+14235206229">
                    <Phone className="h-4 w-4" />
                    (423) 520-6229
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
