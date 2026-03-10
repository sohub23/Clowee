import { motion } from "framer-motion";
import { TrendingUp, Percent, DollarSign, Headphones, Calendar } from "lucide-react";

const stats = [
  { icon: Percent, label: "50% Profit Share", desc: "Fair revenue split" },
  { icon: DollarSign, label: "0৳ Investment", desc: "Zero upfront cost" },
  { icon: Headphones, label: "24/7 Support", desc: "Always available" },
];

const MonthlyProfitSection = () => (
  <section className="section-padding">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Partnership <span className="text-primary">Business Model</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our partners receive profit sharing <strong className="text-primary">twice every month</strong> - ensuring consistent cash flow and transparent earnings
        </p>
      </motion.div>
    </div>
  </section>
);

export default MonthlyProfitSection;
