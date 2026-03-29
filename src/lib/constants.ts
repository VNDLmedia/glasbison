export const SITE_URL = "https://www.glassbison.com";
export const SITE_NAME = "Glass Bison";
export const SITE_DESCRIPTION =
  "Glass Bison is a Grammy-nominated music management company representing producers and songwriters with 70+ gold, platinum, and diamond certifications.";

export const CONTACT = {
  email: "info@glassbison.com",
  phone: "+49 123 456 789",
  address: {
    street: "Musterstraße 1",
    zip: "10115",
    city: "Berlin",
  },
  company: "Glass Bison Management",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/glassbison/",
  tiktok: "https://www.tiktok.com/@glassbison",
  spotify: "https://open.spotify.com/",
};

export const NAV_ITEMS = [
  { label: "Discography", href: "/discography" },
  { label: "Artists", href: "/artists" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
