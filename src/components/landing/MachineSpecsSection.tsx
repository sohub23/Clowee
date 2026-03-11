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
  <section id="earnings" className="section-padding bg-gradient-to-br from-gray-50 to-white">
    <div className="container max-w-sm mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Machine <span className="text-primary bg-gradient-to-r from-[#E291BE] to-[#D67BA8] bg-clip-text text-transparent">Specifications</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Professional-grade claw machine built for reliability and performance
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-xs mx-auto">
            <img
              src={machineImage}
              alt="Clowee Claw Machine"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              Technical Specifications
            </h3>
            <div className="space-y-2">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-transparent hover:border-[#E291BE] hover:bg-gradient-to-r hover:from-[#E291BE] hover:to-[#D67BA8] hover:text-white transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E291BE] to-[#D67BA8] flex items-center justify-center shrink-0">
                    <spec.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-muted-foreground group-hover:text-white truncate">
                      {spec.label}
                    </div>
                    <div className="text-sm font-bold text-foreground group-hover:text-white">
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
