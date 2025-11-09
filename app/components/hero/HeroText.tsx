import Link from "next/link"
import { AnimateOnMountDiv } from "../animate/AnimateOnMountDiv"
import clsx from "clsx"

export const HeroText = () => {

    return (
        <AnimateOnMountDiv
            options={
                {
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.5 },
                }
            }
        >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Developer in&nbsp;
                <span
                    className={clsx(
                        "relative",
                        "before:content-['React'] before:text-orange-600 dark:before:text-orange-500 before:animate-words-changing",
                        "after:content-[''] after:absolute after:w-[calc(100%+8px)] after:h-full after:bg-[#f8fafc] dark:after:bg-[#020617] after:border-l-8 after:border-l-[#ff7f50] after:-right-2 after:animate-words-typing"
                    )}
                ></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                Sinh viên Khoa học Máy tính sắp tốt nghiệp tại trường Đại học Bách Khoa HCM.
                Đam mê xây dựng các ứng dụng Web trực quan và dễ tiếp cận.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Hiện tại, tôi đang tìm kiếm các cơ hội Intern và Fresher.</p>
            <div className="flex flex-row gap-4 items-center">
                <AnimateOnMountDiv
                    options={
                        {
                            initial: { opacity: 0, x: -50 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.8 },
                        }
                    }
                >
                    <Link
                        href="#projects"
                        className="block px-7 py-3 rounded-lg font-semibold border-4 border-blue-500 bg-blue-500 text-white hover:bg-[#f8fafc] hover:text-blue-500 transition-colors duration-700"
                    >
                        Xem dự án
                    </Link>
                </AnimateOnMountDiv>
                <AnimateOnMountDiv
                    options={
                        {
                            initial: { opacity: 0, x: 50 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.8 },
                        }
                    }
                >
                    <div
                        className={clsx(
                            "p-1 relative rounded-xl overflow-clip",
                            "hover:scale-105 hover:-translate-y-1 hover:shadow-md hover:shadow-sky-400  dark:hover:shadow-sky-200 duration-500",
                            "active:scale-100 active:translate-y-0"
                        )}
                    >
                        <div
                            className={clsx(
                                "size-32 rounded-full bg-conic from-blue-600 to-sky-400 to-50%",
                                "absolute top-1/2 left-1/2 -translate-1/2",
                                "-z-10 animate-spin"
                            )}
                            aria-hidden="true"
                        />
                        <Link
                            href="https://drive.google.com/drive/folders/1Fcc2pgv15YDjVtpa1R5g6a8M-vZNYurC?usp=share_link"
                            className="block px-6 py-3  text-gray-900 rounded-lg font-semibold dark:text-white bg-[#f8fafc] dark:bg-[#020617]"
                            target="_blank"
                        >
                            Tải CV
                        </Link>
                    </div>
                </AnimateOnMountDiv>
            </div >
        </AnimateOnMountDiv >
    )
}