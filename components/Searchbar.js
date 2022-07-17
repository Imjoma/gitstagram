import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

import { v4 as uuidv4 } from "uuid";

import { UserContext } from "./UserContext";
// explain why the fetch happens after submit

const Searchbar = () => {
  //consume the context
  const {
    searchHistories,
    setSearchHistories,
    handleUserTyping,

    setSearchResult,
  } = useContext(UserContext);

  const [search, setSearch] = useState("");
  const router = useRouter();
  const id = uuidv4();

  const handleChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
    handleUserTyping(searchInput);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    // push directly to profile page

    router.push("/github/" + search.toLowerCase());

    // wait for atleast 1 sec to save the search term whether exisiting or not
    setTimeout(() => {
      if (search === "" || search.trim().length === 0) return null;

      const exist = searchHistories.find(
        (history) => history.term.toLowerCase() === search.toLowerCase()
      );
      // ...if exist save without the fetch else new fetch
      exist
        ? handleSaveModifyDate(exist)
        : handleFetchQuery(search.toLowerCase());
      // ...reset
      setSearchResult([]);
      setSearch("");
    }, 500);
  };

  // ...save with a new fetch
  const handleFetchQuery = async (query) => {
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();
      // ... input query doesn't exist return nothing
      if (data.message === "Not Found") {
        handleSaveError(query.toLowerCase());
      } else {
        const name = data.name;
        const avatar = data.avatar_url;
        const now = new Date();
        handleNewSearches(name, avatar, now);
      }
    } catch {
      handleSaveError(query);
    }
  };

  // ...saves the search term on error
  const handleSaveError = (query) => {
    const name = query;
    const avatar = undefined;
    const now = new Date();
    handleNewSearches(name, avatar, now);
  };

  // ...save without the fetch
  const handleSaveModifyDate = (data) => {
    const newSearchHistory = searchHistories.filter(
      (history) => history.id !== data.id
    );

    setSearchHistories([
      {
        ...data,
        id,
        date: new Date(),
      },
      ...newSearchHistory,
    ]);
  };

  const handleNewSearches = (name, avatar, date) => {
    // if the input query is not empty, set the new values of search histories
    if (search.length > 0) {
      setSearchHistories([
        {
          id,
          term: search.toLowerCase(),
          name,
          avatar,
          date,
        },
        ...searchHistories,
      ]);
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <form
          onSubmit={handleSubmitSearch}
          className="flex flex-row w-full md:w-2/4"
        >
          <div className="relative w-full h-11">
            <input
              className="w-full h-full px-12 text-center rounded outline-none focus:ring-1 focus:ring-dark focus:dark:ring-light selection: bg-gray dark:bg-dark-deep-blue abosolute "
              type="text"
              placeholder="type your source code"
              value={search}
              onChange={handleChange}
            />
            <div className="absolute text-xl none dark:opacity-50 opacity-30 top-3 left-4 ">
              <FiSearch />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
