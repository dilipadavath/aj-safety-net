import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { useState } from "react";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
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

const images = [
  { src: balconyNets, title: "Balcony Safety Nets" },
  { src: pigeonNets, title: "Pigeon Protection Nets" },
  { src: cricketNets, title: "Cricket Practice Nets" },
  { src: buildingNets, title: "Building Safety Nets" },
  { src: industrialNets, title: "Industrial Safety Nets" },
  { src: staircaseNets, title: "Staircase Safety Nets" },
  { src: swimmingPoolNets, title: "Swimming Pool Nets" },
  { src: carParkingNets, title: "Car Parking Nets" },
  { src: coconutNets, title: "Coconut Tree Nets" },
  { src: birdSpikes, title: "Bird Spikes" },
  { src: sportsNets, title: "Sports Nets" },
];

const Gallery = () => {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Layout>
      {/* Glass Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/80 to-secondary/70 py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <img src={toImageSrc(parallaxBg)} alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-4 drop-shadow-xl">Our Gallery</h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-6">See Our Work Across Bangalore</p>
        </div>
      </div>

      {/* Gallery Masonry Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((img, i) => (
              <button
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-xl focus:outline-none"
                onClick={() => setModal(i)}
                aria-label={`View ${img.title}`}
              >
                <img src={toImageSrc(img.src)} alt={img.title} loading="lazy" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                  <p className="text-background font-heading font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setModal(null)}>
          <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <img src={toImageSrc(images[modal].src)} alt={images[modal].title} className="w-full rounded-2xl shadow-2xl" />
            <button className="absolute top-2 right-2 bg-background/80 rounded-full p-2 text-primary font-bold shadow-lg" onClick={() => setModal(null)} aria-label="Close">✕</button>
            <div className="text-background text-lg font-heading font-semibold text-center mt-4">{images[modal].title}</div>
          </div>
        </div>
      )}

      {/* CTA Bar */}
      <section className="py-10 bg-primary/90">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-background mb-2 md:mb-0">Want to see more or book a free site visit?</h2>
          <div className="flex gap-3">
            <a href="tel:6363331537" className="cta-button btn-lg text-lg md:text-xl font-bold shadow-xl">Call 6363331537</a>
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default Gallery;
