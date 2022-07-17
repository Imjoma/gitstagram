import React, { useContext } from "react";

import User from "../../components/User";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";
import Repositories from "../../components/UserComponents/Repositories";
import Error from "../../components/Error/Error";
import Limit from "../../components/Error/Limit";

export const getServerSideProps = async (context) => {
  const user = context.params.userId;
  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    return {
      props: {
        user: data,
      },
    };
  } catch {
    return {
      props: {
        user: null,
      },
    };
  }
};

const UserId = ({ user }) => {
  const router = useRouter();
  const userId = router.query.userId;

  const { repos, error, loading } = useFetch(
    `https://api.github.com/users/${user.login}/repos`
  );

  // handle error ui for non-existing user
  if (user === undefined || user === null || user.message === "Not Found") {
    return <Error userId={userId} user={user} />;
  }

  if (user.message || repos === null) {
    return <Limit message={user.message} />;
  }

  return (
    <>
      <div className="border-gray md:px-8 dark:border-opacity-20 md:pb-8 md:border md:rounded-lg">
        <User user={user} />
        {loading ? (
          <div className="text-center ">Loading...</div>
        ) : (
          <Repositories repos={repos} />
        )}
      </div>
    </>
  );
};

export default UserId;
