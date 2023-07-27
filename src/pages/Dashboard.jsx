import React, { useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import MainBar from "../components/dashboard/MainBar";

import { TransactionProvider } from "../context/BudgetTransactions";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [active, setActive] = useState('home')
  const navigate = useNavigate();
  return (
    <>
      <section className="grid lg:grid-cols-[256px,1fr] grid-cols-1 w-full overflow-hidden bg-color-green-100 h-screen p-5">
        <SideBar active={active} setActive={setActive} navigate={navigate} />
        <TransactionProvider>
          <MainBar />
        </TransactionProvider>
      </section>
    </>
  );
};

export default Dashboard;
