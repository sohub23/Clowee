import { motion } from "framer-motion";
import { Package, Zap, Ruler, ArrowUpDown, ArrowLeftRight, Layers } from "lucide-react";
import machineImage from "@/assets/sohub-clowee-DUY35_tt.png";

const specs = [
  { icon: Package, label: "Machine Load Capacity", value: "50 kg" },
  { icon: Zap, label: "Machine Power Requirement", value: "220V AC" },
  { icon: ArrowUpDown, label: "Machine Height", value: "180 cm" },
  { icon: ArrowLeftRight, label: "Machine Width", value: "90 cm" },
  { icon: Layers, label: "Machine Depth", value: "90 cm" },
  { icon: Zap, label: "Operating Voltage", value: "220V / 50Hz" },
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
          Machine Specifications
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
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={machineImage}
              alt="Clowee Claw Machine"
              className="w-full h-auto"
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
          <div className="space-y-4">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <spec.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                  <p className="text-lg font-bold text-foreground">{spec.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MachineSpecsSection;
