import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock3, MapPin, MessageCircleMore, ShieldCheck } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";
import { toImageSrc } from "@/lib/image";

import heroBg from "@/assets/hero-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import heroBalconyHanger from "@/assets/hero-balcony-hanger.jpeg";
import heroInvisibleGrilles from "@/assets/hero-invisible-grilles.jpeg";

const slides = [
  { image: heroBg, title: "Balcony Safety Nets", subtitle: "Professional Installation in Bangalore" },
  { image: balconyNets, title: "Children Safety Nets", subtitle: "Keep Your Kids Safe at Home" },
  { image: pigeonNets, title: "Pigeon Protection Nets", subtitle: "Stop Birds from Entering Your Balcony" },
  { image: cricketNets, title: "Cricket Practice Nets", subtitle: "Terrace & Ground Cricket Nets" },
  { image: heroBalconyHanger, title: "Balcony Hanger", subtitle: "Secure Storage Solution for Your Balcony" },
  { image: heroInvisibleGrilles, title: "Invisible Grilles", subtitle: "Transparent Safety Without Obstruction" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen md:h-[80vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={toImageSrc(slide.image)} alt={slide.title} className="w-full h-full object-cover" />
          <div className="parallax-overlay" />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-3 md:px-6 py-8 md:py-16">
        {/* Trust Signals - Premium Glass Badges with Stagger Animation */}
        <div className="mb-6 md:mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {[
            { icon: MapPin, text: "Bangalore Service" },
            { icon: Clock3, text: "Free Site Visit" },
            { icon: ShieldCheck, text: "Professional Installation" },
          ].map((badge, i) => (
            <span
              key={i}
              className="glass-card px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-primary flex items-center gap-1.5 md:gap-2 reveal-item"
              style={{ 
                animation: isVisible ? "reveal 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
                animationDelay: `${i * 80}ms`
              }}
            >
              <badge.icon className="h-3.5 md:h-4 w-3.5 md:w-4" />
              <span className="whitespace-nowrap">{badge.text}</span>
            </span>
          ))}
        </div>

        {/* Premium Heading - Enhanced with Spring Bounce */}
        <h1 
          className="font-heading font-bold text-background drop-shadow-2xl mb-2 md:mb-4 leading-tight max-w-5xl"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            animation: isVisible ? "springBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both" : "none"
          }}
        >
          {slides[current].title}
        </h1>
        
        {/* Subheading with Smooth Fade-In */}
        <p 
          className="font-heading font-semibold text-background/95 mb-6 md:mb-8 max-w-4xl"
          style={{
            fontSize: "clamp(1.25rem, 5vw, 2.5rem)",
            animation: isVisible ? "floatIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both" : "none"
          }}
        >
          {slides[current].subtitle}
        </p>

        {/* Value Proposition - Premium Typography with Reveal */}
        <p 
          className="mb-8 md:mb-12 max-w-2xl leading-relaxed text-background/90 font-medium"
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1rem)",
            animation: isVisible ? "floatIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both" : "none"
          }}
        >
          ✓ <span className="font-bold text-background">FREE Quote</span> · 
          <span className="font-bold text-background"> Same-Day Installation</span> · 
          <span className="font-bold text-background"> Lifetime Support</span>
        </p>

        {/* Premium CTA Section - Micro-interactions */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center w-full sm:w-auto">
          <a
            href={`tel:${BUSINESS_PHONE}`}
            onClick={() => trackLeadClick("call", "hero")}
            className="cta-button px-6 md:px-10 py-3 md:py-4 w-full sm:w-auto shadow-2xl hover:shadow-3xl font-bold"
            style={{
              fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)"
            }}
          >
            ☎ Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLeadClick("whatsapp", "hero")}
            className="inline-flex items-center justify-center gap-2 md:gap-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] px-6 md:px-8 py-3 md:py-4 font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            style={{
              fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)"
            }}
          >
            <MessageCircleMore className="h-4 md:h-5 w-4 md:w-5" />
            WhatsApp
          </a>
        </div>
      </div>

      <button
        onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-2 md:p-3 transition-colors"
      >
        <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-2 md:p-3 transition-colors"
      >
        <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
