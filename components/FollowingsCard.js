import React from "react";
import Image from "next/image";
import Link from "next/link";

const FollowingsCard = ({ following }) => {
  return (
    <Link href={"/github/" + following.term}>
      <div className="flex flex-col space-y-2 duration-300 ease-out cursor-pointer hover:opacity-60 ">
        <div className="mx-auto">
          <Image
            className="rounded-full "
            src={following.avatar}
            width={60}
            height={60}
            layout="intrinsic"
            objectFit="cover"
            alt={`Following ${following.name}  Avatar`}
          />
        </div>
        <div className="text-xs font-medium text-center truncate sm:text-base">
          {following.term}
        </div>
      </div>
    </Link>
  );
};

export default FollowingsCard;
