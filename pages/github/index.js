import HistoryCards from "../../components/HistoryCards";

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../components/UserContext";
import { FollowedContext } from "../../components/FollowedContext";
import Following from "../../components/Following";
import DeleteHisotry from "../../components/Modal/DeleteHisotry";
import useToggle from "../../hooks/useToggle";
import Modal from "../../components/Modal/Modal";
import Head from "next/head";

const HistoryPage = () => {
  const { state, toggleState, resetState } = useToggle();

  // ...contexts
  const { followed } = useContext(FollowedContext);
  const { searchHistories, handleDeleteHistory, searchResult, userTyping } =
    useContext(UserContext);

  // avoid hydration ui didn't match
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkSearchUI = () => {
    if (!mounted) return null;

    if (searchHistories.length === 0) {
      return (
        //add image for searching theme and api max used of api
        <div className=" flex justify-center items-center h-[calc(100vh_-_300px)]">
          <div>No Recent Searches</div>
        </div>
      );
    }

    if (userTyping !== "" && searchResult.length > 0) {
      return (
        <>
          {searchResult.map((history) => (
            <div key={history.id}>
              <HistoryCards
                history={history}
                handleDeleteHistory={handleDeleteHistory}
              />
            </div>
          ))}
        </>
      );
    } else if (userTyping === "" || searchHistories.length > 0) {
      // only shows in initial render and if no search result
      return (
        <>
          {searchHistories.map((history) => (
            <div key={history.id}>
              <HistoryCards
                history={history}
                handleDeleteHistory={handleDeleteHistory}
              />
            </div>
          ))}
        </>
      );
    }
  };

  const checkFollowedUI = () => {
    if (!mounted) return null;
    if (followed.length > 0) {
      return (
        <div className="space-y-2 ">
          <Following />
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Head>
        <title>Search History - Gitstagram</title>
      </Head>
      <div className="flex flex-col space-y-8">
        {/* Followed History */}
        {checkFollowedUI()}

        {/* Search History */}
        <div className="space-y-2">
          <div className="flex flex-row justify-between select-none card ">
            <div className="font-medium ">Searh History </div>
            <button
              className="text-sm text-accent-2 "
              onClick={() => toggleState()}
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-col ">{checkSearchUI()}</div>
        </div>
      </div>
      {state && (
        <Modal onClick={() => resetState()}>
          {" "}
          <DeleteHisotry
            handleDeleteHistory={handleDeleteHistory}
            toggleState={toggleState}
            resetState={resetState}
          />
        </Modal>
      )}
    </>
  );
};

export default HistoryPage;
