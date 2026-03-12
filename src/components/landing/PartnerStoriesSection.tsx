

// Import partner logos
import chilloxLogo from "@/assets/chillox-logo-png_seeklogo-647089.png";
import pizzaBurgLogo from "@/assets/pizza Burag logo.jpg";
import diningLoungeLogo from "@/assets/The-Dining-Lounge.logo.jpg";
import foodplexLogo from "@/assets/foodplex.jpeg";
import kolapataLogo from "@/assets/Kolapata.png";
import finoLogo from "@/assets/fino.jpeg";
import whatsappImage from "@/assets/WhatsApp Image 2026-03-10 at 11.43.42 PM.jpeg";
import whatsappLogo from "@/assets/whatsapp-logo.jpeg";
import filmic1 from "@/assets/filmic-1.jpeg";
import filmic2 from "@/assets/filmic-2.jpeg";
import filmic3 from "@/assets/filmic-3.jpeg";
import logo6 from "@/components/landing/6.jpeg";
import logo7 from "@/components/landing/7.jpeg";
import logo8 from "@/components/landing/8.jpeg";
import logo33 from "@/components/landing/33.jpeg";
import logo66 from "@/components/landing/66.jpeg";

const partnerLogos = [
  { src: chilloxLogo, name: "Chillox" },
  { src: pizzaBurgLogo, name: "Pizza Burag" },
  { src: diningLoungeLogo, name: "The Dining Lounge" },
  { src: foodplexLogo, name: "FoodPlex" },
  { src: kolapataLogo, name: "Kolapata" },
  { src: finoLogo, name: "Fino" },
  { src: whatsappImage, name: "WhatsApp Partner" },
  { src: whatsappLogo, name: "WhatsApp" },
  { src: filmic1, name: "Filmic 1" },
  { src: filmic2, name: "Filmic 2" },
  { src: filmic3, name: "Filmic 3" },
  { src: logo6, name: "Partner 6" },
  { src: logo7, name: "Partner 7" },
  { src: logo8, name: "Partner 8" },
  { src: logo33, name: "Partner 33" },
  { src: logo66, name: "Partner 66" }
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
              className="flex items-center justify-center flex-shrink-0 mx-4"
            >
              <div className="w-[140px] h-[100px] bg-white p-3 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partnerLogos.map((logo, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className="flex items-center justify-center flex-shrink-0 mx-4"
            >
              <div className="w-[140px] h-[100px] bg-white p-3 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;