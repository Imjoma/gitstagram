import Image from "next/image";
import moment from "moment";

const Repo = ({ repo }) => {
  // make the repo.created : hours/days ago/weeks ago/month ago

  return (
    <>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <div className="p-[2px] marker: rounded dark:from-transparent dark:to-transparent dark:border dark:border-accent-2 bg-gradient-to-br from-accent-2 via-transparent to-accent ">
          <div className="p-4 space-y-3 rounded bg-light dark:bg-transparent">
            {/* card header */}
            <div className="flex flex-row items-start space-x-4 ">
              <div className="relative block w-12 h-12 rounded-full basis-12 md:basis-20 md:w-20 md:h-20 ">
                <Image
                  className="absolute rounded-full"
                  src={repo.owner.avatar_url}
                  layout="fill"
                  objectFit="cover"
                  alt="Users Avatar"
                />
              </div>
              <div className="flex flex-col basis-4/5">
                <div className="text-lg font-semibold">{repo.name}</div>
                <div className="text-xs font-medium opacity-60">
                  {repo.language ? repo.language : "-"}
                </div>
              </div>
            </div>
            {/* card body */}
            <div className="text-sm ">{repo.description}</div>
            {/* card footer */}
            <div className="pt-4 text-xs font-medium text-right opacity-60">
              {moment(repo.created_at).format("ll")}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Repo;
