import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
import LoggedInNavbar from "./LoggedInNavbar"; 
import LoggedOutNavbar from "./LoggedOutNavbar"; 
import { FaArrowsAltH } from "react-icons/fa";

const NavBar = () => {
    const { isDark, setIsDark } = useTheme();
    const { isLoggedIn } = useAuth();

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
            {/* Navbar links */}
            <div className="w-full">
                {isLoggedIn ? (
                    <LoggedInNavbar />
                ) : (
                    <LoggedOutNavbar />
                )}
            </div>
            {/* Dark/Light Toggle */}
            <div className="mt-3 md:mt-0 flex items-center justify-center">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full shadow hover:scale-105 transition"
                >
                    {/* Light */}
                    <span
                        className={`px-2 py-1 rounded-full transition-colors duration-300 ${
                            !isDark ? "bg-fuchsia-400 text-white" : "bg-gray-300 text-gray-700"
                        }`}
                    >
                        Hikari
                    </span>
                    {/* Separator */}
                    <FaArrowsAltH className="text-gray-600 dark:text-gray-300" />
                    {/* Dark */}
                    <span
                        className={`px-2 py-1 rounded-full transition-colors duration-300 ${
                            isDark ? "bg-fuchsia-400 text-white" : "bg-gray-300 text-gray-700"
                        }`}
                    >
                        Yami
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;