import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import { Phone, Mail, MapPin, MessageCircleMore } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Safety Net Enquiry${formData.service ? ` - ${formData.service}` : ""}`;
    const body = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Service Required: ${formData.service || "Not specified"}`,
      "",
      "Message:",
      formData.message || "No additional message provided.",
    ].join("\n");
    window.location.href = `mailto:ajsafetynest537@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout>
      {/* Glass Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/80 to-secondary/70 py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <img src={toImageSrc(parallaxBg)} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-4 drop-shadow-xl">Contact Us</h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-6">Get in Touch for Free Safety Net Installation Quote</p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-card rounded-xl shadow-lg p-5 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Our Address</h3>
                <p className="text-muted-foreground">Bangalore</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card rounded-xl shadow-lg p-5 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Phone</h3>
                <a
                  href="tel:6363331537"
                  onClick={() => trackLeadClick("call", "contact_page")}
                  className="text-primary hover:underline text-lg font-semibold block"
                >
                  +91 6363331537
                </a>

              </div>
            </div>
            <div className="flex items-start gap-4 bg-card rounded-xl shadow-lg p-5 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircleMore className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">WhatsApp</h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackLeadClick("whatsapp", "contact_page")}
                  className="text-primary hover:underline"
                >
                  Chat for quick quote
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card rounded-xl shadow-lg p-5 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Email</h3>
                <a href="mailto:ajsafetynest537@gmail.com" className="text-primary hover:underline">ajsafetynest537@gmail.com</a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8 border border-primary/10 space-y-6">
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Send Us a Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="input input-bordered rounded-lg px-4 py-3 text-base bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="input input-bordered rounded-lg px-4 py-3 text-base bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email (optional)"
              className="input input-bordered rounded-lg px-4 py-3 text-base bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="input input-bordered rounded-lg px-4 py-3 text-base bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select Service</option>
              <option>Balcony Safety Nets</option>
              <option>Pigeon Nets</option>
              <option>Bird Protection Nets</option>
              <option>Children Safety Nets</option>
              <option>Sports Nets</option>
              <option>Industrial Safety Nets</option>
              <option>Staircase Safety Nets</option>
              <option>Other</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="input input-bordered rounded-lg px-4 py-3 text-base bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button type="submit" className="cta-button btn-lg text-lg font-bold w-full mt-2">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10">
            <iframe
              title="AJ Safety Nets Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d77.540000!3d13.040000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMTPCsDAyJzI0LjAiTiA3N8KwMzInMjQuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-10 bg-primary/90">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-background mb-2 md:mb-0">Prefer to talk directly? Call us now!</h2>
          <a href="tel:6363331537" className="cta-button btn-lg text-lg md:text-xl font-bold shadow-xl">Call 6363331537</a>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default Contact;
