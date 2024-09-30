import React, { useState } from 'react';

const ROICalculator = () => {
  const [avgJobValue, setAvgJobValue] = useState(300);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(10);
  const [serviceCostPerMonth, setServiceCostPerMonth] = useState(200);
  const [conversionRate, setConversionRate] = useState(20);

  const weeksPerYear = 52;
  const potentialYearlyRevenue = avgJobValue * missedCallsPerWeek * weeksPerYear * (conversionRate / 100);
  const yearlyServiceCost = serviceCostPerMonth * 12;
  const netGain = potentialYearlyRevenue - yearlyServiceCost;
  const roi = (netGain / yearlyServiceCost) * 100;

  return (
    <div className="bg-gray-50" id="calculator">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Calculate Your ROI</h2>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Average Job Value ($)</label>
            <input type="number" value={avgJobValue} onChange={(e) => setAvgJobValue(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Missed Calls per Week</label>
            <input type="number" value={missedCallsPerWeek} onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Cost per Month ($)</label>
            <input type="number" value={serviceCostPerMonth} onChange={(e) => setServiceCostPerMonth(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Conversion Rate (%)</label>
            <input type="number" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Your Potential ROI</h3>
          <p className="mt-2 text-gray-500">Potential Yearly Revenue: ${potentialYearlyRevenue.toFixed(2)}</p>
          <p className="text-gray-500">Yearly Service Cost: ${yearlyServiceCost.toFixed(2)}</p>
          <p className="text-gray-500">Net Gain: ${netGain.toFixed(2)}</p>
          <p className="text-xl font-bold text-indigo-600">ROI: {roi.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};
export default ROICalculator;