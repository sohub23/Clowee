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
    <div className="bg-[#E291BE] px-2 py-0.5 text-center border-b">
      <h3 className="font-bold text-white text-[7px] md:text-[10px] leading-tight">
        I3 Technologies Business Model(Use-Case)
      </h3>
      <p className="text-[6px] md:text-[9px] text-white">
        ({isWeekly ? 'Weekly Report' : 'Monthly Report'})
      </p>
    </div>
    
    {/* Company Header */}
    <div className="bg-blue-50 px-2 py-0.5 text-center border-b">
      <h4 className="font-semibold text-gray-700 text-[6px] md:text-[9px]">I3 Technologies & ABC Company</h4>
    </div>
    
    {/* Table Header */}
    <div className="bg-blue-100 px-2 py-0.5 border-b">
      <div className="text-center font-semibold text-gray-800 text-[7px] md:text-[10px]">
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
          bgColor = 'bg-green-50';
          textColor = 'text-gray-800 font-semibold';
        }
        if (row.payable) {
          bgColor = 'bg-[#E291BE]';
          textColor = 'text-white font-semibold';
        }
        
        return (
          <div key={index} className={`${bgColor} transition-colors duration-200`}>
            <div className="flex justify-between items-center px-1.5 py-0.5 md:px-3 md:py-1.5">
              <span className={`font-medium ${textColor} text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs flex-1 truncate`}>
                {row.item}
              </span>
              <span className={`font-bold ${textColor} text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs text-right truncate ml-1`}>
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
  <section id="earnings" className="py-12 md:py-20 bg-white">
    <div className="container px-4 mx-auto max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
           Profit <span className="text-[#E291BE]">Calculation</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-2 md:gap-6">
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
          <ProfitTable title="Monthly Calculation" data={monthlyData} isWeekly={false} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProfitEstimationSection;