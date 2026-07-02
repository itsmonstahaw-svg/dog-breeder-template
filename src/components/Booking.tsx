import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export function Booking() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 3, 20));
  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  return (
    <section className="py-16 px-4 border-b border-border" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[768px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3 text-foreground">Book Your Appointment Online, 24/7</h2>
          <p className="text-gray-900 text-base">Select a date and time that works best for you and your pup.</p>
        </div>

        <div className="bg-[#18181b] border border-[#27272a] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-xl">
          <div className="p-5 md:p-6 md:border-r border-[#27272a] flex justify-center md:w-[45%]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-transparent text-white p-0"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center mb-4",
                caption_label: "text-sm font-medium text-white",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white border border-[#3f3f46] rounded",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-gray-400 rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal text-white aria-selected:opacity-100 hover:bg-[#27272a] rounded-sm",
                day_selected: "!bg-[#0ea5e9] !text-white hover:!bg-[#0ea5e9] hover:!text-white focus:!bg-[#0ea5e9] focus:!text-white",
                day_today: "bg-[#27272a] text-white",
                day_outside: "text-gray-500 opacity-50",
                day_disabled: "text-gray-500 opacity-50",
                day_range_middle: "aria-selected:bg-transparent aria-selected:text-white",
                day_hidden: "invisible",
              }}
            />
          </div>

          <div className="p-5 md:p-6 md:w-[55%] flex flex-col">
            <h3 className="text-base font-bold mb-5 text-white">Available Times for Mon 20 Apr</h3>
            <div className="grid grid-cols-2 gap-3 mb-auto">
              {times.map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  className="bg-transparent border-[#3f3f46] text-sm font-medium hover:bg-[#27272a] hover:text-white h-10 text-gray-300"
                >
                  {time}
                </Button>
              ))}
            </div>
            <Button className="w-full mt-6 h-11 text-sm font-bold bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-none rounded-md">
              Confirm Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
