import React from "react";

const Card = ({className, children}) => {
  return <div className={`h-fit text-white p-4 bg-dark-green rounded-md relative before:absolute before:content-[''] before:w-4 before:h-4  before:bg-dark-green before:top-1/2 before:-left-2 before:rotate-45 before:-translate-y-1/2 ${className}`}>
    {children}
  </div>;
};

export default Card;
