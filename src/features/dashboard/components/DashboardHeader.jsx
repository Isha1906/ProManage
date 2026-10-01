import { Search, Bell, Menu, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../../app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
function DashboardHeader({ setCollapsed, setMobileOpen }) {

    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();
    return (
        <header className="p-2 flex items-center gap-2 bg-white h-12 rounded-md">

            {/* Menu */}
            <button
                onClick={() => {
                    if (window.innerWidth < 768) {
                        setMobileOpen(true);
                    } else {
                        setCollapsed((prev) => !prev);
                    }
                }}
                className="shrink-0 cursor-pointer"
            >
                <Menu />
            </button>

            {/* Search */}
            <div className="hidden sm:block relative flex-1 min-w-0 max-w-md">

                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                />

                <input
                    type="text"
                    placeholder="Search tasks, projects, bugs..."
                    className="
                        w-full h-8
                        pl-10 pr-3
                        bg-slate-50
                        border border-slate-200
                        rounded-lg
                        text-sm
                        outline-none
                        focus:ring-2 focus:ring-blue-500
                    "
                />

            </div>

            {/* Right section */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto shrink-0">

                {/* Notification */}
                <button className="shrink-0">
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
                            <p className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                                Isha Vats
                            </p>

                            <p className="text-xs text-slate-500">
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