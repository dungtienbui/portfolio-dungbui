import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

// Khai báo kiểu cho Breadcrumb
interface BreadcrumbItem {
    label: string;
    href: string;
}

/**
 * Trang chi tiết cho Đồ án Tốt nghiệp:
 * "Hệ thống kết nối Freelancer cung cấp dịch vụ tại nhà với khách hàng"
 * (Bùi Tiến Dũng - 2113055)
 */
export default function Page(): React.ReactElement {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "HomeService (ĐATN)", href: "/projects/home-service" },
    ];

    return (
        <div className="container m-auto space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng để dễ đọc */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    HomeService: Nền tảng kết nối Freelancer
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    React Native | Java Spring Boot | ReactJS | MySQL | Docker
                </p>

                {/* --- Mô tả chung --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        HomeService là dự án Đồ án tốt nghiệp (CO4337) của tôi và các thành viên (Nguyễn Đại Tiến, Nguyễn Trương Phước Thọ) tại trường Đại học Bách khoa HCM.
                    </p>
                    <p>
                        Dự án đưa ra một giải pháp áp dụng công nghệ thông tin vào lĩnh vực dịch vụ giúp việc tại nhà theo giờ. Kết quả là <strong>HomeService ra đời</strong>, tạo điều kiện kết nối khách hàng và người tìm việc. Khách hàng dễ dàng đăng việc, tìm kiếm người làm phù hợp với nhu cầu. Ngược lại, người giúp việc cũng có thể linh động lựa chọn công việc phù hợp với điều kiện bản thân. Ở đây, HomeService sẽ là một <strong>nền tảng kết nối trực tiếp</strong> giữa khách hàng và các freelancer, ban đầu tập trung vào hai dịch vụ chính là <strong>Dọn dẹp nhà</strong> và <strong>Trông trẻ</strong>.
                    </p>
                    <p>
                        Vai trò của nhóm là thực hiện toàn bộ quy trình phát triển phần mềm: từ khảo sát, phân tích, thiết kế, hiện thực, kiểm thử (Unit, Integration, E2E) và triển khai hoàn chỉnh hệ thống.
                    </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Demo ứng dụng
                </h2>
                <div className="aspect-video mb-12">
                    <iframe
                        className="h-full w-full" // Iframe chiếm 100%
                        src="https://www.youtube.com/embed/xjj6rGnPYww?si=zbPQXvwMxVLnGnt7"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* --- Tính năng chính --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Các tính năng chính
                </h2>
                <div className="space-y-8 mb-12">
                    {/* Tính năng Khách hàng */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">Dành cho Khách hàng</h3>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Đăng việc linh hoạt:</strong> Cho phép khách hàng đăng tải công việc (Dọn dẹp, Trông trẻ) với các thông tin chi tiết như lịch làm việc, số giờ, diện tích, số lượng trẻ, và ghi chú.
                            </li>
                            <li>
                                <strong>Tính giá tự động:</strong> Hệ thống tự động tính toán chi phí dựa trên các thông số công việc.
                            </li>
                            <li>
                                <strong>Chủ động lựa chọn:</strong> Khách hàng có thể tự tìm và gửi yêu cầu trực tiếp đến Freelancer cụ thể mà mình mong muốn.
                            </li>
                            <li>
                                <strong>Quản lý và Đánh giá:</strong> Theo dõi trạng thái đơn hàng (đã tạo, đang làm, hoàn thành) và đánh giá Freelancer sau khi hoàn thành công việc.
                            </li>
                        </ul>
                    </div>

                    {/* Tính năng Freelancer */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3  text-blue-700 dark:text-blue-400">Dành cho Freelancer</h3>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Đăng ký dịch vụ:</strong> Freelancer có thể đăng ký để cung cấp một hoặc nhiều dịch vụ có sẵn trên hệ thống.
                            </li>
                            <li>
                                <strong>Kiểm tra năng lực:</strong> Để được duyệt cung cấp một dịch vụ mới, Freelancer bắt buộc phải hoàn thành và vượt qua một bài kiểm tra (test) về nghiệp vụ của dịch vụ đó.
                            </li>
                            <li>
                                <strong>Nhận việc chủ động:</strong> Có thể xem danh sách các công việc được đăng công khai (lọc theo khu vực, loại dịch vụ) hoặc chấp nhận các yêu cầu được gửi trực tiếp từ khách hàng.
                            </li>
                            <li>
                                <strong>Quản lý tài chính:</strong> Cho phép Freelancer theo dõi số dư và thực hiện rút tiền về tài khoản ngân hàng của mình.
                            </li>
                        </ul>
                    </div>

                    {/* Tính năng Admin */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3  text-blue-700 dark:text-blue-400">Dành cho Quản trị viên</h3>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Xét duyệt Freelancer:</strong> Chức năng quan trọng nhất là xem xét và phê duyệt các đơn đăng ký cung cấp dịch vụ của Freelancer, dựa trên kết quả bài kiểm tra và thông tin họ cung cấp.
                            </li>
                            <li>
                                <strong>Quản lý người dùng:</strong> Toàn quyền xem, tìm kiếm, lọc, và quản lý (khoá/mở khoá) tài khoản của cả Khách hàng và Freelancer.
                            </li>
                            <li>
                                <strong>Quản lý dịch vụ:</strong> Cấu hình các dịch vụ có trong hệ thống, bao gồm mô tả, hình ảnh, và cả các bài test nghiệp vụ đi kèm.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Công nghệ sử dụng --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Kiến trúc & Công nghệ sử dụng
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Frontend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Frontend (Mobile & Web)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>React Native:</strong> Xây dựng ứng dụng di động cross-platform cho Khách hàng và Freelancer.</li>
                            <li><strong>ReactJS:</strong> Xây dựng trang Web Admin cho Quản trị viên.</li>
                            <li><strong>Redux Toolkit & RTK Query:</strong> Quản lý state và cache dữ liệu API hiệu quả.</li>
                        </ul>
                    </div>

                    {/* Cột Backend */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Backend</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Java Spring Boot 3:</strong> Xây dựng toàn bộ hệ thống API RESTful, xử lý logic nghiệp vụ.</li>
                            <li><strong>MySQL:</strong> Cơ sở dữ liệu quan hệ để lưu trữ toàn bộ dữ liệu.</li>
                        </ul>
                    </div>

                    {/* Dịch vụ bên thứ 3 */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Tích hợp Dịch vụ bên thứ 3</h3>
                        <ul className="list-disc list-inside space-y-2 mb-12">
                            <li><strong>Google Authentication:</strong> Xác thực người dùng qua tài khoản Google.</li>
                            <li><strong>Google Maps API:</strong> Xử lý địa chỉ, vị trí và gợi ý công việc lân cận.</li>
                            <li><strong>PayOS & BankHub:</strong> Tích hợp cổng thanh toán, nạp tiền (PayOS) và rút tiền (BankHub).</li>
                            <li><strong>Firebase:</strong> Gửi thông báo đẩy (Push Notifications).</li>
                            <li><strong>VietQR:</strong> Xác thực thông tin tài khoản ngân hàng.</li>
                        </ul>
                    </div>

                    {/*  DevOps */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">DevOps</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Expo:</strong> Hỗ trợ build và triển khai ứng dụng mobile.</li>
                            <li><strong>Docker:</strong> Đóng gói ứng dụng Spring Boot để đảm bảo tính nhất quán khi triển khai.</li>
                            <li><strong>Render:</strong> Triển khai Backend (đã được Docker hóa).</li>
                            <li><strong>Vercel:</strong> Triển khai trang Web Admin (ReactJS).</li>
                            <li><strong>Aiven Cloud:</strong> Dịch vụ cloud hosting cho cơ sở dữ liệu MySQL.</li>
                        </ul>
                    </div>

                </div>


                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Sơ đồ sử dụng công nghệ hiện thực.</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Sử dụng đường dẫn placeholder, thay thế bằng đường dẫn thực tế của bạn */}
                    <Image
                        src={"/projects/home-service/implementation-architecture.png"}
                        alt={"Sơ đồ usecase của ứng dụng"}
                        width={13692}
                        height={8400}
                        className="object-contain"
                    />
                </div>

                {/* --- Thiết kế hệ thống --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Thiết kế hệ thống
                </h2>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Sơ đồ Use-Case tổng quan của hệ thống.</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Sử dụng đường dẫn placeholder, thay thế bằng đường dẫn thực tế của bạn */}
                    <Image
                        src={"/projects/home-service/use-case.png"}
                        alt={"Sơ đồ Use-Case của hệ thống"}
                        width={5204}
                        height={4124}
                        className="object-contain"
                    />
                </div>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Screen flow của Quản trị viên.</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Sử dụng đường dẫn placeholder, thay thế bằng đường dẫn thực tế của bạn */}
                    <Image
                        src={"/projects/home-service/screen-flow-admin.png"}
                        alt={"Screenflow of admin"}
                        width={700}
                        height={498}
                        className="object-contain"
                    />
                </div>
                <p className="mb-6 text-lg font-bold text-gray-600 dark:text-gray-400">Screen flow của Người dùng (freelancer + khách hàng).</p>
                <div className="mb-12 rounded-lg shadow-sm overflow-clip bg-white p-4">
                    {/* Sử dụng đường dẫn placeholder, thay thế bằng đường dẫn thực tế của bạn */}
                    <Image
                        src={"/projects/home-service/screen-flow-mobile.jpg"}
                        alt={"Screenflow of user (freelancers and customers)"}
                        width={937}
                        height={684}
                        className="object-contain"
                    />
                </div>


                {/* --- Tài nguyên & Links --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên & Sản phẩm
                </h2>
                <p className="text-sm mb-6">Liên kết đến sản phẩm, tài liệu thiết kế và mã nguồn</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    <Link
                        href="https://home-service-admin.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Trang Web Admin (Live)
                    </Link>

                    <Link
                        href="https://www.figma.com/design/1nmSnbPNIkGeupGsE0J1tf/HomeService"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Thiết kế (Figma)
                    </Link>

                    <Link
                        href="https://home-service-backend-v1.onrender.com/swagger-ui/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        API Docs (Swagger)
                    </Link>

                    <Link
                        href="https://github.com/dungtienbui/HomeService-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source Code (Mobile)
                    </Link>

                    <Link
                        href="https://github.com/tien2114988/HomeService-admin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source Code (Admin)
                    </Link>

                    <Link
                        href="https://github.com/dungtienbui/HomeService-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source Code (Backend)
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/108b0ay0d1nmcBNRAtOnCsTUEy9mYMnsk/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Báo cáo (Report)
                    </Link>
                </div>
            </div>
        </div>
    );
}
