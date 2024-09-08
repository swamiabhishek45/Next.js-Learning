type Props = {
    params: {
        productId: string;
    };
};

export const generatemetadata = 

export default function ProductDetails({ params }: Props) {
    return <h1>Details of product {params.productId}</h1>;
}
