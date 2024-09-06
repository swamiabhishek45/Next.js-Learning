export default function About({
    params,
}: {
    params: {
        productId: string;
        no: string;
    };
}) {
    return <h1>Feedback {params.no} of product {params.productId} </h1>;
}
