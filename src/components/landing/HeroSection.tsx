import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/clowee-banner 1：1.png";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="pt-20 pb-12 px-4">
      <div className="container max-w-sm mx-auto">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Partnership Model Only
            </div>
            <h1 className="text-2xl font-heading font-extrabold leading-tight text-foreground">
              Turn Your Empty Space Into{" "}
              <span className="text-primary">Passive Income</span> — Without Any Investment
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clowee by i3 Technologies installs and fully manages smart claw machines in restaurants under a 50% profit-sharing partnership model.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-xs"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={heroImage} alt="Clowee smart claw machine in a restaurant" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
          
          <div className="space-y-3">
            <Button variant="hero" size="lg" onClick={() => scrollTo("apply")} className="w-full">
              Become a Partner
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => scrollTo("earnings")} className="w-full">
              Calculate Your Earnings
            </Button>
          </div>
          
          <p className="text-xs font-bold text-muted-foreground">
            ⚠️ <span className="font-black">We operate only through partnership.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
