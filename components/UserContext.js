import React, { createContext, useState, useEffect } from "react";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [searchHistories, setSearchHistories] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("history");
      const searchTerm = JSON.parse(saved);
      return searchTerm || [];
    }
  });
  // ...recomendation
  const [searchResult, setSearchResult] = useState([]);

  const [userTyping, setUserTyping] = useState("");

  const handleUserTyping = (query) => {
    setUserTyping(query);
    // check first if searchHistories || history at localStorage have value
    if (searchHistories.length < 1) return null;
    if (query !== "") {
      const filteredQueries = searchHistories.filter((search) =>
        search.term.includes(query.toLowerCase())
      );
      setSearchResult(filteredQueries);
    } else {
      setSearchResult(searchHistories);
    }

    // console.log(query);
  };

  const handleDeleteHistory = (id) => {
    if (id) {
      const filteredHistory = searchHistories.filter(
        (search) => search.id !== id
      );
      setSearchHistories(filteredHistory);
      setSearchResult([]);
    } else {
      setSearchHistories([]);
      setSearchResult([]);
    }
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(searchHistories));
  }, [searchHistories]);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider
      value={{
        searchHistories,
        setSearchHistories,
        handleDeleteHistory,
        handleUserTyping,
        searchResult,
        userTyping,
        setUserTyping,
        setSearchResult,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
