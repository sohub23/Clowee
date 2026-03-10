import { motion } from "framer-motion";
import { Play, MapPin } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openVideo = (url: string) => {
    setActiveVideo(url);
    setVideoOpen(true);
  };

  return (
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
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
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              className="rounded-xl overflow-hidden border border-border bg-card shadow-sm cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              onClick={() => openVideo(video.videoUrl)}
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

        {/* Video Dialog */}
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={activeVideo}
                title="Clowee Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PartnersSection;
