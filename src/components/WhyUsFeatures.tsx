import { Wrench, ShieldCheck, IndianRupee, Smile } from "lucide-react";

const features = [
  { icon: Wrench, title: "Free Installation", color: "bg-primary" },
  { icon: ShieldCheck, title: "Quality Assurance", color: "bg-secondary" },
  { icon: IndianRupee, title: "Reasonable Prices", color: "bg-accent" },
  { icon: Smile, title: "Happy Customers", color: "bg-primary" },
];

const WhyUsFeatures = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-gap-normal">
      {features.map((f, i) => (
        <div 
          key={f.title} 
          className={`flex flex-col items-center text-center group reveal-item`}
          style={{
            animation: "reveal 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: `${i * 120}ms`
          }}
        >
          <div className={`feature-icon ${f.color} mb-5 md:mb-6 group-hover:shadow-2xl hover-glow`}>
            <f.icon className="w-8 h-8 md:w-9 md:h-9 text-background relative z-10" />
          </div>
          <h3 
            className="heading-card text-foreground leading-snug group-hover:text-secondary transition-colors duration-300"
            style={{
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              fontSize: 'var(--text-lg)',
            }}
          >
            {f.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default WhyUsFeatures;
