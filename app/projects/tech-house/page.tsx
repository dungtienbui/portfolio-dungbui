import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Gallery from "@/app/components/gallery/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "TECH HOUSE (Next.js)", href: "/projects/tech-house" },
    ];

    const myImages = [
        {
            id: "1",
            src: '/projects/tech-house/app-web/cart.png',
            alt: 'Giao diện giỏ hàng',
            width: 1440,
            height: 900
        },
        {
            id: "2",
            src: '/projects/tech-house/app-web/checkout.png',
            alt: 'Giao diện thanh toán',
            width: 1440,
            height: 900
        },
        {
            id: "3",
            src: '/projects/tech-house/app-web/home.png',
            alt: 'Giao diện trang chủ',
            width: 1440,
            height: 900
        },
        {
            id: "4",
            src: '/projects/tech-house/app-web/login.png',
            alt: 'Giao diện đăng nhập',
            width: 1440,
            height: 900
        },
        {
            id: "5",
            src: '/projects/tech-house/app-web/order-detail-guest.png',
            alt: 'Giao diện chi tiết đơn hàng (khách)',
            width: 1440,
            height: 900
        },
        {
            id: "6",
            src: '/projects/tech-house/app-web/order-detail-user.png',
            alt: 'Giao diện chi tiết đơn hàng (người dùng)',
            width: 1440,
            height: 900
        },
        {
            id: "7",
            src: '/projects/tech-house/app-web/product-detail-review.png',
            alt: 'Giao diện chi tiết sản phẩm (phần đánh giá)',
            width: 1440,
            height: 900
        },
        {
            id: "8",
            src: '/projects/tech-house/app-web/product-detail-specs.png',
            alt: 'Giao diện chi tiết sản phẩm (phần thông số)',
            width: 1440,
            height: 900
        },
        {
            id: "9",
            src: '/projects/tech-house/app-web/product-detail.png',
            alt: 'Giao diện chi tiết sản phẩm',
            width: 1440,
            height: 900
        },
        {
            id: "10",
            src: '/projects/tech-house/app-web/track-order.png',
            alt: 'Giao diện theo dõi đơn hàng',
            width: 1440,
            height: 900
        },
        {
            id: "11",
            src: '/projects/tech-house/app-web/user-address.png',
            alt: 'Giao diện địa chỉ người dùng',
            width: 1440,
            height: 900
        },
        {
            id: "12",
            src: '/projects/tech-house/app-web/user-purchases.png',
            alt: 'Giao diện lịch sử mua hàng',
            width: 1440,
            height: 900
        },
    ];


    return (
        <div className="container m-auto pt-32 md:pt-24 space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    TECH HOUSE - Cửa hàng bán đồ điện tử
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    Next.js | React | TypeScript (Full-stack)
                </p>

                {/* --- Mô tả chung --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        "TECH HOUSE" là một dự án Next.js (Full-stack) về "Một cửa hàng bán đồ điện tử".
                    </p>
                    <p>
                        Dự án này được phát triển lại từ dự án
                        <Link
                            href="https://github.com/dungtienbui/LTWEB_TechHouse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
                        >
                            LTWEB_TechHouse
                        </Link>
                        - một dự án tương tự nhưng được lập trình bằng PHP.
                    </p>
                    <p>
                        <strong>Tiến độ hiện tại:</strong> Đã hoàn thành các chức năng chính cho Khách hàng và đang trong quá trình chuẩn bị hiện thực các chức năng cho Quản lý cửa hàng.
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
                <div className="flex flex-wrap gap-4 mb-12">
                    <Link
                        href="https://tech-house-nextjs.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Truy cập Demo Live
                    </Link>
                </div>


                {/* --- Tính năng chính --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Các tính năng chính
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-lg">
                    {/* Cột Khách hàng */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Dành cho Khách hàng</h3>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                Duyệt sản phẩm, lọc, tìm kiếm sản phẩm.
                            </li>
                            <li>
                                Xem thông tin của một sản phẩm cụ thể.
                            </li>
                            <li>
                                Mua sản phẩm (Quản lý giỏ hàng).
                            </li>
                            <li>
                                Kiểm tra hoá đơn hàng.
                            </li>
                        </ul>
                    </div>

                    {/* Cột Quản lý */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3  text-blue-600 dark:text-blue-400">Dành cho Quản lý</h3>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                Thêm, xoá, chỉnh sửa sản phẩm.
                            </li>
                            <li>
                                Kiểm tra đơn hàng.
                            </li>
                        </ul>
                    </div>
                </div>


                {/* --- Công nghệ sử dụng --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Công nghệ sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Frontend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Kiến trúc (Full-stack)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Next.js:</strong> Framework React full-stack.
                            </li>
                            <li>
                                <strong>React:</strong> Thư viện xây dựng giao diện người dùng.
                            </li>
                            <li>
                                <strong>API Routes:</strong> Xử lý logic backend trực tiếp trong Next.js.
                            </li>
                        </ul>
                    </div>

                    {/* Cột Deployment */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Triển khai (Deployment)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Vercel:</strong> Nền tảng cloud để deploy các ứng dụng Next.js.
                            </li>
                            <li>
                                <strong>Neon:</strong> Deploy database PostgreSQL.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Tài nguyên & Links --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên
                </h2>
                <p className="text-sm mb-6">Liên kết bên ngoài</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    {/* Nút chính */}
                    <Link
                        href="https://tech-house-nextjs.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Demo Live trên Vercel
                    </Link>

                    {/* Nút phụ */}
                    <Link
                        href="https://github.com/dungtienbui/tech-house-nextjs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source code (Next.js)
                    </Link>

                    {/* Nút phụ */}
                    <Link
                        href="https://github.com/dungtienbui/LTWEB_TechHouse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Dự án PHP gốc
                    </Link>
                </div>
            </div>

        </div>
    );
}