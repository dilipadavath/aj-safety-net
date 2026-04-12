import { MessageCircleMore, PhoneCall } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";

const StickyCallBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-secondary bg-gradient-to-r from-primary/95 via-primary/98 to-secondary/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary-foreground">
            FREE QUOTE TODAY
          </p>
          <p className="text-sm font-bold text-primary-foreground/95">
            Professional Team Ready
          </p>
        </div>
        <a
          href={`tel:${BUSINESS_PHONE}`}
          onClick={() => trackLeadClick("call", "sticky_mobile")}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-bold text-primary shadow-lg transition-all hover:shadow-2xl transform hover:-translate-y-1"
        >
          <PhoneCall className="h-5 w-5 animate-pulse" />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackLeadClick("whatsapp", "sticky_mobile")}
          className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
        >
          <MessageCircleMore className="h-5 w-5" />
          Chat
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
