import Link from "next/link";

export const metadata = {
    title: "About Me",
    description: "About me page",
};

export default function About() {
    return (
        <>
            <h1>About Page!</h1>
            <Link href='/about/education'>Education</Link>
        </>
    );
}

