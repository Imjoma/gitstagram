import Empty from "../components/Home/Empty";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gitstagram</title>
      </Head>

      {/* if want to center the empty state:  h-[calc(100vh_-_300px)] */}
      <main className="flex flex-col items-center justify-center border-gray dark:border-opacity-20 md:border md:rounded-lg">
        <section className="flex flex-col space-y-4 ">
          <Empty />
        </section>
      </main>
    </>
  );
}
