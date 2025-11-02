import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })

export const momo_signature = localFont({
    src: './Momo_Signature/MomoSignature-Regular.ttf',
    display: 'swap',
})
