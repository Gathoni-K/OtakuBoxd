import { useAuth } from "../../contexts/AuthContext";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const LoggedInNavbar = () => {
    const { logout } = useAuth();

    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-8
            justify-around">
            {/* logo and brand name */}
            <div className="flex gap-3 justify-center items-center">
                <img src="/logo1.png"
                    className="w-[60px] rounded-full"/>
                <h1>OtakuBoxd</h1>
            </div>
            {/* links section */}
            <div className="flex justify-center items-center gap-8 md:gap-26 lg:gap-24">
                <Link to="/anime"
                
                className="relative tracking-wide cursor-pointer 
                    hover:text-violet-700
                    drop-shadow-lg drop-shadow-violet-300 
                    transition-all duration-300
                    before:content-[''] before:absolute before:bottom-0 before:left-0
                    before:w-0 before:h-0.5 before:bg-fuchsia-500 before:transition-all before:duration-300
                    hover:before:w-full
                    hover:drop-shadow-[0_0_10px_#fuchsia-500]">
                    Anime
                </Link>
                <Link to="/lists"
                className="relative tracking-wide cursor-pointer 
                    hover:text-fuchsia-500
                    drop-shadow-lg drop-shadow-violet-300 
                    transition-all duration-300
                    before:content-[''] before:absolute before:bottom-0 before:left-0
                    before:w-0 before:h-0.5 before:bg-fuchsia-500 before:transition-all before:duration-300
                    hover:before:w-full
                    hover:drop-shadow-[0_0_10px_#fuchsia-500]">
                    Lists
                </Link>
                <Link to="/journal"
                className="relative tracking-wide cursor-pointer 
                    hover:text-fuchsia-500
                    drop-shadow-lg drop-shadow-violet-300 
                    transition-all duration-300
                    before:content-[''] before:absolute before:bottom-0 before:left-0
                    before:w-0 before:h-0.5 before:bg-fuchsia-500 before:transition-all before:duration-300
                    hover:before:w-full
                    hover:drop-shadow-[0_0_10px_#fuchsia-500]">
                    Journal
                </Link>
            </div>
            {/* profile and logout buttons */}
            <div className="flex justify-center items-center gap-6 md:gap-10">
                <CgProfile 
                    className="text-3xl hover:text-violet-800 transition cursor-pointer
                        hover:scale-110"
                />
                <button 
                    onClick={logout}
                    className="bg-violet-800 text-white px-4 py-2 rounded-lg
                        font-medium hover:bg-violet-500 transition cursor-pointer hover:scale-110">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default LoggedInNavbar;