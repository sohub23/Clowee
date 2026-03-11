import { motion } from "framer-motion";
import { Wrench, MapPin, Users, DollarSign, Percent } from "lucide-react";

const steps = [
  { 
    icon: Wrench, 
    title: "Machine Installation", 
    desc: "Clowee installs and maintains the claw machine at your location. No cost to you." 
  },
  { 
    icon: MapPin, 
    title: "Space Provided", 
    desc: "Partner provides a small corner space (3ft × 3ft) in their restaurant." 
  },
  { 
    icon: Users, 
    title: "Customer Engagement", 
    desc: "Customers play the machine while waiting for food. Fun and entertainment guaranteed." 
  },
  { 
    icon: DollarSign, 
    title: "Revenue Generation", 
    desc: "Each play generates revenue. Customers insert coins and try to win prizes.",
    customIcon: "BDT"
  },
  { 
    icon: Percent, 
    title: "Profit Sharing", 
    desc: "Profits are split 50-50 between Clowee and partner. Calculated and paid twice monthly." 
  },
];

const MonthlyProfitSection = () => (
  <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/10">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Partnership <span className="text-primary">Business Model</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
          Simple, transparent, and profitable partnership model
        </p>
        <p className="text-foreground font-semibold">
          Profit sharing <span className="text-primary">twice every month</span> - ensuring consistent cash flow
        </p>
      </motion.div>

      {/* 5-Card Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-card rounded-xl border border-border p-4 hover:border-primary/40 hover:shadow-lg transition-all ${
              index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              {step.customIcon ? (
                <span className="text-2xl font-bold text-primary">{step.customIcon}</span>
              ) : (
                <step.icon className="w-6 h-6 text-primary" />
              )}
            </div>
            <h3 className="font-heading font-bold text-base text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MonthlyProfitSection;
