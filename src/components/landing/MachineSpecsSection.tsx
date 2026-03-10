import { motion } from "framer-motion";
import { Package, Zap, Ruler, ArrowUpDown, ArrowLeftRight, Layers } from "lucide-react";
import machineImage from "@/assets/sohub-clowee-DUY35_tt.png";

const specs = [
  { icon: ArrowUpDown, label: "Height", value: "6 Feet" },
  { icon: ArrowLeftRight, label: "Width", value: "31 Inches" },
  { icon: Layers, label: "Depth", value: "24 Inches" },
  { icon: Zap, label: "Power Supply", value: "220V AC" },
  { icon: Package, label: "Operating Time", value: "15-16 hours/day" },
  { icon: Zap, label: "Power Consumption", value: "1.5 kW" },
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

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl p-1 shadow-lg h-full flex items-center justify-center">
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
          <div className="bg-card rounded-2xl p-3 shadow-lg">
            <h3 className="text-base font-bold text-foreground mb-3 text-center">Technical Specifications</h3>
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
