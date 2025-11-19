import ViewCounter from "../ViewCounter";

export default function Footer() {
    return (
        <footer className="text-center py-4 text-sm text-gray-500 flex flex-col items-center gap-2">
            <p>
                © {new Date().getFullYear()} Bùi Tiến Dũng. Coded with Next.js and Tailwind CSS.
            </p>
            <ViewCounter />
        </footer>
    )
}