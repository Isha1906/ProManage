import ProjectCard from "../components/ProjectCard"
import ProjectHeader from "../components/ProjectHeader"
import { useState } from "react";
import ProjectFilters from "../components/ProjectFilters";
import { projects } from "../../../utils/data/projects"
import ProjectTimeline from "../components/ProjectTimeline";

function Projects() {

    const [filter, setFilter] = useState("all")

    const [selectedProjectId, setSelectedProjectId] = useState("null");

    const filteredProjects = projects.filter((project) => {
        if (filter === "all") {
            return true;
        }

        return project.status.toLowerCase() === filter;
    })

    const currentProject = projects.find((project) =>
        project.status === "In Progress");

    return (
        <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-100 p-3 sm:p-4 md:p-6">
            <ProjectHeader />
            <ProjectTimeline project={currentProject}
                onViewDetails={
                    () => setSelectedProjectId(currentProject.id)
                }
            />
            <ProjectFilters
                filter={filter}
                setFilter={setFilter} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-start">
                {filteredProjects.map((project) =>
                    <ProjectCard
                        key={project.id}
                        project={project}
                        openDetails={selectedProjectId === project.id}
                        onHideDetails={()=>
                        setSelectedProjectId(null)}
                    />
                )}
            </div>

        </main>

    )
}

export default Projects