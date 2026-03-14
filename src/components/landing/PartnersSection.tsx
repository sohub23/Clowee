import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Import original restaurant images
import pizzaburg from "@/assets/1. Pizzaburg dhanmondi.jpg";
import cafeRio from "@/assets/2. Cafe RIo.png";
import diningLounge from "@/assets/3. Dining Lounge NArayanagonj.jpg";
import chefMateLounge from "@/assets/4. Chef mate lounge.jpg";
import crushstation from "@/assets/5. Crush Station.jpeg";
import bailyDeliImg from "@/assets/6. baily deli.jpg";
import kolapata from "@/assets/7. Kolapata.png";
import kolapataCard from "../landing/Kolapata.png";
import chillox from "@/assets/Chillox.jpg";
import daininglounge from "@/assets/Dining Lounge.jpg";  
import madChef from "@/assets/Mad chef.png";


const partners = [
  {
    name: "Pizzaburg Dhanmondi",
    location: "Dhanmondi, Dhaka",
    image: pizzaburg,
  },
  {
    name: "Cafe Rio",
    location: "Dhaka",
    image: cafeRio,
  },
  {
    name: "Dining Lounge",
    location: " Narayangonj",
    image: diningLounge,
  },
  {
    name: " Chef mate lounge",
    location: " Dhaka",
    image: chefMateLounge,
  },
  {
    name: "Crush Station",
    location: "Dhaka",
    image:crushstation,
  },
  {
    name: "Baily Deli",
    location: "Dhaka",
    image: bailyDeliImg
  },
  {
    name: "Kolapata",
    location: "Dhaka",
    image: kolapataCard
  },
  {
    name: "Chilox",
    location: "Dhaka",
    image: chillox,
  },
    {
    name: "Madchef",
    location: "Dhaka",
    image: madChef,
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
    <section id="partners" className="py-20 bg-secondary/30 scroll-mt-20 md:hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Trusted by Leading</span> <span className="text-[#e289a6]">Restaurants</span> in <span className="text-[#e289a6]">Dhaka</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These restaurants are already earning passive income with Clowee machines.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <div className="grid grid-cols-3 gap-3 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="group rounded-md overflow-hidden border border-primary/3 bg-card shadow-sm hover:shadow-md hover:border-primary/8 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={`${partner.name} — Clowee Partner Restaurant`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x200/e289a6/FFFFFF?text=' + encodeURIComponent(partner.name);
                  }}
                />
              </div>
              <div className="p-1.5 bg-[#e289a6]">
                <h3 className="font-semibold text-white text-[10px] leading-tight">{partner.name}</h3>
                <p className="text-[9px] text-white/90 flex items-center gap-0.5 mt-0.5">
                  <MapPin className="w-2 h-2" />
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
