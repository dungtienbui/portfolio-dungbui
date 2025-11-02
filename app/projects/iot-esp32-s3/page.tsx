import { BreadCrumb } from "@/app/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

// Khai báo kiểu rõ ràng cho TypeScript
interface BreadcrumbItem {
    label: string;
    href: string;
}

/**
 * Trang chi tiết dự án "Hệ thống IoT Giám sát & Điều khiển Nông nghiệp"
 * Showcase cho dự án thực tập (Tuần 6-8)
 */
export default function Page(): React.ReactElement {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: "Trang chủ", href: "/" },
        { label: "Dự án", href: "/projects" },
        { label: "IoT ESP32-S3", href: "/projects/iot-esp32-s3" },
    ];

    const myImages = [
        {
            id: "1",
            src: '/projects/iot-esp32/app-web/desktop/add-relay.png',
            alt: 'Giao diện Thêm Relay (Desktop)'
        },
        {
            id: "2",
            src: '/projects/iot-esp32/app-web/desktop/control-relay.png',
            alt: 'Giao diện Điều khiển Relay (Desktop)'
        },
        {
            id: "3",
            src: '/projects/iot-esp32/app-web/desktop/env-monitor.png',
            alt: 'Giao diện Giám sát Môi trường (Desktop)'
        },
        {
            id: "4",
            src: '/projects/iot-esp32/app-web/mobile/add-relay.png',
            alt: 'Giao diện Thêm Relay (Mobile)'
        },
        {
            id: "5",
            src: '/projects/iot-esp32/app-web/mobile/control-relay.png',
            alt: 'Giao diện Điều khiển Relay (Mobile)'
        },
        {
            id: "6",
            src: '/projects/iot-esp32/app-web/mobile/env-monitor.png',
            alt: 'Giao diện Giám sát Môi trường (Mobile)'
        },
        {
            id: "7",
            src: '/projects/iot-esp32/wallpaper.png',
            alt: 'Hình nền dự án IoT ESP32'
        },
    ]

    return (
        <div className="container m-auto space-y-10 text-gray-900 dark:text-gray-100">
            <BreadCrumb items={breadcrumbItems} />

            {/* Container chính, căn giữa và giới hạn chiều rộng */}
            <div className="max-w-4xl mx-auto px-4 pb-16">

                {/* --- Tiêu đề dự án --- */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    Hệ thống IoT Giám sát & Điều khiển Nông nghiệp
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
                    ESP32-S3 (RTOS) | MQTT | Modbus RTU | Web Server
                </p>

                {/* --- Mô tả chung (Từ Báo cáo) --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Tổng quan dự án
                </h2>
                <div className="max-w-none space-y-4 mb-12">
                    <p>
                        Đây là dự án tổng kết trong bài lab IoT kì hè. Mục tiêu là xây dựng một hệ thống IoT hoàn chỉnh cho nông nghiệp, áp dụng tất cả các kiến thức đã học về IoT.
                    </p>
                    <p>
                        Hệ thống có khả năng thu thập dữ liệu môi trường (nhiệt độ, độ ẩm, ánh sáng, độ ẩm đất) và cho phép người dùng giám sát, điều khiển các thiết bị (như máy bơm, đèn) từ xa thông qua giao diện Web Server được host trực tiếp trên chính vi điều khiển.
                    </p>
                    <p>
                        Trong dự án này, vai trò của tôi là lập trình viên chính, chịu trách nhiệm phát triển firmware cho cả node cảm biến (RTOS, MQTT) và node điều khiển (Web Server, Modbus, WebSockets).
                    </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Demo sản phẩm
                </h2>
                <div className="aspect-video mb-12">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/pjBm00mJtkI"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* --- Giao diện Web Server (Từ Hình 31, 32 trong báo cáo) --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Giao diện Web Server
                </h2>
                <p className="mb-6 text-lg">
                    Giao diện được host trực tiếp trên ESP32-S3 (Yolo UNO) bằng thư viện <code>ESPAsyncWebServer</code>. Dữ liệu được cập nhật thời gian thực mà không cần tải lại trang:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
                    <li>
                        <strong>Server-Sent Events (SSE):</strong> Tự động cập nhật giá trị cảm biến mới nhất từ MQTT lên trang &quot;Monitor&quot;.
                    </li>
                    <li>
                        <strong>WebSockets:</strong> Đồng bộ trạng thái bật/tắt của các Relay trên trang &quot;Control&quot; giữa nhiều client đang truy cập.
                    </li>
                </ul>

                {/* Hình ảnh Demo 1 (Hình 31) */}
                <div className="mb-10 rounded-lg shadow-sm overflow-clip">
                    <Image
                        src={"/projects/iot-esp32/app-web/desktop/env-monitor.png"}
                        alt={"Giao diện Giám sát Môi trường (Desktop)"}
                        width={2880}
                        height={1634}
                        className="w-full"
                    />
                    <p className="p-3 text-center bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                        Giao diện trang Giám sát (Monitor) hiển thị dữ liệu cảm biến.
                    </p>
                </div>

                {/* Hình ảnh Demo 2 (Hình 32) */}
                <div className="mb-12 rounded-lg shadow-sm overflow-clip">
                    <Image
                        src={"/projects/iot-esp32/app-web/desktop/control-relay.png"}
                        alt={"Giao diện Điều khiển Relay (Desktop)"}
                        width={2880}
                        height={1634}
                        className="w-full"
                    />
                    <p className="p-3 text-center bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                        Giao diện trang Điều khiển (Control) các Relay.
                    </p>
                </div>

                <div className="mb-12 rounded-lg shadow-sm bg-white dark:bg-gray-700">
                    <div className="flex flex-row gap-2 p-1 md:p-5">
                        <Image
                            src={"/projects/iot-esp32/app-web/mobile/env-monitor.png"}
                            alt={"Giao diện Giám sát Môi trường (Mobile)"}
                            width={750}
                            height={1334}
                            className="rounded-lg overflow-clip border-2 border-gray-200 dark:border-gray-400"
                        />
                        <Image
                            src={"/projects/iot-esp32/app-web/mobile/control-relay.png"}
                            alt={"Giao diện Điều khiển Relay (mobile)"}
                            width={750}
                            height={1334}
                            className="rounded-lg overflow-clip border-2 border-gray-200 dark:border-gray-400"
                        />
                        <Image
                            src={"/projects/iot-esp32/app-web/mobile/add-relay.png"}
                            alt={"Giao diện Thêm Relay (Mobile)"}
                            width={750}
                            height={1334}
                            className="rounded-lg overflow-clip border-2 border-gray-200 dark:border-gray-400"
                        />
                    </div>
                    <p className="p-3 text-center bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                        Giao diện web trên điện thoại (Responsive).
                    </p>
                </div>


                {/* --- Công nghệ sử dụng (giống cấu trúc MyFit) --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Công nghệ sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Cột Embedded */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Embedded (Firmware)</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>PlatformIO IDE (vscode)</li>
                            <li>Board Yolo UNO (ESP32-S3)</li>
                            <li>FreeRTOS (Lập trình đa nhiệm RTOS)</li>
                            <li>Modbus RTU (Giao tiếp RS-485 với 32-Ch Relay Module)</li>
                            <li>Cảm biến: DHT20, Ánh sáng, Độ ẩm đất</li>
                        </ul>
                    </div>

                    {/* Cột Web/Network */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Web & Network</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>ESPAsyncWebServer (Host web server)</li>
                            <li>MQTT (Pub/Sub với Adafruit IO)</li>
                            <li>WebSockets (Đồng bộ điều khiển)</li>
                            <li>Server-Sent Events (SSE - Cập nhật cảm biến)</li>
                            <li>HTML / CSS / JavaScript (Giao diện)</li>
                            <li>C++ (Webserver)</li>
                        </ul>
                    </div>
                </div>

                {/* --- Kiến trúc hệ thống --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Kiến trúc hệ thống
                </h2>
                <p className="mb-5 text-lg font-bold text-gray-600 dark:text-gray-400">Mô hình 2 Node ESP32-S3</p>
                <div className="max-w-none space-y-4 mb-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p>
                        Hệ thống được thiết kế với 2 vi điều khiển ESP32-S3 (Yolo UNO) riêng biệt để phân chia tác vụ:
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                        <li>
                            <strong>Node Cảm Biến (Sensor Node):</strong> Chạy RTOS với các task riêng biệt cho từng cảm biến. Định kỳ thu thập dữ liệu và <strong>Publish</strong> lên các feed của Adafruit IO qua giao thức MQTT.
                        </li>
                        <li>
                            <strong>Node Điều Khiển (Control Node / Web Server):</strong> Đặt trong tủ điện, <strong>Subscribe</strong> dữ liệu từ Adafruit IO. Đồng thời, host một <strong>Async Web Server</strong>, giao tiếp với Modbus Relay Module (qua RS-485) và giao tiếp với client (trình duyệt) qua WebSockets/SSE.
                        </li>
                    </ul>
                </div>

                {/* --- Tài nguyên & Links (Từ Báo cáo) --- */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tài nguyên
                </h2>
                <p className="text-sm mb-6">Liên kết bên ngoài</p>
                <div className="flex flex-wrap gap-4 mb-12">
                    {/* Nút chính */}
                    <Link
                        href="https://github.com/dungtienbui/ESP32-WEBSERVER"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Source Code (Web Server)
                    </Link>

                    {/* Nút phụ */}
                    <Link
                        href="https://github.com/dungtienbui/ESP32-WEBSERVER/tree/f27f833f0af458cb1afb2c67373771386bfa78b8/ESP32_MQTT_SENSOR%20-%20Update"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Source Code (Sensor Node)
                    </Link>
                    <Link
                        href="https://www.youtube.com/shorts/pjBm00mJtkI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        Video Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}
