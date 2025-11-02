// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                // Tạo keyframe để xoay theo trục Y
                spinY: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
            },
            animation: {
                // Tạo class animation 'animate-spin-y-slow'
                'spin-y-slow': 'spinY 10s linear infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
export default config