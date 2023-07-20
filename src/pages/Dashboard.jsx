import React from "react";
import SideBar from "../components/dashboard/SideBar";
import MainBar from "../components/dashboard/MainBar";

import { TransactionProvider } from "../context/BudgetTransactions";
const Dashboard = () => {
  return (
    <>
      <section className="grid lg:grid-cols-[256px,1fr] grid-cols-1 w-full overflow-hidden bg-color-green-100 h-screen p-5">
        <SideBar />
        <TransactionProvider>
          <MainBar />
        </TransactionProvider>
      </section>
    </>
  );
};

export default Dashboard;
