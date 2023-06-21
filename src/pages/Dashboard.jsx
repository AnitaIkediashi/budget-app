import React from "react";
import SideBar from "../components/dashboard/SideBar";
import MainBar from "../components/dashboard/MainBar";

const Dashboard = () => {
  return (
    <section className="grid lg:grid-cols-[256px,1fr] grid-cols-1 w-full overflow-hidden">
      <SideBar />
      <MainBar />
    </section>
  );
};

export default Dashboard;
