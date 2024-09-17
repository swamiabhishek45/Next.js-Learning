import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            <div>Notifications</div>
            <Link
                href="/complex-dashboard/archived"
                className="text-blue-500 ml-3 underline"
            >
                Archived
            </Link>
        </Card>
    );
}
