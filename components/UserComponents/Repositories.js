import React from "react";
import Modal from "../Modal/Modal";
import SortBy from "../Modal/SortBy";
import Repo from "../Repo";
import useToggle from "../../hooks/useToggle";

const Repositories = ({ repos }) => {
  const { state, toggleState, resetState } = useToggle();

  return (
    <>
      <div className="pt-8 ">
        <div className="flex flex-row justify-between">
          <div className="font-medium">Repositories</div>
          {/* <div className="flex flex-row items-center space-x-3">
            <p className="text-sm opacity-60">Filter By</p>
            <button
              className="text-sm tw-btn-dark-smaller btn-click"
 
            >
              Latest
            </button>
          </div> */}
        </div>

        <div className="flex flex-col py-4 space-y-4 ">
          {repos.map((repo) => (
            <div key={repo.id}>
              <Repo repo={repo} />
            </div>
          ))}
        </div>
      </div>
      {/* might be added on the next update */}
      {state && (
        <Modal onClick={() => resetState()}>
          {" "}
          <SortBy toggleState={toggleState} resetState={resetState} />
        </Modal>
      )}
    </>
  );
};

export default Repositories;
