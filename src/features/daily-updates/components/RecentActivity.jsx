import { activities } from "../../../utils/data/updates"

function RecentActivity() {
    return (
        <div className="p-4">
            {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                    <div
                        key={activity.id}
                        className="flex gap-3 py-3 first:pt-0 last:pb-0"
                    >
                        <div
                            className={`w-9 h-9 rounded-md shrink-0 flex items-center justify-center ${activity.color}`}
                        >
                            <Icon size={18} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-sm text-slate-700">
                                {activity.title}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default RecentActivity