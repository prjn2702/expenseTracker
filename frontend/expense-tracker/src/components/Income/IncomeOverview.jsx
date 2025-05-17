import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
    return () => {};
  }, [transactions]);
  return <div className="card bg-gray-400 shadow-gray-100 border border-gray-200/50">
    <div className="flex items-center justify-between">
        <div className="">
            <h5 className="text-lg">Income Overview</h5>
            <p className="text-xs text-primary mt-0.5">Track your earnings over time and analyze your income trends.</p>
        </div>
        <button className="add-btn bg-purple-50 border text-green-600 border-purple-100" onClick={onAddIncome}>
            <LuPlus className="text-lg" />
            Add Income
        </button>
    </div>
    <div className="mt-10">
        <CustomBarChart data={chartData} />
    </div>
  </div>;
};

export default IncomeOverview;
