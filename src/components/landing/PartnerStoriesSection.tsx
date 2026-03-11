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

      {/* Logo Grid - 2 Lines with Scrolling Animation */}
      <div className="space-y-12">
        {/* First Line - Scrolls Right */}
        <div className="scroll-container py-4">
          <div className="scroll-content scroll-right">
            {/* Duplicate logos for seamless scrolling */}
            {[...partnerLogos.slice(0, 6), ...partnerLogos.slice(0, 6)].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-[120px] max-h-[80px] object-contain filter drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Line - Scrolls Left */}
        <div className="scroll-container py-4">
          <div className="scroll-content scroll-left">
            {/* Duplicate logos for seamless scrolling */}
            {[...partnerLogos.slice(6, 11), ...partnerLogos.slice(6, 11)].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-[120px] max-h-[80px] object-contain filter drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;