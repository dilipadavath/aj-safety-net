import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import birdSpikes from "@/assets/bird-spikes.jpg";
import parallaxBg2 from "@/assets/parallax-bg2.jpg";

const services = [
  { image: pigeonNets, title: "Pigeon Nets", path: "/bird-protection/pigeon-nets", desc: "High-quality pigeon nets to prevent pigeons from entering your balcony, window, or terrace. Durable nylon material that is UV-resistant." },
  { image: pigeonNets, title: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety", desc: "Complete pigeon safety net solutions for residential apartments. Protect your home from pigeon droppings and nesting." },
  { image: pigeonNets, title: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation", desc: "Professional pigeon net installation service with expert team. Same-day installation available across Bangalore." },
  { image: birdSpikes, title: "Bird Spikes", path: "/bird-protection/bird-spikes", desc: "Stainless steel bird spikes for ledges, parapets, and window sills. Humane bird deterrent that prevents birds from perching." },
  { image: pigeonNets, title: "Bird Protection Nets", path: "/bird-protection/bird-protection", desc: "Comprehensive bird protection net solutions for all types of buildings. Keeps all species of birds away without harming them." },
  { image: pigeonNets, title: "Anti Bird Nets", path: "/bird-protection/anti-bird", desc: "Anti-bird nets for commercial and residential properties. Food-grade quality nets available for food processing areas." },
  { image: pigeonNets, title: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies", desc: "Custom-fit pigeon nets specifically designed for balcony spaces. Available in transparent and colored options." },
  { image: pigeonNets, title: "Sparrow Protection Nets", path: "/bird-protection/sparrow", desc: "Fine mesh sparrow protection nets to prevent small birds from entering homes and offices. Smaller mesh size for sparrow protection." },
  { image: pigeonNets, title: "Anti Seagull Nets", path: "/bird-protection/anti-seagull", desc: "Heavy-duty anti-seagull nets for coastal properties and commercial areas. Resistant to salt water and harsh weather." },
];

const BirdProtection = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Bird Protection Nets</h1>
          <p className="text-background/80 text-lg">Complete Bird Control Solutions in Bangalore</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} title={s.title} path={s.path} />
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection backgroundImage={parallaxBg2}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-cta mb-4">
            Troubled by Pigeons & Birds?
          </h2>
          <p className="text-background/80 text-lg mb-8">Get professional bird protection nets installed today</p>
          <a href="tel:7795891177" className="cta-button text-lg">Call For Free Quote</a>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="section-title mb-10">Bird Protection Services in Detail</h2>
          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-6 items-center">
                <img src={toImageSrc(s.image)} alt={s.title} loading="lazy" className="w-full md:w-48 h-36 object-cover rounded-lg" />
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <a href="tel:7795891177" className="inline-block mt-3 cta-button text-sm">Enquire Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default BirdProtection;
