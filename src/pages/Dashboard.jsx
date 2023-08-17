import React, { useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import MainBar from "../components/dashboard/MainBar";

import { TransactionProvider } from "../context/BudgetTransactions";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [photo, setPhoto] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  
  return (
    <>
      <section
        className={`grid lg:grid-cols-[256px,1fr] grid-cols-1 w-full overflow-hidden bg-color-green-100 h-screen p-5 ${
          darkMode ? "dark" : ""
        }`}
      >
        <SideBar
          active={active}
          setActive={setActive}
          navigate={navigate}
          darkMode={darkMode}
        />
        <TransactionProvider>
          <MainBar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            photo={photo}
            open={open}
            handleOpen={handleOpen}
          />
        </TransactionProvider>
      </section>
    </>
  );
};

export default Dashboard;
