import { motion } from "framer-motion";

const weeklyData = [
  { item: "Average Plays per Day", value: "120" },
  { item: "Total Plays (7 Days)", value: "840" },
  { item: "Coin Rate (Per Play)", value: "25 BDT" },
  { item: "Total Weekly Sales", value: "21,000 BDT" },
  { item: "Estimated Prize Out (Dolls)", value: "70" },
  { item: "Doll Cost (150 BDT each)", value: "10,500 BDT" },
  { item: "Total Profit", value: "10,500 BDT", highlight: true },
  { item: "Maintenance Charge (10%)", value: "1,050 BDT" },
  { item: "Profit After Maintenance", value: "9,450 BDT", highlight: true },
  { item: "Clowee Profit Share (50%)", value: "4,725 BDT", clowee: true },
  { item: "Franchise Profit Share (50%)", value: "4,725 BDT", franchise: true },
  { item: "Payable To I3 Technologies", value: "16,275 BDT", payable: true },
];

const monthlyData = [
  { item: "Average Plays per Day", value: "120" },
  { item: "Total Plays (30 Days)", value: "3,600" },
  { item: "Coin Rate (Per Play)", value: "25 BDT" },
  { item: "Total Sales", value: "90,000 BDT" },
  { item: "Estimated Prize Out (Dolls)", value: "300" },
  { item: "Doll Cost (150 BDT each)", value: "45,000 BDT" },
  { item: "Total Profit", value: "45,000 BDT", highlight: true },
  { item: "Maintenance Charge (10%)", value: "4,500 BDT" },
  { item: "Profit After Maintenance", value: "40,500 BDT", highlight: true },
  { item: "Clowee Profit Share (50%)", value: "20,250 BDT", clowee: true },
  { item: "Franchise Profit Share (50%)", value: "20,250 BDT", franchise: true },
  { item: "Payable To I3 Technologies", value: "69,750 BDT", payable: true },
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
  <section id="earnings" className="section-padding">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
           Profit <span className="text-primary">Breakdown</span>
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