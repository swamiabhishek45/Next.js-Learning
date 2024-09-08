import { notFound } from "next/navigation";

export default function Fid({
    params,
}: {
    params: {
        productId: string;
        no: string;
    };
}) {
    if(parseInt(params.no) > 1000){
        notFound();
    }
    return <h1>Feedback {params.no} of product {params.productId} </h1>;
}
