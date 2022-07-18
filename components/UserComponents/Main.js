import React, { useContext } from "react";
import { FiBarChart2, FiExternalLink } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { FollowedContext } from "../FollowedContext";

const Main = ({ user }) => {
  const { handleSaveFollow, followed, setFollowed } =
    useContext(FollowedContext);

  const alreadyFollowed = followed.find(
    (follow) => follow.term === user.login.toLowerCase()
  );

  const handleFollowClick = () => {
    const id = uuidv4();
    const name = user.name;
    const term = user.login.toLowerCase();
    const avatar = user.avatar_url;
    const now = new Date();

    const unfollow = followed.filter(
      (follow) => follow.term.toLowerCase() !== term
    );

    alreadyFollowed
      ? setFollowed([...unfollow])
      : handleSaveFollow(id, name, term, avatar, now);
  };
  return (
    <>
      <div className="flex flex-col pb-4 space-y-1">
        <div className="font-semibold">{user.name}</div>

        <div className="text-sm font-medium">{user.bio}</div>
        <a
          href={user.blog}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium w-fit text-link"
        >
          {user.blog}
        </a>
      </div>

      <div className="flex flex-row h-10 space-x-2 md:hidden">
        <button
          className={`${
            alreadyFollowed ? "tw-btn-dark-long-secondary" : "tw-btn-dark-long"
          } btn-long-click basis-full border-dark-blue`}
          onClick={() => handleFollowClick()}
        >
          <span className="font-medium">
            {alreadyFollowed ? "Following" : "Follow"}
          </span>
        </button>

        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noreferrer"
          className=" tw-btn-dark btn-click"
        >
          <span>
            <FiExternalLink />
          </span>
        </a>
      </div>
    </>
  );
};

export default Main;
