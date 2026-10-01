import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PriorityBadge from "./ProprityBadge";
import StatusBadge from "./StatusBadge";

function AssignedTaskTable({ limit, priorityFilter, filter, search }) {
    const [expandedId, setExpandedId] = useState(null);

    const tasks = [
        { id: 1, task: "Design Landing Page", project: "Website Redesign", priority: "High", status: "In Progress", dueDate: "2026-09-20", progress: 50 },
        { id: 2, task: "Create Login Page", project: "ProManage", priority: "Medium", status: "In Progress", dueDate: "2026-09-22", progress: 40 },
        { id: 3, task: "Fix Navbar Bug", project: "ProManage", priority: "Low", status: "Completed", dueDate: "2026-09-15", progress: 100 },
        { id: 4, task: "Fix Navbar Bug", project: "Company Site", priority: "Medium", status: "Overdue", dueDate: "2026-09-15", progress: 87 },
        { id: 5, task: "FFDiamonds Home Page", project: "FFDiamonds", priority: "Low", status: "Completed", dueDate: "2026-09-30", progress: 25 },
        { id: 6, task: "Ad Component", project: "FFDiamonds", priority: "Medium", status: "Completed", dueDate: "2026-09-30", progress: 30 },
        { id: 7, task: "Question Component", project: "FFDiamonds", priority: "High", status: "Completed", dueDate: "2026-09-30", progress: 40 },
        { id: 8, task: "Level Page", project: "FFDiamonds", priority: "High", status: "Completed", dueDate: "2026-09-30", progress: 60 },
        { id: 9, task: "Spinner Card", project: "FFDiamonds", priority: "Low", status: "Completed", dueDate: "2026-09-30", progress: 80 },
        { id: 10, task: "RBXPage", project: "FFDiamonds", priority: "Low", status: "Completed", dueDate: "2026-09-30", progress: 85 },
        { id: 11, task: "localStorage Establish", project: "FFDiamonds", priority: "High", status: "Completed", dueDate: "2026-09-15", progress: 90 },
        { id: 12, task: "LevelPage Product/Game Link", project: "FFDiamonds", priority: "Low", status: "In Progress", dueDate: "2026-10-30", progress: 90 },
        { id: 13, task: "Update Assigned Task Table", project: "ProManage", priority: "Low", status: "In Progress", dueDate: "2026-10-30", progress: 87 },
    ];

    const filteredTasks = tasks.filter((task) => {
        const matchStatus = filter === "all" || task.status.toLowerCase() === filter;
        const matchPriority = priorityFilter === "all" || task.priority.toLowerCase() === priorityFilter;
        const matchSearch =
            task.task.toLowerCase().includes(search.toLowerCase()) ||
            task.project.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchPriority && matchSearch;
    });

    const ActionButton = ({ task }) =>
        task.status === "In Progress" ? (
            <button className="mb-2 bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-700 font-medium text-xs">
                Update
            </button>
        ) : task.status === "Completed" ? (
            <button className="mb-2 bg-green-500 text-white rounded-lg px-3 py-2 hover:bg-green-700 font-medium text-xs">
                View
            </button>
        ) : null;

    return (
        <div className="mt-1 bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-800">Assigned Tasks</h2>
            </div>

            {/* ---- Desktop / tablet table (sm and up) ---- */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="table w-full min-w-[700px] text-sm">
                    <thead className="bg-slate-100 text-slate-800">
                        <tr>
                            <th className="px-6 py-3 text-left font-medium">S.No</th>
                            <th className="px-6 py-3 text-left font-medium">Task</th>
                            <th className="px-6 py-3 text-left font-medium">Project</th>
                            <th className="px-6 py-3 text-left font-medium">Priority</th>
                            <th className="px-6 py-3 text-left font-medium">Status</th>
                            <th className="px-6 py-3 text-left font-medium">Due Date</th>
                            <th className="px-6 py-3 text-left font-medium">Progress</th>
                            <th className="px-6 py-3 text-left font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {filteredTasks.slice(0,limit).map((task) => (
                            <tr className="border-t border-slate-100 hover:bg-slate-50" key={task.id}>
                                <th className="px-6 py-4 text-slate-500">{task.id}</th>
                                <td className="px-6 py-4">{task.task}</td>
                                <td className="px-6 py-4">{task.project}</td>
                                <td className="px-6 py-4"><PriorityBadge priority={task.priority} /></td>
                                <td className="px-6 py-4"><StatusBadge status={task.status} /></td>
                                <td className="px-6 py-4">{task.dueDate}</td>
                                <td className="px-6 py-4">{task.progress}%</td>
                                <td className="px-6 py-4"><ActionButton task={task} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ---- Mobile stacked cards (below sm) ---- */}
            <div className="sm:hidden divide-y divide-slate-100">
                {filteredTasks.slice(0,limit).map((task) => {
                    const isOpen = expandedId === task.id;
                    return (
                        <div key={task.id} className="p-4">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="font-medium text-slate-800 truncate">{task.task}</p>
                                    <p className="text-xs text-slate-500 truncate">{task.project}</p>
                                </div>
                                <StatusBadge status={task.status} />
                            </div>

                            <button
                                onClick={() => setExpandedId(isOpen ? null : task.id)}
                                className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-600"
                            >
                                {isOpen ? "Hide details" : "View details"}
                                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>

                            {isOpen && (
                                <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="text-slate-400 mb-2">Priority</p>
                                        <PriorityBadge priority={task.priority} />
                                    </div>
                                    <div>
                                        <p className="text-slate-400">Due Date</p>
                                        <p className="text-slate-700 font-medium">{task.dueDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400">Progress</p>
                                        <p className="text-slate-700 font-medium">{task.progress}%</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400">Actions</p>
                                        <ActionButton task={task} />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AssignedTaskTable;