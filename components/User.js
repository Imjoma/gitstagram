import Main from "./UserComponents/Main";
import Header from "./UserComponents/Header";

const User = ({ user }) => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <>
          <Header user={user} />
          <Main user={user} />
        </>
      </div>
    </>
  );
};

export default User;
