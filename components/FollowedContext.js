import React, { createContext, useState, useEffect } from "react";

// create context
const FollowedContext = createContext();

const FollowedContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [followed, setFollowed] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("following");
      const followed = JSON.parse(saved);
      return followed || [];
    }
  });

  // ...set a new state consist of all the followed state

  const handleSaveFollow = (id, name, term, avatar, date) => {
    setFollowed([
      {
        id,
        term,
        name,
        avatar,
        date,
      },
      ...followed,
    ]);
  };

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(followed));
  }, [followed]);

  return (
    <FollowedContext.Provider
      value={{
        followed,
        setFollowed,
        handleSaveFollow,
        // followings,
      }}
    >
      {children}
    </FollowedContext.Provider>
  );
};

export { FollowedContext, FollowedContextProvider };
