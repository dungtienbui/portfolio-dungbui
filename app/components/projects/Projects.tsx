// app/components/Projects.tsx

import { myProjects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-12">
                Dự án <span className="text-blue-600 dark:text-blue-400">nổi bật</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 relative">
                {myProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </>
    )
}