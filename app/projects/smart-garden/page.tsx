import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Gallery from "@/app/components/gallery/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "Smart Garden", href: "/projects/smart-garden" },
    ];

    const myImages = [
        {
            id: "3",
            src: '/projects/smart-garden/app-web/env-data.png',
            alt: 'Giao diện dữ liệu môi trường',
            width: 1440,
            height: 900
        },
        {
            id: "5",
            src: '/projects/smart-garden/app-web/login.png',
            alt: 'Trang đăng nhập',
            width: 1440,
            height: 900
        },
        {
            id: "2",
            src: '/projects/smart-garden/app-web/detail-env-data.png',
            alt: 'Chi tiết dữ liệu môi trường',
            width: 1440,
            height: 900
        },
        {
            id: "4",
            src: '/projects/smart-garden/app-web/log-op.png',
            alt: 'Nhật ký hoạt động',
            width: 1440,
            height: 900
        },
        {
            id: "6",
            src: '/projects/smart-garden/app-web/outthreshold.png',
            alt: 'Cảnh báo vượt ngưỡng',
            width: 1440,
            height: 900
        },
        {
            id: "8",
            src: '/projects/smart-garden/app-web/set-threshold.png',
            alt: 'Trang cài đặt ngưỡng',
            width: 1440,
            height: 900
        },
        {
            id: "7",
            src: '/projects/smart-garden/app-web/set-threshold-popup.png',
            alt: 'Popup cài đặt ngưỡng',
            width: 1440,
            height: 900
        },
        {
            id: "1",
            src: '/projects/smart-garden/app-web/control-device.png',
            alt: 'Giao diện điều khiển thiết bị',
            width: 1440,
            height: 900
        },
    ];

    return (
        <div className="container m-auto pt-32 md:pt-24 space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng */}
            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    Khu Vườn Thông Minh (Smart Garden)
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    React | Node.js | Express | MySQL | IoT (Adafruit)
                </p>

                {/* --- Mô tả chung --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        Smart Garden là dự án "Thực tập Đồ án Môn học Đa ngành", được xây dựng với mục tiêu ứng dụng công nghệ IoT vào nông nghiệp, nhằm giải quyết các thách thức do biến đổi khí hậu tại Việt Nam.
                    </p>
                    <p>
                        Hệ thống cho phép người dùng giám sát môi trường (nhiệt độ, độ ẩm đất, độ ẩm không khí, cường độ ánh sáng) và tự động hóa các tác vụ (như tưới tiêu, chiếu sáng). Dữ liệu từ các cảm biến được thu thập và quản lý thông qua server Adafruit IO và hiển thị trên một ứng dụng web trực quan.
                    </p>
                    <p>
                        Trong dự án này, vai trò của tôi là <strong>Thiết kế Cơ sở dữ liệu</strong>, <strong>Thiết kế Giao diện</strong> toàn bộ ứng dụng, và tham gia <strong>Hiện thực các chức năng chính</strong> như "Cài đặt ngưỡng" và "Ghi nhận lịch sử hoạt động của thiết bị".
                    </p>
                </div>

                {/* --- Gallery --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Một số hình ảnh của ứng dụng
                </h2>
                <div className="mb-12">
                    <Gallery
                        images={myImages}
                    />
                </div>

                {/* --- Tính năng chính --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Các tính năng chính
                </h2>
                <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                    <li>
                        <strong>Giám sát môi trường:</strong> Thu thập và hiển thị dữ liệu (nhiệt độ, độ ẩm đất, độ ẩm không khí, cường độ ánh sáng) theo thời gian thực từ các cảm biến.
                    </li>
                    <li>
                        <strong>Cảnh báo & Tự động hóa:</strong> Cho phép người dùng cài đặt giá trị ngưỡng (trên và dưới) cho các chỉ số môi trường. Hệ thống tự động bật/tắt đèn hoặc máy bơm khi giá trị thấp hơn ngưỡng, đồng thời gửi cảnh báo cho người dùng.
                    </li>
                    <li>
                        <strong>Điều khiển thủ công:</strong> Cho phép người dùng bật/tắt các thiết bị (đèn, máy bơm) từ xa thông qua giao diện ứng dụng web.
                    </li>
                    <li>
                        <strong>Quản lý lịch sử:</strong> Tự động ghi nhận và cho phép truy xuất lịch sử hoạt động của các thiết bị (bật/tắt bởi ai, khi nào).
                    </li>
                    <li>
                        <strong>Thống kê & Báo cáo:</strong> Thống kê lịch sử vượt ngưỡng và lịch sử hoạt động, trực quan hóa dữ liệu qua biểu đồ và cho phép tìm kiếm, lọc dữ liệu.
                    </li>
                </ul>

                {/* --- Công nghệ sử dụng --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Công nghệ sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Frontend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Web App (Frontend)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>React (Xây dựng giao diện người dùng)</li>
                            <li>React Hooks (Quản lý state và logic)</li>
                            <li>React Router (Điều hướng trang)</li>
                            <li>Axios (Thực hiện gọi API)</li>
                        </ul>
                    </div>

                    {/* Cột Backend & IoT */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Backend & IoT</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Node.js (Môi trường runtime)</li>
                            <li>Express (Xây dựng máy chủ web và API)</li>
                            <li>MySQL (Cơ sở dữ liệu quan hệ)</li>
                            <li>Sequelize (ORM để tương tác với MySQL)</li>
                            <li>Adafruit IO (IoT Server để nhận/gửi dữ liệu)</li>
                        </ul>
                    </div>
                </div>

                {/* --- Thiết kế hệ thống --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Thiết kế hệ thống
                </h2>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Sơ đồ Use-Case tổng quan của hệ thống Smart Garden.</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Thay thế bằng đường dẫn thực tế tới ảnh */}
                    <Image
                        src={"/projects/smart-garden/use-case.png"}
                        alt={"Sơ đồ Use-Case tổng quan của hệ thống Smart Garden"}
                        width={892}
                        height={916}
                        className="object-contain"
                    />
                </div>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Kiến trúc hệ thống.</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Thay thế bằng đường dẫn thực tế tới ảnh */}
                    <Image
                        src={"/projects/smart-garden/architecture.png"}
                        alt={"Sơ đồ Use-Case tổng quan của hệ thống Smart Garden"}
                        width={700}
                        height={256}
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
                        href="https://github.com/dungtienbui/SmartGarden"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Source code (GitHub)
                    </Link>

                    {/* Nút phụ */}
                    <Link
                        href="https://drive.google.com/file/d/1uYFaFd5FTJRrhK7zxffw_Wh_aFeR3lX-/view?usp=share_link"
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