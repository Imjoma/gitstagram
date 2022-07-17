import Image from "next/image";
import React from "react";

const Unfollow = ({ unfollowing, setUnfollowing, handleClickUnfollow }) => {
  return (
    <>
      <div className="absolute flex flex-col items-center py-6 space-y-4 w-80 bg-light dark:bg-dark-blue rounded-xl">
        <div className="pt-2">
          <Image
            className="rounded-full"
            src={unfollowing.avatar}
            width={100}
            height={100}
            layout="intrinsic"
            alt={`${unfollowing.name} avatar`}
          />
        </div>
        <div className="text-sm text-center ">
          <span className="opacity-70"> Unfollow</span>{" "}
          <span className="font-medium">@{unfollowing.term}?</span>
        </div>

        <div className="flex flex-col w-full space-y-2 text-base md:text-sm">
          <button
            className="py-2 font-semibold btn-click text-accent"
            onClick={() => handleClickUnfollow(unfollowing.id)}
          >
            Unfollow
          </button>
          <button
            className="py-2 font-medium btn-click"
            onClick={() => setUnfollowing(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Unfollow;
