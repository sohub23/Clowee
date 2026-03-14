import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const ProfitCalculationAISection = () => {
  const [playsPerDay, setPlaysPerDay] = useState(120);
  const [coinRate, setCoinRate] = useState(25);
  const [dollCost, setDollCost] = useState(150);

  // AI Calculations
  const calculateProfits = () => {
    const weeklyPlays = playsPerDay * 7;
    const monthlyPlays = playsPerDay * 30;
    
    const weeklySales = weeklyPlays * coinRate;
    const monthlySales = monthlyPlays * coinRate;
    
    const weeklyDollsOut = Math.floor(weeklyPlays * 0.083); // ~8.3% win rate
    const monthlyDollsOut = Math.floor(monthlyPlays * 0.083);
    
    const weeklyDollCost = weeklyDollsOut * dollCost;
    const monthlyDollCost = monthlyDollsOut * dollCost;
    
    const weeklyProfit = weeklySales - weeklyDollCost;
    const monthlyProfit = monthlySales - monthlyDollCost;
    
    const weeklyMaintenance = weeklyProfit * 0.1;
    const monthlyMaintenance = monthlyProfit * 0.1;
    
    const weeklyNetProfit = weeklyProfit - weeklyMaintenance;
    const monthlyNetProfit = monthlyProfit - monthlyMaintenance;
    
    const weeklyFranchiseShare = weeklyNetProfit * 0.5;
    const monthlyFranchiseShare = monthlyNetProfit * 0.5;

    return {
      weekly: {
        plays: weeklyPlays,
        sales: weeklySales,
        dollsOut: weeklyDollsOut,
        dollCost: weeklyDollCost,
        profit: weeklyProfit,
        maintenance: weeklyMaintenance,
        netProfit: weeklyNetProfit,
        franchiseShare: weeklyFranchiseShare
      },
      monthly: {
        plays: monthlyPlays,
        sales: monthlySales,
        dollsOut: monthlyDollsOut,
        dollCost: monthlyDollCost,
        profit: monthlyProfit,
        maintenance: monthlyMaintenance,
        netProfit: monthlyNetProfit,
        franchiseShare: monthlyFranchiseShare
      }
    };
  };

  const results = calculateProfits();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#E291BE]">Profit Calculation</span>
          </h2>
        </motion.div>

        {/* Two Tables Side by Side */}
        <div className="grid grid-cols-2 gap-2 md:gap-6 max-w-2xl mx-auto">
          {/* Left Table - Use Case */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="text-center py-0.5 border-b border-gray-100">
              <h3 className="text-[7px] md:text-[10px] font-medium text-gray-900 leading-tight">I3 Technologies(Use-Case)</h3>
              <p className="text-[6px] md:text-[9px] text-gray-500">(Weekly Report)</p>
            </div>
            
            <div className="bg-[#E291BE] text-white text-center py-0.5 font-medium text-[7px] md:text-[10px]">
              I3 Technologies & ABC
            </div>
            
            <div className="bg-blue-100 text-center py-0.5 font-medium text-[7px] md:text-[10px]">
              Per Week (approx.)
            </div>
            
            <table className="w-full">
              <tbody className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs">
                <tr className="border-b">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Avg Plays/Day</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">120</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Total Plays(7D)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">840</td>
                </tr>
                <tr className="border-b">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Rate(Per Play)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">25 BDT</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700 font-semibold">Weekly Sales</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">21,000</td>
                </tr>
                <tr className="border-b">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Prize Out(Dolls)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">70</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Doll Cost</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">10,500</td>
                </tr>
                <tr className="border-b font-bold text-green-600">
                  <td className="px-1 py-0.5 md:px-2 md:py-1">Total Profit</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">10,500</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Maintenance(10%)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">1,050</td>
                </tr>
                <tr className="border-b font-bold text-blue-600">
                  <td className="px-1 py-0.5 md:px-2 md:py-1">Net Profit</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">9,450</td>
                </tr>
                <tr className="bg-[#E291BE] text-white font-bold">
                  <td className="px-1 py-0.5 md:px-2 md:py-1">Rest. Share(50%)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">4,725</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Right Table - Coin Count Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="text-center py-0.5 border-b border-gray-100">
              <h3 className="text-[7px] md:text-[10px] font-medium text-gray-900 leading-tight">I3 Technologies(Use-Case)</h3>
              <p className="text-[6px] md:text-[9px] text-gray-500">(Weekly Report)</p>
            </div>
            
            <div className="bg-[#E291BE] text-white text-center py-0.5 font-medium text-[7px] md:text-[10px]">
              I3 Technologies & ABC
            </div>
            
            <div className="bg-blue-100 text-center py-0.5 font-medium text-[7px] md:text-[10px]">
              Coin Details
            </div>
            
            <table className="w-full">
              <tbody className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs">
                <tr className="border-b">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Coin Count</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">840</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Coin Rate</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">25 BDT</td>
                </tr>
                <tr className="border-b">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700 font-semibold">Total Sales TK</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">21,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Prize out Ratio</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">8.3%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Doll Rate</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">150 BDT</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Total Doll Cost</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right font-semibold">10,500</td>
                </tr>
                <tr className="border-b font-bold text-green-600">
                  <td className="px-1 py-0.5 md:px-2 md:py-1">Total Profit</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">10,500</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-gray-700">Maintenance(10%)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">1,050</td>
                </tr>
                <tr className="border-b font-bold text-blue-600">
                  <td className="px-1 py-0.5 md:px-2 md:py-1">Net Profit</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">9,450</td>
                </tr>
                <tr className="bg-[#E291BE] text-white font-bold">
                  <td className="px-1 py-0.5 md:px-2 md:py-1">Rest. Share(50%)</td>
                  <td className="px-1 py-0.5 md:px-2 md:py-1 text-right">4,725</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculationAISection;