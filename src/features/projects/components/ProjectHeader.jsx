import DashboardHeader from "../../dashboard/components/DashboardHeader"
import { useOutletContext } from "react-router-dom";
function ProjectHeader() {
    const { setCollapsed } = useOutletContext();
    const { setMobileOpen } = useOutletContext();
    return (
        <section>
            <DashboardHeader setCollapsed={setCollapsed}
                setMobileOpen={setMobileOpen} />
            <h1 className="text-2xl font-semibold text-slate-800">
                Projects
            </h1>

            <p className="mt-1 text-sm text-slate-500">
                View your projects and project history.
            </p>
        </section>
    )
}

export default ProjectHeader