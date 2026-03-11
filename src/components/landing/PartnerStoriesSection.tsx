import { motion } from "framer-motion";

// Import partner logos
import chilloxLogo from "@/assets/chillox-logo-png_seeklogo-647089.png";
import pizzaBurgLogo from "@/assets/pizza Burag logo.jpg";
import diningLoungeLogo from "@/assets/The-Dining-Lounge.logo.jpg";
import foodplexLogo from "@/assets/foodplex.jpeg";
import kolapataLogo from "@/assets/Kolapata.png";
import logo6 from "@/components/landing/6.jpeg";
import logo7 from "@/components/landing/7.jpeg";
import logo8 from "@/components/landing/8.jpeg";
import logo33 from "@/components/landing/33.jpeg";
import logo66 from "@/components/landing/66.jpeg";
import logo10 from "@/components/landing/10.jpeg";

const partnerLogos = [
  { src: chilloxLogo, name: "Chillox" },
  { src: pizzaBurgLogo, name: "PizzaBurg" },
  { src: diningLoungeLogo, name: "The Dining Lounge" },
  { src: foodplexLogo, name: "FoodPlex" },
  { src: kolapataLogo, name: "Kolapata" },
  { src: logo6, name: "Keedee" },
  { src: logo7, name: "Baily Deli" },
  { src: logo8, name: "Cafe Rio" },
  { src: logo33, name: "Partner 9" },
  { src: logo66, name: "Partner 10" },
  { src: logo10, name: "Fusion Lounge" }
];

const PartnerStoriesSection = () => (
  <section className="section-padding bg-gray-50">
    <div className="container max-w-6xl">
      {/* Header with blue background like reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ours Partner</h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by leading restaurants and businesses across Bangladesh
        </p>
      </motion.div>

      {/* Logo Grid - 3 rows like reference */}
      <div className="space-y-12">
        {/* First Row - 4 logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partnerLogos.slice(0, 4).map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-[120px] max-h-[80px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Second Row - 4 logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partnerLogos.slice(4, 8).map((logo, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 4) * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-[120px] max-h-[80px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Third Row - 3 logos centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-2xl mx-auto">
          {partnerLogos.slice(8, 11).map((logo, index) => (
            <motion.div
              key={index + 8}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 8) * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-[120px] max-h-[80px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;