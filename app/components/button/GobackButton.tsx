'use client'

import { useRouter } from "next/navigation";

export const GobackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }
    return (
        <button
            type="button"
            onClick={handleClick}
            className=""
        >
            Trở về
        </button>
    )
}