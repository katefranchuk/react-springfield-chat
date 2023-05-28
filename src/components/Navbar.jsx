import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <Link to="/" className="font-simpsons text-xl font-bold">
          SpringfieldChat
        </Link>
        {currentUser ? (
          <button
            className="flex justify-center items-center gap-x-2"
            onClick={handleLogout}
          >
            <BiLogOut />
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
