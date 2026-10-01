import { Search } from "lucide-react";

function WorkFilters({
    filter,
    setFilter,
    priorityFilter,
    setPriorityFilter,
    search,
    setSearch,
}) {
    const filters = ["all", "in progress", "completed", "overdue"];

    return (
        <div className="mt-6 bg-white rounded-lg shadow p-3 sm:p-4">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">

                {/* Status Filters */}
                {/* Status Filters */}

                {/* Mobile: native select */}
                <div className="sm:hidden">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="
            w-full min-w-0
            px-3 py-2
            rounded-lg
            text-sm
            outline-none
            border
            bg-slate-50 text-slate-700 border-slate-200
            focus:ring-2 focus:ring-blue-500"
                    >
                        {filters.map((item) => (
                            <option key={item} value={item}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop/tablet: pill buttons */}
                <div className="hidden sm:block w-full overflow-x-auto">
                    <div className="flex w-max items-center gap-2 pb-1">
                        {filters.map((item) => (
                            <button
                                key={item}
                                onClick={() => setFilter(item)}
                                className={`
        px-3 py-2
        text-sm font-medium
        rounded-md
        whitespace-nowrap
        shrink-0
        ${filter === item
                                        ? "bg-blue-600 text-white"
                                        : "text-slate-600 hover:bg-slate-100"
                                    }
    `}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search + Priority */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                    {/* Search */}
                    <div className="relative w-full sm:w-[260px] lg:w-80">

                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Search tasks, projects, bugs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="
                                w-full h-9 min-w-0
                                pl-10 pr-4
                                bg-slate-50
                                border border-slate-200
                                rounded-lg
                                text-sm
                                outline-none
                                focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    {/* Priority */}
                    <select
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}
                        className={`
                            w-full sm:w-auto
                            px-3 py-2
                            rounded-lg
                            text-sm
                            outline-none
                            border
                            ${priorityFilter === "high"
                                ? "bg-red-700 text-white border-red-200"
                                : priorityFilter === "medium"
                                    ? "bg-yellow-500 text-white border-yellow-200"
                                    : priorityFilter === "low"
                                        ? "bg-green-700 text-white border-green-200"
                                        : "bg-slate-50 text-slate-600 border-slate-200"
                            }
                            focus:ring-2 focus:ring-blue-500
                        `}
                    >
                        <option
                            value="all"
                            className="bg-white text-slate-700"
                        >
                            Priority
                        </option>

                        <option
                            value="high"
                            className="bg-white text-slate-700"
                        >
                            High
                        </option>

                        <option
                            value="medium"
                            className="bg-white text-slate-700"
                        >
                            Medium
                        </option>

                        <option
                            value="low"
                            className="bg-white text-slate-700"
                        >
                            Low
                        </option>
                    </select>

                </div>

            </div>

        </div>
    );
}

export default WorkFilters;