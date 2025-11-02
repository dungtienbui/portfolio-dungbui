import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "Học Swift/SwiftUI", href: "/projects/learning-swift-swiftui" },
    ];


    return (
        <div className="container m-auto space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng để dễ đọc */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    Hành trình học Swift & SwiftUI
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    Swift | SwiftUI | 100 Days of SwiftUI
                </p>

                {/* --- Mô tả chung --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        Đây là một dự án học tập cá nhân, ghi lại hành trình tôi tự học phát triển ứng dụng iOS với <strong>Swift</strong> và <strong>SwiftUI</strong>.
                    </p>
                    <p>
                        Mục tiêu chính là làm theo lộ trình <strong>"100 Days of SwiftUI"</strong> nổi tiếng của Paul Hudson (Hacking with Swift) để xây dựng nền tảng vững chắc về hệ sinh thái của Apple.
                    </p>
                    <p>
                        Repository GitHub đi kèm đóng vai trò như một cuốn "nhật ký code", lưu trữ tất cả các dự án nhỏ, bài tập thử thách (challenges), và các cột mốc quan trọng (checkpoints) trong suốt 100 ngày học.
                    </p>
                </div>

                {/* --- Nội dung khoá học --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Nội dung học tập
                </h2>
                <p className="mb-6">
                    Khoá học bao gồm 100 ngày, đi từ những khái niệm cơ bản nhất của Swift đến việc xây dựng các ứng dụng SwiftUI hoàn chỉnh. Các chủ đề chính bao gồm:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                    <li>
                        <strong>Ngôn ngữ Swift:</strong> Biến, hằng, kiểu dữ liệu, toán tử, collections, functions, closures, structs, classes, và protocols.
                    </li>
                    <li>
                        <strong>SwiftUI Cơ bản:</strong> Views, modifiers, state management (@State, @Binding), điều hướng, và xử lý form.
                    </li>
                    <li>
                        <strong>Các dự án thực hành:</strong> Xây dựng nhiều ứng dụng nhỏ như "WeSplit" (chia hoá đơn), "Guess the Flag" (đoán cờ), "WordScramble" (sắp xếp chữ), và nhiều hơn nữa.
                    </li>
                    <li>
                        <strong>Chủ đề nâng cao:</strong> Làm việc với dữ liệu (Core Data, SwiftData), networking (JSON), và tích hợp các framework của iOS.
                    </li>
                </ul>

                {/* --- Hình ảnh minh hoạ --- */}
                {/* Bạn nên thay thế 'imageHref' trong myProjects và 'src' dưới đây bằng một hình ảnh thực tế */}
                <div className="mb-12 rounded-lg shadow-sm overflow-clip border border-gray-200 dark:border-gray-700">
                    <Image
                        src={"/projects/learning-swift-swiftui/wallpaper.png"}
                        alt={"Giao diện học Swift/SwiftUI"}
                        width={1920}
                        height={1080}
                        className="w-full bg-gray-100 dark:bg-gray-800" // Thêm background-color phòng khi ảnh lỗi
                    />
                </div>


                {/* --- Tài nguyên & Links --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên
                </h2>
                <p className="text-sm mb-6">Liên kết bên ngoài</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    <Link
                        href="https://github.com/dungtienbui/Learn_swiftUI_in100daysOfSwiftUI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Source Code (GitHub)
                    </Link>

                    <Link
                        href="https://www.hackingwithswift.com/100/swiftui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Lộ trình khoá học (Hacking with Swift)
                    </Link>
                </div>
            </div>

        </div>
    );
}