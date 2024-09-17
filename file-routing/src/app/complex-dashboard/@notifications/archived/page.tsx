import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
            <div>Archived Notifications</div>
            <Link
                href="/complex-dashboard"
                className="text-blue-500 ml-3 underline"
            >
                Default
            </Link>
        </Card>
    );
}
