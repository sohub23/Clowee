import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Import original restaurant images
import chnImg from "@/assets/chn.jpg";
import pbgulsanImg from "@/assets/pbgulsan.jpg";
import chikcliImg from "@/assets/Chikcli.jpg";
import pbMirpur1Img from "@/assets/pizzaburg-mirpur1.jpg";
import caferioMohammadpurImg from "@/assets/caferio-mohammadpur.jpg";
import caferioUttaraImg from "@/assets/caferio-uttara.jpg";
import pbDhanmondiImg from "@/assets/pbdhanmondi.jpg";
import foodplexImg from "@/assets/foodplex.dhan.jpg";
import bailyDeliImg from "@/assets/baily-deli3 copy.jpg";
import chjImg from "@/assets/chj.jpg";
import cheezImg from "@/assets/cheez.jpeg";

const partners = [
  {
    name: "Pizzaburg Gulshan",
    location: "Gulshan-1, Dhaka",
    image: pbgulsanImg,
  },
  {
    name: "Chickli, Rangpur",
    location: "Rangpur",
    image: chikcliImg,
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Satmasjid Road, Dhaka",
    image: pbMirpur1Img,
  },
  {
    name: "Waffle Wala",
    location: "Dhanmondi, Dhaka",
    image: caferioMohammadpurImg,
  },
  {
    name: "Cafe Rio Uttara",
    location: "Uttara, Dhaka",
    image: caferioUttaraImg,
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Dhanmondi, Dhaka",
    image: pbDhanmondiImg,
  },
  {
    name: "Baily Deli",
    location: "Baily Road, Dhaka",
    image: bailyDeliImg,
  },
  {
    name: "Cheez",
    location: "Dhaka",
    image: cheezImg,
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
    <section id="partners" className="py-20 bg-secondary/30 scroll-mt-20">
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
            Trusted by Leading <span className="text-[#E291BE]">Restaurants in Dhaka</span>
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
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x200/E291BE/FFFFFF?text=' + encodeURIComponent(partner.name);
                  }}
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
