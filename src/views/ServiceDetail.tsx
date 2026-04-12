import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { BadgeCheck, Clock3, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";
import { toImageSrc, type ImageLike } from "@/lib/image";

import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import buildingNets from "@/assets/building-nets.jpg";
import industrialNets from "@/assets/industrial-nets.jpg";
import staircaseNets from "@/assets/staircase-nets.jpg";
import swimmingPoolNets from "@/assets/swimming-pool-nets.jpg";
import carParkingNets from "@/assets/car-parking-nets.jpg";
import coconutNets from "@/assets/coconut-nets.jpg";
import birdSpikes from "@/assets/bird-spikes.jpg";
import sportsNets from "@/assets/sports-nets.jpg";
import ductAreaSafety from "@/assets/duct-area-safety.jpg";
import openAreaSafety from "@/assets/open-area-safety.jpg";
import pigeonNets2k from "@/assets/pigeon-nets-2k.jpg";
import pigeonNetsInstallation from "@/assets/pigeon-nets-installation.jpg";
import parallaxBg from "@/assets/parallax-bg.jpg";
import staircaseNetsNew from "@/assets/staircase-nets-new.jpg";
import balconySafetyNew from "@/assets/balcony-safety-new.jpg";
import terraceTopNew from "@/assets/terrace-top-new.jpg";
import industrialSafetyNew from "@/assets/industrial-safety-new.jpg";
import swimmingPoolNew from "@/assets/swimming-pool-new.jpg";
import carParkingNew from "@/assets/car-parking-new.jpg";
import birdProtectionNew from "@/assets/bird-protection-new.jpg";

interface ServiceInfo {
  title: string;
  image: ImageLike;
  description: string[];
  features: string[];
}

export const serviceData: Record<string, ServiceInfo> = {
  "balcony": {
    title: "Balcony Safety Nets in Bangalore",
    image: balconyNets,
    description: [
      "Vicky Safety Nets provides premium quality balcony safety nets installation services across Bangalore. Our balcony safety nets are made from high-grade nylon and HDPE material that is UV-resistant, weather-proof, and highly durable.",
      "Living in a high-rise apartment comes with the risk of accidental falls from balconies, especially for children and pets. Our safety nets act as an invisible shield that provides complete protection without blocking your view or ventilation.",
      "We offer free site inspection and same-day installation service. Our experienced team ensures perfect fitting with minimal drilling and no damage to your property."
    ],
    features: ["UV-resistant nylon material", "Free installation", "Custom sizes available", "5+ years durability", "Transparent & invisible look", "Same day service"]
  },
  "kids": {
    title: "Kids Safety Nets for Balconies in Bangalore",
    image: balconyNets,
    description: [
      "Kids Safety Nets For Balconies Are Specially Designed Protective Solutions Installed To Ensure The Safety Of Children In Residential And Commercial Spaces. These Nets Act As Strong Barriers That Prevent Children From Slipping Through Balcony Railings Or Climbing Into Dangerous Areas.",
      "The primary purpose of kids safety nets is prevention. Children are naturally curious and often unaware of potential dangers around them. Balconies, especially in high-rise buildings, can pose serious risks. Safety nets effectively block access to open edges, reducing the chances of accidents and providing peace of mind to parents.",
      "These nets are made from high-quality, non-toxic, and durable materials that are completely safe for children. They are designed to withstand pressure and external conditions while maintaining flexibility and strength.",
      "Additionally, kids safety nets do not affect ventilation or visibility. Families can continue to enjoy fresh air and open views without compromising safety. The installation process is quick, secure, and does not damage walls or structures.",
      "Moreover, these nets are cost-effective compared to other safety solutions such as grills or glass barriers. They can be customized according to balcony size and design.",
      "In conclusion, kids safety nets are essential for ensuring child safety, preventing accidents, maintaining airflow, and offering a reliable and affordable safety solution for modern homes."
    ],
    features: ["Non-toxic & safe materials", "Does not affect ventilation", "Cost-effective solution", "Custom sizes available", "Quick & secure installation", "No wall damage"]
  },
  "pets": {
    title: "Pets Safety Nets in Bangalore",
    image: pigeonNets,
    description: [
      "Pets Safety Nets Are Designed To Protect Domestic Animals From Falling Or Escaping From Balconies, Windows, And Open Areas. These nets are especially useful for pet owners living in apartments or high-rise buildings.",
      "The main purpose of pet safety nets is to create a secure environment. Pets, particularly cats and small dogs, tend to climb or jump onto railings and edges, which can lead to dangerous falls. Safety nets provide a protective barrier that prevents such incidents.",
      "These nets are made from strong and flexible materials that can withstand scratching, biting, and external weather conditions. They are safe for pets and do not cause any harm.",
      "Additionally, pet safety nets allow pets to enjoy fresh air and outdoor views without restriction. They maintain proper airflow and do not block natural light.",
      "Installation is simple and can be customized based on the layout of balconies or windows. The nets are designed to blend with the surroundings and maintain the aesthetic appeal of the space.",
      "In conclusion, pet safety nets are an essential investment for pet owners, ensuring safety, comfort, and freedom for pets while preventing accidents."
    ],
    features: ["Scratch & bite resistant", "Allows fresh air & light", "Custom layout fitting", "Aesthetic design", "Weather resistant", "Safe for all pets"]
  },
  "grill-balcony": {
    title: "Grill Balcony Safety Nets in Bangalore",
    image: balconySafetyNew,
    description: [
      "Even grilled balconies need additional safety nets, especially when the grill gaps are wide enough for children or objects to pass through.",
      "Our grill balcony safety nets are designed to fit perfectly on existing grills without any structural modifications. We use specialized clips and fasteners for secure attachment.",
      "The transparent nylon nets blend seamlessly with your existing grills, providing invisible yet effective protection."
    ],
    features: ["Fits on existing grills", "No structural changes needed", "Transparent appearance", "Clip-on installation", "Weather resistant", "Custom measurement"]
  },
  "terrace": {
    title: "Terrace Top Safety Nets in Bangalore",
    image: terraceTopNew,
    description: [
      "Cover your terrace with high-quality safety nets from Vicky Safety Nets. Terrace top nets prevent accidental falls and keep your terrace area safe for all activities.",
      "Our terrace nets are ideal for residential buildings, schools, and commercial properties. They provide protection from falls while allowing sunlight and air to pass through.",
      "We use heavy-duty nylon nets with steel cable support for large terrace areas, ensuring the nets remain taut and effective in all weather conditions."
    ],
    features: ["Heavy-duty nylon material", "Steel cable support", "Large area coverage", "Weather proof", "Allows light & air", "Professional installation"]
  },
  "industrial": {
    title: "Industrial Safety Nets in Bangalore",
    image: industrialSafetyNew,
    description: [
      "Industrial Safety Nets Are Heavy-Duty Protective Systems Used In Construction Sites, Factories, And Warehouses To Prevent Accidents And Ensure Worker Safety. These nets are designed to handle high impact and provide maximum protection.",
      "The main purpose of industrial safety nets is accident prevention. In high-risk environments, workers are exposed to dangers such as falling from heights or being hit by falling objects. Safety nets act as a reliable protective layer.",
      "These nets are manufactured using high-strength materials capable of handling heavy loads and harsh conditions. They comply with safety standards and regulations.",
      "Additionally, industrial safety nets improve productivity by creating a safer working environment. Workers can perform their tasks with confidence, reducing stress and risk.",
      "Installation is carried out by trained professionals to ensure proper support and durability. The nets are designed to last long even in extreme environments.",
      "In conclusion, industrial safety nets are essential for workplace safety, reducing risks, ensuring compliance, and protecting workers effectively."
    ],
    features: ["High-impact resistance", "Safety compliant", "Improves productivity", "Professional installation", "Extreme durability", "All industrial spaces"]
  },
  "building": {
    title: "Building Safety Nets in Bangalore",
    image: buildingNets,
    description: [
      "Complete building safety net solutions for residential complexes, commercial buildings, and high-rise structures. Our nets prevent falls from heights and protect both residents and pedestrians.",
      "We install safety nets around the entire building perimeter, duct areas, open shafts, and common areas. Our nets are designed to withstand heavy loads and extreme weather.",
      "Building safety nets are now mandatory in many residential complexes. Vicky Safety Nets provides compliant installation with proper documentation."
    ],
    features: ["Full building coverage", "Heavy load capacity", "Compliance documentation", "Perimeter protection", "Duct area coverage", "Long-lasting material"]
  },
  "duct-area": {
    title: "Duct Area Safety Nets in Bangalore",
    image: ductAreaSafety,
    description: [
      "Duct areas in buildings are common accident spots. Our duct area safety nets prevent accidental falls and keep these areas safe for maintenance workers.",
      "We provide custom-fit nets for duct areas of all sizes and shapes. Our team measures each duct area precisely to ensure complete coverage.",
      "The nets are installed with heavy-duty fasteners and can support significant weight, providing reliable protection in these critical areas."
    ],
    features: ["Custom duct area fitting", "Heavy-duty fasteners", "Weight-bearing capacity", "All shapes covered", "Maintenance-friendly", "Quick installation"]
  },
  "open-area": {
    title: "Open Area Safety Nets in Bangalore",
    image: openAreaSafety,
    description: [
      "Protect open areas in buildings, complexes, and public spaces with our durable safety nets. Open areas like courtyards, light wells, and gaps between buildings need protection.",
      "Our open area nets are made from heavy-gauge nylon that can cover large spans. We use cable systems to support nets across wide areas.",
      "Whether it's a residential complex or a commercial property, we provide customized solutions for all types of open areas."
    ],
    features: ["Large span coverage", "Cable support system", "Heavy-gauge nylon", "All property types", "Custom solutions", "Professional team"]
  },
  "staircase": {
    title: "Staircase Safety Nets in Bangalore",
    image: staircaseNetsNew,
    description: [
      "Staircase safety nets prevent children and pets from falling through staircase gaps and railings. Essential for homes with young children.",
      "Our staircase nets are easy to install on all types of railings including wooden, metal, and glass. We use transparent nets that don't affect the look of your staircase.",
      "The nets are made from soft, child-safe material and can be easily removed when no longer needed."
    ],
    features: ["Child-safe material", "Fits all railing types", "Transparent design", "Easy removal", "Quick installation", "No damage to railings"]
  },
  "construction": {
    title: "Construction Safety Nets in Bangalore",
    image: buildingNets,
    description: [
      "Construction safety nets are mandatory at construction sites to prevent falls and catch debris. Vicky Safety Nets provides government-compliant construction safety nets.",
      "We offer debris nets, scaffold nets, fall arrest nets, and perimeter safety nets for construction sites of all sizes.",
      "Our construction nets meet IS standards and come with quality certification. We also provide installation and removal services."
    ],
    features: ["Government compliant", "IS standard certified", "Debris & fall nets", "Scaffold safety", "Installation & removal", "All site sizes"]
  },
  "swimming-pool": {
    title: "Swimming Pool Safety Nets in Bangalore",
    image: swimmingPoolNew,
    description: [
      "Swimming pool safety nets prevent accidental drowning, especially for children and pets. Our pool nets are strong enough to hold the weight of a child if they accidentally walk onto it.",
      "We provide custom-fit nets for pools of all shapes and sizes. The nets can be easily removed for swimming and re-installed quickly.",
      "Our pool safety nets are made from chlorine-resistant material that doesn't degrade from pool water exposure."
    ],
    features: ["Supports child weight", "Chlorine resistant", "Custom pool shapes", "Easy removal/install", "UV resistant", "Strong fastening system"]
  },
  "monkey": {
    title: "Monkey Net for Balconies in Bangalore",
    image: balconyNets,
    description: [
      "Monkey-proof safety nets for balconies in areas prone to monkey intrusion. Our nets are made from extra-strong material that monkeys cannot tear or bite through.",
      "Monkeys can cause significant damage to homes and are a safety concern for residents. Our monkey nets provide a reliable barrier while being humane.",
      "We use thicker nylon nets with reinforced edges for monkey protection. The nets are tested for strength and durability."
    ],
    features: ["Extra-strong material", "Tear resistant", "Bite proof", "Reinforced edges", "Humane protection", "Durable installation"]
  },
  "car-parking": {
    title: "Car Parking Safety Nets in Bangalore",
    image: carParkingNew,
    description: [
      "HDPE shade nets for car parking areas provide protection from sun, rain, and falling objects. Keep your vehicles safe from harsh weather and debris.",
      "Our car parking nets are available in various shade percentages (50%, 75%, 90%) to suit your requirements. They significantly reduce heat inside parked vehicles.",
      "We provide installation for individual parking spots, entire parking lots, and commercial parking areas."
    ],
    features: ["Various shade percentages", "UV protection", "Rain protection", "Reduces vehicle heat", "All parking sizes", "Durable HDPE material"]
  },
  "coconut-tree": {
    title: "Coconut Tree Safety Nets in Bangalore",
    image: coconutNets,
    description: [
      "Coconut tree safety nets catch falling coconuts and prevent injuries to people below. Essential for residential areas, temples, and public spaces with coconut trees.",
      "Our coconut tree nets are made from heavy-duty material that can withstand the impact of falling coconuts. They are designed to catch coconuts safely without damaging them.",
      "We provide professional installation around the tree canopy with proper support structures."
    ],
    features: ["Impact resistant", "Catches coconuts safely", "Heavy-duty material", "Professional installation", "All tree sizes", "Weather resistant"]
  },
  "hdpe-nylon": {
    title: "HDPE & Nylon Nets in Bangalore",
    image: industrialNets,
    description: [
      "We supply high-quality HDPE and Nylon nets for various applications. Available in different mesh sizes, colors, and specifications.",
      "Our nets are sourced from top manufacturers and undergo quality testing before delivery. Bulk orders available at wholesale prices.",
      "Whether you need nets for safety, agriculture, sports, or industrial use, we have the right product for you."
    ],
    features: ["Multiple mesh sizes", "Various colors", "Quality tested", "Bulk orders available", "Wholesale prices", "All applications"]
  },
  "pigeon-nets": {
    title: "Pigeon Nets in Bangalore",
    image: pigeonNets,
    description: [
      "Pigeon Nets Are Highly Effective Bird Control Solutions Installed To Prevent Pigeons From Entering Balconies, Windows, And Building Spaces. These nets help maintain cleanliness and hygiene in residential and commercial areas.",
      "The primary purpose of pigeon nets is to prevent birds from nesting and creating mess. Pigeons often leave droppings, feathers, and debris that can lead to health issues and damage property.",
      "These nets are made from durable, UV-resistant materials that can withstand various weather conditions. They are designed to be long-lasting and require minimal maintenance.",
      "Additionally, pigeon nets are eco-friendly and do not harm birds. They simply act as barriers that restrict entry while allowing air and light to pass through.",
      "Professional installation ensures that there are no gaps, providing complete protection. The nets are customized to fit balconies, windows, and open areas perfectly.",
      "In conclusion, pigeon nets are an effective, humane, and long-term solution for bird control, helping maintain a clean and healthy environment."
    ],
    features: ["UV-resistant material", "Eco-friendly & humane", "Minimal maintenance", "No gaps guaranteed", "Custom fitting", "Long-lasting protection"]
  },
  "pigeon-safety": {
    title: "Pigeon Safety Nets in Bangalore",
    image: pigeonNets2k,
    description: [
      "Complete pigeon safety net solutions for residential apartments and commercial buildings. Stop pigeons from nesting and dirtying your property.",
      "Our pigeon safety nets cover balconies, windows, terraces, and any open areas where pigeons tend to enter. The nets are virtually invisible from a distance.",
      "We have installed pigeon safety nets in thousands of apartments across Bangalore with 100% customer satisfaction."
    ],
    features: ["Complete area coverage", "Virtually invisible", "Thousands installed", "100% satisfaction", "All building types", "Warranty included"]
  },
  "pigeon-installation": {
    title: "Pigeon Nets Installation in Bangalore",
    image: pigeonNetsInstallation,
    description: [
      "Professional pigeon net installation service by trained experts. We ensure perfect fitting and secure installation for lasting protection.",
      "Our installation process includes free site visit, measurement, custom cutting, and professional fixing. We use high-quality clips and fasteners for secure attachment.",
      "Same-day installation available. We handle all types of buildings including high-rises with our experienced team."
    ],
    features: ["Free site visit", "Same-day service", "Expert installation", "High-rise experience", "Quality fasteners", "Clean installation"]
  },
  "bird-spikes": {
    title: "Bird Spikes in Bangalore",
    image: birdSpikes,
    description: [
      "Stainless steel bird spikes for ledges, parapets, window sills, and AC units. A humane bird deterrent that prevents birds from perching and nesting.",
      "Bird spikes are the most effective solution for keeping birds off specific surfaces. They don't harm birds but simply prevent them from landing.",
      "Our bird spikes are made from high-grade stainless steel that doesn't rust or corrode. Available in polycarbonate base for easy installation."
    ],
    features: ["Stainless steel", "Humane deterrent", "Rust-proof", "Easy installation", "All surfaces", "Long-lasting"]
  },
  "bird-protection": {
    title: "Bird Protection Nets in Bangalore",
    image: birdProtectionNew,
    description: [
      "Comprehensive bird protection net solutions for all types of buildings. Our nets keep all species of birds away without harming them.",
      "Bird protection nets are essential for food processing units, warehouses, hospitals, and residential buildings where bird intrusion causes hygiene issues.",
      "We provide customized bird protection solutions based on the specific bird problem and building structure."
    ],
    features: ["All bird species", "Food-grade available", "Custom solutions", "Hygiene compliant", "All building types", "Expert consultation"]
  },
  "anti-bird": {
    title: "Anti Bird Nets in Bangalore",
    image: pigeonNets,
    description: [
      "Anti-bird nets for commercial and residential properties. Effective solution to prevent birds from entering and damaging your property.",
      "Our anti-bird nets are available in various mesh sizes suitable for different bird species. Fine mesh for sparrows and larger mesh for pigeons and crows.",
      "Food-grade anti-bird nets available for food processing areas, restaurants, and commercial kitchens."
    ],
    features: ["Various mesh sizes", "Species-specific", "Food-grade options", "Commercial grade", "UV resistant", "Custom installation"]
  },
  "pigeon-balconies": {
    title: "Pigeon Nets for Balconies in Bangalore",
    image: pigeonNets,
    description: [
      "Custom-fit pigeon nets specifically designed for balcony spaces. Available in transparent and colored options to match your home decor.",
      "Our balcony pigeon nets are designed to provide maximum protection while maintaining the aesthetic appeal of your balcony.",
      "We install pigeon nets on all types of balconies including open balconies, grilled balconies, and covered balconies."
    ],
    features: ["Custom balcony fitting", "Transparent options", "Aesthetic design", "All balcony types", "Quick installation", "Durable material"]
  },
  "sparrow": {
    title: "Sparrow Protection Nets in Bangalore",
    image: pigeonNets,
    description: [
      "Fine mesh sparrow protection nets to prevent small birds from entering homes and offices. Smaller mesh size compared to regular pigeon nets.",
      "Sparrows can enter through very small gaps and build nests inside homes, causing mess and hygiene issues. Our fine mesh nets prevent even the smallest birds from entering.",
      "Available in transparent material that doesn't block light or ventilation while providing complete sparrow protection."
    ],
    features: ["Extra fine mesh", "Sparrow-proof", "Transparent material", "Light & air flow", "All gap sizes", "Expert fitting"]
  },
  "anti-seagull": {
    title: "Anti Seagull Nets in Bangalore",
    image: pigeonNets,
    description: [
      "Heavy-duty anti-seagull nets for coastal properties and commercial areas. Our nets are designed to withstand the larger size and strength of seagulls.",
      "Seagulls can be aggressive and cause significant property damage. Our anti-seagull nets provide effective protection for rooftops, terraces, and outdoor dining areas.",
      "The nets are made from salt-water resistant material suitable for coastal environments."
    ],
    features: ["Heavy-duty material", "Salt-water resistant", "Large bird proof", "Rooftop coverage", "Outdoor dining protection", "Coastal grade"]
  },
  "cricket": {
    title: "Cricket Practice Nets in Bangalore",
    image: cricketNets,
    description: [
      "Cricket Practice Nets Are Professional Training Solutions Designed For Players To Practice Safely Without Losing Balls Or Causing Damage To Surroundings. These nets are widely used in schools, academies, and personal training areas.",
      "The primary purpose of cricket nets is to create a controlled practice environment. Players can focus on improving their skills without interruptions or safety concerns.",
      "These nets are made from strong and durable materials that can withstand repeated ball impact. They are suitable for both indoor and outdoor use.",
      "Additionally, cricket practice nets can be installed in terraces, playgrounds, and sports complexes. They are customizable based on available space.",
      "Professional installation ensures stability and long-term usage. The nets are weather-resistant and require minimal maintenance.",
      "In conclusion, cricket practice nets are essential for safe, efficient, and uninterrupted training sessions, making them a valuable addition to any sports facility."
    ],
    features: ["Withstands ball impact", "Indoor & outdoor use", "Customizable sizes", "Weather resistant", "Minimal maintenance", "Professional installation"]
  },
  "ball-stop": {
    title: "Sports Ball Stop Nets in Bangalore",
    image: sportsNets,
    description: [
      "Tall ball stop netting for sports grounds, stadiums, and residential areas near sports facilities. Prevents balls from leaving the playing area.",
      "Our ball stop nets are available in heights up to 40 feet and can cover large perimeter areas. Made from heavy-duty nylon that can withstand powerful ball impacts.",
      "We provide installation with steel poles and cable systems for maximum stability."
    ],
    features: ["Up to 40ft height", "Heavy impact resistance", "Steel pole support", "Cable system", "Large area coverage", "All sports"]
  },
  "football": {
    title: "Football Stop Netting in Bangalore",
    image: sportsNets,
    description: [
      "Football Stop Netting Is Designed To Prevent Balls From Leaving The Play Area, Ensuring Safety And Convenience In Sports Grounds And Playgrounds.",
      "The main purpose of football netting is to control ball movement. It reduces the risk of damage to nearby property and ensures that games can continue without interruptions.",
      "These nets are made from high-quality materials that can handle strong impacts and outdoor conditions.",
      "Additionally, football stop nets improve safety for spectators and nearby areas. They are widely used in schools, stadiums, and recreational grounds.",
      "Installation is done professionally to ensure proper coverage and durability.",
      "In conclusion, football stop netting is a reliable solution for maintaining safety and efficiency in sports environments."
    ],
    features: ["Prevents ball escape", "Spectator safety", "Strong impact resistance", "Schools & stadiums", "Professional coverage", "Durable outdoor material"]
  },
  "terrace-cricket": {
    title: "Terrace Cricket Nets in Bangalore",
    image: cricketNets,
    description: [
      "Custom terrace cricket net installations for residential buildings. Practice cricket safely on your building terrace without worrying about balls flying off.",
      "Our terrace cricket nets include a complete enclosure with roof coverage, side netting, and a practice pitch area. Made from durable green nylon.",
      "We design the enclosure based on your terrace dimensions and install it with proper structural support."
    ],
    features: ["Complete enclosure", "Roof coverage", "Custom dimensions", "Structural support", "Durable nylon", "Safe practice"]
  },
  "installation": {
    title: "Sports Nets Installation in Bangalore",
    image: sportsNets,
    description: [
      "Complete sports net installation services for schools, academies, residential complexes, and commercial sports facilities.",
      "We handle all aspects of sports net installation from measurement and material selection to frame construction and net fixing.",
      "Our team has extensive experience in large-scale sports net projects and can handle installations of any complexity."
    ],
    features: ["Complete service", "All sports types", "Large-scale projects", "Schools & academies", "Frame construction", "Expert team"]
  },
  "all": {
    title: "All Sports Nets in Bangalore",
    image: sportsNets,
    description: [
      "Nets for cricket, football, badminton, volleyball, tennis, throwball, and all other sports. Custom sizes and specifications available.",
      "Whether you need a small backyard practice net or a full stadium installation, Vicky Safety Nets has the right solution for you.",
      "We source our sports nets from premium manufacturers and guarantee quality and durability."
    ],
    features: ["All sports covered", "Custom specifications", "Premium quality", "Backyard to stadium", "Competitive pricing", "Quality guarantee"]
  },
};

interface ServiceDetailProps {
  type?: string;
}

const ServiceDetail = ({ type }: ServiceDetailProps) => {
  const service = serviceData[type || ""] || serviceData["balcony"];

  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-cta mb-4">{service.title}</h1>
          <p className="text-background/80 text-lg">Professional Installation by Vicky Safety Nets</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-4">
              <Phone className="mb-2 h-7 w-7 text-primary" />
              <p className="font-heading text-lg font-bold text-foreground">Direct Phone Support</p>
              <p className="text-sm text-muted-foreground">Talk to us directly for pricing and installation details.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <Clock3 className="mb-2 h-7 w-7 text-primary" />
              <p className="font-heading text-lg font-bold text-foreground">Fast Quote</p>
              <p className="text-sm text-muted-foreground">Great for urgent residential and commercial requirements.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <MapPin className="mb-2 h-7 w-7 text-primary" />
              <p className="font-heading text-lg font-bold text-foreground">Bangalore Coverage</p>
              <p className="text-sm text-muted-foreground">Local support with service across Bangalore areas.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <BadgeCheck className="mb-2 h-7 w-7 text-primary" />
              <p className="font-heading text-lg font-bold text-foreground">Free Site Visit</p>
              <p className="text-sm text-muted-foreground">Call first to confirm site inspection and availability.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img src={toImageSrc(service.image)} alt={service.title} className="w-full h-80 object-cover rounded-lg shadow-xl" />
              <div className="mt-6 bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="font-heading font-bold text-xl mb-4">Key Features</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-cta">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {service.description.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              <div className="bg-muted p-6 rounded-lg mt-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Get Free Quote</h3>
                <p className="text-muted-foreground mb-4">
                  Call us for a fast estimate, free site inspection, and installation guidance for this service.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    onClick={() => trackLeadClick("call", `service_detail_${type || "balcony"}`)}
                    className="cta-button block text-center"
                  >
                    Call Now: +91 {BUSINESS_PHONE}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackLeadClick("whatsapp", `service_detail_${type || "balcony"}`)}
                    className="block rounded-lg bg-[#25D366] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#1ebe5a]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircleMore className="h-4 w-4" />
                      WhatsApp For Fast Quote
                    </span>
                  </a>
                  <a href="mailto:vickysafetynets552@gmail.com" className="block text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default ServiceDetail;
