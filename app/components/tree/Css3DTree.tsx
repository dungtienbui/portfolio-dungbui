// components/Css3DTree.js

const Css3DTree = () => {
    // Component nội bộ cho một "mặt" của cây (2D)
    // Chúng ta sẽ dùng 2 "mặt" này để tạo ảo ảnh 3D
    const TreePlane = () => (
        <>
            {/* Tán lá: Dùng mẹo CSS border để tạo hình tam giác */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-60 border-l-transparent border-r-60 border-r-transparent border-b-150 border-b-green-600"
            ></div>
            <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-60 border-l-transparent border-r-60 border-r-transparent border-b-150 border-b-green-600"
            ></div>
            <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-60 border-l-transparent border-r-60 border-r-transparent border-b-150 border-b-green-600"
            ></div>

            {/* Thân cây */}
            <div
                className="
          absolute top-[150px] left-1/2 -translate-x-1/2 
          w-8 h-20 bg-yellow-900
        "
            ></div>
            <div className="absolute top-[150px] rotate-z-30 w-72 h-72 border border-amber-800 rounded-full"></div>
        </>
    );

    return (
        // 1. Vùng chứa (Scene) - Tạo "camera"
        // [perspective:1000px] là thuộc tính quan trọng nhất để bật 3D
        <div className="w-full h-96 flex justify-center items-center perspective-[1000px]">

            {/* 2. Sân khấu (Stage) - Chứa vật thể 3D */}
            {/*
        - 'transform-style-preserve-3d': Bắt buộc, để các phần tử con giữ vị trí 3D
        - 'animate-spin-y-slow': Áp dụng animation đã tạo ở trên
        - [transform:rotateX(-10deg)]: Hơi nghiêng cây về phía sau một chút cho đẹp
        - w-[120px] h-[230px]: Kích thước khớp với cây
      */}
            <div
                className="relative w-[120px] h-[230px] transform-style-preserve-3d animate-spin-y-slow ransform-[rotateX(-10deg)]"
            >
                {/* 3. Vật thể (Object) */}

                {/* Mặt cây 1 (mặt phẳng 0 độ) */}
                <div className="absolute inset-0 transform-style-preserve-3d backface-hidden transform-[rotateY(0deg)]">
                    <TreePlane />
                </div>

                {/* Mặt cây 2 (xoay 90 độ, cắt vuông góc mặt 1) */}
                <div className="absolute inset-0 transform-style-preserve-3d backface-hidden transform-[rotateY(90deg)]">
                    <TreePlane />
                </div>

            </div>
        </div>
    );
};

export default Css3DTree;