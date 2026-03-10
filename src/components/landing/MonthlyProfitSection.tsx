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
          Revenue <span className="text-primary">Sharing</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-800/20 rounded-2xl p-4 md:p-5 shadow-lg border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-start gap-3 mb-4 pb-4 border-b border-purple-200 dark:border-purple-800">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-base md:text-lg font-heading font-bold text-foreground mb-1">
                2× Growth vs. last month
              </p>
              <p className="text-xs text-muted-foreground">
                Profit is calculated <strong className="text-foreground">twice a month</strong> for consistent cash flow
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-4 text-center">
            Based on average performance across <strong className="text-foreground">12+ partner locations</strong> in Dhaka
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/60 dark:bg-purple-900/30 rounded-xl p-3 text-center">
                <stat.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                <p className="font-heading font-bold text-foreground text-xs mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-800/20 rounded-2xl p-4 md:p-5 shadow-lg border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-1">
                💰 Monthly Profit Share
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/60 dark:bg-purple-900/30 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <p className="font-heading font-semibold text-foreground text-sm">Profit Distribution</p>
              </div>
              <p className="text-xs text-muted-foreground pl-6">
                <mark className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">Twice monthly</mark> for consistent cash flow
              </p>
            </div>

            <div className="bg-white/60 dark:bg-purple-900/30 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <p className="font-heading font-semibold text-foreground text-sm">Benefit</p>
              </div>
              <p className="text-xs text-muted-foreground pl-6">
                Regular and transparent earnings for all partners
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MonthlyProfitSection;
