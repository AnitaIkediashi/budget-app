import React from "react";
import UtilCard from "../../utils/UtilCard";
import { TrashIcon } from "@heroicons/react/24/outline";

const HistoryTransactions = () => {
  return (
    <UtilCard>
      <ul>
        <li className="mb-3 flex items-center justify-between py-2">
          <h4 className="font-semibold text-lg capitalize">shoes</h4>
          <div className="flex items-center gap-4">
            <p className="text-green-600 font-medium">12.00</p>
            <button className="text-white bg-color-green-200 p-1 rounded-md">
              <TrashIcon className="w-6" />
            </button>
          </div>
        </li>
        <li className="mb-3 flex items-center justify-between py-2">
          <h4 className="font-semibold text-lg capitalize">bag</h4>
          <div className="flex items-center gap-4">
            <p className="text-red-600 font-medium">4.00</p>
            <button className="text-white bg-color-green-200 p-1 rounded-md">
              <TrashIcon className="w-6" />
            </button>
          </div>
        </li>
      </ul>
    </UtilCard>
  );
};

export default HistoryTransactions;
