import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "rd-001", slug: "the-arc-residence", title: "The Arc Residence",
    category: "Luxury Homes", location: "Peter Odili Road, Port Harcourt",
    price: "Price on request", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Contemporary luxury residence framed by tropical landscaping",
    summary: "A considered architectural residence with generous living spaces and a calm, private atmosphere.",
    beds: 5, baths: 5, area: "Residence", featured: true, status: "Demonstration listing"
  },
  {
    id: "rd-002", slug: "garden-district-parcel", title: "Garden District Parcel",
    category: "Land", location: "New GRA, Port Harcourt",
    price: "Price on request", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Expansive green land under a clear sky",
    summary: "A land opportunity presented for buyers seeking a considered residential location.",
    area: "Land opportunity", featured: true, status: "Demonstration listing"
  },
  {
    id: "rd-003", slug: "the-reserve-villa", title: "The Reserve Villa",
    category: "Luxury Homes", location: "Old GRA, Port Harcourt",
    price: "Price on request", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Warm minimalist luxury home interior",
    summary: "A refined home concept defined by natural materials, light and understated detail.",
    beds: 4, baths: 4, area: "Residence", featured: true, status: "Demonstration listing"
  },
  {
    id: "rd-004", slug: "the-courtyard-collection", title: "The Courtyard Collection",
    category: "Land", location: "Rumuola, Port Harcourt",
    price: "Price on request", image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Aerial view of a green residential landscape",
    summary: "A potential land acquisition for a future residential development.",
    area: "Land opportunity", status: "Demonstration listing"
  },
  {
    id: "rd-005", slug: "meridian-workplace", title: "Meridian Workplace",
    category: "Commercial", location: "Trans Amadi, Port Harcourt",
    price: "Price on request", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Modern glass commercial architecture",
    summary: "A commercial property concept for businesses and long-term investors.",
    area: "Commercial", status: "Demonstration listing"
  },
  {
    id: "rd-006", slug: "coastal-house", title: "Coastal House",
    category: "Luxury Homes", location: "Port Harcourt, Rivers State",
    price: "Price on request", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Modern architectural home surrounded by greenery",
    summary: "A contemporary residential concept with an emphasis on privacy and proportion.",
    beds: 4, baths: 4, area: "Residence", status: "Demonstration listing"
  }
];

export const categories = ["All", "Land", "Luxury Homes", "Commercial"] as const;
