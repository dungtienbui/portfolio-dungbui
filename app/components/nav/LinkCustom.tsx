'use client'

import clsx from "clsx"
import Link from "next/link";
import { usePathname } from "next/navigation"

export const LinkCustom = ({ href, label }: { href: string, label: string }) => {

    const pathname = usePathname();

    if (pathname === "/") {
        return (
            <a
                href={href}
                className={clsx(
                    "hover:text-blue-600 transition-colors",
                )}
            >
                {label}
            </a>
        )
    }

    return (
        <Link
            href={`/${href}`}
            className={clsx(
                "hover:text-blue-600 transition-colors",
            )}
        >
            {label}
        </Link>
    )

}