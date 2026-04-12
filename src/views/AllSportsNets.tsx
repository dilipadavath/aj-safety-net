import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import sportsNets from "@/assets/sports-nets.jpg";
import parallaxBg2 from "@/assets/parallax-bg2.jpg";

const services = [
  { image: cricketNets, title: "Cricket Practice Nets", path: "/sports-nets/cricket", desc: "Professional cricket practice net enclosures for terraces, grounds, and academies. Heavy-duty green nylon nets with metal frame structure." },
  { image: sportsNets, title: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop", desc: "Tall ball stop netting for sports grounds and stadiums. Prevents balls from leaving the playing area and causing damage or injury." },
  { image: sportsNets, title: "Football Stop Netting", path: "/sports-nets/football", desc: "Goal nets and perimeter netting for football fields. High-strength nets that can withstand powerful shots." },
  { image: cricketNets, title: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket", desc: "Custom terrace cricket net installations for residential buildings. Practice cricket safely on your building terrace." },
  { image: sportsNets, title: "Sports Nets Installation", path: "/sports-nets/installation", desc: "Complete sports net installation services for schools, academies, and residential complexes. All types of sports nets available." },
  { image: sportsNets, title: "All Sports Nets", path: "/sports-nets/all", desc: "Nets for cricket, football, badminton, volleyball, tennis, and all other sports. Custom sizes and specifications available." },
];

const AllSportsNets = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">All Sports Nets</h1>
          <p className="text-background/80 text-lg">Professional Sports Net Installation in Bangalore</p>
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
            Need Sports Nets for Your Academy?
          </h2>
          <p className="text-background/80 text-lg mb-8">Cricket, football, badminton & all sports nets available</p>
          <a href="tel:7795891177" className="cta-button text-lg">Call For Free Quote</a>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="section-title mb-10">Sports Net Services in Detail</h2>
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

export default AllSportsNets;
