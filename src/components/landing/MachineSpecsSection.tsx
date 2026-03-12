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
  <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Machine <span className="text-primary bg-gradient-to-r from-[#E291BE] to-[#D67BA8] bg-clip-text text-transparent">Specifications</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional-grade claw machine built for reliability and performance
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-stretch justify-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 lg:pr-0 flex"
        >
          <div className="max-w-xs mx-auto lg:mx-0 lg:ml-auto flex items-center">
            <img
              src={machineImage}
              alt="Clowee Claw Machine"
              className="w-full h-full object-cover rounded-l-xl shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column - Specifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 lg:pl-0 flex"
        >
          <div className="bg-white rounded-r-xl p-5 shadow-lg border border-gray-200 flex flex-col justify-center w-full">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              Technical Specifications
            </h3>
            <div className="grid gap-2.5">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-transparent hover:border-[#E291BE] hover:bg-gradient-to-r hover:from-[#E291BE] hover:to-[#D67BA8] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E291BE] to-[#D67BA8] flex items-center justify-center shrink-0">
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-muted-foreground group-hover:text-white">
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
