import React from "react";

const Error = ({ userId, user }) => {
  const errorUi = () => {
    if (user === undefined || user === null) {
      return (
        <span className="block text-gray-400">
          It looks like you don&apos;t have internet right now.
        </span>
      );
    }
    if (user.message === "Not Found") {
      return (
        <>
          <span className="block text-gray-400">No results found for</span>{" "}
          <span className="break-all ">&quot;{userId}&quot;</span>{" "}
        </>
      );
    }
  };

  return (
    <div className="flex flex-col space-y-4 h-fixed-screen">
      <div className="w-full md:text-xl">{errorUi()}</div>
      <div>
        <button>Go back to Homepage</button>
      </div>
    </div>
  );
};

export default Error;
