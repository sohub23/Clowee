import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/clowee-banner 1：1.png";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden min-h-[600px] flex items-center lg:block">
      {/* Mobile Background Image - Only visible below lg breakpoint */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img 
          src={heroImage} 
          alt="background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Partnership Model Only
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold leading-tight text-white lg:text-foreground text-balance mb-6">
              Turn Your Empty Space Into{" "}
              <span className="text-primary">Passive Income</span> — Without Any Investment
            </h1>
            <p className="text-lg text-white/90 lg:text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Clowee by i3 Technologies installs and fully manages smart claw machines in restaurants under a 50% profit-sharing partnership model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="hero" size="lg" onClick={() => scrollTo("apply")}>
                Become a Partner
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollTo("earnings")}>
                Calculate Your Earnings
              </Button>
            </div>
            <p className="text-sm font-bold text-white/70 lg:text-muted-foreground">
              ⚠️ We operate only through partnership.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative max-w-md mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Clowee smart claw machine in a restaurant" className="w-full h-auto object-cover aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
