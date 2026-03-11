// Import partner logos
import chilloxLogo from "@/assets/chillox-logo-png_seeklogo-647089.png";
import pizzaBurgLogo from "@/assets/pizza Burag logo.jpg";
import diningLoungeLogo from "@/assets/The-Dining-Lounge.logo.jpg";
import foodplexLogo from "@/assets/foodplex.jpeg";
import kolapataLogo from "@/assets/Kolapata.png";
import logo6 from "@/components/landing/6.jpeg";
import logo7 from "@/components/landing/7.jpeg";
import logo8 from "@/components/landing/8.jpeg";
import logo66 from "@/components/landing/66.jpeg";
import logo10 from "@/components/landing/10.jpeg";
import filmic1 from "@/assets/filmic-1.jpeg";
import filmic2 from "@/assets/filmic-2.jpeg";
import filmic3 from "@/assets/filmic-3.jpeg";
import whatsappLogo from "@/assets/whatsapp-logo.jpeg";

const partnerLogos = [
  { src: chilloxLogo, name: "Chillox" },
  { src: pizzaBurgLogo, name: "PizzaBurg" },
  { src: diningLoungeLogo, name: "The Dining Lounge" },
  { src: foodplexLogo, name: "FoodPlex" },
  { src: kolapataLogo, name: "Kolapata" },
  { src: logo6, name: "Keedee" },
  { src: logo7, name: "Baily Deli" },
  { src: logo8, name: "Cafe Rio" },
  { src: logo66, name: "Partner 10" },
  { src: logo10, name: "Fusion Lounge" },
  { src: filmic1, name: "Filmic 1" },
  { src: filmic2, name: "Filmic 2" },
  { src: filmic3, name: "Filmic 3" },
  { src: whatsappLogo, name: "WhatsApp Partner" }
];

const PartnerStoriesSection = () => (
  <section id="our-partners" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trusted by leading restaurants and businesses across Bangladesh
        </p>
      </div>

      {/* Logo Grid - Single Line with Seamless Scrolling */}
      <div className="overflow-hidden py-8">
        <div className="scroll-content scroll-right">
          {/* All logos in one line */}
          {partnerLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`w-[120px] h-[80px] object-contain ${
                  logo.name === "The Dining Lounge" ? "bg-white p-2 rounded" : ""
                }`}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partnerLogos.map((logo, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`w-[120px] h-[80px] object-contain ${
                  logo.name === "The Dining Lounge" ? "bg-white p-2 rounded" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;