import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import kidsSafetyNew from "@/assets/kids-safety-new.jpg";
import petsSafetyNew from "@/assets/pets-safety-new.jpg";
import grillBalconyNew from "@/assets/grill-balcony-new.jpg";
import terraceTopNew from "@/assets/terrace-top-new.jpg";
import industrialSafetyNew from "@/assets/industrial-safety-new.jpg";
import buildingNets from "@/assets/building-nets.jpg";
import ductAreaSafety from "@/assets/duct-area-safety.jpg";
import openAreaSafety from "@/assets/open-area-safety.jpg";
import staircaseNetsNew from "@/assets/staircase-nets-new.jpg";
import constructionNetsNew from "@/assets/construction-nets-new.jpg";
import swimmingPoolNew from "@/assets/swimming-pool-new.jpg";
import monkeyNetsNew from "@/assets/monkey-nets-new.jpg";
import carParkingNew from "@/assets/car-parking-new.jpg";
import coconutNets from "@/assets/coconut-nets.jpg";
import hdpeNylonNew from "@/assets/hdpe-nylon-new.jpg";
import parallaxBg2 from "@/assets/parallax-bg2.jpg";

const services = [
  { image: balconyNets, title: "Balcony Safety Nets", path: "/safety-nets/balcony", desc: "High-quality nylon safety nets for apartment balconies to prevent children, pets, and objects from falling. UV-resistant and weather-proof material with free installation." },
  { image: kidsSafetyNew, title: "Kids Net For Balcony", path: "/safety-nets/kids", desc: "Specially designed child safety nets with smaller mesh size to ensure children cannot pass through. Essential for high-rise apartments with young children." },
  { image: kidsSafetyNew, title: "Pets Safety Nets", path: "/safety-nets/pets", desc: "Protect your beloved pets from balcony falls with our durable pet safety nets. Available in various colors and mesh sizes suitable for all types of pets." },
  { image: grillBalconyNew, title: "Grill Balcony Safety Nets", path: "/safety-nets/grill-balcony", desc: "Safety nets designed to fit on grilled balconies, providing an additional layer of protection. Custom-fit installation for all grill types." },
  { image: terraceTopNew, title: "Terrace Top Nets", path: "/safety-nets/terrace", desc: "Cover your terrace with high-quality safety nets to prevent falls and keep your terrace area safe for children and elderly." },
  { image: industrialSafetyNew, title: "Industrial Safety Nets", path: "/safety-nets/industrial", desc: "Heavy-duty industrial safety nets for factories, warehouses, and construction sites. Meets all safety standards and regulations." },
  { image: buildingNets, title: "Building Safety Nets", path: "/safety-nets/building", desc: "Complete building safety net solutions for residential and commercial buildings. Prevents falls from heights and protects pedestrians." },
  { image: ductAreaSafety, title: "Duct Area Safety Nets", path: "/safety-nets/duct-area", desc: "Safety nets for building duct areas to prevent accidental falls. Essential for multi-story residential complexes." },
  { image: openAreaSafety, title: "Open Area Safety Nets", path: "/safety-nets/open-area", desc: "Protect open areas in buildings, complexes, and public spaces with durable safety nets. Custom sizes available." },
  { image: staircaseNetsNew, title: "Staircase Safety Nets", path: "/safety-nets/staircase", desc: "Staircase safety nets to prevent children and pets from falling through staircase gaps. Easy installation on all railing types." },
  { image: constructionNetsNew, title: "Construction Safety Nets", path: "/safety-nets/construction", desc: "Construction site safety nets as per government regulations. Debris nets, fall protection nets, and scaffold safety nets." },
  { image: swimmingPoolNew, title: "Swimming Pool Safety Nets", path: "/safety-nets/swimming-pool", desc: "Protect your swimming pool area with safety nets to prevent accidental drowning. Strong enough to hold weight if someone falls." },
  { image: monkeyNetsNew, title: "Monkey Net For Balconies", path: "/safety-nets/monkey", desc: "Strong monkey-proof safety nets for balconies in areas prone to monkey intrusion. Durable and tear-resistant material." },
  { image: carParkingNew, title: "Car Parking Safety Nets", path: "/safety-nets/car-parking", desc: "HDPE shade nets for car parking areas providing protection from sun, rain, and falling objects. Available in various shade percentages." },
  { image: coconutNets, title: "Coconut Tree Safety Nets", path: "/safety-nets/coconut-tree", desc: "Safety nets around coconut trees to catch falling coconuts and prevent injuries. Essential for residential areas with coconut trees." },
  { image: hdpeNylonNew, title: "HDPE Nets, Nylon Nets", path: "/safety-nets/hdpe-nylon", desc: "High-quality HDPE and Nylon nets available in various sizes, colors, and mesh specifications. Bulk orders available at wholesale prices." },
];

const SafetyNets = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Safety Nets Services</h1>
          <p className="text-background/80 text-lg">Complete Range of Safety Net Solutions in Bangalore</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} title={s.title} path={s.path} />
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection backgroundImage={parallaxBg2}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-cta mb-4">
            Need Safety Nets for Your Property?
          </h2>
          <p className="text-background/80 text-lg mb-8">Free site inspection and installation across Bangalore</p>
          <a href="tel:7795891177" className="cta-button text-lg">Call For Free Quote</a>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="section-title mb-10">All Safety Net Services in Detail</h2>
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

export default SafetyNets;
