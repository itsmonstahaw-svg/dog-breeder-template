import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";

export const CTA = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1780936329601011433/assets/7ba9b0b8-dbb2-4691-85d5-df8c4810a2a0.png")' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Book Now + contact info */}
          <div>
            <div className="mb-10">
              <p className="text-primary text-2xl font-black uppercase tracking-widest mb-2">Call or Text Anytime</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
                Request an Appointment
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mb-1">Emergency Line</h3>
                  <a href="tel:+17196495514" className="text-gray-300 font-bold text-lg hover:text-primary transition-colors">
                    (719) 649-5514
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mb-1">Text Us Anytime</h3>
                  <a href="sms:+17196495514" className="text-gray-300 font-bold text-lg hover:text-primary transition-colors">
                    (719) 649-5514
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mb-1">Find Us</h3>
                  <p className="text-gray-300 font-bold text-base leading-snug">
                    317 W Ponce de Leon Ave, Decatur, GA 30030
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mb-1">Opening Hours</h3>
                  <p className="text-gray-300 font-bold text-base">Mon – Sat: 6:30 AM – 6:30 PM</p>
                  <p className="text-gray-500 font-bold text-sm">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Pick a Time That Works for You + calendar */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 text-white whitespace-nowrap">Pick a Time That Works for You</h3>
              <p className="text-gray-300 text-sm">Choose your preferred date and time. We'll call you to confirm availability.</p>
            </div>

            <div className="bg-[#18181b] border border-[#27272a] rounded-xl flex flex-col overflow-hidden shadow-xl">
              <div className="p-4 border-b border-[#27272a]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={{ before: today }}
                  className="w-full bg-transparent text-white p-0"
                  classNames={{
                    months: "flex flex-col w-full space-y-2",
                    month: "space-y-2 w-full",
                    caption: "flex justify-center pt-1 relative items-center mb-2",
                    caption_label: "text-sm font-medium text-white",
                    nav: "space-x-1 flex items-center",
                    nav_button: "h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100 text-white border border-[#3f3f46] rounded",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex w-full",
                    head_cell: "text-gray-400 rounded-md font-normal text-[0.75rem] flex-1 text-center",
                    row: "flex w-full mt-1",
                    cell: "flex-1 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-8 w-8 mx-auto p-0 font-normal text-white aria-selected:opacity-100 hover:bg-[#27272a] rounded-sm text-sm",
                    day_selected: "!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground focus:!bg-primary focus:!text-primary-foreground",
                    day_today: "bg-[#27272a] text-white",
                    day_outside: "text-gray-500 opacity-50",
                    day_disabled: "text-gray-500 opacity-50",
                    day_range_middle: "aria-selected:bg-transparent aria-selected:text-white",
                    day_hidden: "invisible",
                  }}
                />
              </div>

              <div className="p-4 flex flex-col">
                <h4 className="text-sm font-bold mb-3 text-white">
                  Preferred Times for {date ? format(date, "EEE d MMM") : "—"}
                </h4>
                <div className="grid grid-cols-2 gap-2 mb-auto">
                  {times.map((time) => (
                    <Button
                      key={time}
                      variant="outline"
                      className="bg-transparent border-[#3f3f46] text-xs font-medium hover:bg-[#27272a] hover:text-white h-9 text-gray-300"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                <Button className="w-full mt-4 h-10 text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground border-none rounded-md">
                  Request This Time
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
