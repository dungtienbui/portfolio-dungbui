export const myProjects = [
    {
        title: "TECH HOUSE - Cửa hàng điện tử (Next.js)",
        description: "Dự án website (Full-stack) về 'Một cửa hàng bán đồ điện tử'. Dự án này phát triển lại từ một dự án PHP tương tự, sử dụng Next.js cho cả frontend và backend (API Routes).",
        tech: ["Next.js", "React", "TypeScript", "Vercel"],
        linkGithub: "https://github.com/dungtienbui/tech-house-nextjs",
        linkDemo: "https://tech-house-nextjs.vercel.app",
        linkPage: "/projects/tech-house",
        imageHref: "/projects/tech-house/wallpaper.png",
    },
    {
        title: "HomeService: Nền tảng Dịch vụ tại nhà (ĐATN)",
        description: "Dự án Đồ án tốt nghiệp (CO4337), xây dựng nền tảng 'HomeService' kết nối trực tiếp khách hàng với freelancer cho các dịch vụ tại nhà như dọn dẹp và trông trẻ. Hệ thống giải quyết sự thiếu linh hoạt của các mô hình công ty hiện tại, cho phép freelancer đăng ký dịch vụ (qua bài test nghiệp vụ) và khách hàng chủ động đăng việc, lựa chọn người làm.",
        tech: ["Java Spring Boot", "React Native", "ReactJS", "MySQL", "Docker", "Spring Security", "Redux Toolkit", "API Gateway"],
        linkGithub: "https://github.com/dungtienbui/HomeService_Backend",
        linkDemo: "https://youtu.be/xjj6rGnPYww",
        linkPage: "/projects/home-service",
        imageHref: "/projects/home-service/wallpaper.png",
    },
    {
        title: "MyFIT - Ứng dụng Theo dõi sức khoẻ cá nhân",
        description: "Dự án ứng dụng di động (Bài tập lớn) giúp người dùng theo dõi các chỉ số sức khỏe cá nhân như bước chân, calo, giấc ngủ và cân nặng. Ứng dụng được xây dựng bằng React Native (với Expo) cho frontend, kết nối với backend bằng NestJS (TypeScript).",
        tech: ["React Native", "Expo", "Redux Toolkit", "NestJS", "MongoDB", "TypeScript"],
        linkGithub: "https://github.com/dungtienbui/my-fit-mobile",
        linkDemo: "https://youtu.be/XupRC6AAEog",
        linkPage: "/projects/my-fit-mobile",
        imageHref: "/projects/my-fit-mobile/wallpaper.png",
    },
    {
        title: "Online Shoe Shop Management System",
        description: "Dự án website thương mại điện tử (Đồ án tổng hợp CO3103) xây dựng hệ thống quản lý cửa hàng bán giày dép online. Vai trò của tôi là thiết kế và phát triển các module Quản lý Sản phẩm (Product Management) và Quản lý Kho (Storehouse Management). Hệ thống cho phép khách hàng xem, lọc, đặt hàng và quản lý tài khoản, đồng thời cho phép admin quản lý sản phẩm, kho hàng và đơn hàng.",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"], // 
        linkGithub: "https://github.com/dungtienbui/Shoe-Shop-Management-System",
        linkDemo: "https://www.youtube.com/watch?v=EaYfwPvVSvI",
        linkPage: "/projects/shoe-shop",
        imageHref: "/projects/shoe-shop/wallpaper.png",
    },
    {
        title: "Khu Vườn Thông Minh (Smart Garden)",
        description: "Dự án Đồ án Đa ngành (CO3109) ứng dụng công nghệ IoT để xây dựng hệ thống vườn thông minh. Hệ thống cho phép giám sát môi trường (nhiệt độ, độ ẩm,...), điều khiển thiết bị (đèn, máy bơm), và tự động hóa dựa trên ngưỡng cài đặt. Vai trò của tôi là thiết kế cơ sở dữ liệu, thiết kế giao diện toàn bộ ứng dụng, và hiện thực chức năng cài đặt ngưỡng.",
        tech: ["React", "Node.js", "Express", "MySQL", "Sequelize", "Adafruit IO"],
        linkGithub: "https://github.com/dungtienbui/SmartGarden",
        linkDemo: null,
        linkPage: "/projects/smart-garden",
        imageHref: "/projects/smart-garden/wallpaper.png",
    },
    {
        title: "Hệ thống IoT Giám sát & Điều khiển Nông nghiệp",
        description: "Dự án ứng dụng IoT vào sản xuất nông nghiệp. Hệ thống sử dụng ESP32-S3 (Yolo UNO) để thu thập dữ liệu cảm biến (nhiệt độ, độ ẩm, ánh sáng) và gửi lên MQTT Broker (Adafruit IO) bằng RTOS. Một vi điều khiển ESP32-S3 khác host Web Server, giao tiếp với Modbus RTU 32-Ch Relay (qua RS-485) để điều khiển thiết bị, đồng thời cung cấp giao diện web cho người dùng giám sát (qua SSE) và điều khiển (qua WebSockets) theo thời gian thực.",
        tech: ["ESP32-S3", "C++", "PlatformIO", "RTOS", "WebSockets", "MQTT", "Modbus RTU"],
        linkGithub: "https://github.com/dungtienbui/ESP32-WEBSERVER",
        linkDemo: "https://www.youtube.com/shorts/pjBm00mJtkI",
        linkPage: "/projects/iot-esp32-s3",
        imageHref: "/projects/iot-esp32/wallpaper.png",
    },


];

export const myOtherProjects = [
    {
        title: "So sánh Oracle và Neo4j - Ứng dụng Healthcare",
        description: "Dự án Bài tập lớn môn Hệ Quản trị CSDL (CO3021). Dự án tập trung vào việc so sánh hai hệ CSDL (Oracle - RDBMS và Neo4j - Graph DBMS) và xây dựng một ứng dụng Healthcare sử dụng Neo4j để quản lý lịch hẹn, bác sĩ, và trạm xá.",
        tech: ["Neo4j", "React", "Node.js", "Cypher", "Express.js"],
        linkGithub: "https://github.com/dungtienbui/Neo4j_front-end",
        linkDemo: "https://youtu.be/EVUcQtVqySo",
        linkPage: "/projects/intro-neo4j-oracle",
        imageHref: "/projects/intro-neo4j-oracle/wallpaper.png",
    },
    {
        title: "Học Swift/SwiftUI (100 Days)",
        description: "Hành trình tự học iOS development với Swift và SwiftUI theo lộ trình '100 Days of SwiftUI' của Paul Hudson. Repository này ghi lại các dự án nhỏ, bài tập, và checkpoints xuyên suốt khoá học.",
        tech: ["Swift", "SwiftUI", "iOS", "Xcode"],
        linkGithub: "https://github.com/dungtienbui/Learn_swiftUI_in100daysOfSwiftUI",
        linkDemo: null,
        linkPage: "/projects/learning-swift-swiftui",
        imageHref: "/projects/learning-swift-swiftui/wallpaper.png",
    },
];