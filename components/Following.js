import { useContext, useEffect, useState } from "react";
import { FollowedContext } from "./FollowedContext";
import FollowingsCard from "./FollowingsCard";
import Link from "next/link";

const Following = () => {
  const { followed, setFollowed } = useContext(FollowedContext);

  // handling the followed count ui by through window screen width.

  const [limit, setLimit] = useState(8);

  const followedCount = [...followed].slice(0, limit);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setLimit(12);
    } else {
      setLimit(8);
    }
    window.onresize = () => {
      if (window.innerWidth >= 640) {
        setLimit(12);
      } else {
        setLimit(8);
      }
    };
  }, [setLimit]);

  return (
    <>
      <div className="flex flex-row justify-between ">
        <div className="font-medium">Following </div>
        <Link href="/following">
          <button className="text-sm text-accent-2">See All</button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-2 sm:grid-cols-6">
        {followedCount.map((following) => (
          <div key={following.name}>
            <FollowingsCard following={following} key={following.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Following;
