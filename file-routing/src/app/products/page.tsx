import Link from "next/link";

export default function Product() {
    const productID = 100;
    return (
        <>
            <Link href="/" className="text-blue-500">
                Home
            </Link>
            <h1 className="text-3xl">Product List</h1>
            <h2>
                <Link href="/products/1" className="text-blue-500">
                    Product 1
                </Link>
            </h2>
            <h2>
                <Link href="/products/2" className="text-blue-500">
                    Product 2
                </Link>
            </h2>
            <h2>
                <Link href="/products/3" className="text-blue-500" replace>
                    Product 3 
                </Link> <span> | replace - redirect back to Home</span>
            </h2>
            <h2>
                <Link href={`/products/${productID}`}>Product {productID}</Link>
            </h2>
        </>
    );
}
