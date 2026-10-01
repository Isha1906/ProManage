import { ClipboardList, Clock, Check, AlertTriangle } from "lucide-react"

function StatsCards()
{
    const stats = [
    {
        title: "My Tasks",
        value: 5,
        color:"bg-blue-300",
        text:"text-blue-700",
        icon:ClipboardList
    },
    {
        title: "In Progress",
        value: 3,
        color:"bg-yellow-300",
        text:"text-yellow-700",
        icon:Clock
    },
    {
        title: "Completed",
        value: 2,
        color:"bg-green-300",
        text:"text-green-700",
        icon:Check
    },
    {
        title: "Overdue",
        value: 1,
        color:"bg-red-300",
        text:"text-red-700",
        icon:AlertTriangle
    },
]

    return (
    <div className="grid grid-cols-2
    items-stretch w-full
    lg:grid-cols-4 gap-3 mt-auto">
        {stats.map((stat) => (
            <div
                key={stat.title}
                className="p-3 rounded-lg bg-white shadow flex 
                items-center gap-4 min-w-0 flex-1">
                <div
                    className={`w-10 h-10 rounded-lg ${stat.color}
                    flex items-center justify-center ${stat.text}`}>
                    <stat.icon size={27} strokeWidth={2} />
                </div>

                <div className="flex flex-col">
                    <p className="text-lg font-bold">
                        {stat.value}
                    </p>

                    <h3 className="text-sm font-bold text-gray-700">
                        {stat.title}
                    </h3>
                </div>
            </div>
        ))}
    </div>
)
}

export default StatsCards