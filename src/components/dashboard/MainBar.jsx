import React from "react";
import Greeting from "./Greeting";
import Theme from "./Theme";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";

const MainBar = () => {
  return (
    <>
      <section className="h-full overflow-y-scroll overflow-x-hidden hide-scroll px-7">
        {/* box 1 */}
        <div className="flex items-center justify-between mt-8">
          <Greeting />
          <Theme />
        </div>
        {/* box 2 */}
        <div className="mt-20 grid grid-cols-2 gap-3">
          <Balance />
          <IncomeExpense />
        </div>
      </section>
    </>
  );
};

export default MainBar;
