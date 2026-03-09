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
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-800/20 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-purple-200 dark:border-purple-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl font-heading font-bold text-foreground mb-2">
                2× Growth vs. last month
              </p>
              <p className="text-sm text-muted-foreground">
                Profit is calculated <strong className="text-foreground">twice a month</strong> for consistent cash flow
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 text-center">
            Based on average performance across <strong className="text-foreground">12+ partner locations</strong> in Dhaka
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/60 dark:bg-purple-900/30 rounded-xl p-4 text-center">
                <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <p className="font-heading font-bold text-foreground text-sm mb-1">{stat.label}</p>
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
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-800/20 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2">
                💰 Monthly Profit Share
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/60 dark:bg-purple-900/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <p className="font-heading font-semibold text-foreground">Profit Distribution</p>
              </div>
              <p className="text-sm text-muted-foreground pl-8">
                <mark className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">Twice monthly</mark> for consistent cash flow
              </p>
            </div>

            <div className="bg-white/60 dark:bg-purple-900/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <p className="font-heading font-semibold text-foreground">Benefit</p>
              </div>
              <p className="text-sm text-muted-foreground pl-8">
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
