import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import ajLogo from "@/assets/aj-logo.png";
import { toImageSrc } from "@/lib/image";

const safetyNetsDropdown = [
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

const birdDropdown = [
  { label: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
  { label: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety" },
  { label: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation" },
  { label: "Bird Spikes", path: "/bird-protection/bird-spikes" },
  { label: "Bird Protection Nets", path: "/bird-protection/bird-protection" },
  { label: "Anti Bird Nets", path: "/bird-protection/anti-bird" },
  { label: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies" },
  { label: "Sparrow Protection Nets", path: "/bird-protection/sparrow" },
  { label: "Anti Seagull Nets", path: "/bird-protection/anti-seagull" },
];

const sportsDropdown = [
  { label: "Cricket Practice Nets", path: "/sports-nets/cricket" },
  { label: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop" },
  { label: "Football Stop Netting", path: "/sports-nets/football" },
  { label: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket" },
  { label: "Sports Nets Installation", path: "/sports-nets/installation" },
  { label: "All Sports Nets", path: "/sports-nets/all" },
];

const whyUsDropdown = [
  { label: "About", path: "/why-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ's", path: "/faq" },
];

interface DropdownProps {
  label: string;
  items: { label: string; path: string }[];
  isActive: boolean;
}

const NavDropdown = ({ label, items, isActive }: DropdownProps) => {
  return (
    <div className="relative group">
      <button className={`flex items-center gap-1 px-3 py-1.5 font-heading text-xs md:text-sm font-medium transition-colors ${isActive ? "text-secondary" : "text-foreground hover:text-primary"}`}>
        {label}
        <ChevronDown className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full z-50 hidden min-w-[220px] max-h-[calc(100vh-9rem)] overflow-y-auto rounded bg-foreground shadow-xl group-hover:block">
        {items.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="block px-4 py-2.5 text-sm text-background/90 hover:text-cta transition-colors hover:bg-foreground/90"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const allDropdowns = [
    { name: "Why Us", items: whyUsDropdown, prefix: "/why-us" },
    { name: "Safety Nets", items: safetyNetsDropdown, prefix: "/safety-nets" },
    { name: "Bird Protection Nets", items: birdDropdown, prefix: "/bird-protection" },
    { name: "All Sports Nets", items: sportsDropdown, prefix: "/sports-nets" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-lg">
      {/* Contact Bar */}
      <div className="topbar-bg py-1.5 border-b border-secondary/20">
        <div className="container flex flex-col gap-1 text-topbar-foreground text-xs sm:flex-row sm:items-center sm:justify-between sm:text-xs font-medium">
          <a href="tel:6363331537" className="flex items-center justify-center gap-2 text-center hover:text-secondary transition-colors duration-300 sm:justify-start">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-bold">+91 6363331537</span>
          </a>
          <a href="tel:9886061537" className="flex items-center justify-center gap-2 text-center hover:text-secondary transition-colors duration-300 sm:justify-start ml-4">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-bold">+91 9886061537</span>
          </a>
        </div>
      </div>

      <nav className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-foreground/5">
        <div className="container-max flex items-center justify-between gap-4 py-2.5 md:py-3">
          <a href="/" className="flex items-center gap-2">
  <img
    src={toImageSrc(ajLogo)}
    alt="AJ Safety Nets Logo"
    className="h-auto w-auto max-h-12 md:max-h-16 transition-transform duration-300"
  />
  <div className="hidden sm:flex flex-col gap-0.5">
    <h1 className="font-heading font-bold text-primary text-lg md:text-xl">
      AJ Safety Nets
    </h1>
    <p className="font-heading text-secondary text-xs md:text-sm font-semibold">
      Invisible Grilles
    </p>
  </div>
</a>

          <div className="hidden lg:flex items-center gap-1">
            <a href="/" className={`px-3 py-1.5 text-sm btn-md font-heading font-semibold rounded-lg transition-all duration-300 hover-lift click-press ${pathname === "/" ? "text-secondary bg-secondary/10" : "text-foreground hover:text-secondary hover:bg-foreground/5"}`}>
              Home
            </a>
            {allDropdowns.map((dd) => (
              <NavDropdown
                key={dd.name}
                label={dd.name}
                items={dd.items}
                isActive={pathname.startsWith(dd.prefix)}
              />
            ))}
            <a href="/contact" className={`px-3 py-1.5 text-sm btn-md font-heading font-semibold rounded-lg transition-all duration-300 hover-lift click-press ${pathname === "/contact" ? "text-secondary bg-secondary/10" : "text-foreground hover:text-secondary hover:bg-foreground/5"}`}>
              Contact
            </a>
          </div>

          <a href="tel:6363331537" className="hidden lg:block cta-button btn-md text-sm md:text-base click-press mr-2">
            Call 6363331537
          </a>
          {/* <a href="tel:9886061537" className="hidden lg:block cta-button btn-md text-sm md:text-base click-press ml-2">
            Call 9886061537
          </a> */}

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-3 hover:bg-foreground/5 rounded-lg transition-colors hover-lift">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-background border-t pb-4 space-between-normal">
            <a href="/" onClick={() => setMobileOpen(false)} className="block px-6 py-3 font-heading text-sm font-medium hover:bg-muted transition-colors hover-lift">Home</a>
            {allDropdowns.map((dd) => (
              <div key={dd.name}>
                <button onClick={() => toggleMobileDropdown(dd.name)} className="w-full flex justify-between items-center px-6 py-3 font-heading text-sm font-medium hover:bg-muted transition-colors">
                  {dd.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMobileDropdown === dd.name ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === dd.name && (
                  <div className="bg-muted space-between-tight">
                    {dd.items.map((item) => (
                      <a key={item.path} href={item.path} onClick={() => setMobileOpen(false)} className="block px-10 py-2.5 text-sm hover:text-primary transition-colors hover-lift">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/contact" onClick={() => setMobileOpen(false)} className="block px-6 py-3 font-heading text-sm font-medium hover:bg-muted transition-colors hover-lift">Contact</a>
            <div className="px-6 pt-2">
              <a href="tel:6363331537" className="cta-button block text-center btn-md text-sm click-press mb-2">Call 6363331537</a>
              <a href="tel:9886061537" className="cta-button block text-center btn-md text-sm click-press">Call 9886061537</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
