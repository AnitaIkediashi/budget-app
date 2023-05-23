import React from "react";

const Header = ({title, className}) => {
  return <h3 className={`text-dark-blue font-bold text-3xl text-center ${className}`}>{title}</h3>;
};

export default Header;
