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
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ours Partner</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trusted by leading restaurants and businesses across Bangladesh
        </p>
      </div>

      {/* Logo Grid - 2 Lines with Bigger Logos */}
      <div className="space-y-12">
        {/* First Line - 6 logos */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partnerLogos.slice(0, 6).map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className={`max-w-[140px] max-h-[90px] object-contain ${
                  logo.name === "The Dining Lounge" ? "bg-white p-2 rounded" : ""
                }`}
              />
            </div>
          ))}
        </div>
        
        {/* Second Line - 5 logos */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partnerLogos.slice(6, 11).map((logo, index) => (
            <div key={index + 6} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-[140px] max-h-[90px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;