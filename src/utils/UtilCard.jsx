import React from "react";

const UtilCard = ({className, children}) => {
  return (
    <div
      className={`bg-color-white-100 dark:bg-slate-800 rounded-lg p-5 shadow-[3px_3px_5px_0px_rgba(164,195,178,0.5)] ${className} dark:shadow-md`}
    >
      {children}
    </div>
  );
};

export default UtilCard;
