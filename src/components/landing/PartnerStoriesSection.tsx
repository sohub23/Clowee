import { motion } from "framer-motion";

const partnerLogos = [
  "/src/assets/chillox-logo-png_seeklogo-647089.png",
  "/src/assets/pizza Burag logo.jpg",
  "/src/assets/The-Dining-Lounge.logo.jpg",
  "/src/assets/foodplex.jpeg",
  "/src/assets/Kolapata.png",
  "/src/components/landing/6.jpeg",
  "/src/components/landing/7.jpeg",
  "/src/components/landing/8.jpeg",
  "/src/components/landing/33.jpeg",
  "/src/components/landing/66.jpeg"
];

const PartnerStoriesSection = () => (
  <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/10">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
         Ours <span className="text-primary">Partner </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Trusted by leading restaurants and businesses across Bangladesh
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {partnerLogos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className={`object-contain transition-all duration-300 ${
                logo.includes('Kolapata') || logo.includes('chillox') ? 'w-24 h-24' : 
                logo.includes('The-Dining-Lounge') ? 'w-40 h-40' : 'w-32 h-32'
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;