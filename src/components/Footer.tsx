import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const Footer = () => {
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get("city");
  const displayCity = cityParam ? cityParam.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "The Greater Atlanta Area";

  return (
    <footer className="bg-black border-t-2 border-primary text-gray-300">
      <div className="w-full max-w-[1200px] mx-auto px-[12px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Contact Us</h4>
            <div className="flex items-center gap-3 text-white font-black tracking-tighter uppercase">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-primary text-primary-foreground font-black text-[11px] shrink-0">
                TPG
              </div>
              <div className="flex flex-col leading-tight text-base sm:text-lg max-w-[200px]">
                <span>Taylored Paws Grooming</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+14235206229" className="font-bold hover:text-primary transition-colors">(423) 520-6229</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-bold text-sm">317 W Ponce de Leon Ave, Decatur, GA 30030</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <GoogleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Business</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Review Us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Full Groom</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bath & Brush</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Puppy Trim</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nail Trimming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">De-Shedding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Spa Upgrades</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-3">
              <li><span className="text-primary font-bold">{displayCity}</span></li>
              <li><span className="text-gray-400">and surrounding communities</span></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Operating Hours</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between text-primary font-bold mb-2"><span>Open:</span></li>
              <li className="flex justify-between"><span>Mon</span> <span>6:30 AM - 6:30 PM</span></li>
              <li className="flex justify-between"><span>Tue</span> <span>6:30 AM - 6:30 PM</span></li>
              <li className="flex justify-between"><span>Wed</span> <span>6:30 AM - 6:30 PM</span></li>
              <li className="flex justify-between"><span>Thu</span> <span>6:30 AM - 6:30 PM</span></li>
              <li className="flex justify-between"><span>Fri</span> <span>6:30 AM - 6:30 PM</span></li>
              <li className="flex justify-between"><span>Sat</span> <span>6:30 AM - 6:30 PM</span></li>
              <li className="flex justify-between text-gray-500"><span>Sun</span> <span>Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Taylored Paws Grooming. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
