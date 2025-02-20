import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header({ username }: { username: string | null }) {
  const navigate = useNavigate();
  function displayUsername() {
    if (username !== null) {
      return (
        <>
          <div className="text-xl">{username}</div>
          <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center"></div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signin">
            <div className="text-xl">Sign in</div>
          </Link>
          <Link to={"/signup"}>
            <div className="text-xl bg-gray-200 text-gray-600 px-5 rounded-2xl py-0.5 hover:cursor-pointer duration-300">
              Sign up
            </div>
          </Link>
        </>
      );
    }
  }
  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-gray-500 text-white px-5 flex justify-between shadow-2xl">
        <div className="flex items-center justify-between gap-20">
          <Link to="/">
            <div className="text-4xl hover:cursor-pointer">Blind Ranker</div>
          </Link>
          <Link to="/explore">
            <div className="text-xl hover:text-gray-600 py-4 px-10 hover:bg-white hover:cursor-pointer duration-300">
              Explore
            </div>
          </Link>
          <Link to="/create">
            <div className="text-xl py-4 px-10 hover:text-gray-600 hover:bg-white hover:cursor-pointer duration-300">
              Create
            </div>
          </Link>
          <div className="hover:cursor-pointer text-xl py-4 hover:text-gray-600 hover:bg-white px-10 duration-300">
            My List
          </div>
          <div className="text-xl py-4 hover:text-gray-600 hover:bg-white px-10 hover:cursor-pointer duration-300">
            My Rankings
          </div>
        </div>
        <div className="flex items-center gap-5">{displayUsername()}</div>
      </header>
    </>
  );
}
export default Header;
