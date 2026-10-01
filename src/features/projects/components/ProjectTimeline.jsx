import { Check } from "lucide-react";

function ProjectTimeline({ project, onViewDetails }) {
    const timeline = project?.timeline || [];

    return (
        <div className="rounded-lg w-full
        bg-white border-t border-slate-200 
        shadow p-5">

            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-800">
                    Project Timeline
                    <span className="ml-2 text-xs font-normal text-slate-500">
                        (Read Only)
                    </span>
                </h3>

                <button 
                onClick={onViewDetails}
                className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    View Details
                </button>
            </div>
            <div className="mt-5 flex items-center gap-3">
                <h3 className="text-base font-semibold text-slate-800">
                    {project?.name}
                </h3>

                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    {project?.status}
                </span>
            </div>

            <div className="mt-6 flex items-start">
                {timeline.map((item, index) => {
                    const completed = item.status === "Completed";
                    const inProgress = item.status === "In Progress";

                    return (
                        <div
                            key={item.title}
                            className="relative flex-1 flex flex-col items-center"
                        >
                            {index < timeline.length - 1 && (
                                <div
                                    className={`
                                        absolute top-3 left-1/2
                                        w-full h-1
                                        ${completed
                                            ? "bg-green-500"
                                            : "bg-slate-200"
                                        }
                                    `}
                                />
                            )}

                            <div
                                className={`
                                    relative z-10
                                    w-7 h-7 rounded-full
                                    flex items-center justify-center
                                    ${completed
                                        ? "bg-green-500 text-white"
                                        : inProgress
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-200 text-slate-400"
                                    }
                                `}
                            >
                                {completed ? (
                                    <Check size={16} />
                                ) : (
                                    <span className="w-2.5 h-2.5 rounded-full bg-current" />
                                )}
                            </div>

                            <div className="mt-3 text-center">
                                <p
                                    className={`
                                        text-sm font-semibold
                                        ${inProgress
                                            ? "text-blue-600"
                                            : "text-slate-700"
                                        }
                                    `}
                                >
                                    {item.title}
                                </p>

                                <p
                                    className={`
                                        mt-1 text-xs
                                        ${completed
                                            ? "text-green-600"
                                            : inProgress
                                                ? "text-blue-600"
                                                : "text-slate-400"
                                        }
                                    `}
                                >
                                    {item.status}
                                </p>

                                {item.date && (
                                    <p className="mt-1 text-xs text-slate-500">
                                        {item.date}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectTimeline;