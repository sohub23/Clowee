import { motion } from "framer-motion";
import { ShieldCheck, Wrench, BarChart3, Users } from "lucide-react";

const points = [
  { icon: ShieldCheck, text: "Quality control" },
  { icon: Users, text: "Standardized customer experience" },
  { icon: Wrench, text: "Professional maintenance" },
  { icon: BarChart3, text: "Fair profit distribution" },
];

const ClarificationSection = () => (
  <section className="section-padding section-alt-bg">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
          Partnership <span className="text-primary">Model</span>
        </h2>
        <p className="text-muted-foreground text-base mb-6 leading-relaxed">
          Clowee does not sell claw machines. We invest, install, maintain, and operate the machines ourselves.
          Restaurant partners simply provide space and earn <strong className="text-foreground">50% of net profit</strong>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {points.map((p) => (
            <div key={p.text} className="bg-card rounded-lg p-3 border border-border">
              <p.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <p className="text-xs font-medium text-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ClarificationSection;
