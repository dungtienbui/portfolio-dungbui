// app/components/Navbar.tsx
import Link from 'next/link'
import { PageScrollProgressBarIndicator } from '../PageScrollProgressBarIndicator'
import { NavLinks } from './NavLinks'

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70">
            <div className="px-6 py-4">
                <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center min-h-8">
                    <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        TienDungBui
                    </Link>
                    <NavLinks />
                </div>
            </div>
            <PageScrollProgressBarIndicator />
        </nav>
    )
}