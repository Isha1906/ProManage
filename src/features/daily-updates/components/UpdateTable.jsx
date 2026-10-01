import { updates } from "../../../utils/data/updates"

function UpdateTable() {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full min-w-[700px] text-sm">
                <thead className="bg-slate-100 text-slate-800">
                    <tr>
                        <th className="px-4 py-3 text-left">S.No</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Task</th>
                        <th className="px-4 py-3 text-left">Update Summary</th>
                        <th className="px-4 py-3 text-left">Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {updates.map((update, index) =>
                    (
                        <tr
                            className="border-t border-slate-200 hover:bg-slate-50"
                            key={update.id}>
                            <td className="px-4 py-3">
                                {index + 1}
                            </td>

                            <td className="px-4 py-3 whitespace-nowrap">
                                {update.date}
                            </td>

                            <td className="px-4 py-3 font-medium text-slate-800">
                                {update.task}
                            </td>

                            <td className="px-4 py-3 text-slate-600">
                                {update.summary}
                            </td>

                            <td className="px-4 py-3 font-medium">
                                {update.progress}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UpdateTable