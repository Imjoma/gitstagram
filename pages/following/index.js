import React, { useContext, useState, useEffect } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { FollowedContext } from "../../components/FollowedContext";
import HistoryCards from "../../components/HistoryCards";
import Modal from "../../components/Modal/Modal";
import Unfollow from "../../components/Modal/Unfollow";

const FollowingPage = () => {
  const { followed, setFollowed, handleSaveFollow } =
    useContext(FollowedContext);

  const [mounted, setMounted] = useState(false);

  const [toggleFollowUI, setToggleFollowUI] = useState([]);

  const [followings, setFollowings] = useState(followed);

  const [unfollowing, setUnfollowing] = useState(null);

  const [draft, setDraft] = useState([]);

  const showModal = (id) => {
    //FOLLOW AGAIN:
    const findDraft = draft.find((follow) => follow.id === id);

    // ...user exist in draft
    if (findDraft) {
      // ...toggle from follow to folllowing, again
      const filterState = toggleFollowUI.filter((follow) => follow !== id);
      setToggleFollowUI(filterState);
      // ...save/follow again
      handleSaveFollow(
        findDraft.id,
        findDraft.name,
        findDraft.term,
        findDraft.avatar,
        new Date()
      );
      // ...remove the user from draft
      const filterDraft = draft.filter((follow) => follow.id !== findDraft.id);
      setDraft(filterDraft);
    } else {
      // ...show modal
      const unfollow = followings.find((follow) => follow.id === id);
      setUnfollowing(unfollow);
      // // ...save the user from draft
      // setDraft([unfollow, ...draft]);
    }
  };

  const handleClickUnfollow = (id) => {
    // ...toggle from following to follow
    setToggleFollowUI([id, ...toggleFollowUI]);

    // ...hide modal
    setUnfollowing(null);

    // ...unfollow user
    const unfollow = followed.filter((follow) => follow.id !== id);
    setFollowed([...unfollow]);

    // ...save the user from draft
    const saveDraft = followings.find((follow) => follow.id === id);
    setDraft([saveDraft, ...draft]);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // avoid hydration ui didn't match
  const checkFollowedCardsUI = () => {
    if (!mounted) return null;
    if (followed) {
      return (
        <>
          {followings.map((follow) => (
            <div key={follow.id}>
              <HistoryCards
                follow={follow}
                showModal={showModal}
                toggleFollowUI={toggleFollowUI}
              />
            </div>
          ))}
        </>
      );
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-row justify-between ">
          <div className="font-medium">Sorted by Default</div>
          <button>
            <span className="text-xl"> {<BiSortAlt2 />}</span>
          </button>
        </div>
        {checkFollowedCardsUI()}
        {unfollowing && (
          <Modal onClick={() => setUnfollowing(null)}>
            <Unfollow
              unfollowing={unfollowing}
              setUnfollowing={setUnfollowing}
              handleClickUnfollow={handleClickUnfollow}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default FollowingPage;
