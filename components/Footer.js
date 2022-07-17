import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (router.asPath !== "/") {
    return <></>;
  }
  return (
    <div className="fixed bottom-0 left-0 z-40 flex flex-col items-center justify-center w-full py-6 ">
      <span className="text-sm text-gray-500">© 2022 | Joma Ipio</span>
    </div>
  );
};

export default Footer;
