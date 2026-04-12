import Layout from "@/components/Layout";
import WhyUsFeatures from "@/components/WhyUsFeatures";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import buildingNets from "@/assets/building-nets.jpg";

const testimonials = [
  {
    name: "Ravi S.",
    text: "Quick installation and very professional. Highly recommend for balcony safety!",
  },
  {
    name: "Priya K.",
    text: "Affordable, neat work, and great customer support. My kids are safe now!",
  },
  {
    name: "Suresh M.",
    text: "Same-day service and quality nets. Will use again for my new flat.",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Glass Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/80 to-secondary/70 py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <img src={toImageSrc(parallaxBg)} alt="Safety Nets" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-4 drop-shadow-xl">About AJ Safety Nets</h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-6">Your Trusted Safety Net Partner in Bangalore</p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AJ Safety Nets is a leading safety net installation company based in Bangalore. With years of experience, we have served thousands of happy customers. Our team ensures high-quality installation for balconies, buildings, bird protection, sports areas, and more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use premium quality nylon and HDPE nets that are UV-resistant, weather-proof, and durable. Our nets come with a warranty and are tested to withstand heavy loads, ensuring maximum safety for your family, children, and pets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From residential apartments to commercial buildings, we provide customized safety net solutions tailored to your needs. Free installation and competitive pricing make us the preferred choice in Bangalore.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={toImageSrc(balconyNets)} alt="Balcony Safety Net Installation" loading="lazy" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gradient-to-br from-background to-primary/5">
        <div className="container">
          <WhyUsFeatures />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img src={toImageSrc(buildingNets)} alt="Building Safety Nets" loading="lazy" className="w-full h-80 object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our mission is to make every home, building, and commercial space safe with high-quality safety nets. We believe safety should be affordable and accessible to everyone.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                100% Quality Materials with Warranty
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                Free Site Inspection & Installation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                Experienced & Trained Installation Team
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                Same Day Service Available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                Competitive Pricing with No Hidden Charges
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/80 rounded-xl shadow-lg px-6 py-5 max-w-xs text-center border border-primary/10">
              <p className="text-lg font-medium text-primary mb-2">“{t.text}”</p>
              <span className="block text-sm text-muted-foreground font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-10 bg-primary/90">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-background mb-2 md:mb-0">Ready for a Safer Home or Business?</h2>
          <div className="flex gap-3">
            <a href="tel:6363331537" className="cta-button btn-lg text-lg md:text-xl font-bold shadow-xl">Call 6363331537</a>
            <a href="tel:9886061537" className="cta-button btn-lg text-lg md:text-xl font-bold shadow-xl">Call 9886061537</a>
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default WhyUs;
