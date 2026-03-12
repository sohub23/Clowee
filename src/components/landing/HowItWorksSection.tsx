import { motion } from "framer-motion";
import { FileText, MapPin, Wrench, HandCoins } from "lucide-react";

const steps = [
  { icon: FileText, num: "01", title: "You Apply for Partnership", desc: "Fill out the simple form with your restaurant details." },
  { icon: MapPin, num: "02", title: "We Evaluate Location", desc: "Our team visits to assess foot traffic and placement." },
  { icon: Wrench, num: "03", title: "We Install the Machine", desc: "Full setup handled by our professional team." },
  { icon: HandCoins, num: "04", title: "Monthly Profit Shared 50–50", desc: "Transparent reporting with payouts twice monthly." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding section-alt-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          How It <span className="text-primary">Works</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-xs font-heading font-bold text-primary mb-2 block">{s.num}</span>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
