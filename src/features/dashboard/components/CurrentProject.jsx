import { CalendarDays, UserRound } from "lucide-react";

function CurrentProject() {

    const project = {
        name: "E-Commerce Website",
        description:
            "Employee management dashboard for managing tasks, projects and daily work updates.",
        status: "In Progress",
        stage: "In Development",
        startDate: "01 Sep 2026",
        dueDate: "30 Sep 2026",
        manager: "John Doe",
        progress: 70,
    };

    return (
        <section className="bg-white rounded-lg shadow p-5 w-full">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-md font-bold text-slate-800">
                    Current Project
                </h2>

                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                    {project.status}
                </span>
            </div>

            <div className="flex mt-3 gap-4">
                {/* Project Name */}
                <h3 className="text-lg font-semibold text-slate-800">
                    {project.name}
                </h3>

                {/* Stage */}
                <p className="h-full font-semibold text-sm 
                bg-green-100 text-green-800 
                w-28 text-center py-1 rounded-lg">
                    {project.stage}
                </p>
            </div>


            {/* Dates */}
            <div className="mt-5 flex gap-10">

                <div className="flex items-center gap-2">
                    <CalendarDays
                        size={16}
                        className="text-slate-400"
                    />

                    <div>
                        <p className="text-xs text-slate-400">
                            Start Date
                        </p>

                        <p className="text-sm font-medium text-slate-700">
                            {project.startDate}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <CalendarDays
                        size={16}
                        className="text-slate-400"
                    />

                    <div>
                        <p className="text-xs text-slate-400">
                            Due Date
                        </p>

                        <p className="text-sm font-medium text-slate-700">
                            {project.dueDate}
                        </p>
                    </div>
                </div>

            </div>

            {/* Manager */}
            <div className="mt-5 flex items-center gap-2">
                <UserRound
                    size={16}
                    className="text-slate-400"
                />

                <div>
                    <p className="text-xs text-slate-400">
                        Project Manager
                    </p>

                    <p className="text-sm font-medium text-slate-700">
                        {project.manager}
                    </p>
                </div>
            </div>

            {/* Progress */}
            <div className="mt-6">

                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500">
                        Progress
                    </span>

                    <span className="text-xs font-semibold text-slate-700">
                        {project.progress}%
                    </span>
                </div>

                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>

            </div>

        </section>
    );
}

export default CurrentProject;