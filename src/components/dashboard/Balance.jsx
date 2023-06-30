import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React from "react";
import UtilCard from "../../utils/UtilCard";

const Balance = () => {
  return (
    <UtilCard className="flex items-center flex-col justify-center">
      <CurrencyDollarIcon className="w-6" />
      <h3 className=" font-bold text-lg">Balance</h3>
      <h4 className="text-xl font-medium">0.00</h4>
    </UtilCard>
  );
};

export default Balance;
