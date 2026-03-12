import { motion } from "framer-motion";
import { Clock, LayoutGrid, Frown, TrendingDown } from "lucide-react";

const problems = [
  { icon: Clock, title: "10–30 Min Wait", desc: "Customers wait idle for food preparation" },
  { icon: LayoutGrid, title: "Idle Corner Space", desc: "Unused space generating zero revenue" },
  { icon: Frown, title: "Kids Get Bored", desc: "Families leave sooner without entertainment" },
  { icon: TrendingDown, title: "Missed Revenue", desc: "Empty space = missed monetization opportunity" },
];

const ProblemSection = () => (
  <section className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          The <span className="text-primary">Problem</span> Every Restaurant Faces
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          While customers wait, your restaurant loses engagement — and revenue.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
