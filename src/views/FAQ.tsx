import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Star } from "lucide-react";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";

const faqs = [
  { q: "What types of safety nets do you provide?", a: "We provide all types of safety nets including Balcony Safety Nets, Pigeon Nets, Bird Protection Nets, Bird Spikes, Children Safety Nets, Swimming Pool Safety Nets, Cricket Practice Nets, Sports Nets, Industrial Safety Nets, Construction Safety Nets, Staircase Safety Nets, Car Parking Nets, Coconut Tree Nets, and more." },
  { q: "What material are your safety nets made of?", a: "Our safety nets are made from high-quality Nylon and HDPE (High-Density Polyethylene) material. These materials are UV-resistant, weather-proof, and highly durable with a lifespan of 5-10 years." },
  { q: "Do you provide free installation?", a: "Yes! We provide completely free installation with every safety net purchase. Our trained team will visit your site, take measurements, and install the nets professionally at no additional cost." },
  { q: "How long does installation take?", a: "Most residential installations are completed within 2-4 hours. Larger commercial or building-wide installations may take 1-2 days depending on the scope of work." },
  { q: "Do you provide same-day service?", a: "Yes, we offer same-day installation service for most standard requirements. Contact us early in the day for same-day service availability." },
  { q: "What areas in Bangalore do you serve?", a: "We serve all areas across Bangalore including Whitefield, Electronic City, Koramangala, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Hebbal, Yelahanka, Banashankari, and all other localities." },
  { q: "Do your nets come with a warranty?", a: "Yes, all our safety nets come with a warranty. The warranty period varies based on the product and material type. Contact us for specific warranty details." },
  { q: "Are your nets safe for children?", a: "Absolutely! Our nets are specifically designed with child safety in mind. We use non-toxic materials with appropriate mesh sizes that children cannot pass through." },
  { q: "Can safety nets be removed later?", a: "Yes, our safety nets can be removed when no longer needed. The installation method we use causes minimal damage to your property." },
  { q: "How do I get a quote?", a: "Simply call us at +91 6363331537 or email us at ajsafetynest537@gmail.com. We will arrange a free site visit and provide a detailed quote based on your requirements." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      {/* Glass Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/80 to-secondary/70 py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <img src={toImageSrc(parallaxBg)} alt="FAQ" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-4 drop-shadow-xl">FAQ's</h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-6">Frequently Asked Questions About Safety Nets</p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl shadow-lg overflow-hidden border border-primary/10">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-heading font-semibold text-foreground hover:text-primary transition-colors"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <div id={`faq-panel-${i}`} className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Didn't find answer CTA */}
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold mb-3">Didn't find your answer?</p>
            <a href="tel:6363331537" className="cta-button btn-md text-base font-bold shadow-md inline-block mx-2">Call 6363331537</a>
            <a href="https://wa.me/916363331537" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] px-6 py-3 text-base font-bold text-white transition-all duration-300 shadow-md mx-2">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <ShieldCheck className="w-6 h-6" />
            100% Quality Guarantee
          </div>
          <div className="flex items-center gap-2 text-yellow-500 font-bold text-lg">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400" />)}
            4.9/5 Rated Service
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default FAQ;
