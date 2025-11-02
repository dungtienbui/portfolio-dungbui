import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardMotionWrapper } from "./ProjectCardMotionWrapper";

export const TotalProjectCard = ({ title, description, tech, linkGithub, linkDemo, linkPage, imageHref }: {
    title: string;
    description: string;
    tech: string[];
    linkGithub: string;
    linkDemo: string | null;
    linkPage: string;
    imageHref: string;
}) => (
    <ProjectCardMotionWrapper
        initial={{ opacity: 1, scale: 0.8, x: -100 }}
        inViewAnimate={{ opacity: 1, scale: 1, x: 0 }}
        outViewAnimate={{ opacity: 0.5, scale: 0.9, x: -100 }}
    >
        <div
            className={clsx(
                "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full",
            )}
        >
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 relative">
                <Image
                    src={imageHref} alt={`Hình ảnh của: ${title}`}
                    fill
                    className="object-cover object-top"
                />
            </div>
            <div className="p-6 grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                        <Link
                            href={linkPage}
                        >
                            {title}
                        </Link>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 grow line-clamp-2">{description}</p>
                    <div className="mb-4 flex flex-row flex-wrap gap-3">
                        {tech.map((t: string) => (
                            <div key={t} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs text-nowrap font-medium">
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex space-x-4">
                    <Link href={linkPage} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Xem chi tiết</Link>
                    <Link href={linkGithub} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">GitHub</Link>
                    {linkDemo && (
                        <Link href={linkDemo} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Demo</Link>
                    )}
                </div>
            </div>
        </div>
    </ProjectCardMotionWrapper>
)