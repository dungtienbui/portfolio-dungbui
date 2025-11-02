import Link from 'next/link';

type BreadCrumbItem = {
    label: string;
    href: string;
};

type BreadCrumbProps = {
    items: BreadCrumbItem[];
};

export const BreadCrumb = ({ items }: BreadCrumbProps) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex flex-row items-center space-x-1.5 text-gray-600 dark:text-gray-400">
                {items.map((item, index) => {
                    const isLastItem = index === items.length - 1;

                    return (
                        <div
                            className="flex flex-row items-center space-x-1.5"
                            key={item.href}>
                            {index > 0 && (
                                <span className="mx-1 select-none">/</span>
                            )}

                            <li>
                                {isLastItem ? (
                                    <span
                                        className="font-medium text-gray-900 dark:text-gray-100"
                                        aria-current="page"
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="hover:text-blue-600 hover:underline transition-colors dark:hover:text-blue-400"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        </div>
                    );
                })}
            </ol>
        </nav>
    );
};