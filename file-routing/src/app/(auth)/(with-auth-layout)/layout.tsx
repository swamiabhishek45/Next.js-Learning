export const metadata = {
    title: "Authentication"
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h2 className="text-xl">Inner Layout</h2>
            {children}
        </>
    );
}
