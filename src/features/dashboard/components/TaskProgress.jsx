import { PieChart, Pie, Cell } from "recharts";

function TaskProgress() {
    const taskProgress = [
        {
            label: "Completed",
            value: 2,
        },
        {
            label: "In Progress",
            value: 3,
        },
        {
            label: "Not Started",
            value: 1,
        },
    ];

    const COLORS = [
        "url(#completedGradient)",
        "url(#progressGradient)",
        "url(#notStartedGradient)",
    ];

    const totalTasks = taskProgress.reduce(
        (total, task) => total + task.value,
        0
    );

    return (
        <section className="bg-white rounded-lg shadow p-4 w-full min-w-0">

            <h2 className="text-md font-bold text-slate-800">
                My Task Progress
            </h2>

            <div className="flex flex-col items-center gap-4 mt-4">

                {/* Donut Chart */}
                <div className="relative w-37.5 h-37.5 shrink-0">

                    <PieChart width={150} height={150}>

                        {/* Gradients */}
                        <defs>

                            {/* Completed - Green */}
                            <linearGradient
                                id="completedGradient"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#10e934" />
                                <stop offset="100%" stopColor="#385844" />
                            </linearGradient>

                            {/* In Progress - Blue */}
                            <linearGradient
                                id="progressGradient"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#0077ff" />
                                <stop offset="100%" stopColor="#131920" />
                            </linearGradient>

                            {/* Not Started - Orange */}
                            <linearGradient
                                id="notStartedGradient"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#ff6f00" />
                                <stop offset="100%" stopColor="#312a23" />
                            </linearGradient>

                        </defs>

                        <Pie
                            data={taskProgress}
                            dataKey="value"
                            nameKey="label"
                            cx="50%"
                            cy="50%"
                            innerRadius={42}
                            outerRadius={62}
                        >
                            {taskProgress.map((entry, index) => (
                                <Cell
                                    key={entry.label}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                    </PieChart>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-slate-800">
                            {totalTasks}
                        </span>

                        <span className="text-xs text-slate-500">
                            Tasks
                        </span>
                    </div>

                </div>

                {/* Legend */}
                <div className="flex flex-col gap-3 w-full min-w-0">

                    {taskProgress.map((task, index) => {
                        const percentage =
                            totalTasks === 0
                                ? 0
                                : Math.round(
                                    (task.value / totalTasks) * 100
                                );

                        return (
                            <div
                                key={task.label}
                                className="flex items-center justify-between gap-3 w-full min-w-0"
                            >
                                <div className="flex items-center gap-2 min-w-0">

                                    <span
                                        className="w-2.5 h-2.5 rounded-full shrink-0"
                                        style={{
                                            background:
                                                index === 0
                                                    ? "linear-gradient(135deg, #04ff60, #04ff60)"
                                                    : index === 1
                                                        ? "linear-gradient(135deg, #0051ff, #0051ff)"
                                                        : "linear-gradient(135deg, #ff6f00, #ff6f00)",
                                        }}/>

                                    <span className="text-sm text-slate-600 truncate">
                                        {task.label}
                                    </span>

                                </div>

                                <span className="text-sm font-medium text-slate-800 whitespace-nowrap shrink-0">
                                    {task.value} ({percentage}%)
                                </span>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default TaskProgress;