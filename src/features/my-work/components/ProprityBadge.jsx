function PriorityBadge({ priority }) {
    return (
        <span className={`
                            p-1 rounded-lg text-xs font-medium
                            ${priority === "High"
                ? "bg-red-200 text-red-700"
                : priority === "Medium"
                    ? "bg-yellow-200 text-yellow-700"
                    : "bg-green-200 text-green-700"
            }`}>
            {priority}
        </span>
    )
}

export default PriorityBadge