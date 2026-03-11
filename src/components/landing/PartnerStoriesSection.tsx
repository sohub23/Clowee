import { motion } from "framer-motion";

const partnerLogos = [
  "/src/components/landing/pizza Burag.jpeg",
  "/src/components/landing/10.jpeg",
  "/src/components/landing/12.jpeg",
  "/src/components/landing/11.jpeg",
  "/src/components/landing/6.jpeg",
  "/src/components/landing/7.jpeg",
  "/src/components/landing/8.jpeg",
  "/src/components/landing/9.jpeg",
  "/src/components/landing/33.jpeg",
  "/src/components/landing/66.jpeg",
  "/src/components/landing/Kolapata.jpeg"
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
          Partner <span className="text-primary">Stories</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Trusted by leading restaurants and businesses across Bangladesh
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {partnerLogos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-full h-20 object-contain rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerStoriesSection;