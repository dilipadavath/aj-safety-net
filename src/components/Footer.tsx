import { Phone, Mail, MapPin } from "lucide-react";
import ajLogo from "@/assets/aj-logo.png";
import { toImageSrc } from "@/lib/image";

const Footer = () => {
  const safetyServices = [
    { label: "Balcony Safety Nets", path: "/safety-nets/balcony" },
    { label: "Kids Net For Balcony", path: "/safety-nets/kids" },
    { label: "Pets Safety Nets", path: "/safety-nets/pets" },
    { label: "Grill Balcony Safety Nets", path: "/safety-nets/grill-balcony" },
    { label: "Terrace Top Nets", path: "/safety-nets/terrace" },
    { label: "Industrial Safety Nets", path: "/safety-nets/industrial" },
    { label: "Building Safety Nets", path: "/safety-nets/building" },
    { label: "Duct Area Safety Nets", path: "/safety-nets/duct-area" },
    { label: "Open Area Safety Nets", path: "/safety-nets/open-area" },
    { label: "Staircase Safety Nets", path: "/safety-nets/staircase" },
    { label: "Construction Safety Nets", path: "/safety-nets/construction" },
    { label: "Swimming Pool Safety Nets", path: "/safety-nets/swimming-pool" },
    { label: "Monkey Net For Balconies", path: "/safety-nets/monkey" },
    { label: "Car Parking Safety Nets", path: "/safety-nets/car-parking" },
    { label: "Coconut Tree Safety Nets", path: "/safety-nets/coconut-tree" },
    { label: "HDPE Nets, Nylon Nets", path: "/safety-nets/hdpe-nylon" },
  ];

  const birdServices = [
    { label: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
    { label: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety" },
    { label: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation" },
    { label: "Bird Spikes", path: "/bird-protection/bird-spikes" },
    { label: "Bird Protection Nets", path: "/bird-protection/bird-protection" },
    { label: "Anti Bird Nets", path: "/bird-protection/anti-bird" },
    { label: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies" },
    { label: "Sparrow Protection Nets", path: "/bird-protection/sparrow" },
    { label: "Anti Seagull Nets", path: "/bird-protection/anti-seagull" },
    { label: "Cricket Practice Nets", path: "/sports-nets/cricket" },
    { label: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop" },
    { label: "Football Stop Netting", path: "/sports-nets/football" },
    { label: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket" },
    { label: "Sports Nets Installation", path: "/sports-nets/installation" },
    { label: "All Sports Nets", path: "/sports-nets/all" },
  ];

  return (
    <footer className="gradient-footer text-background/90 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30" />

      <div className="container-max py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="group reveal-item">
            <div className="mb-8 flex items-center gap-3">
              <img
                src={toImageSrc(ajLogo)}
                alt="AJ Safety Nets Logo"
                className="h-20 w-auto transition-transform duration-300 group-hover:scale-110 hover-glow"
                loading="lazy"
              />
            </div>
            <p className="text-base leading-relaxed opacity-90 font-medium">
              Premium safety solutions for homes and commercial spaces in Bangalore. Professional installation, lifetime support.
            </p>
          </div>

          <div className="reveal-item" style={{ animationDelay: '60ms' }}>
            <h3 className="mb-8 font-heading text-xl font-bold text-background">Our Services</h3>
            <ul className="space-between-normal">
              {safetyServices.slice(0, 6).map((s) => (
                <li key={s.path}>
                  <a href={s.path} className="text-sm opacity-90 transition-all duration-300 hover:text-background hover:opacity-100 hover:translate-x-1 inline-flex items-center gap-2 hover-lift">
                    <span>→</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-item" style={{ animationDelay: '120ms' }}>
            <h3 className="mb-8 font-heading text-xl font-bold text-background">More Services</h3>
            <ul className="space-between-normal">
              {birdServices.slice(0, 6).map((s) => (
                <li key={s.path}>
                  <a href={s.path} className="text-sm opacity-90 transition-all duration-300 hover:text-background hover:opacity-100 hover:translate-x-1 inline-flex items-center gap-2 hover-lift">
                    <span>→</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="group reveal-item" style={{ animationDelay: '180ms' }}>
            <h3 className="mb-8 font-heading text-xl font-bold text-background">Get In Touch</h3>
            <div className="space-between-loose">
              <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group hover-lift">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-background group-hover:scale-110 transition-transform" />
                <p className="text-sm opacity-90 font-medium"># 17, 17th Cross, MES Road, Muthyalanagar, Bangalore-54</p>
              </div>
              <a href="tel:6363331537" className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:translate-x-1 group hover-lift click-press">
                <Phone className="h-5 w-5 shrink-0 text-background group-hover:animate-pulse" />
                <span className="text-sm font-semibold">+91 6363331537</span>
              </a>
              <a href="mailto:vickysafetynets552@gmail.com" className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:translate-x-1 group hover-lift click-press">
                <Mail className="h-5 w-5 shrink-0 text-background" />
                <span className="text-sm font-semibold truncate">vickysafetynets552@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/30 py-8 text-center">
        <p className="text-sm font-semibold text-background/80">© {new Date().getFullYear()} AJ Safety Nets, Bangalore. All Rights Reserved.</p>
        <p className="text-xs text-background/60 mt-3">Premium Safety Solutions • Professional Installation • Lifetime Support</p>
        <p className="text-xs text-background/50 mt-2">
          Designed by{" "}
          <a
            href="https://www.asksolutionsindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-background/80 transition-colors"
          >
            Ask Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

