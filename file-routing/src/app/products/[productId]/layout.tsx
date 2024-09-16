function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const randomInt = getRandomInt(2);
    if (randomInt === 1) {
        throw new Error("Error loading product ID");
    }
    return (
        <>
            {children}

            <h2 className="text-2xl">
                Features Product <span>From Layout</span>
            </h2>
            {/*  Carousel here */}
        </>
    );
}
