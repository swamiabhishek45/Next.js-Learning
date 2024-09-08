"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <li>
                        <Link href={link.href} key={link.name} className={isActive ? "font-bold text-red-400 underline": "text-blue-400"}>
                            {link.name}
                        </Link>
                    </li>
                );
            })}
            {children}
        </div>
    );
}
