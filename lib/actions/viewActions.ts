// actions/viewActions.ts
'use server'; // Bắt buộc phải có dòng này để khai báo đây là Server Action

import { cookies } from 'next/headers';
import dbConnect from '../db/dbConnect';
import CounterModel from '../models/Counter';


// Cấu hình Cookie
const COOKIE_NAME = 'visited_landing_page';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 ngày

// Hàm chính: Lấy và Cập nhật số lượt truy cập duy nhất
export async function getAndUpdateViewCount() {
    await dbConnect();

    // 1. Lấy Cookie hiện tại
    const cookieStore = await cookies();
    const hasVisited = cookieStore.get(COOKIE_NAME);
    let finalCount: number;

    try {
        if (!hasVisited) {
            // 2a. Nếu CHƯA truy cập: Tăng số đếm trong MongoDB
            const updatedCounter = await CounterModel.findOneAndUpdate(
                { page: 'landing_page' },
                { $inc: { count: 1 } },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );

            finalCount = updatedCounter ? updatedCounter.count : 1;

            // 2b. Thiết lập Cookie mới
            const cookieOptions = {
                maxAge: COOKIE_MAX_AGE,
                expires: new Date(Date.now() + COOKIE_MAX_AGE * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                path: '/',
            };

            // Đặt cookie vào Header của Response
            cookieStore.set(COOKIE_NAME, 'true', cookieOptions);

        } else {
            // 3. Nếu ĐÃ truy cập: Chỉ lấy giá trị hiện tại
            const counter = await CounterModel.findOne({ page: 'landing_page' });
            finalCount = counter ? counter.count : 0;
        }

        return { count: finalCount };

    } catch (error) {
        console.error("Lỗi xử lý Server Action:", error);
        // Trả về số 0 nếu có lỗi xảy ra
        return { count: 0 };
    }
}