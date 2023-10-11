// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {/* <li>
        {user ? (
          <>
            {user.displayName}
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </li> */}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-base-200 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Jerins Parlour</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
    </div>
  );
};

export default Navbar;