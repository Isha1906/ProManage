import WorkFilters from "../components/WorkFilters"
import AssignedTaskTable from "../components/AssignedTaskTable"
import { useState } from "react";
import DashboardHeader from "../../dashboard/components/DashboardHeader";
import { useOutletContext } from "react-router-dom";

function MyWork() {
    const [filter, setFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");
    const [search, setSearch] = useState("");
    const { setCollapsed } = useOutletContext();
    const { setMobileOpen } = useOutletContext();

    return (
        <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-100 p-3 sm:p-4 md:p-6">

            <DashboardHeader 
                setCollapsed={setCollapsed}
                setMobileOpen={setMobileOpen}
            />

            <WorkFilters
                filter={filter}
                setFilter={setFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
                search={search}
                setSearch={setSearch}
            />

            <AssignedTaskTable
                priorityFilter={priorityFilter}
                filter={filter}
                search={search}
            />

        </main>
    );
}

export default MyWork