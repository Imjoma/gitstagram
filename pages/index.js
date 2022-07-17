import Empty from "../components/Home/Empty";

export default function Home() {
  return (
    <>
      <div className="flex items-center h-[calc(100vh_-_300px)] justify-center  border-gray dark:border-opacity-20 md:border md:rounded-lg">
        <div>
          <Empty />
        </div>
      </div>
    </>
  );
}
