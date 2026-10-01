import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="h-screen bg-slate-50 overflow-hidden">

            <Sidebar
                collapsed={collapsed}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <main
                className={`
                    h-screen
                    overflow-y-auto
                    overflow-x-hidden
                    transition-all duration-300
                    ${collapsed ? "md:ml-15" : "md:ml-[13.75rem]"}
                `}
            >
                <Outlet
                    context={{
                        collapsed,
                        setCollapsed,
                        mobileOpen,
                        setMobileOpen,
                    }}
                />
            </main>

        </div>
    );
}

export default AppLayout;