import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const businessName = "Treasured Ones Personal Dog Trainer K9 Training";

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("chatName") as string) || "";
    const [firstName, ...lastNames] = fullName.split(" ");

    const payload = {
      first_name: firstName || "",
      last_name: lastNames.join(" "),
      phone: (formData.get("chatPhone") as string) || "",
      message: (formData.get("chatMessage") as string) || "",
      source: `chat-widget: ${window.location.href}`,
    };

    try {
      // TODO: wire up this business's own GoHighLevel (or other CRM) webhook URL here, or replace this whole
      // component with the business's own GHL chat-widget script. Nothing is sent anywhere yet.
      console.log("Chat message submitted:", payload);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label={`Chat with ${businessName}`}
            className="w-[340px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-black/10"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-black text-sm leading-tight">{businessName}</p>
                <p className="flex items-center gap-1.5 text-xs font-medium opacity-80">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  Replies on our personal phone
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="bg-primary/10 text-gray-900 text-sm leading-relaxed rounded-2xl rounded-tl-sm px-4 py-3">
                This text goes straight to our personal phone. We will make sure to get back to you the second we're free!
              </div>

              {sent ? (
                <div className="text-center py-6 space-y-2">
                  <p className="font-black text-gray-900 uppercase">Message Sent!</p>
                  <p className="text-sm text-gray-600">We'll get back to you as soon as possible.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Your Name <span className="text-primary">*</span></label>
                    <Input name="chatName" placeholder="John Smith" className="h-10 text-sm text-black" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Phone Number <span className="text-primary">*</span></label>
                    <Input name="chatPhone" type="tel" placeholder="(555) 555-0000" className="h-10 text-sm text-black" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Message</label>
                    <Textarea name="chatMessage" placeholder="What can I help you with?" className="min-h-[80px] text-sm text-black" />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-105 transition-transform flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
