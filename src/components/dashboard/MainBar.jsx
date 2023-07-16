import React from "react";
import Greeting from "./Greeting";
import Theme from "./Theme";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import CircleProgressBar from "./CircleProgressBar";
import HistoryTransactions from "./HistoryTransactions";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import AddTransactions from "./AddTransactions";

const MainBar = () => {
  return (
    <>
      <section className="h-full overflow-y-scroll overflow-x-hidden hide-scroll lg:px-7">
        {/* extras shown on mobile */}
        <div className="lg:hidden items-center justify-between flex fixed top-0 left-0 right-0 px-4 bg-[#eaf4f48a] backdrop-blur-sm">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20" />
          </Link>
          <Theme />
        </div>
        <div className="lg:hidden items-center justify-center mt-7 flex">
          <Greeting />
        </div>
        {/* box 1 */}
        <div className="lg:flex items-center justify-between mt-8 hidden">
          <Greeting />
          <Theme />
        </div>
        {/* box 2 */}
        <div className="mt-20 grid lg:grid-cols-2 grid-cols-1 gap-3 mb-10">
          <Balance />
          <IncomeExpense />
        </div>
        {/* box 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10">
          {/* progress bar */}
          <CircleProgressBar />
          <HistoryTransactions />
        </div>
        {/* box 4 */}
        <div className=" mb-10">
          <AddTransactions />
        </div>
      </section>
    </>
  );
};

export default MainBar;
