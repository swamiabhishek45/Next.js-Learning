import Link from "next/link";

export default function Home(){
    return (
        <>
            <h1 className="text-3xl">Welcome Home!</h1>

            <div className="text-blue-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/docs">Docs</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/forgot-password">Forgot Password</Link></li>
                <li><Link href="/complex-dashboard">Complex-Dashboard</Link></li>
            </div>
        </>
    );
}