import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const partners = [
  {
    name: "Chillox Nasirabad",
    location: "Chattogram",
    image: "https://clowee.sohub.com.bd/assets/chn.jpg",
  },
  {
    name: "Pizzaburg Gulshan",
    location: "Gulshan-1, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/pbgulsan.jpg",
  },
  {
    name: "Chickli, Rangpur",
    location: "Rangpur",
    image: "https://clowee.sohub.com.bd/assets/Chikcli.jpg",
  },
  {
    name: "The Dinning Lounge Wari",
    location: "Wari, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/dininglounge-wari.webp",
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Satmasjid Road, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/pizzaburg-mirpur1.jpg",
  },
  {
    name: "Waffle Wala",
    location: "Dhanmondi, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/caferio-mohammadpur.jpg",
  },
  {
    name: "Cafe Rio Uttara",
    location: "Uttara, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/caferio-uttara.jpg",
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Dhanmondi, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/pbdhanmondi.jpg",
  },
  {
    name: "FoodPlex",
    location: "Khan ABC Tradeplex,Dhaka",
    image: "https://clowee.sohub.com.bd/assets/foodplex.dhan.jpg",
  },
  {
    name: "The Dinning Lounge Narayanganj",
    location: "Narayanganj, Dhaka ",
    image: "https://clowee.sohub.com.bd/assets/dininglounge-narayanganj.webp",
  },
  {
    name: "The Dinning Lounge Khilgaon",
    location: "Shotodol Rose Heights, Dhaka ",
    image: "https://clowee.sohub.com.bd/assets/d_l.jpg",
  },
  {
    name: "Baily Deli",
    location: "Baily Road, Dhaka",
    image: "https://clowee.sohub.com.bd/assets/baily-deli3.jpg",
  },
  {
    name: "Chillox Jamal Khan",
    location: "Jamal Khan, Chattogram",
    image: "https://clowee.sohub.com.bd/assets/chj.jpg",
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

        {/* Partner Grid with Animation */}
        <div className="relative overflow-hidden mb-16">
          {/* First Row - Moving Right */}
          <div className="flex animate-scroll-right mb-6 whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="group rounded-lg overflow-hidden border border-primary/3 bg-card shadow-sm hover:shadow-md hover:border-primary/8 transition-all inline-block w-64 mx-3"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={partner.image}
                    alt={`${partner.name} — Clowee Partner Restaurant`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>
                <div className="p-2 bg-[#E291BE]">
                  <h3 className="font-semibold text-white text-xs whitespace-normal">{partner.name}</h3>
                  <p className="text-[10px] text-white/90 flex items-center gap-1 mt-1 whitespace-normal">
                    <MapPin className="w-2.5 h-2.5" />
                    {partner.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - Moving Left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...partners, ...partners].reverse().map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="group rounded-lg overflow-hidden border border-primary/3 bg-card shadow-sm hover:shadow-md hover:border-primary/8 transition-all inline-block w-64 mx-3"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={partner.image}
                    alt={`${partner.name} — Clowee Partner Restaurant`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>
                <div className="p-2 bg-[#E291BE]">
                  <h3 className="font-semibold text-white text-xs whitespace-normal">{partner.name}</h3>
                  <p className="text-[10px] text-white/90 flex items-center gap-1 mt-1 whitespace-normal">
                    <MapPin className="w-2.5 h-2.5" />
                    {partner.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
