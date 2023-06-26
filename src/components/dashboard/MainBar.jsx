import React from "react";
import Greeting from "./Greeting";
import Theme from "./Theme";

const MainBar = () => {
  return (
    <>
      <section className="h-full overflow-y-scroll overflow-x-hidden hide-scroll px-7">
        <div className="flex items-center justify-between mt-8">
          <Greeting />
          <Theme />
        </div>
      </section>
    </>
  );
};

export default MainBar;
