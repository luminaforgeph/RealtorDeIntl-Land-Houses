export type PropertyCategory = "Land" | "Luxury Homes" | "Commercial";

export type Property = {
  id: string;
  slug: string;
  title: string;
  category: PropertyCategory;
  location: string;
  price: string;
  priceNote?: string;
  image: string;
  imageAlt: string;
  summary: string;
  beds?: number;
  baths?: number;
  area: string;
  featured?: boolean;
  status: "Demonstration listing";
};

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};