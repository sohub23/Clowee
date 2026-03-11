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
  <section className="section-padding">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Machine <span className="text-primary">Specifications</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Professional-grade claw machine built for reliability and performance
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl p-1 shadow-lg max-w-[280px]">
            <img
              src={machineImage}
              alt="Clowee Claw Machine"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </motion.div>

        {/* Right Column - Specifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card rounded-2xl p-3 shadow-lg w-full max-w-xl">
            <h3 className="text-base font-semibold text-foreground mb-3 text-center">Technical Specifications</h3>
            <div className="grid gap-2">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-background border border-border hover:shadow-md hover:bg-[#E291BE] hover:border-[#E291BE] hover:text-white transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-white/20">
                    <spec.icon className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-white">{spec.label}:</span>
                    <span className="text-sm font-bold text-foreground group-hover:text-white">{spec.value}</span>
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
