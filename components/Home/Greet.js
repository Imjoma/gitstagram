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
      <div className="relative flex flex-col items-center max-w-sm p-4 space-y-2 ">
        {greetingsHeader}

        <h3 className="text-lg font-semibold text-center">
          Developer&apos;s Message:
        </h3>

        <h3 className="italic ">
          &quot;
          <span className="font-medium">Welcome to Gitstagram, </span>
          <span className="opacity-70">
            my name is Joma and I want you to have a delightful learning
            experience.
          </span>
          <div>
            <span className="opacity-70">
              This app was built to tell everyone that coding is just as simple
              as learning a new application.
            </span>
            &quot;
          </div>
        </h3>
        <footer className="mt-4 text-center md:text-sm text-accent-2 ">
          Don&apos;t show again
        </footer>
      </div>
    </>
  );
};

export default Greet;
