import React, { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareExpenseLineChartData } from "../../utils/helper";
import CustomLineChart from "../Charts/CustomLineChart";

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return <div className="card bg-white shadow-gray-100 border border-gray-200/50">
    <div className="flex items-center justify-between">
        <div className="">
            <h5 className="text-lg">Expense Overview</h5>
            <p className="text-xs text-gray-400 mt-0.5 ">Track your spending trends over time and gain insights into where your money goes.</p>
        </div>
        <button className="add-btn bg-purple-50 border text-purple-600 border-purple-100" onClick={onExpenseIncome}>
            <LuPlus className="text-lg" />
            Add Expense
        </button>
    </div>
    <div className="mt-10">
        <CustomLineChart data={chartData} />
    </div>
  </div>;
};

export default ExpenseOverview;
