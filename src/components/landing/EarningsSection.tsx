import { motion } from "framer-motion";

const dailyData = [
  { item: "Coin Count", value: "120" },
  { item: "Coin Rate", value: "25" },
  { item: "Total Sales (TK)", value: "3,000" },
  { item: "Prize out Ratio", value: "10" },
  { item: "Doll Rate", value: "150" },
  { item: "Total Doll Cost", value: "1,500" },
  { item: "Total Profit (Total Sales-Doll Cost)", value: "1,500", highlight: true },
  { item: "10% Maintenance Charge", value: "150" },
  { item: "Total Profit after 10% Maintenance Charge", value: "1,350", highlight: true },
  { item: "Profit Share(50%)- Clowee", value: "675", clowee: true },
  { item: "Profit Share(50%)- Franchise", value: "675", franchise: true },
];

const monthlyData = [
  { item: "Coin Count", value: "3600" },
  { item: "Coin Rate", value: "25" },
  { item: "Total Sales (TK)", value: "90,000" },
  { item: "Prize out Ratio", value: "300" },
  { item: "Doll Rate", value: "150" },
  { item: "Total Doll Cost", value: "45,000" },
  { item: "Total Profit (Total Sales-Doll Cost)", value: "45,000", highlight: true },
  { item: "10% Maintenance Charge", value: "4500" },
  { item: "Total Profit after 10% Maintenance Charge", value: "40,500", highlight: true },
  { item: "Profit Share(50%)- Clowee", value: "20,250", clowee: true },
  { item: "Profit Share(50%)- Franchise", value: "20,250", franchise: true },
];

const ProfitTable = ({ title, data, isDaily }: { title: string; data: typeof dailyData; isDaily?: boolean }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm max-w-md mx-auto">
    <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
      <h3 className="text-center font-bold text-gray-800 text-sm">
        I3 Technologies Business Model(Use-Case)
      </h3>
      <p className="text-center text-xs text-gray-600 mt-1">
        ABC Company<br />
        (Daily/Monthly Report)
      </p>
    </div>
    <div className="bg-[#E291BE] px-3 py-1 text-center">
      <h4 className="font-semibold text-white text-sm">I3 Technologies & ABC Company</h4>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-blue-100">
            <th className="text-left px-3 py-1 font-semibold text-gray-800 border-r border-gray-300"></th>
            <th className="text-center px-3 py-1 font-semibold text-gray-800 border-r border-gray-300 bg-blue-200">
              {isDaily ? 'Per Day (approx.)' : 'Per Month (approx.)'}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            let bgColor = 'bg-white';
            if (row.clowee) bgColor = 'bg-[#E291BE]';
            if (row.franchise) bgColor = 'bg-green-400';
            
            return (
              <tr key={index} className={`border-b border-gray-200 ${bgColor}`}>
                <td className="px-3 py-1 font-medium text-gray-800 border-r border-gray-300 text-xs group-hover:text-white">
                  {row.item}
                </td>
                <td className="px-3 py-1 text-center font-semibold text-gray-800 text-xs group-hover:text-white">
                  {row.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

const EarningsSection = () => (
  <section id="earnings" className="section-padding">
    <div className="container max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Estimated <span className="text-primary">Earnings</span> Overview
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProfitTable title="Daily Calculation" data={dailyData} isDaily={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfitTable title="Monthly Calculation" data={monthlyData} isDaily={false} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default EarningsSection;
