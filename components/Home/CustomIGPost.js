import { FaRegHeart, FaHeart } from "react-icons/fa";

import Image from "next/image";
import myImage from "../../public/src/Screenshot (570).png";
import avatar from "../../public/src/28165204_105828330245666_4554308055270369310_o.jpg";

import { useState } from "react";

const CustomIGPost = () => {
  const [heart, setHeart] = useState(false);

  const heartUi = (
    <div
      className="text-2xl duration-100 ease-out active:scale-90"
      onClick={() => setHeart((prev) => !prev)}
    >
      {!heart ? (
        <FaRegHeart />
      ) : (
        <span className="text-accent">
          <FaHeart />
        </span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col w-full overflow-hidden border rounded-md md:flex-row">
      {/* image */}
      {/* <div className="relative w-full h-80 md:h-96 bg-gray"> */}
      <Image
        className="absolute "
        src={myImage}
        width={700}
        height={400}
        objectFit="cover"
        layout="intrinsic"
        alt="image"
        priority
      />

      {/* details */}
      <div className="py-4 space-y-4 md:w-96">
        <header className="flex flex-row items-center px-4 space-x-4 ">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={avatar}
            layout="intrinsic"
            objectFit="cover"
            alt="Users Avatar"
          />
          <div className="font-semibold ">imjoma</div>
        </header>
        <main className="px-4 space-x-4 ">
          Comment if you find any bugs and let me know what should I add next.
        </main>

        <footer className="flex flex-row items-start px-4 space-x-4">
          {heartUi}
        </footer>
      </div>
    </div>
  );
};

export default CustomIGPost;
