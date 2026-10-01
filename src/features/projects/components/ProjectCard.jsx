import { useState, useEffect, useRef } from "react";
import StatusBadge from "../../my-work/components/StatusBadge";
function ProjectCard({ project, openDetails, onHideDetails }) {
    const [showDetails, setShowDetails] = useState(false);
    const projectRef = useRef(null);
    useEffect(() => {
        setShowDetails(openDetails);
    }, [openDetails]);

    useEffect(() => {
        if (showDetails && openDetails) {
            projectRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [showDetails, openDetails]);

    return (
        <div

            className="bg-white rounded-lg shadow p-5">

            {/* Project Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-800">
                        {project.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {project.description}
                    </p>
                </div>

                <span className="shrink-0">
                    <StatusBadge status={project.status} />
                </span>
            </div>

            {/* Project Information */}
            <div className="grid grid-cols-2 gap-4 mt-5">

                <div>
                    <p className="text-xs text-slate-400">
                        Start Date
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                        {project.startDate}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-slate-400">
                        End Date
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                        {project.endDate}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-slate-400">
                        Manager
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                        {project.manager}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-slate-400">
                        My Role
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                        {project.role}
                    </p>
                </div>

            </div>

            {/* Progress */}
            <div className="mt-5">

                <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600">
                        Progress
                    </span>

                    <span className="text-sm font-medium text-slate-700">
                        {project.progress}%
                    </span>
                </div>

                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>

            </div>

            {/* Action */}
            <div className="mt-5 pt-4 border-t border-slate-200 ">
                <button className="bg-blue-200 rounded-lg p-2 
                text-sm font-medium text-blue-600 hover:text-blue-800"
                    onClick={() => {
                        if (showDetails) {
                            setShowDetails(false);
                            onHideDetails?.();
                        } else {
                            setShowDetails(true);
                        }
                    }}>
                    {showDetails? "Hide Details":"View Deatils"}
                </button>

            </div>
            {/* Details */}
            {
                showDetails && (
                    <div
                        ref={projectRef}
                        className="mt-5 pt-5 border-t border-slate-100">

                        <h3 className="text-base font-semibold text-slate-800">
                            Project Details
                        </h3>

                        {/* Technologies */}
                        <div className="mt-5">

                            <p className="text-xs text-slate-400">
                                Technologies
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                        </div>

                        {/* My Responsibilities */}
                        <div className="mt-5">

                            <p className="text-xs text-slate-400">
                                My Responsibilities
                            </p>

                            <ul className="mt-2 space-y-2">
                                {project.responsibilities.map((item) => (
                                    <li
                                        key={item}
                                        className="text-sm text-slate-600 flex gap-2"
                                    >
                                        <span className="text-blue-600">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Project Tasks */}
                        <div className="mt-5">

                            <p className="text-xs text-slate-400">
                                Project Tasks
                            </p>

                            <ul className="mt-2 space-y-2">
                                {project.tasks.map((task) => (
                                    <li
                                        key={task}
                                        className="text-sm text-slate-600 flex gap-2"
                                    >
                                        <span className="text-blue-600">•</span>
                                        {task}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Recent Update */}
                        <div className="mt-5 p-4 bg-slate-50 rounded-lg">

                            <p className="text-xs text-slate-400">
                                Recent Update
                            </p>

                            <p className="mt-1 text-sm text-slate-600">
                                {project.recentUpdate}
                            </p>

                        </div>

                    </div>
                )
            }

        </div >
    );
}

export default ProjectCard;