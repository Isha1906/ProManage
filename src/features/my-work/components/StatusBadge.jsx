function StatusBadge({ status }) {
    return (
        <span
            className={`
                px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0
                ${status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}>
            {status}
        </span>
    )
}

export default StatusBadge