import { RiHome5Line } from "react-icons/ri";

const Empty = () => {
  const comingSoon = (
    <div className="pb-4 text-sm ">
      <div className="w-full p-2 text-white rounded bg-accent bg-opacity-80">
        <p className="inline mr-2 font-semibold">Coming soon:</p>
        <p className="inline">Application&apos;s manual and limitation. </p>
      </div>
    </div>
  );

  return (
    <article className="p-4 space-y-4 text-center ">
      <div className="flex w-fit  mx-auto h-fit items-center justify-center p-4 md:border-[6px] border-[3px] rounded-full border-dark dark:border-light">
        <span className="text-4xl md:text-7xl ">
          <RiHome5Line />
        </span>
      </div>
      <div className="text-lg font-semibold ">Welcome to Gitstagram</div>
      <div>
        A simple web application that can search and save github accounts.{" "}
      </div>
      ...
      {comingSoon}
    </article>
  );
};

export default Empty;
