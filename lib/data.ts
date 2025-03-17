import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Character Illustration",
    description: "Professional character design and illustration for your brand, game, or personal project. Includes concept sketches, color options, and final high-resolution artwork.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064",
    category: "Character Design"
  },
  {
    id: 2,
    name: "Vector Portrait Illustration",
    description: "High-quality vector portrait illustration from your photo. Perfect for profile pictures, social media, or personal gifts. Includes unlimited revisions and multiple file formats.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=2187",
    category: "Portrait Art"
  },
  {
    id: 3,
    name: "Mobile App UI Illustration Package",
    description: "Custom illustrations designed specifically for mobile applications. Includes up to 10 unique illustrations optimized for various screen sizes and resolutions.",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070",
    category: "UI Illustration"
  },
  {
    id: 4,
    name: "Website Hero Illustration Set",
    description: "Eye-catching hero illustrations for your website. Package includes 3 custom illustrations designed to match your brand identity and increase user engagement.",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
    category: "Web Graphics"
  },
  {
    id: 5,
    name: "Brand Mascot Design",
    description: "Complete mascot design for your brand or company. Includes character development, multiple poses, expressions, and full usage rights for marketing materials.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2026",
    category: "Brand Identity"
  },
  {
    id: 6,
    name: "E-commerce Product Illustration Package",
    description: "Set of 5 custom product illustrations for your online store. Perfect for showcasing features, creating visual interest, and improving conversion rates.",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=2070",
    category: "Product Visualization"
  },
  {
    id: 7,
    name: "Infographic Design",
    description: "Custom infographic design to visualize your data or processes. Transform complex information into engaging, easy-to-understand visual content.",
    price: 4000000,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070",
    category: "Data Visualization"
  },
  {
    id: 8,
    name: "Social Media Illustration Pack",
    description: "Monthly package of 10 custom illustrations for your social media channels. Consistent style and themes to strengthen your brand presence online.",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074",
    category: "Social Media Content"
  },
  {
    id: 9,
    name: "Children's Book Illustration",
    description: "Professional illustrations for children's books or educational materials. Price is per illustration, with discounts for complete book projects.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974",
    category: "Book Illustration"
  },
  {
    id: 10,
    name: "Icon Set Design",
    description: "Custom icon set design with up to 20 unique icons. Perfect for websites, applications, or presentations. Delivered in multiple formats and sizes.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
    category: "Icon Design"
  },
  {
    id: 11,
    name: "Basic Logo Illustration",
    description: "Simple but effective illustrated logo design for startups and small businesses. Includes 3 concept options and 2 revision rounds.",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071",
    category: "Logo Design"
  },
  {
    id: 12,
    name: "Digital Background Art",
    description: "Custom illustrated backgrounds for streaming, video calls, or digital content. Unique artwork designed to match your personal or brand style.",
    price: 1990000,
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070",
    category: "Background Art"
  }
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
