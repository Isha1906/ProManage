import DashboardHeader from "../components/DashboardHeader";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCards";
import TaskProgress from "../components/TaskProgress";
import CurrentProject from "../components/CurrentProject";
import { useOutletContext } from "react-router-dom";
import projects from "../../../utils/data/projects";
import AssignedTaskTable from "../../my-work/components/AssignedTaskTable";
import RecentActivity from "../../daily-updates/components/RecentActivity";
import UpdateTable from "../../daily-updates/components/UpdateTable";
import ProjectTimeline from "../../projects/components/ProjectTimeline";
import { useState } from "react";
import DashboardCalendar from "../components/DashboardCalendar";
import { Link } from "react-router-dom"
function WorkDashboard() {
    const { setCollapsed, setMobileOpen } = useOutletContext();

    const currentProject = projects.find(
        (project) => project.status === "In Progress"
    )
    return (
        <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-100 p-3 sm:p-4 md:p-6">

            {/* Header */}
            <DashboardHeader
                setCollapsed={setCollapsed}
                setMobileOpen={setMobileOpen}
            />

            {/* Welcome + Stats + Calendar */}
            <div className="grid 
            grid-cols-1 
            lg:grid-cols-[minmax(0,1fr)_280px] 
            gap-4 items-stetch">

                {/* Welcome + Stats */}
                <div className="min-w-0 h-full flex flex-col">

                    <WelcomeSection />

                    <StatsCards />

                </div>

                {/* Calendar */}
                <DashboardCalendar />

            </div>


            {/* Task Progress + Current Project */}
            <div className="mt-6 flex flex-col lg:flex-row gap-6">
                <TaskProgress />
                <ProjectTimeline project={currentProject} />
                <CurrentProject />
            </div>

            {/* Assigned Tasks + Recent Activity */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                <section className="lg:col-span-2 bg-white rounded-lg shadow p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-base font-semibold text-slate-800">
                            My Assigned Tasks
                        </h2>
                        <Link
                            to="/my-work">
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                                View All
                            </button>
                        </Link>

                    </div>

                    <AssignedTaskTable
                        limit={3}
                        priorityFilter="all"
                        filter="all"
                        search=""
                    />
                </section>

                <section className="bg-white rounded-lg shadow p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-base font-semibold text-slate-800">
                            Recent Activity
                        </h2>

                        <Link>
                            <button
                                className="text-sm font-medium text-blue-600 hover:text-blue-800">
                                View All
                            </button>
                        </Link>

                    </div>

                    <RecentActivity limit={3} />
                </section>

            </div>

            {/* Daily Updates + Project Timeline */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

                <section className="bg-white rounded-lg shadow p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-base font-semibold text-slate-800">
                            Daily Updates
                        </h2>

                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                            View All
                        </button>
                    </div>

                    <UpdateTable />
                </section>
            
            </div>

        </main>
    );
}

