import Link from "next/link"
import { ThemeSwitcher } from "../ThemeSwitcher"
import clsx from "clsx"
import { AnimateOnMountDiv } from "../animate/AnimateOnMountDiv";
import { LinkCustom } from "./LinkCustom";


const navLinks = [
    { href: '#about', label: 'Về tôi' },
    { href: '#skills', label: 'Kỹ năng' },
    { href: '#projects', label: 'Dự án' },
    { href: '#contact', label: 'Liên hệ' },
];

export const NavLinks = () => {

    return (

        <div className="flex items-center space-x-4">
            <AnimateOnMountDiv
                options={
                    {
                        initial: { opacity: 0, x: -50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.8 },
                    }
                }
                className="flex items-center space-x-4"
            >
                {navLinks.map((link) => {
                    const id = link.href.substring(1);
                    return (
                        <LinkCustom
                            key={id}
                            href={link.href}
                            label={link.label}
                        />
                    );
                })}
            </AnimateOnMountDiv>
            <AnimateOnMountDiv
                options={
                    {
                        initial: { opacity: 0, x: 50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.8 },
                    }
                }
            >
                <ThemeSwitcher />
            </AnimateOnMountDiv>
        </div>
    )
}