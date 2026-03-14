

// Import partner logos
import chilloxLogo from "@/assets/chillox-logo-png_seeklogo-647089.png";
import pizzaBurgLogo from "@/assets/pizza Burag logo.jpg";
import diningLoungeLogo from "@/assets/The-Dining-Lounge.logo.jpg";
import foodplexLogo from "@/assets/foodplex.jpeg";
import finoLogo from "@/assets/fino.jpeg";
import filmic1 from "@/assets/filmic-1.jpeg";
import filmic2 from "@/assets/filmic-2.jpeg";
import img6 from "./6.jpeg";
import img7 from "./7.jpeg";
import img8 from "./8.jpeg";
import img11 from "./11.jpeg";
import img33 from "./33.jpeg";
import img66 from "./66.jpeg";

const partnerLogos = [
  { src: chilloxLogo, name: "Chillox" },
  { src: pizzaBurgLogo, name: "Pizza Burag" },
  { src: diningLoungeLogo, name: "The Dining Lounge" },
  { src: foodplexLogo, name: "FoodPlex" },
  { src: finoLogo, name: "Fino" },
  { src: filmic1, name: "Partner" },
  { src: filmic2, name: "Partner" },
  { src: img6, name: "Partner" },
  { src: img7, name: "Partner" },
  { src: img8, name: "Partner" },
  { src: img11, name: "Partner" },
  { src: img33, name: "Partner" },
  { src: img66, name: "Partner" },
];

const PartnerStoriesSection = () => (
  <section className="py-16 bg-white">
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
                className="w-[120px] h-[80px] object-contain bg-white p-2 rounded"
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
                className="w-[120px] h-[80px] object-contain bg-white p-2 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;