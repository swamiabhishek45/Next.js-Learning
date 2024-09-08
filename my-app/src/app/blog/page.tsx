import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog" // ignores template from root layoutr
    }
}

export default function Blog() {
    return <h1>Blog Page!</h1>;
}
