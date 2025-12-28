import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const LoggedOutNavbar = () => {
  const { isLoggedIn, user, isLoading } = useAuth();

  // Show loading state while checking auth
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If user is logged in, show different navbar
  if (isLoggedIn && user) {
    return (
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-8 justify-around">
        {/* logo and brand name */}
        <div className="flex gap-3 justify-center items-center">
          <img src="/logo1.png" className="w-[60px] rounded-full"/>
          <h1>OtakuBoxd</h1>
        </div>

        {/* User info */}
        <div className="flex items-center gap-4">
          <span className="text-violet-400">Welcome, {user.name}!</span>
          <button 
            onClick={() => {/* logout logic */}}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500">
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Show logged out navbar
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-8 justify-around">
      {/* Your existing logged out navbar code */}
      <div className="flex gap-3 justify-center items-center">
        <img src="/logo1.png" className="w-[60px] rounded-full"/>
        <h1>OtakuBoxd</h1>
      </div>

      {/* links section */}
      <div className="flex justify-center items-center gap-8">
        <a className="relative tracking-wide cursor-pointer hover:text-fuchsia-500">
          Anime
        </a>
        <a className="relative tracking-wide cursor-pointer hover:text-fuchsia-500">
          Lists
        </a>
        <a className="relative tracking-wide cursor-pointer hover:text-fuchsia-500">
          Journal
        </a>
      </div>

      {/* login and sign up links */}
      <div className="flex justify-center items-center gap-6 md:gap-10">
        <Link to="/login" 
          className="bg-violet-800 text-white px-4 py-2 rounded-lg
                    font-medium hover:bg-violet-500 transition cursor-pointer hover:scale-110">
          Login
        </Link>
        <Link to="/signup" 
          className="bg-violet-800 text-white px-4 py-2 rounded-lg
                    font-medium hover:bg-violet-500 transition cursor-pointer hover:scale-110">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoggedOutNavbar;