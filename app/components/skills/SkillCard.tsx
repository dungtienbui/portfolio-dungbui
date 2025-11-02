export const SkillCard = ({ title, skills }: { title: string; skills: string[]; }) => {
    return (
        <div
            className="h-full shadow-sm p-5 rounded-lg border border-blue-300 dark:border-gray-100"
        >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="px-4 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

    )
}