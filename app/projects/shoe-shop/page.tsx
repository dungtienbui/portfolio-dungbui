import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "Shoe shop (FiveChickens)", href: "/projects/shoe-shop" },
    ];

    return (
        <div className="container m-auto pt-32 md:pt-24 space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    Online Shoe Shop Management System
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    HTML | CSS (Bootstrap) | JavaScript | PHP | MySQL
                </p>

                {/* --- Mô tả chung --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        "Online Shoe Shop Management System" là một dự án website thương mại điện tử (hoạt động theo mô hình B2C) được phát triển cho môn học "Đồ án tổng hợp - Hướng Công nghệ phần mềm (CO3103)" tại trường Đại học Bách khoa HCM.
                    </p>
                    <p>
                        Mục đích chính là xây dựng một hệ thống quản lý cửa hàng bán giày dép online, giúp khách hàng có thể dễ dàng mua sắm trực tuyến. Đồng thời, hệ thống cũng giúp doanh nghiệp quản lý được các đơn hàng và số lượng sản phẩm một cách chính xác, thay vì quản lý thủ công.
                    </p>
                    <p>
                        Trong dự án này, vai trò của tôi là thiết kế và phát triển các module
                        <strong> Quản lý Sản phẩm (Product Management)</strong> và
                        <strong> Quản lý Kho (Storehouse Management)</strong>.
                    </p>
                </div>

                {/* --- Demo --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Demo ứng dụng
                </h2>
                <div className="aspect-video mb-12">
                    <iframe
                        className="h-full w-full rounded-lg" // Thêm rounded-lg
                        src="https://www.youtube.com/embed/EaYfwPvVSvI"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* --- Tính năng chính --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Các tính năng chính
                </h2>
                <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                    <li>
                        <strong>Xác thực người dùng:</strong> Đăng ký và đăng nhập cho cả Khách hàng (Customer) và Quản lý (Manager).
                    </li>
                    <li>
                        <strong>(Khách hàng) Xem sản phẩm:</strong> Tìm kiếm, lọc (theo chủng loại, màu sắc, giá) và sắp xếp danh sách sản phẩm.
                    </li>
                    <li>
                        <strong>(Khách hàng) Quản lý giỏ hàng:</strong> Thêm sản phẩm (với màu sắc, kích thước) vào giỏ, điều chỉnh số lượng và tiến hành thanh toán.
                    </li>
                    <li>
                        <strong>(Khách hàng) Quản lý tài khoản:</strong> Chỉnh sửa thông tin cá nhân, quản lý địa chỉ và xem lịch sử, trạng thái đơn hàng.
                    </li>
                    <li>
                        <strong>(Quản lý) Quản lý Sản phẩm:</strong> Thêm, xóa, và cập nhật thông tin chi tiết của sản phẩm.
                    </li>
                    <li>
                        <strong>(Quản lý) Quản lý Danh mục:</strong> Tổ chức các loại sản phẩm (ví dụ: Hunter, Sandal, Giày Thể Thao).
                    </li>
                    <li>
                        <strong>(Quản lý) Quản lý Kho:</strong> Quản lý số lượng tồn kho theo từng màu sắc và kích thước cụ thể của sản phẩm.
                    </li>
                    <li>
                        <strong>(Quản lý) Quản lý Đơn hàng:</strong> Xem và xác nhận (thay đổi trạng thái) các đơn hàng từ khách hàng.
                    </li>
                </ul>

                {/* --- Công nghệ sử dụng --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Công nghệ sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Frontend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Giao diện (Frontend)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap (Framework CSS)</li>
                        </ul>
                    </div>

                    {/* Cột Backend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Hệ thống (Backend)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>PHP (Ngôn ngữ xử lý)</li>
                            <li>MySQL (Database)</li>
                            <li>Phát triển theo kiến trúc MVC</li>
                        </ul>
                    </div>
                </div>

                {/* --- Thiết kế hệ thống --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Thiết kế hệ thống
                </h2>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Sơ đồ Use-Case tổng quan của hệ thống Smart Garden.</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Sử dụng đường dẫn placeholder, thay thế bằng đường dẫn thực tế của bạn */}
                    <Image
                        src={"/projects/shoe-shop/use-case.png"}
                        alt={"Sơ đồ Use-Case của hệ thống"}
                        width={1600}
                        height={1001}
                        className="object-contain"
                    />
                </div>

                {/* --- Tài nguyên & Links --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên
                </h2>
                <p className="text-sm mb-6">Liên kết bên ngoài</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    {/* Nút chính */}
                    <Link
                        href="https://www.youtube.com/watch?v=EaYfwPvVSvI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Video Demo
                    </Link>

                    {/* Nút phụ */}
                    <Link
                        href="https://github.com/dungtienbui/Shoe-Shop-Management-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source code (GitHub)
                    </Link>

                    {/* Nút phụ - Giả sử bạn có link tới file PDF */}
                    <Link
                        href="https://github.com/dungtienbui/Shoe-Shop-Management-System/blob/main/Report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Báo cáo chi tiết (.pdf)
                    </Link>
                </div>
            </div>

        </div>
    );
}