import Image from "next/image";
import { useState, useContext } from "react";
import { FiBarChart2, FiExternalLink } from "react-icons/fi";
import Charisma from "./Charisma";

import { v4 as uuidv4 } from "uuid";
import { FollowedContext } from "../FollowedContext";

const Header = ({ user }) => {
  const [githubUser, setGithubUser] = useState({
    name: "@",
    width: "w-5",
    paddingX: "",
  });
  const [clicked, setClicked] = useState(false);

  const handleClickUser = () => {
    if (clicked) return null;
    setClicked(true);
    setGithubUser({
      name: "@" + user.login,
      width: "w-fit",
      paddingX: "px-2",
    });

    setTimeout(() => {
      setGithubUser({
        name: "@",
        width: "w-5",
        paddingX: "",
      });
      setClicked(false);
    }, 5000);
  };

  // Charisma:
  const charisma = [
    {
      id: 1,
      category: "Repositories",
      count: user.public_repos,
    },
    {
      id: 2,
      category: "Followers",
      count: user.followers,
    },
    { id: 3, category: "Following", count: user.following },
  ];

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
      <header className="flex flex-row w-full ">
        {/* Outer ring || gradient*/}
        {/* basis-[100px] */}
        <div className="w-20 h-20  p-[2px]  rounded-full bg-gradient-to-br from-accent-2 to-accent md:w-40 md:h-40 md:-translate-y-8">
          {/* Inner ring || transparent background */}
          <div className="relative w-full h-full p-1 md:p-2 rounded-full bg-light dark:bg-dark-blue md:w-[156px] md:h-[156px]">
            {/* Link to Github website */}

            <div
              className={`${githubUser.width}  ${githubUser.paddingX} flex  p-3  md:hidden    items-center justify-center origin-left   duration-200 ease-out absolute z-50   h-5 overflow-hidden     rounded-full script-mt-bold left-[80%]   top-2 text-dark-blue opacity-90 bg-light`}
              onClick={handleClickUser}
            >
              <span>{githubUser.name}</span>
            </div>

            {/* Image */}
            <div className="relative w-full h-full rounded-full">
              <Image
                className="absolute rounded-full"
                src={user.avatar_url}
                layout="fill"
                objectFit="cover"
                alt="Users Avatar"
                priority
              />
            </div>
          </div>
        </div>
        {/* show on larger screen */}
        <div className="hidden w-full py-8 pl-8 md:block">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="text-xl font-semibold">{user.login}</div>
            <div className="flex flex-row h-[42px] space-x-2   ">
              <button
                className={`${
                  alreadyFollowed
                    ? "tw-btn-dark-smaller-secondary"
                    : "tw-btn-dark-smaller"
                } btn-click border-dark-blue`}
                onClick={() => handleFollowClick()}
              >
                {alreadyFollowed ? "Following" : "Follow"}
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
          </div>
          <div className="flex flex-row justify-start pt-8 ml-auto space-x-8 ">
            {charisma.map((char) => (
              <Charisma char={char} key={char.id} />
            ))}
          </div>
        </div>

        {/* show on smaller screen */}
        <div className="flex flex-row ml-auto md:hidden justify-evenly basis-9/12">
          {charisma.map((char) => (
            <Charisma char={char} key={char.id} />
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
