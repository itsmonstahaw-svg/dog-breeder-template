import { QuoteForm } from "./QuoteForm";

export const LeadCapture = () => {
  return (
    <section className="bg-black py-16 border-b border-border/40">
      <div className="w-full max-w-lg mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Free & No Obligation</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Get a Free Quote
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Fill out the form and we'll reach out within the hour.
          </p>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-xl p-8 shadow-2xl">
          <QuoteForm />
        </div>

        <div className="flex justify-center gap-8 mt-8 text-sm text-gray-500">
          <span>✓ No spam, ever</span>
          <span>✓ Response within 1 hour</span>
          <span>✓ 100% free</span>
        </div>
      </div>
    </section>
  );
};
