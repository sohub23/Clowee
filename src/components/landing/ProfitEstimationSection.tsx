import { motion } from "framer-motion";

const weeklyData = [
  { item: "Average Plays per Day", value: "120" },
  { item: "Total Plays (7 Days)", value: "840" },
  { item: "Coin Rate (Per Play)", value: "BDT 25" },
  { item: "Total Weekly Sales", value: "BDT 21,000" },
  { item: "Estimated Prize Out (Dolls)", value: "70" },
  { item: "Doll Cost (BDT 150 each)", value: "BDT 10,500" },
  { item: "Total Profit", value: "BDT 10,500", highlight: true },
  { item: "Maintenance Charge (10%)", value: "BDT 1,050" },
  { item: "Profit After Maintenance", value: "BDT 9,450", highlight: true },
  { item: "Clowee Profit Share (50%)", value: "BDT 4,725", clowee: true },
  { item: "Franchise Profit Share (50%)", value: "BDT 4,725", franchise: true },
  { item: "Payable To I3 Technologies", value: "16,275", payable: true },

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
  { item: "Payable To I3 Technologies", value: "69,750", payable: true },
];

const ProfitTable = ({ title, data, isWeekly }: { title: string; data: typeof weeklyData; isWeekly?: boolean }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
    {/* Header Section */}
    <div className="bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4 text-center border-b">
      <h3 className="font-bold text-white text-lg mb-1">
        I3 Technologies Business Model(Use-Case)
      </h3>
      <p className="text-sm text-white">
        ({isWeekly ? 'Weekly Report' : 'Monthly Report'})
      </p>
    </div>
    
    {/* Company Header */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 text-center border-b">
      <h4 className="font-semibold text-gray-700 text-base">I3 Technologies & ABC Company</h4>
    </div>
    
    {/* Table Header */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-3 border-b">
      <div className="text-center font-semibold text-gray-800">
        {isWeekly ? 'Per Week (approx.)' : 'Per Month (approx.)'}
      </div>
    </div>
    
    {/* Table Content */}
    <div className="divide-y divide-gray-100">
      {data.map((row, index) => {
        let bgColor = 'bg-white hover:bg-gray-50';
        let textColor = 'text-gray-800';
        
        if (row.clowee) {
          bgColor = 'bg-white hover:bg-gray-50';
          textColor = 'text-gray-800 font-semibold';
        }
        if (row.franchise) {
          bgColor = 'bg-gradient-to-r from-green-50 to-emerald-50';
          textColor = 'text-gray-800 font-semibold';
        }
        if (row.payable) {
          bgColor = 'bg-gradient-to-r from-pink-400 to-pink-500';
          textColor = 'text-white font-semibold';
        }
        
        return (
          <div key={index} className={`${bgColor} transition-colors duration-200`}>
            <div className="flex justify-between items-center px-6 py-4">
              <span className={`font-medium ${textColor} text-sm flex-1`}>
                {row.item}
              </span>
              <span className={`font-bold ${textColor} text-sm text-right min-w-[100px]`}>
                {row.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const ProfitEstimationSection = () => (
  <section className="section-padding">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
           <span className="text-primary">Profit Calculation</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProfitTable title="Weekly Calculation" data={weeklyData} isWeekly={true} />
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

export default ProfitEstimationSection;