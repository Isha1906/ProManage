import DashboardHeader from "../../dashboard/components/DashboardHeader";
import { useOutletContext } from "react-router-dom";
import UpdateTable from "../components/UpdateTable";
import RecentActivity from "../components/RecentActivity";

function DailyUpdates() {
    const { setCollapsed } = useOutletContext();
    const { setMobileOpen } = useOutletContext();
    return (
        <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-100 p-3 sm:p-4 md:p-6">
            <DashboardHeader
                setCollapsed={setCollapsed}
                setMobileOpen={setMobileOpen} />
            {/* Update Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                <section className="lg:col-span-2 bg-white rounded-lg shadow">

                    <div className="flex items-center justify-between p-4">
                        <h2 className="text-lg font-semibold text-slate-800">
                            Daily Updates
                        </h2>

                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                            View All
                        </button>
                    </div>

                    <UpdateTable />

                </section>

                <section className="bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4">
                        <h2 className="text-lg font-semibold text-slate-800">
                            Recent Activity
                        </h2>

                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                            View All
                        </button>
                    </div>

                    <RecentActivity />
                </section>

            </div>
        </main>
    )
}

export default DailyUpdates