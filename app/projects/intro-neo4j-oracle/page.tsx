import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Link from "next/link";

export default function Page() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "Oracle vs Neo4j (Healthcare)", href: "/projects/intro-neo4j-oracle" },
    ];


    return (
        <div className="container m-auto pt-32 md:pt-24 space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng để dễ đọc */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    So sánh Oracle và Neo4j: Ứng dụng Healthcare
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    Neo4j | React | Node.js
                </p>

                {/* --- Mô tả chung --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        Đây là dự án Bài tập nhóm trong môn học <strong>Hệ Quản trị Cơ sở Dữ liệu</strong>.
                    </p>
                    <p>
                        Dự án có hai mục tiêu chính:
                    </p>
                    <ol className="list-decimal list-inside pl-4">
                        <li>So sánh chi tiết giữa hai hệ thống quản trị cơ sở dữ liệu: <strong>Oracle (RDBMS)</strong> và <strong>Neo4j (Graph DBMS)</strong> về các khía cạnh lý thuyết như lưu trữ, quản lý dữ liệu và xử lý truy vấn.</li>
                        <li>Xây dựng một ứng dụng Web thực tế trong lĩnh vực <strong>Healthcare</strong> để quản lý bệnh viện (đặt lịch hẹn, quản lý bác sĩ, trạm xá...), sử dụng Neo4j làm CSDL chính để minh hoạ cho các ưu điểm của CSDL đồ thị trong domain có nhiều mối quan hệ phức tạp.</li>
                    </ol>
                    <p>
                        Trong dự án nhóm này, tôi chịu trách nhiệm:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            <strong>Lý thuyết:</strong> Thực hiện phần so sánh lý thuyết về <strong>Query Processing</strong> giữa Oracle và Neo4j.
                        </li>
                        <li>
                            <strong>Thực hành (phát triển sản phẩm demo):</strong>
                            <ul className="list-disc list-inside pl-6">
                                <li><strong>Quản lý Bác sĩ</strong> (CRUD, tìm kiếm, phân trang).</li>
                                <li><strong>Quản lý Trạm xá</strong> (CRUD).</li>
                                <li>Quản lý mối quan hệ Bác sĩ - Trạm xá (thêm/xoá bác sĩ khỏi trạm xá).</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Thuyết trình về Query Processing
                </h2>
                <div className="aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="h-full w-full" // Iframe chiếm 100%
                        src="https://www.youtube.com/embed/EVUcQtVqySo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* --- Tính năng chính --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Các tính năng chính trong dự án Web:
                </h2>
                <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                    <li>
                        <strong>Quản lý Bác sĩ (Doctors):</strong> Cung cấp giao diện CRUD, tìm kiếm theo tên, và phân trang danh sách bác sĩ. (Phần do tôi thực hiện)
                    </li>
                    <li>
                        <strong>Quản lý Trạm xá (Clinics):</strong> Cung cấp giao diện CRUD cho các trạm xá/phòng khám. (Phần do tôi thực hiện)
                    </li>
                    <li>
                        <strong>Quản lý Lịch hẹn:</strong> Cho phép bệnh nhân đặt lịch hẹn và bác sĩ quản lý (thay đổi trạng thái, xem lịch). Tự động gửi email nhắc nhở.
                    </li>
                    <li>
                        <strong>Quản lý Thuốc & Hóa đơn:</strong> Chức năng kê đơn thuốc, quản lý thuốc trong kho, và tạo/thanh toán hóa đơn khám chữa bệnh.
                    </li>
                    <li>
                        <strong>Thống kê & Báo cáo:</strong> Trực quan hóa dữ liệu lịch hẹn (thành công, thất bại) theo tháng và theo dõi doanh thu.
                    </li>
                </ul>

                {/* --- Công nghệ sử dụng --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Công nghệ sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Frontend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>React.js</li>
                            <li>CSS (Giao diện cơ bản)</li>
                        </ul>
                    </div>

                    {/* Cột Backend & Database */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Backend & Database</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Node.js/Express.js</li>
                            <li>Neo4j (Graph Database)</li>
                            <li>Cypher (Ngôn ngữ truy vấn đồ thị)</li>
                        </ul>
                    </div>
                </div>

                {/* --- Tài nguyên & Links --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên
                </h2>
                <p className="text-sm mb-6">Liên kết bên ngoài</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    {/* Nút chính - Giống nút "Xem dự án" */}

                    <Link
                        href="https://youtu.be/EVUcQtVqySo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Video Demo
                    </Link>

                    <Link
                        href="https://github.com/dungtienbui/Neo4j_front-end"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source code (Frontend)
                    </Link>

                    <Link
                        href="https://github.com/dungtienbui/Neo4j_back-end"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source code (Backend)
                    </Link>
                </div>
            </div>

        </div>
    );
}