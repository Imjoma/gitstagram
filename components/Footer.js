import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (router.asPath !== "/") {
    return <></>;
  }

  const links = ["About", "API", "Privacy", "Terms", "How to use"];

  const footerLinks = links.map((link) => <div key={link}>{link}</div>);

  return (
    <div className="fixed bottom-0 left-0 z-40 flex flex-col items-center justify-center w-full py-6 space-y-4 ">
      {/* Make a UI first: */}
      {/* <div className="flex flex-row space-x-4 text-sm text-gray-500">
        {footerLinks}
      </div> */}
      <div className="text-sm text-gray-500">© 2022 | Joma Ipio</div>
    </div>
  );
};

export default Footer;
