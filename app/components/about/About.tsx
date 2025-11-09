import clsx from "clsx"
import { AboutImage } from "./AboutImage"
import { AboutText } from "./AboutText"

// app/components/About.tsx
export const About = () => {
    return (
        <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
                Về <span className="text-blue-600 dark:text-blue-400">tôi</span>
            </h2>
            <div
                className={clsx(
                    "max-w-[1000px] grid md:grid-cols-3 justify-items-center md:justify-items-end gap-12",
                    "m-auto"
                )}
            >
                <div className="size-fit">
                    <AboutImage />
                </div>
                <div className="md:col-span-2">
                    <AboutText />
                </div>
            </div>
        </div>
    )
}