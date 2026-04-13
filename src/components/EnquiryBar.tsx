import { MessageCircleMore, Phone } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";

const EnquiryBar = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary/95 to-secondary py-12 md:py-16 overflow-hidden group">
      {/* Animated background accent with enhanced motion */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500" />
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      <div className="container-max flex flex-col md:flex-row items-center justify-between space-between-loose md:space-between-normal relative z-10">
        <div className="flex-1 text-center md:text-left reveal-item">
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
            ✓ Free Consultation & Quote
          </h3>
          <p className="text-base md:text-lg text-primary-foreground/95 font-medium leading-relaxed">
            Expert guidance from our installation specialists, no obligation
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto reveal-item" style={{ animationDelay: '100ms' }}>
          <a
            href="tel:6363331537"
            onClick={() => trackLeadClick("call", "enquiry_bar")}
            className="cta-button flex items-center justify-center gap-2 text-lg md:text-xl w-full sm:w-auto click-press hover-lift"
          >
            <Phone className="w-5 h-5" />
            +91 6363331537
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLeadClick("whatsapp", "enquiry_bar")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] px-7 md:px-9 py-4 md:py-5 text-lg md:text-xl font-bold text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto click-press"
          >
            <MessageCircleMore className="h-5 w-5" />
            Message Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnquiryBar;
