import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const partners = [
  {
    name: "Chillox Nasirabad",
    location: "Chattogram",
    image: "/src/assets/chn.jpg",
  },
  {
    name: "Pizzaburg Gulshan",
    location: "Gulshan-1, Dhaka",
    image: "/src/assets/pbgulsan.jpg",
  },
  {
    name: "Chickli, Rangpur",
    location: "Rangpur",
    image: "/src/assets/Chikcli.jpg",
  },
  {
    name: "The Dinning Lounge Wari",
    location: "Wari, Dhaka",
    image: "/src/assets/dininglounge-wari.webp",
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Satmasjid Road, Dhaka",
    image: "/src/assets/pizzaburg-mirpur1.jpg",
  },
  {
    name: "Waffle Wala",
    location: "Dhanmondi, Dhaka",
    image: "/src/assets/caferio-mohammadpur.jpg",
  },
  {
    name: "Cafe Rio Uttara",
    location: "Uttara, Dhaka",
    image: "/src/assets/caferio-uttara.jpg",
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Dhanmondi, Dhaka",
    image: "/src/assets/pbdhanmondi.jpg",
  },
  {
    name: "FoodPlex",
    location: "Khan ABC Tradeplex,Dhaka",
    image: "/src/assets/foodplex.dhan.jpg",
  },
  {
    name: "The Dinning Lounge Narayanganj",
    location: "Narayanganj, Dhaka ",
    image: "/src/assets/dininglounge-narayanganj.webp",
  },
  {name: "The Dinning Lounge Khilgaon",
    location: "Shotodol Rose Heights, Dhaka ",
    image: "/src/assets/d_l.jpg",
  },
  {
    name: "Baily Deli",
    location: "Baily Road, Dhaka",
    image: "/src/assets/baily-deli3 copy.jpg",
  },
  {
    name: "Chillox Jamal Khan",
    location: "Jamal Khan, Chattogram",
    image: "/src/assets/chj.jpg",
  },
];

const videos = [
  {
    title: "Clowee Machine in Action - Chillox ",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=340&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Kids Love Clowee! — Takeout",
    thumbnail: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=340&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const PartnersSection = () => {

  return (
    <section id="our-partners" className="py-20 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Restaurants in Dhaka
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These restaurants are already earning passive income with Clowee machines.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group rounded-lg overflow-hidden border border-primary/3 bg-card shadow-sm hover:shadow-md hover:border-primary/8 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={partner.image}
                  alt={`${partner.name} — Clowee Partner Restaurant`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-2 bg-[#E291BE]">
                <h3 className="font-semibold text-white text-xs">{partner.name}</h3>
                <p className="text-[10px] text-white/90 flex items-center gap-1 mt-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {partner.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
