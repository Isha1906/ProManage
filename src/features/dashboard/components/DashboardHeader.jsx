import {
    Search,
    Bell,
    Menu,
    ChevronDown,
    LogOut,
    Sun,
    Moon
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../../app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../app/providers/ThemeProvider";


function DashboardHeader({ setCollapsed, setMobileOpen }) {

    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="p-2 flex items-center gap-2 
        bg-white dark:bg-slate-900 
        h-12 rounded-md
        border border-transparent 
        dark:border-slate-800
        transition-colors">

            {/* Menu */}
            <button
                onClick={() => {
                    if (window.innerWidth < 768) {
                        setMobileOpen(true);
                    } else {
                        setCollapsed((prev) => !prev);
                    }
                }}
                className="shrink-0 cursor-pointer
                text-slate-700 dark:text-slate-200
                hover:text-slate-900 dark:hover:text-white"
            >
                <Menu />
            </button>

            {/* Search */}
            <div className="hidden sm:block relative flex-1 min-w-0 max-w-md">

                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 
                    w-4 h-4 text-slate-400 dark:text-slate-500"
                />

                <input
                    type="text"
                    placeholder="Search tasks, projects, bugs..."
                    className="
                    w-full h-8
                    pl-10 pr-3
                    bg-slate-50 dark:bg-slate-800
                    border border-slate-200 dark:border-slate-700
                    rounded-lg
                    text-sm
                    text-slate-800 dark:text-slate-100
                    placeholder:text-slate-400 dark:placeholder:text-slate-500
                    outline-none
                    focus:ring-2 focus:ring-blue-500"
                />

            </div>

            {/* Right section */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto shrink-0">

                {/* Theme Change Icon */}
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="rounded-lg p-2 text-slate-600 dark:text-slate-300
                    transition 
                    hover:bg-slate-100 dark:hover:bg-slate-800
                    hover:text-slate-900 dark:hover:text-white"
                    aria-label={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                >
                    {theme === "dark" ? (
                        <Sun size={20} />
                    ) : (
                        <Moon size={20} />
                    )}
                </button>

                {/* Notification */}
                <button className="
                    shrink-0
                    text-slate-600 dark:text-slate-300
                    hover:text-slate-900 dark:hover:text-white
                    transition">
                    <Bell className="w-5 h-5" />
                </button>

                {/* Profile */}
                <div className="relative">

                    <button
                        onClick={() => setProfileOpen((prev) => !prev)}
                        className="
                            flex items-center gap-2
                            cursor-pointer
                            rounded-lg
                            px-1.5 py-1
                            hover:bg-slate-50
                            transition
                        "
                    >

                        {/* Avatar */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <span className="text-sm font-semibold text-blue-600">
                                IV
                            </span>
                        </div>

                        {/* Profile details */}
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                                Isha Vats
                            </p>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Web Developer
                            </p>
                        </div>

                        <ChevronDown
                            size={16}
                            className={`
                                hidden sm:block text-slate-500
                                transition-transform
                                ${profileOpen ? "rotate-180" : ""}
                            `}
                        />

                    </button>

                    {/* Dropdown */}
                    {profileOpen && (
                        <div className="
                            absolute
                            right-0
                            top-full
                            mt-2
                            w-48
                            bg-white
                            rounded-lg
                            shadow-lg
                            border border-slate-200
                            overflow-hidden
                            z-50
                        ">

                            {/* User info */}
                            <div className="px-4 py-3 border-b border-slate-100">
                                <p className="text-sm font-semibold text-slate-800">
                                    Isha Vats
                                </p>

                                <p className="text-xs text-slate-500 mt-0.5">
                                    Developer
                                </p>
                            </div>

                            {/* Logout */}
                            <button
                                type="button"
                                onClick={() => {
                                    logout();
                                    navigate("/login", { replace: true })
                                }}
                                className="
                                    w-full
                                    flex items-center gap-3
                                    px-4 py-3
                                    text-sm
                                    text-slate-600
                                    hover:bg-slate-50
                                    hover:text-red-600
                                    transition
                                    cursor-pointer
                                "
                            >
                                <LogOut size={17} />
                                <span>Logout</span>
                            </button>

                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}

export default DashboardHeader;