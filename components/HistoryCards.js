import { VscChromeClose } from "react-icons/vsc";

import Link from "next/link";
import Image from "next/image";

import { FiSearch } from "react-icons/fi";

import useToggle from "../hooks/useToggle";

const HistoryCards = ({
  follow,
  history,
  handleDeleteHistory,
  showModal,
  toggleFollowUI: state,
}) => {
  // ...set consumable data and ui
  const consume = history ? history : follow;

  const buttonUi = () => {
    if (history) {
      return (
        <button
          className="absolute right-0 text-lg border border-transparent w-fit h-fit"
          onClick={() => handleDeleteHistory(consume.id)}
        >
          <VscChromeClose />
        </button>
      );
    } else {
      return (
        <button
          className={`absolute  border-dark-blue right-0 btn-click ${
            state.includes(consume.id)
              ? "tw-btn-dark-smaller"
              : "tw-btn-dark-smaller-secondary"
          } `}
          onClick={() => handleToggleUi(consume.id)}
        >
          {state.includes(consume.id) ? "Follow" : "Following"}
        </button>
      );
    }
  };

  // ...modify data and ui

  const handleToggleUi = (id) => {
    showModal(id);

    // toggleState();
    // handleUnfollowed(id);
  };

  // const handleUnfollowed = (id) => {
  // const unfollow = followed.filter((follow) => follow.id !== id);
  // const exist = followed.find((follow) => follow.id === id);
  // exist
  //   ? setFollowed([...unfollow])
  //   : handleSaveFollow(
  //       consume.id,
  //       consume.name,
  //       consume.term,
  //       consume.avatar,
  //       new Date()
  //     );
  // };

  return (
    <>
      <div className="relative flex flex-row items-center justify-between rounded select-none btn-long-click card ">
        <Link href={"/github/" + consume.term}>
          <div className="w-full py-2 duration-300 ease-out cursor-pointer hover:opacity-60">
            <div className={`flex flex-row items-center space-x-3  `}>
              <div className="h-[52px] w-[52px]      ">
                {!consume.avatar ? (
                  <div className=" flex   justify-center items-center h-[52px] w-[52px]  dark:border-opacity-20 rounded-full  border   border-opacity-20  border-dark dark:border-light  ">
                    <span className="text-2xl">
                      <FiSearch />
                    </span>
                  </div>
                ) : (
                  <div className=" h-[52px] w-[52px]">
                    <Image
                      className="rounded-full "
                      src={consume.avatar}
                      width={50}
                      height={50}
                      layout="intrinsic"
                      objectFit="cover"
                      alt="Users Avatar"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col w-64 pr-8 overflow-hidden md:w-96">
                <div className="text-sm font-medium truncate md:text-base">
                  {" "}
                  {consume.term}
                </div>
                <div className="text-sm font-medium truncate dark:font-normal opacity-60">
                  {consume.name}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {buttonUi()}
      </div>
    </>
  );
};

export default HistoryCards;
