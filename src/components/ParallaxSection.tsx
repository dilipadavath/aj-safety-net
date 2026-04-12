import { toImageSrc, type ImageLike } from "@/lib/image";

interface ParallaxSectionProps {
  backgroundImage: ImageLike;
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection = ({ backgroundImage, children, className = "" }: ParallaxSectionProps) => {
  return (
    <section
      className={`parallax-section py-20 ${className}`}
      style={{ backgroundImage: `url(${toImageSrc(backgroundImage)})` }}
    >
      <div className="parallax-overlay" />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
