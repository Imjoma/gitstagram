import Empty from "../components/Home/Empty";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gitstagram</title>
      </Head>

      <div className="flex items-center h-[calc(100vh_-_300px)] justify-center  border-gray dark:border-opacity-20 md:border md:rounded-lg">
        <div>
          <Empty />
        </div>
      </div>
    </>
  );
}
