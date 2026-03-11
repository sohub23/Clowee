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
  { item: "Payable To I3 Technologies", value: "BDT 16,275", payable: true },
];

const monthlyData = [
  { item: "Average Plays per Day", value: "120" },
  { item: "Total Plays (30 Days)", value: "3,600" },
  { item: "Coin Rate (Per Play)", value: "BDT 25" },
  { item: "Total Sales", value: "BDT 90,000" },
  { item: "Estimated Prize Out (Dolls)", value: "300" },
  { item: "Doll Cost (BDT 150 each)", value: "BDT 45,000" },
  { item: "Total Profit", value: "BDT 45,000", highlight: true },
  { item: "Maintenance Charge (10%)", value: "BDT 4,500" },
  { item: "Profit After Maintenance", value: "BDT 40,500", highlight: true },
  { item: "Clowee Profit Share (50%)", value: "BDT 20,250", clowee: true },
  { item: "Franchise Profit Share (50%)", value: "BDT 20,250", franchise: true },
  { item: "Payable To I3 Technologies", value: "BDT 69,750", payable: true },
];

const ProfitTable = ({ title, data, isWeekly }: { title: string; data: typeof weeklyData; isWeekly?: boolean }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
    {/* Header Section */}
    <div className="bg-gradient-to-r from-pink-400 to-pink-500 px-3 py-2 text-center border-b">
      <h3 className="font-bold text-white text-sm mb-1">
        I3 Technologies Business Model
      </h3>
      <p className="text-xs text-white">
        ({isWeekly ? 'Weekly Report' : 'Monthly Report'})
      </p>
    </div>
    
    {/* Company Header */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 text-center border-b">
      <h4 className="font-semibold text-gray-700 text-sm">I3 Technologies & ABC Company</h4>
    </div>
    
    {/* Table Header */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-2 border-b">
      <div className="text-center font-semibold text-gray-800 text-sm">
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
            <div className="flex justify-between items-center px-3 py-2">
              <span className={`font-medium ${textColor} text-xs flex-1 pr-2`}>
                {row.item}
              </span>
              <span className={`font-bold ${textColor} text-xs text-right min-w-[80px]`}>
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
  <section id="earnings" className="section-padding">
    <div className="container max-w-sm mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
           <span className="text-primary">Profit Calculation</span>
        </h2>
      </motion.div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProfitTable title="Weekly Calculation" data={weeklyData} isWeekly={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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