export const SITE_URL = "https://vickysafetynets.com";
export const SITE_NAME = "Vicky Safety Nets";
export const DEFAULT_OG_IMAGE = "/vicky-logo.png";

export const BUSINESS = {
  name: "Vicky Safety Nets",
  phone: "+91 7795891177",
  email: "vickysafetynets552@gmail.com",
  address: "# 17, 17th Cross, MES Road, Muthyalanagar, Bangalore-54",
  city: "Bangalore",
  region: "Karnataka",
  country: "IN",
};

export const getPageSchema = (url: string, title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url,
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  areaServed: {
    "@type": "City",
    name: "Bangalore",
  },
});

export const getBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

