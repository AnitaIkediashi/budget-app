import React, { useContext, useEffect, useState } from "react";
import Greeting from "./Greeting";
import Theme from "./Theme";
import Balance from "./Balance";
import CircleProgressBar from "./CircleProgressBar";
import HistoryTransactions from "./HistoryTransactions";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AddTransactions from "./AddTransactions";
import { TransactionContext } from "../../context/BudgetTransactions";

const MainBar = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("");
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const { transactions } = useContext(TransactionContext);

  useEffect(() => {
    const amount = transactions.map((transaction) => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const fixedAmount = parseFloat("10000.00") * 0.01;
    const percentTotal = total * 0.01;
    if (percentTotal >= fixedAmount) {
      setProgress(fixedAmount);
      setColor("#31572c");
    } else if (percentTotal <= 20) {
      setProgress(percentTotal);
      setColor("#ff1a1a");
    } else if (percentTotal >= 20 && percentTotal <= 50) {
      setColor("#ffff00");
      setProgress(percentTotal);
    } else {
      setProgress(percentTotal);
      setColor("#31572c");
    }
  }, [transactions, setColor, setProgress]);

  const state = {
    size: 250,
    strokeWidth: 50,
    innerStroke: "#d8dde2",
    outerStroke: color, //setting outer color dynamically
    progress, //setting progress dynamically
  };

  return (
    <>
      <section className="h-full overflow-y-scroll overflow-x-hidden hide-scroll lg:px-7">
        {/* extras shown on mobile */}
        <div className="lg:hidden items-center justify-between flex fixed top-0 left-0 right-0 px-4 bg-[#eaf4f48a] backdrop-blur-sm">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20" />
          </Link>
          <Theme
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            open={open}
            handleOpen={handleOpen}
            setOpen={setOpen}
          />
        </div>
        <div className="lg:hidden items-center justify-center mt-7 flex">
          <Greeting />
        </div>
        {/* box 1 */}
        <div className="lg:flex items-center justify-between mt-8 hidden">
          <Greeting />
          <Theme
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            open={open}
            handleOpen={handleOpen}
            setOpen={setOpen}
          />
        </div>
        {/* box 2 */}
        <Balance />

        {/* box 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10">
          {/* progress bar */}
          <div className="h-fit">
            <CircleProgressBar {...state} />
          </div>
          <div className="h-fit">
            <HistoryTransactions />
          </div>
        </div>
        {/* box 4 */}
        <div className=" mb-10">
          <AddTransactions darkMode={darkMode} />
        </div>
      </section>
    </>
  );
};

export default MainBar;
