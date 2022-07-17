import React from "react";

const DeleteHisotry = ({ handleDeleteHistory, toggleState, resetState }) => {
  const handleDeleteClick = () => {
    handleDeleteHistory();
    resetState();
  };
  return (
    <>
      <div className="absolute flex flex-col items-center py-6 space-y-8 w-80 bg-light dark:bg-dark-blue rounded-xl">
        <div className="px-6 space-y-2">
          <h3 className="text-lg font-semibold text-center">
            Clear search history
          </h3>
          <div className="text-sm text-center ">
            <span className="opacity-70">
              {" "}
              You won&apos;t be able to undo this once you click
            </span>{" "}
            <span className="font-medium">Clear All.</span>
            <span className="block opacity-70">
              Your Followings won&apos;t affect by this action.
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full space-y-2 text-base md:text-sm">
          <button
            className="py-2 font-semibold btn-click text-accent"
            onClick={() => handleDeleteClick()}
          >
            Clear All
          </button>
          <button
            className="py-2 font-medium btn-click"
            onClick={() => toggleState()}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteHisotry;
