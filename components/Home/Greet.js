import React from "react";
import Image from "next/image";
import gitstagramLogo from "../../public/src/assets/gitstagramLogo.png";

const Greet = () => {
  const greetingsHeader = (
    <div className="relative w-[70px]  ">
      <div className="relative  w-[70px] h-[70px] rounded-full">
        <Image
          className="absolute rounded-full"
          src={`https://avatars.githubusercontent.com/u/33196540?v=4`}
          layout="fill"
          objectFit="cover"
          alt="Joma Ipio's Avatar"
          priority
        />
      </div>

      <div className="absolute  bottom-0 -right-3 w-7 h-7 rounded-full border-[3px] dark:bg-dark-blue   dark:border-dark-blue border-light bg-light">
        <Image
          className="absolute rounded-full "
          src={gitstagramLogo}
          layout="fill"
          objectFit="cover"
          alt="Gitstagram Logo"
          priority
        />
      </div>
    </div>
  );

  return (
    <>
      <article className="relative flex flex-col items-center max-w-sm p-4 space-y-2 ">
        {greetingsHeader}

        <div className="text-lg font-semibold text-center">
          Developer&apos;s Message:
        </div>

        <div className="text-sm italic">
          <div className="font-medium">Welcome to Gitstagram, </div>
          <span className="opacity-80"></span>
        </div>
      </article>
    </>
  );
};

export default Greet;
