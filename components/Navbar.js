import { useState, useEffect, useRef } from "react";
import { BsFillSunFill, BsMoonFill, BsBookmarkFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // const navbarHeight = useRef(null);
  // ref={navbarHeight}
  // console.log(navbarHeight.current?.clientHeight);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="tw-btn-dark btn-click "
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill />
        </button>
      );
    } else {
      return (
        <button
          className="tw-btn-dark btn-click "
          onClick={() => setTheme("dark")}
        >
          <BsMoonFill />
        </button>
      );
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between ">
        <Link href="/">
          <a className="text-3xl script-mt-bold ">Gitstagram</a>
        </Link>
        <div className="space-x-2 ">
          {/* Error: shows an prop d didn't match error */}
          <Link href="/github">
            <button className="tw-btn-dark btn-click">
              <BsBookmarkFill />
            </button>
          </Link>
          {toggleTheme()}
        </div>
      </div>
    </>
  );
};

export default Navbar;
