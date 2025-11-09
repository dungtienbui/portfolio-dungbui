import { myOtherProjects, myProjects } from "@/lib/data/projects";
import { BreadCrumb } from "../components/breadcrumb/BreadCrumb";
import { TotalProjectCard } from "../components/projects/TotalProjectCard";

export default function Page() {

    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
    ];

    const totalProjects = [...myProjects, ...myOtherProjects];

    return (
        <div className="container m-auto pt-32 md:pt-24 space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />
            <h2 className="text-3xl font-bold text-center">
                Bộ sư tập tất cả các dự án của <span className="text-blue-600 dark:text-blue-400">Dũng</span>
            </h2>
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 relative">
                    {totalProjects.map((project) => (
                        <TotalProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </div>
    )
}