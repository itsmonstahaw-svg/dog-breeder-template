import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden border-b border-border">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1780936329601011433/attachments/6f1627ca-9507-4e09-a9eb-ce5ad32d141d.png")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">What Our Clients Say</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
              Reviews
            </h2>
            <div className="w-24 h-1 bg-primary mt-3 mb-4"></div>
            <div className="flex items-center gap-3">
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-6 h-6" />
              <span className="text-white font-black text-lg">4.9</span>
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span style={{ color: "#4285F4" }} className="font-bold">87 Google Reviews</span>
            </div>
          </div>
          <Button variant="outline" className="font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-100 border-0 h-10 px-5 text-sm flex items-center gap-2 shrink-0">
            Contact Us Now
            <ArrowRight className="w-4 h-4 text-primary" />
          </Button>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { name: "Finn Russell", text: "Taylored Paws provided the most amazing grooming service. My dog looks so handsome and smells great! Highly recommend!" },
            { name: "Sarah Jenkins", text: "The grooming process was seamless. They truly care about the dogs and it shows in how calm my pup was." },
            { name: "Michael Thompson", text: "Best groomer we've ever worked with. The communication was excellent, and our Golden Retriever looks perfect." },
          ].map((review, i) => (
            <div key={i} className="bg-white rounded-xl p-6 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-gray-900 font-bold text-sm">5.0</span>
              </div>
              <p className="text-gray-900 text-sm leading-relaxed flex-grow">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <span className="text-gray-900 font-bold text-sm">{review.name}</span>
                <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="w-full flex justify-center">
          <div className="bg-white rounded-xl p-8 text-center w-full max-w-lg shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">Review Us on Google</h3>
            <p className="text-gray-600 text-sm mb-4">Loved your experience? Let others know!</p>
            <div className="flex justify-center mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-12 text-base">
                  Leave Us a Review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0 bg-transparent border-none shadow-none">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/survey/WVCaakVEw9GoBKBAaT6d"
                  style={{ border: "none", width: "100%", height: "600px" }}
                  scrolling="no"
                  id="WVCaakVEw9GoBKBAaT6d"
                  title="survey"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

      </div>
    </section>
  );
};
