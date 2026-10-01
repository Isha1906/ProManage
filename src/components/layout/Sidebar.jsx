import {
    Diamond,
    LayoutDashboard,
    Briefcase,
    FolderKanban,
    ClipboardList,
    Bug,
    Bell,
    Settings,
    X,
    LogOut,
    PackageSearch
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({
    collapsed,
    mobileOpen,
    setMobileOpen,
}) {
    const menuItems = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            path: "/",
            disabled: false
        },
        {
            label: "My Work",
            icon: Briefcase,
            path: "/my-work",
            disabled: false
        },
        {
            label: "Projects",
            icon: FolderKanban,
            path: "/projects",
            disabled: false
        },
        {
            label: "Daily Updates",
            icon: ClipboardList,
            path: "/daily-updates",
            disabled: false
        },
        {
            label: "Bugs",
            icon: Bug,
            path: "/bugs",
            disabled: false
        },
        {
            label: "Testing",
            icon: Bug,
            path: "/testing",
            disabled: false
        },
        {
            label: "Notifications",
            icon: Bell,
            path: "/notifications",
            disabled: false
        },
        {
            label: "Products",
            icon: PackageSearch,
            path: "/products",
            disabled: false
        },
        {
            label: "Settings",
            icon: Settings,
            path: "/settings",
            disabled: false
        },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <aside
                className={`
        fixed top-0 left-0 z-50
        h-dvh
        flex flex-col
        bg-gradient-to-b from-[#151044] via-[#11163d] to-[#08152f]
        text-white
        transition-all duration-300
        ${collapsed ? "md:w-15" : "md:w-55"}
        w-60
        ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }
    `}
            >

                {/* Logo */}
                <div className="h-16 px-5 border-b border-indigo-400/20 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        {(!collapsed || mobileOpen) && (
                            <div className="flex gap-3">
                                <Diamond className="text-white"
                                    strokeWidth={2.5} size={28}/>

                                <h1 className="text-xl text-white font-bold">
                                    ProManage
                                </h1>
                            </div>

                        )}
                    </div>

                    {/* Mobile close button */}
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="md:hidden text-slate-300 hover:text-white"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Navigation */}
                <nav className="p-3">

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        if (item.disabled) {
                            return (
                                <div
                                    key={item.label}
                                    className={`
                                    flex items-center 
                                    gap-3 px-3 
                                    py-3 rounded-lg
                                    text-slate-500
                                    cursor-not-allowed
                                    ${collapsed ? "md:justify-center" : ""}`}>
                                    <Icon
                                        size={20}
                                        className="shrink-0"
                                    />

                                    {(!collapsed || mobileOpen) && (
                                        <span className="text-sm">
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                to={item.path}
                                key={item.label}
                                end={item.path === "/"}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) => `
                                flex items-center gap-3
                                px-3 py-3
                                rounded-lg
                                cursor-pointer
                                transition

                                ${collapsed ? "md:justify-center" : ""}

                                ${isActive
                                        ? "bg-gradient-to-r from-violet-600 to-[#0d001a]-600 text-white shadow-lg shadow-blue-900/20"
                                        : "text-slate-300 hover:bg-white/20"}`}>
                                <Icon
                                    size={20}
                                    className="shrink-0"
                                />

                                {(!collapsed || mobileOpen) && (
                                    <span className="text-sm">
                                        {item.label}
                                    </span>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>
                <div className="mt-auto shrink-0 p-3 border-t border-indigo-400/20">
                    <button
                        type="button"
                        className={`
            w-full
            flex items-center gap-3
            px-3 py-3
            rounded-lg
            text-slate-300
            hover:bg-white/10
            hover:text-white
            transition
            ${collapsed ? "md:justify-center" : ""}
        `}
                    >
                        <LogOut size={20} className="shrink-0" />

                        {(!collapsed || mobileOpen) && (
                            <span className="text-sm">
                                Logout
                            </span>
                        )}
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;