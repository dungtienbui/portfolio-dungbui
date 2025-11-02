import { SkillCard } from "./SkillCard";
import { SkillMotionWrapper } from "./SkillMotionWrapper";

export const Skills = () => {
    const frontendSkills = ["HTML5", "CSS", "JavaScript", "React", "Next.js", "React Native"];
    const backendSkills = ["Node.js", "Express.js", "Java Spring Boot"];
    const databases = ["MySQL", "PostgreSQL", "MongoDB", "Neo4j"];
    const others = ["C++", "PHP", "Java", "Python", "Git", "Agile Scrum"];

    const skillsData = [
        {
            title: "Frontend (Ưu tiên)",
            data: frontendSkills
        },
        {
            title: "Backend",
            data: backendSkills
        },
        {
            title: "Cơ sở dữ liệu",
            data: databases
        },
        {
            title: "Các kỹ năng khác",
            data: others
        },
    ];

    return (
        <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
                Kỹ năng & <span className="text-blue-600 dark:text-blue-400">Công nghệ</span>
            </h2>

            <SkillMotionWrapper>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5"
                >
                    {skillsData.map((item) => (
                        <div key={item.title} className="motion-stagged-item w-full h-full">
                            <SkillCard title={item.title} skills={item.data} />
                        </div>
                    ))}
                </div>
            </SkillMotionWrapper>
        </div>
    )
}