import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";

import Loader from "./Loader/Loader";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { UserContextProvider } from "./UserContext";
import { FollowedContextProvider } from "./FollowedContext";

const Layout = ({ children }) => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isHome) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    } else {
      setIsLoaded(true);
    }
  }, [isLoaded, isHome]);

  // ...page mount animation
  const pageVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };

  const page = (
    <motion.div
      className="flex flex-col justify-start max-w-3xl px-6 py-6 mx-auto space-y-4 "
      variants={pageVariant}
      initial="initial"
      animate="animate"
    >
      <Navbar />
      <UserContextProvider>
        <FollowedContextProvider>
          <Searchbar />
          <div>{children}</div>
        </FollowedContextProvider>
      </UserContextProvider>
      <Footer />
    </motion.div>
  );

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <AnimatePresence>
          {!isLoaded && isHome && (
            <motion.div
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 1,
                },
              }}
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={`w-full h-screen overflow-x-hidden`}>
          {isLoaded && page}
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
