function ProjectFilters({ filter, setFilter }) {

    const filters = [
        "all",
        "in progress",
        "completed",
    ];

    return (
        <div className="mt-6 bg-white rounded-lg shadow p-4">

            <div className="flex items-center gap-2">

                {filters.map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`
                            px-3 py-2
                            text-sm
                            font-medium
                            rounded-md
                            ${
                                filter === item
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
    );
}

export default ProjectFilters;