import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "MyFit (MobileApp)", href: "/projects/my-fit-mobile" },
    ];


    return (
        <div className="container m-auto pt-32 md:pt-24 space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng để dễ đọc */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    MyFIT: Ứng dụng Theo dõi sức khoẻ
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    React Native | NestJS | MongoDB
                </p>

                {/* --- Mô tả chung --- */}
                {/* Sử dụng thẻ <h2> bạn đã cung cấp */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        MyFIT là một dự án ứng dụng di động được phát triển cho bạn tập nhóm ở môn học "Phát triển Ứng dụng trên Thiết bị Di động (CO3043)" tại trường Đại học Bách khoa HCM.
                    </p>
                    <p>
                        Mục đích chính là xây dựng một công cụ đồng hành, giúp người dùng dễ dàng theo dõi, quản lý và kiểm soát các chỉ số sức khỏe cá nhân, thay thế cho việc ghi chép thủ công tốn thời gian.
                    </p>
                    <p>
                        Trong dự án này, vai trò của tôi là <strong>Leader</strong> của nhóm, thiết kế, điều phối và tham gia phát triển các tính năng chính .
                    </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Demo ứng dụng
                </h2>
                <div className="aspect-video mb-12">
                    <iframe
                        className="h-full w-full" // Iframe chiếm 100%
                        src="https://www.youtube.com/embed/XupRC6AAEog"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        allowFullScreen
                    ></iframe>
                </div>

                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Poster cho ứng dụng</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip">
                    <Image
                        src={"/projects/my-fit-mobile/poster.png"}
                        alt={"Thiết kế kiến trúc của hệ thống"}
                        width={1587}
                        height={2245}
                    />
                </div>
                {/* --- Tính năng chính --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Các tính năng chính
                </h2>
                <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                    <li>
                        <strong>Quản lý thông tin cá nhân:</strong> Cho phép người dùng lưu trữ và chỉnh sửa thông tin (tuổi, giới tính, chiều cao, cân nặng).
                    </li>
                    <li>
                        <strong>Theo dõi chỉ số hàng ngày:</strong> Tự động đếm bước chân và cho phép người dùng nhập thủ công lượng calo, giờ ngủ, và cân nặng.
                    </li>
                    <li>
                        <strong>Thiết lập mục tiêu:</strong> Người dùng có thể đặt mục tiêu (số bước, cân nặng, giấc ngủ) và theo dõi tiến độ qua dashboard.
                    </li>
                    <li>
                        <strong>Trực quan hóa dữ liệu:</strong> Hiển thị lịch sử và xu hướng sức khỏe qua các biểu đồ (Tính năng này được ghi chú là "chưa hoàn thành" trong phiên bản MVP).
                    </li>
                </ul>

                {/* --- Công nghệ sử dụng --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Công nghệ sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Frontend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Mobile App (Frontend)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>React Native</li>
                            <li>Expo</li>
                            <li>Redux Toolkit (Quản lý state)</li>
                        </ul>
                    </div>

                    {/* Cột Backend & DevOps */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Backend & DevOps</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>NestJS (Node.js, TypeScript)</li>
                            <li>MongoDB (Database)</li>
                            <li>MongoDB Atlas (Deploy DB)</li>
                            <li>Render (Deploy Backend)</li>
                            <li>Sentry (Giám sát lỗi)</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Thiết kế hệ thống
                </h2>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Kiến trúc hệ thống</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip">
                    <Image
                        src={"/projects/my-fit-mobile/architecture.png"}
                        alt={"Thiết kế kiến trúc của hệ thống"}
                        width={1961}
                        height={721}
                    />
                </div>

                {/* --- Tài nguyên & Links --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên
                </h2>
                <p className="text-sm mb-6">Liên kết bên ngoài</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    {/* Nút chính - Giống nút "Xem dự án" */}

                    <Link
                        href="https://youtu.be/XupRC6AAEog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Video Demo
                    </Link>

                    <Link
                        href="https://github.com/dungtienbui/my-fit-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source code (Mobile)
                    </Link>

                    <Link
                        href="https://github.com/dungtienbui/my-fit-webservice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source code (Webservice)
                    </Link>

                    {/* Nút phụ - Giống nút "Tải CV" */}
                    <Link
                        href="https://www.behance.net/gallery/224003853/Personal-Health-Tracking-App-MyFIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Showcase (Behance)
                    </Link>

                    <Link
                        href="https://drive.google.com/file/d/1-HcyowByU3k948NIIauCAKmEhH2BcaTO/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Poster
                    </Link>
                    <Link
                        href="https://www.figma.com/design/7XqMMT0mAhirM4dgv4J6sm/MobileApp---MyFIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Thiết kế (Figma)
                    </Link>
                </div>
            </div>

        </div>
    );
}