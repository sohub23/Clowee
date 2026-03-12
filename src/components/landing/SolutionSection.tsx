import { motion } from "framer-motion";
import { Gamepad2, Timer, Heart, Wallet, Ruler, Coins, Trophy, RotateCcw } from "lucide-react";

const features = [
  { icon: Gamepad2, text: "Increases engagement" },
  { icon: Timer, text: "Increases dwell time" },
  { icon: Heart, text: "Family-friendly atmosphere" },
  { icon: Wallet, text: "Generates passive income" },
];

const specs = [
  { icon: Ruler, label: "Space Required", value: "Small Space Needed" },
  { icon: Coins, label: "Coin Price", value: "Just Insert Coin & Play" },
  { icon: Trophy, label: "Prize Cost", value: "Win Exciting Prizes" },
  { icon: RotateCcw, label: "Repeat Visits", value: "Boosts Customer Return" },
];

const SolutionSection = () => (
  <section className="section-padding section-alt-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          What is <span className="text-primary">Clowee</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A smart coin-operated claw machine installed in restaurants — owned and operated by i3 Technologies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {features.map((f) => (
            <div key={f.text} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-medium text-foreground">{f.text}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-5 border border-border text-center">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
              <p className="font-heading font-bold text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        All machines are <strong className="text-foreground">owned and operated by i3 Technologies</strong>. Smart payout logic system included.
      </p>
    </div>
  </section>
);

export default SolutionSection;
