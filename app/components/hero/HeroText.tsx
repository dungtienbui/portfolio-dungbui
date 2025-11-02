import Link from "next/link"
import { AnimateOnMountDiv } from "../animate/AnimateOnMountDiv"

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
                Frontend Developer (React / Next.js)
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                Sinh viên Khoa học Máy tính sắp tốt nghiệp tại trường Đại học Bách Khoa HCM.
                Đam mê xây dựng các ứng dụng web trực quan và dễ tiếp cận.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Hiện tại, tôi đang tìm kiếm các cơ hội Intern và Fresher.</p>
            <div className="flex space-x-4">
                <AnimateOnMountDiv
                    options={
                        {
                            initial: { opacity: 0, x: -50 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.8 },
                        }
                    }
                    className="flex items-center space-x-4"
                >
                    <Link
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
                    className="flex items-center space-x-4"
                >
                    <Link
                        href="/resume_buitiendung.pdf"
                        download
                        className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors"
                    >
                        Tải CV
                    </Link>
                </AnimateOnMountDiv>
            </div>
        </AnimateOnMountDiv>
    )
}