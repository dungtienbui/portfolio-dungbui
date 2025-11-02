import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import Link from "next/link";
import { ForwardRefExoticComponent, SVGProps, RefAttributes, JSX } from "react";

export const ContactCard = ({ link }: {
    link: ({
        name: string;
        value: string;
        href: string;
        icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
            title?: string;
            titleId?: string;
        } & RefAttributes<SVGSVGElement>>;
    } | {
        name: string;
        value: string;
        href: string;
        icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    })
}) => {
    return (
        <Link
            href={link.href}
            target={link.name === "Email" || link.name === "Phone" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-all group"
        >
            <div className='flex items-center'>
                <link.icon className="w-8 h-8 mr-5 text-blue-400" />
                <div>
                    <span className="text-sm text-gray-400">{link.name}</span>
                    <p className="text-lg font-semibold text-white group-hover:text-blue-300">
                        {link.value}
                    </p>
                </div>
            </div>
            <div className='opacity-0 group-hover:opacity-100'>
                <ChevronRightIcon className='w-8 -translate-x-5 group-hover:translate-x-0 duration-300' />
            </div>
        </Link>
    )
}