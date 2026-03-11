import { motion } from "framer-motion";
import { Package, Zap, Ruler, ArrowUpDown, ArrowLeftRight, Layers } from "lucide-react";
import machineImage from "@/assets/clowee-pic.jpeg";

const specs = [
  { icon: Package, label: "Machine Type", value: "Doll Catcher Machine" },
  { icon: ArrowLeftRight, label: "Size", value: "W 30 x H 72 x D 24 Inch" },
  { icon: Layers, label: "Material", value: "Metal, Glass & Acrylic" },
  { icon: Zap, label: "Voltage", value: "220V (2 Pin Plug)" },
  { icon: Zap, label: "Electricity Bill", value: "650-670 BDT (15 hours/day)" },
];

const MachineSpecsSection = () => (
  <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
    <div className="container max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Machine <span className="text-primary bg-gradient-to-r from-[#E291BE] to-[#D67BA8] bg-clip-text text-transparent">Specifications</span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
          Professional-grade claw machine built for reliability and performance with cutting-edge technology
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <div className="max-w-sm mx-auto">
            <img
              src={machineImage}
              alt="Clowee Claw Machine"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Column - Specifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 h-full">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Technical Specifications
            </h3>
            <div className="grid gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-2 border-transparent hover:border-[#E291BE] hover:bg-gradient-to-r hover:from-[#E291BE] hover:to-[#D67BA8] hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E291BE] to-[#D67BA8] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-white/20">
                    <spec.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-muted-foreground group-hover:text-white mb-1">
                      {spec.label}
                    </div>
                    <div className="text-lg font-black text-foreground group-hover:text-white">
                      {spec.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MachineSpecsSection;
