import React from "react";

const Charisma = ({ char }) => {
  function kFormatter(num) {
    return num > 999 ? 1 * (num / 1000).toFixed(1) + "k" : num;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center select-none card md:space-x-3 md:flex-row ">
        <span className="font-semibold"> {kFormatter(char.count)}</span>
        <span className="text-sm opacity-90">{char.category}</span>
      </div>
    </>
  );
};

export default Charisma;
