import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import PromotionalServicesSection from "@/components/PromotionalServicesSection";
import EnquiryBar from "@/components/EnquiryBar";
import ParallaxSection from "@/components/ParallaxSection";
import WhyUsFeatures from "@/components/WhyUsFeatures";
import { ArrowRight, BadgeCheck, Clock3, MapPin, MessageCircleMore, Phone, ShieldCheck } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";
import { toImageSrc } from "@/lib/image";

import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import buildingNets from "@/assets/building-nets.jpg";
import industrialNets from "@/assets/industrial-nets.jpg";
import industrialSafetyNew from "@/assets/industrial-safety-new.jpg";
import staircaseNets from "@/assets/staircase-nets.jpg";
import staircaseNetsNew from "@/assets/staircase-nets-new.jpg";
import openAreaSafety from "@/assets/open-area-safety.jpg";
import coconutNets from "@/assets/coconut-nets.jpg";
import kidsSafetyNew from "@/assets/kids-safety-new.jpg";
import petsSafetyNew from "@/assets/pets-safety-new.jpg";
import monkeyNetsNew from "@/assets/monkey-nets-new.jpg";
import grillBalconyNew from "@/assets/grill-balcony-new.jpg";
import heroBalconyHanger from "@/assets/hero-balcony-hanger.jpeg";
import heroInvisibleGrilles from "@/assets/hero-invisible-grilles.jpeg";
import parallaxBg from "@/assets/parallax-bg.jpg";
import parallaxBg2 from "@/assets/parallax-bg2.jpg";

const services = [
  { image: balconyNets, title: "Balcony Nets", path: "/safety-nets/balcony" },
  { image: pigeonNets, title: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
  { image: cricketNets, title: "Cricket Nets", path: "/sports-nets/cricket" },
  { image: buildingNets, title: "Building Nets", path: "/safety-nets/building" },
  { image: industrialNets, title: "Industrial Nets", path: "/safety-nets/industrial" },
  { image: staircaseNetsNew, title: "Staircase Nets", path: "/safety-nets/staircase" },
  { image: heroInvisibleGrilles, title: "Invisible Grilles", path: "/safety-nets/grill-balcony" },
  { image: heroBalconyHanger, title: "Balcony Hanger", path: "/safety-nets/building" },
];

const promotionalServices = [
  {
    image: balconyNets,
    title: "Balcony Safety Nets",
    description: "Protect your family with premium balcony safety nets designed for durability and security.",
    path: "/safety-nets/balcony",
  },
  {
    image: pigeonNets,
    title: "Pigeon Protection Nets",
    description: "Keep pigeons and birds away with our effective bird protection netting solutions.",
    path: "/bird-protection/pigeon-nets",
  },
  {
    image: cricketNets,
    title: "Cricket Practice Nets",
    description: "Professional-grade cricket nets for practice facilities and sports academies.",
    path: "/sports-nets/cricket",
  },
  {
    image: buildingNets,
    title: "Building Safety Nets",
    description: "Industrial-strength nets for construction sites and building facades.",
    path: "/safety-nets/building",
  },
  {
    image: industrialNets,
    title: "Industrial Safety Nets",
    description: "Heavy-duty safety nets for warehouses, factories, and industrial applications.",
    path: "/safety-nets/industrial",
  },
  {
    image: staircaseNetsNew,
    title: "Staircase Safety Nets",
    description: "Secure your staircase areas with our specially designed staircase safety netting.",
    path: "/safety-nets/staircase",
  },
];

const leadHighlights = [
  {
    icon: Phone,
    title: "Fast Response Calls",
    description: "Speak directly with us for pricing, site inspection scheduling, and service availability.",
  },
  {
    icon: Clock3,
    title: "Same-Day Support",
    description: "Ideal for urgent balcony, pigeon, staircase, and open-area safety requirements.",
  },
  {
    icon: MapPin,
    title: "Bangalore Coverage",
    description: "Local service for homes, apartments, offices, schools, and commercial buildings.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Installation",
    description: "Reliable fitting with durable materials for residential and commercial spaces.",
  },
];

const featuredSafetyNetServices = [
  {
    image: balconyNets,
    title: "Balcony Safety Nets",
    path: "/safety-nets/balcony",
    description:
      "Ensure balcony safety with our high-quality balcony safety nets service. Our durable nets provide protection against accidents and keep your loved ones safe. Customizable to fit any balcony size, our nets are easy to install and environmentally friendly.",
  },
  {
    image: pigeonNets,
    title: "Pigeon Nets",
    path: "/bird-protection/pigeon-nets",
    description:
      "Protect your property from pesky pigeons with our premium pigeon nets. Designed to deter birds while maintaining aesthetic appeal, our nets are durable, weather-resistant, and easy to install. Keep your premises clean and safe with our effective pigeon net solutions.",
  },
  {
    image: kidsSafetyNew,
    title: "Kids Net For Balcony",
    path: "/safety-nets/kids",
    description:
      "Create a secure play area for your little ones with our kids' nets for balconies. Made with child safety in mind, our nets offer a protective barrier without compromising on visibility. Easy to install and customize, they provide peace of mind while your children enjoy the outdoors.",
  },
  {
    image: petsSafetyNew,
    title: "Pets Safety Nets",
    path: "/safety-nets/pets",
    description:
      "Ensure the safety of your beloved pets with our reliable pet safety nets. Designed to create a secure environment for your furry friends, our nets are durable, non-toxic, and easy to install. Keep your pets protected from while allowing them to enjoy the outdoors.",
  },
  {
    image: industrialSafetyNew,
    title: "Industrial Safety Nets",
    path: "/safety-nets/industrial",
    description:
      "Ensure the safety of your beloved pets with our reliable pet safety nets. Designed to create a secure environment for your furry friends, our nets are durable, non-toxic, and easy to install. Keep your pets protected from while allowing them to enjoy the outdoors.",
  },
  {
    image: cricketNets,
    title: "Cricket Practice Nets",
    path: "/sports-nets/cricket",
    description:
      "Elevate your cricket training with our top-notch cricket practice nets. Crafted for durability and optimal performance, our nets provide a safe and controlled environment for players to hone their skills. Easy to set up and maintain, these nets are essential for every cricket enthusiast.",
  },
  {
    image: monkeyNetsNew,
    title: "Monkey Net For Balconies",
    path: "/safety-nets/monkey",
    description:
      "Create a safe and enjoyable space with our monkey nets for balconies. Designed to keep adventurous pets safe and secure, our nets are durable, weather-resistant, and easy to install. Let your furry friends roam freely while ensuring their safety.",
  },
  {
    image: coconutNets,
    title: "Coconut Tree Safety Nets",
    path: "/safety-nets/coconut-tree",
    description:
      "Protect your property and passersby from coconuts with our reliable coconut tree safety nets. Designed to withstand heavy loads and adverse weather conditions, our nets provide a secure barrier around coconut trees.",
  },
  {
    image: openAreaSafety,
    title: "Open Area Safety Nets",
    path: "/safety-nets/open-area",
    description:
      "Safeguard open areas with our reliable open area safety nets. Engineered to prevent and ensure workplace or residential safety, our nets are durable, weather-resistant, and easy to install. Protect people and property from potential hazards with our trusted open area safety nets.",
  },
  {
    image: staircaseNetsNew,
    title: "Staircase Safety Nets",
    path: "/safety-nets/staircase",
    description:
      "Ensure staircase safety with our premium staircase safety nets. Designed to prevent, our nets offer a secure barrier for all types of staircases. Durable, weather-resistant, and easy to install, they provide peace of mind for families and businesses alike. Protect your loved ones with our reliable staircase safety nets.",
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      
      {/* Announcement Bar */}
      <div className="bg-primary/95 overflow-hidden py-1">
        <div className="animate-slide-text pause-on-hover whitespace-nowrap text-xs text-primary-foreground/90 font-medium">
          ✓ Balcony Safety Nets • Pigeon Nets Installation • Building Safety Nets • Industrial Safety Nets • Children Safety Nets • Free Site Visit • Same-Day Service • Professional Installation
        </div>
      </div>
      
      <EnquiryBar />

      <section className="bg-background py-10">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <BadgeCheck className="h-4 w-4" />
                  Built For Faster Phone Leads
                </p>
                <h2 className="mb-3 font-heading text-3xl font-bold text-primary md:text-4xl">
                  Free Site Visit, Quick Quote, And Direct Phone Support
                </h2>
                <p className="max-w-2xl text-muted-foreground leading-7">
                  If someone visits from Google Ads, the fastest path should be clear: call us, confirm the area, and get an installation estimate without hunting around the website.
                </p>
              </div>
              <div className="rounded-2xl bg-muted p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Best Next Step
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  For urgent requirements, calling is the quickest way to confirm pricing, service availability, and inspection timing.
                </p>
                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  onClick={() => trackLeadClick("call", "homepage_best_next_step")}
                  className="cta-button mt-5 block text-center"
                >
                  Call Now For Free Quote
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackLeadClick("whatsapp", "homepage_best_next_step")}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1ebe5a]"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  WhatsApp For Quote
                </a>
              </div>
            </div>
            <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {leadHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-5">
                  <item.icon className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <PromotionalServicesSection services={featuredSafetyNetServices} />

      {/* Welcome Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title mb-6">Welcome to Vicky Safety Nets</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Vicky Safety Nets is one of the major traders and giving the best service across Bangalore. We have a net installation professional, who can fix nets in any safety required areas. We attempt to get flawlessness in the plans in every one of our items and Ensure Timely delivery.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Apart from our immense scope of items, we give simply the best as far as quality and no trade off is made surveys on this front. Also, we Ensure That All our items are accessible at focused costs and achieve our clients before the due date. We provide services for Balcony Safety Nets, Pigeon Nets, Bird Protection Nets, Anti Bird Nets, Children Safety Nets, Swimming Pool Safety Nets, Cricket Practice Nets and all types of sports nets across Bangalore.
          </p>
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-cta mb-4">
            All Kinds Of Safety Nets Services
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            We provide comprehensive safety net solutions for residential, commercial, and industrial properties across Bangalore.
          </p>
          <a
            href={`tel:${BUSINESS_PHONE}`}
            onClick={() => trackLeadClick("call", "homepage_parallax")}
            className="cta-button text-lg"
          >
            Get Free Quote Today
          </a>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {featuredSafetyNetServices.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <a href={service.path} className="block">
                  <img
                    src={toImageSrc(service.image)}
                    alt={service.title}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-3 font-heading text-xl font-bold text-primary">{service.title}</h3>
                  <p className="mb-5 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={service.path}
                      className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={`tel:${BUSINESS_PHONE}`}
                      onClick={() => trackLeadClick("call", `homepage_featured_${service.path}`)}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Phone className="h-4 w-4" />
                      +91 {BUSINESS_PHONE}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title mb-10">Why Choose Us?</h2>
          <WhyUsFeatures />
        </div>
      </section>

      {/* Testimonials Parallax */}
      <ParallaxSection backgroundImage={parallaxBg2}>
        <div className="container max-w-3xl text-center">
          <div className="text-4xl text-cta mb-4">"</div>
          <p className="text-background/90 text-lg italic mb-4">
            Well done job. Done the safety net work in the balcony of our house for kids safety and it was done well and the price was very reasonable. Over all happy with the service. Highly recommend Vicky Safety Nets for their professional installation.
          </p>
          <p className="text-background font-heading font-bold">— Rajesh, Bangalore</p>
        </div>
      </ParallaxSection>

      <EnquiryBar />
    </Layout>
  );
};

export default Index;
