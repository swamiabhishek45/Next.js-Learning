import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function Fid({
    params,
}: {
    params: {
        productId: string;
        fid: string;
    };
}) {
    const randomInt = getRandomInt(2);
    if (randomInt === 1) {
        throw new Error("Error loading feedback...");
    }
    
    if (parseInt(params.fid) > 1000) {
        notFound();
    }
    return (
        <h1>
            Feedback {params.fid} of product {params.productId}{" "}
        </h1>
    );
}
