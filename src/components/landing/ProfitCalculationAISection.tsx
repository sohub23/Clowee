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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Profit Calculator</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential profits with our interactive calculator
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              Customize Parameters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Plays per Day
                </label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={playsPerDay}
                  onChange={(e) => setPlaysPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>50</span>
                  <span className="font-bold text-blue-600">{playsPerDay}</span>
                  <span>300</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Coin Rate (BDT per play)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={coinRate}
                  onChange={(e) => setCoinRate(Number(e.target.value))}
                  className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-bold text-green-600">৳{coinRate}</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Doll Cost (BDT each)
                </label>
                <input
                  type="range"
                  min="100"
                  max="300"
                  value={dollCost}
                  onChange={(e) => setDollCost(Number(e.target.value))}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>100</span>
                  <span className="font-bold text-purple-600">৳{dollCost}</span>
                  <span>300</span>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Business Insights
              </h4>
              <p className="text-sm text-gray-600">
                Based on current parameters, your location shows {playsPerDay > 150 ? 'high' : playsPerDay > 100 ? 'medium' : 'low'} traffic potential. 
                Optimal coin rate for your area is ৳{coinRate}.
              </p>
            </div>
          </motion.div>

          {/* Results Display - Side by Side Tables */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Weekly Results */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Weekly Projection
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">৳{results.weekly.sales.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Sales</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">৳{results.weekly.franchiseShare.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Your Share</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Plays: {results.weekly.plays}</span>
                    <span>Dolls Out: {results.weekly.dollsOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance: ৳{results.weekly.maintenance.toLocaleString()}</span>
                    <span>Net Profit: ৳{results.weekly.netProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Results */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Monthly Projection
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">৳{results.monthly.sales.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Sales</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">৳{results.monthly.franchiseShare.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Your Share</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Plays: {results.monthly.plays.toLocaleString()}</span>
                    <span>Dolls Out: {results.monthly.dollsOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance: ৳{results.monthly.maintenance.toLocaleString()}</span>
                    <span>Net Profit: ৳{results.monthly.netProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROI Indicator - Full Width Below Tables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center">
              <h4 className="font-bold text-lg mb-2">Return on Investment</h4>
              <div className="text-3xl font-bold">
                {Math.round((results.monthly.franchiseShare * 12) / 500000 * 100)}% Annual ROI
              </div>
              <p className="text-sm opacity-90 mt-2">
                Based on ৳5,00,000 initial investment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculationAISection;