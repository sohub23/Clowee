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
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Table - Use Case */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="text-center py-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">I3 Technologies Business Model(Use-Case)</h3>
              <p className="text-sm text-gray-600">Sohub</p>
              <p className="text-xs text-gray-500">(Weekly Report)</p>
            </div>
            
            <div className="bg-[#E291BE] text-white text-center py-3 font-semibold">
              I3 Technologies & ABC Company
            </div>
            
            <div className="bg-blue-100 text-center py-2 font-semibold text-sm">
              Per Week (approx.)
            </div>
            
            <table className="w-full">
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Average Plays per Day</td>
                  <td className="px-4 py-3 text-right font-semibold">120</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Total Plays (7 Days)</td>
                  <td className="px-4 py-3 text-right font-semibold">840</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Coin Rate (Per Play)</td>
                  <td className="px-4 py-3 text-right font-semibold">৳25</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Total Weekly Sales</td>
                  <td className="px-4 py-3 text-right font-semibold">৳21,000</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Estimated Prize Out (Dolls)</td>
                  <td className="px-4 py-3 text-right font-semibold">70</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Doll Cost (৳150 each)</td>
                  <td className="px-4 py-3 text-right font-semibold">৳10,500</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700 font-semibold">Total Profit</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">৳10,500</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Maintenance Charge (10%)</td>
                  <td className="px-4 py-3 text-right font-semibold">৳1,050</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700 font-semibold">Net Profit</td>
                  <td className="px-4 py-3 text-right font-bold text-blue-600">৳9,450</td>
                </tr>
                <tr className="bg-[#E291BE] text-white">
                  <td className="px-4 py-3 font-bold">Restaurant Share (50%)</td>
                  <td className="px-4 py-3 text-right font-bold text-lg">৳4,725</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Right Table - Coin Count Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="text-center py-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">I3 Technologies Business Model(Use-Case)</h3>
              <p className="text-sm text-gray-600">Sohub</p>
              <p className="text-xs text-gray-500">(Weekly Report)</p>
            </div>
            
            <div className="bg-[#E291BE] text-white text-center py-3 font-semibold">
              I3 Technologies & ABC Company
            </div>
            
            <div className="bg-blue-100 text-center py-2 font-semibold text-sm">
              Coin Details
            </div>
            
            <table className="w-full">
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Coin Count</td>
                  <td className="px-4 py-3 text-right font-semibold">840</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Coin Rate</td>
                  <td className="px-4 py-3 text-right font-semibold">৳25</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Total Sales (TK)</td>
                  <td className="px-4 py-3 text-right font-semibold">৳21,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Prize out Ratio</td>
                  <td className="px-4 py-3 text-right font-semibold">8.3%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700">Doll Rate</td>
                  <td className="px-4 py-3 text-right font-semibold">৳150</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Total Doll Cost</td>
                  <td className="px-4 py-3 text-right font-semibold">৳10,500</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700 font-semibold">Total Profit (Total Sales-Doll Cost)</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">৳10,500</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">10% Maintenance Charge</td>
                  <td className="px-4 py-3 text-right font-semibold">৳1,050</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-700 font-semibold">Net Profit</td>
                  <td className="px-4 py-3 text-right font-bold text-blue-600">৳9,450</td>
                </tr>
                <tr className="bg-[#E291BE] text-white">
                  <td className="px-4 py-3 font-bold">Restaurant Share (50%)</td>
                  <td className="px-4 py-3 text-right font-bold text-lg">৳4,725</td>
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