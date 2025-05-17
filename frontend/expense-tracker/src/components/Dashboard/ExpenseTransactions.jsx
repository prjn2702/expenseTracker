import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card bg-white shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>
        <button className="card-btn text-gray-700 hover:text-purple-500 bg-gray-50 hover:bg-purple-50 border-gray-200/50" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className="mt-6">
        {transactions?.slice(0, 4)?.map((expense)=>(
            <TransactionInfoCard key={expense._id} title={expense.category} icon={expense.icon} date={moment(expense.date).format("Do MM YYYY")} amount={expense.amount} type="expense" hideDeleteBtn />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
