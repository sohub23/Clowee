import { motion } from "framer-motion";
import { Play, MapPin, X } from "lucide-react";
import { useState } from "react";
import chnImg from "@/assets/chn.jpg";
import pbgulsanImg from "@/assets/pbgulsan.jpg";
import chikcliImg from "@/assets/Chikcli.jpg";
import diningWariImg from "@/assets/dininglounge-wari.webp";
import pizzaburgMirpurImg from "@/assets/pizzaburg-mirpur1.jpg";
import caferioMohammadpurImg from "@/assets/caferio-mohammadpur.jpg";
import caferioUttaraImg from "@/assets/caferio-uttara.jpg";
import foodplexImg from "@/assets/foodplex.dhan.jpg";
import diningNarayanganjImg from "@/assets/dininglounge-narayanganj.webp";
import diningKhilgaonImg from "@/assets/d_l.jpg";
import bailyDeliImg from "@/assets/baily-deli3 copy.jpg";
import chjImg from "@/assets/chj.jpg";

const partners = [
  {
    name: "Chillox Nasirabad",
    location: "Chattogram",
    image: chnImg,
  },
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
    name: "The Dinning Lounge Wari",
    location: "Wari, Dhaka",
    image: diningWariImg,
  },
  {
    name: "Pizzaburg Dhanmondi",
    location: "Satmasjid Road, Dhaka",
    image: pizzaburgMirpurImg,
  },
  {
    name: "Waffle Wala",
    location: "Dhanmondi Dhaka",
    image: caferioMohammadpurImg,
  },
  {
    name: "Cafe Rio Uttara",
    location: "Uttara, Dhaka",
    image: caferioUttaraImg,
  },
  {
    name: "FoodPlex",
    location: "Khan ABC Tradeplex,Dhaka",
    image: foodplexImg,
  },
  {
    name: "The Dinning Lounge Narayanganj",
    location: "Narayanganj, Dhaka",
    image: diningNarayanganjImg,
  },
  {
    name: "The Dinning Lounge Khilgaon",
    location: "Shotodol Rose Heights, Dhaka",
    image: diningKhilgaonImg,
  },
  {
    name: "Baily Deli",
    location: "Baily Road, Dhaka",
    image: bailyDeliImg,
  },
  {
    name: "Chillox Jamal Khan",
    location: "Jamal Khan, Chattogram",
    image: chjImg,
  },
];

const videos = [
  {
    title: "Clowee | Game On | Amusement Games | Theme Park | Made In Bangladesh",
    thumbnail: "https://img.youtube.com/vi/iorKosbaUPs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/iorKosbaUPs",
  },
  {
    title: "Tolpar Claw Games Machine",
    thumbnail: "https://img.youtube.com/vi/aOnyKBfwKrE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/aOnyKBfwKrE",
  },
  {
    title: "Clowee Claw Machine Experience",
    thumbnail: "https://img.youtube.com/vi/3V-3oOpi5Hc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/3V-3oOpi5Hc",
  },
];

const PartnersSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={selectedVideo + "?autoplay=1"}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    <section className="py-20 bg-secondary/30">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
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
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{partner.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {partner.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            See Clowee in Action
          </h3>
          <p className="text-muted-foreground">Watch how Clowee brings joy to customers and profit to partners.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              className="rounded-xl overflow-hidden border border-border bg-card shadow-sm cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default PartnersSection;
