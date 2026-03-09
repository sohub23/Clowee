import { motion } from "framer-motion";

const weeklyData = [
  { step: "Cost Per Play", explanation: "The amount a customer pays for one play", amount: "৳25" },
  { step: "Average Plays Per Day", explanation: "On average, about 120 people play the machine daily", amount: "120 plays" },
  { step: "Daily Revenue", explanation: "120 plays × ৳25", amount: "৳3,000 per day" },
  { step: "Weekly Revenue (7 Days)", explanation: "৳3,000 × 7 days", amount: "৳21,000 per week" },
];

const monthlyData = [
  { step: "Monthly Revenue (30 Days)", explanation: "৳3,000 × 30 days", amount: "≈ ৳90,000 per month" },
  { step: "Estimated Net Profit", explanation: "Profit after basic operating costs", amount: "৳45,000 – ৳50,000" },
  { step: "Partner Profit Share (50%)", explanation: "Partner receives 50% of the net profit", amount: "৳22,000 – ৳25,000 per month" },
  { step: "", explanation: "", amount: "" },
];

const EarningsSection = () => (
  <section id="earnings" className="section-padding section-alt-bg">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Estimated Earnings Overview
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Weekly Earnings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-4 md:p-5 h-full"
        >
          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-4">
            Weekly Earnings
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left py-2 px-2 font-semibold text-foreground text-xs md:text-sm w-[35%]">Income Step</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground text-xs md:text-sm hidden md:table-cell w-[40%]">Explanation</th>
                  <th className="text-right py-2 px-2 font-semibold text-foreground text-xs md:text-sm w-[25%]">Amount (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((row) => (
                  <tr key={row.step} className="border-b border-border/50">
                    <td className="py-2 px-2 text-foreground">
                      <div className="font-medium text-xs md:text-sm">{row.step}</div>
                      <div className="text-xs text-muted-foreground md:hidden mt-1">{row.explanation}</div>
                    </td>
                    <td className="py-2 px-2 text-xs text-muted-foreground hidden md:table-cell">{row.explanation}</td>
                    <td className="py-2 px-2 text-right text-xs md:text-sm font-bold text-foreground">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Monthly Earnings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-4 md:p-5 h-full"
        >
          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-4">
            Monthly Earnings
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left py-2 px-2 font-semibold text-foreground text-xs md:text-sm w-[35%]">Income Step</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground text-xs md:text-sm hidden md:table-cell w-[40%]">Explanation</th>
                  <th className="text-right py-2 px-2 font-semibold text-foreground text-xs md:text-sm w-[25%]">Amount (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-2 px-2 text-foreground">
                      <div className="font-medium text-xs md:text-sm">{row.step}</div>
                      <div className="text-xs text-muted-foreground md:hidden mt-1">{row.explanation}</div>
                    </td>
                    <td className="py-2 px-2 text-xs text-muted-foreground hidden md:table-cell">{row.explanation}</td>
                    <td className="py-2 px-2 text-right text-xs md:text-sm font-bold text-foreground">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EarningsSection;
