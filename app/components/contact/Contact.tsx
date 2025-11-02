// app/components/Contact.tsx
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import { ContactDownAnimateWrapper } from './ContactDownAnimateWrapper';
import { ContactCard } from './ContactCard';
import { ContactCardDownAnimateWrapper } from './ContactCardDownAnimateWrapper';
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.35c.6-.9 1.6-1.35 2.6-1.35 1.95 0 3.5 1.55 3.5 3.5V19z" />
    </svg>
)

// SVG Icon cho GitHub
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.1-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48A10 10 0 0022 12 10 10 0 0012 2z" />
    </svg>
)

export const Contact = () => {
    // === THAY THÔNG TIN CỦA BẠN VÀO ĐÂY ===
    const myEmail = "buidung232003@gmail.com";
    const myPhone = "0353260326";
    const myLinkedIn = "https://www.linkedin.com/in/dungtienbui23092003/";
    const myGithub = "https://github.com/dungtienbui";
    // ======================================

    const contactLinks = [
        {
            name: "Email",
            value: myEmail,
            href: `mailto:${myEmail}`,
            icon: EnvelopeIcon,
        },
        {
            name: "Phone",
            value: myPhone,
            href: `tel:${myPhone.replace(/\s/g, '')}`,
            icon: DevicePhoneMobileIcon,
        },
        {
            name: "LinkedIn",
            value: "dungtienbui23092003",
            href: myLinkedIn,
            icon: LinkedInIcon,
        },
        {
            name: "GitHub",
            value: "dungtienbui",
            href: myGithub,
            icon: GitHubIcon,
        },
    ];

    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-blue-400">
                Liên hệ
            </h2>
            <p
                className="text-center text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            >
                Tôi rất mong chờ cơ hội được trao đổi với bạn.
            </p>

            <ContactDownAnimateWrapper>
                <div className="max-w-md mx-auto space-y-6">
                    {contactLinks.map((link) => (
                        <ContactCardDownAnimateWrapper key={link.href}>
                            <ContactCard link={link} />
                        </ContactCardDownAnimateWrapper>
                    ))}
                </div>
            </ContactDownAnimateWrapper>

        </>
    )
}