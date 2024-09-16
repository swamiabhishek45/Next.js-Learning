export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2 className="text-2xl">Features Product</h2>
            {/*  Carousel here */}
        </>
    );
}
