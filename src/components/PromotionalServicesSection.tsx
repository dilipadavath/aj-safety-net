import { Star, Phone } from "lucide-react";
import { toImageSrc, type ImageLike } from "@/lib/image";
import { BUSINESS_PHONE, trackLeadClick } from "@/lib/leadTracking";

interface PromotionalServiceProps {
  image: ImageLike;
  title: string;
  description: string;
  path?: string;
}

interface PromotionalServicesSectionProps {
  services: PromotionalServiceProps[];
}

const PromotionalServices = ({ services }: PromotionalServicesSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="section-title mb-2">OUR SERVICES</h2>
        <p className="section-subtitle mb-16 max-w-2xl mx-auto">
          Professional Safety Net Installation in Bangalore
        </p>

        {/* Promotional Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 reveal-item"
              style={{
                animation: "reveal 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Background Image */}
              <img
                src={toImageSrc(service.image)}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/80 transition-all duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 z-10">
                {/* Star Ratings */}
                <div className="flex justify-start gap-1 transform group-hover:-translate-y-1 transition-transform duration-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                    />
                  ))}
                </div>

                {/* Main Content */}
                <div>
                  {/* Title */}
                  <h3
                    className="text-white mb-4 md:mb-6 drop-shadow-lg transform group-hover:translate-y-0.5 transition-transform duration-500 break-words"
                    style={{
                      fontSize: "clamp(1.125rem, 0.9rem + 1.5vw, 1.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* CTA Button */}
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    onClick={() => trackLeadClick("call", `promo_service_${service.title}`)}
                    className="inline-flex items-center justify-center gap-2 bg-white text-secondary hover:bg-gray-100 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 group/btn w-full"
                  >
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:animate-pulse" />
                    <span className="uppercase tracking-wide" style={{ letterSpacing: "0.05em" }}>
                      Call Now
                    </span>
                  </a>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary/80 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalServices;
