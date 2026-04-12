import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toImageSrc } from "@/lib/image";

import balconyNets from "@/assets/balcony-nets.jpg";
import balconySafetyNew from "@/assets/balcony-safety-new.jpg";
import birdSpikes from "@/assets/bird-spikes.jpg";
import buildingNets from "@/assets/building-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import ductAreaSafety from "@/assets/duct-area-safety.jpg";
import industrialNets from "@/assets/industrial-nets.jpg";
import industrialSafetyNew from "@/assets/industrial-safety-new.jpg";
import openAreaSafety from "@/assets/open-area-safety.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import pigeonNets2k from "@/assets/pigeon-nets-2k.jpg";
import pigeonNetsInstallation from "@/assets/pigeon-nets-installation.jpg";
import swimmingPoolNets from "@/assets/swimming-pool-nets.jpg";
import terraceTopNew from "@/assets/terrace-top-new.jpg";
import swimmingPoolNew from "@/assets/swimming-pool-new.jpg";
import carParkingNew from "@/assets/car-parking-new.jpg";
import birdProtectionNew from "@/assets/bird-protection-new.jpg";

const allImages = [
  { src: balconyNets, label: "Balcony Safety Nets" },
  { src: balconySafetyNew, label: "Grill Balcony Safety Nets" },
  { src: birdSpikes, label: "Bird Spikes" },
  { src: buildingNets, label: "Building Safety Nets" },
  { src: cricketNets, label: "Cricket Practice Nets" },
  { src: ductAreaSafety, label: "Duct Area Safety Nets" },
  { src: industrialNets, label: "Industrial Safety Nets" },
  { src: industrialSafetyNew, label: "Industrial Safety Nets" },
  { src: openAreaSafety, label: "Open Area Safety Nets" },
  { src: pigeonNets, label: "Pigeon Nets" },
  { src: pigeonNets2k, label: "Pigeon Safety Nets" },
  { src: pigeonNetsInstallation, label: "Pigeon Nets Installation" },
  { src: swimmingPoolNets, label: "Swimming Pool Safety Nets" },
  { src: swimmingPoolNew, label: "Swimming Pool Safety Nets" },
  { src: carParkingNew, label: "Car Parking Safety Nets" },
  { src: birdProtectionNew, label: "Bird Protection Nets" },
  { src: terraceTopNew, label: "Terrace Top Nets" },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + allImages.length) % allImages.length);
  const next = () => setCurrent((c) => (c + 1) % allImages.length);

  // Show 3 images at a time on desktop
  const getVisibleImages = () => {
    const images = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + allImages.length) % allImages.length;
      images.push({ ...allImages[idx], index: idx });
    }
    return images;
  };

  const visible = getVisibleImages();

  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <h2 className="section-title mb-8">Our Work Gallery</h2>
        
        {/* Desktop: 3 images */}
        <div className="relative">
          <div className="hidden md:grid grid-cols-3 gap-4">
            {visible.map((img, i) => (
              <div key={img.index} className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]">
                <img
                  src={toImageSrc(img.src)}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-background font-heading font-semibold text-sm">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: 1 image */}
          <div className="md:hidden relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <img
              src={toImageSrc(allImages[current].src)}
              alt={allImages[current].label}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <span className="text-background font-heading font-semibold text-sm">{allImages[current].label}</span>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg z-10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg z-10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {allImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-primary/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
