import { Star, Phone } from "lucide-react";
import { toImageSrc, type ImageLike } from "@/lib/image";

interface ServiceCardProps {
  image: ImageLike;
  title: string;
  path: string;
}

const ServiceCard = ({ image, title, path }: ServiceCardProps) => {
  return (
    <div className="bezel-card group overflow-hidden hover-expand">
      <a href={path} className="block relative overflow-hidden">
        <div className="aspect-square overflow-hidden rounded-t-2xl bg-gradient-to-br from-muted to-background relative">
          <img 
            src={toImageSrc(image)} 
            alt={title} 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-130 filter group-hover:brightness-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </a>
      <div className="p-5 md:p-6 text-center backdrop-blur-sm space-between-tight">
        <h3 className="font-heading font-bold text-lg md:text-xl text-foreground leading-tight group-hover:text-secondary transition-colors">{title}</h3>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
        </div>
        <a 
          href="tel:7795891177" 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/95 hover:to-secondary text-secondary-foreground px-5 py-3 rounded-lg text-sm md:text-base font-bold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group/btn click-press active:shadow-md"
        >
          <Phone className="w-4 h-4 group-hover/btn:animate-pulse" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
