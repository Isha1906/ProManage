import { ClipboardCheck,
    Bug,
    MessageSquare,
    CheckCircle,
    Plus
 } from "lucide-react";

export const updates = [
    {
        id: 1,
        date: "18 Sep 2026",
        task: "RBX Tools UI",
        summary: "Developed the RBX Tools frontend and improved the overall card layout.",
        progress: "90%"
    },
    {
        id: 2,
        date: "17 Sep 2026",
        task: "RBX Tools UI",
        summary: "Fixed UI spacing issues and worked on responsive layouts.",
        progress: "80%"
    },
    {
        id: 3,
        date: "16 Sep 2026",
        task: "Projects Page",
        summary: "Implemented project cards with filtering and expandable project details.",
        progress: "100%"
    },
];

export const activities = [
    {
        id: 1,
        icon: ClipboardCheck,
        color: "bg-blue-100 text-blue-600",
        title: 'You updated task "Project Section Completed"',
        time: "2 hours ago",
    },
    {
        id: 2,
        icon: Bug,
        color: "bg-red-100 text-red-600",
        title: "Bug #102 assigned to you",
        time: "4 hours ago",
    },
    {
        id: 3,
        icon: MessageSquare,
        color: "bg-purple-100 text-purple-600",
        title: 'Rahul Sharma commented on "Fix Company Site UI issues"',
        time: "6 hours ago",
    },
    {
        id: 4,
        icon: CheckCircle,
        color: "bg-green-100 text-green-600",
        title: 'You marked "Dashboard & My Work" as completed',
        time: "1 day ago",
    },
    {
        id: 5,
        icon: Plus,
        color: "bg-yellow-100 text-yellow-600",
        title: 'New task "Employee Dashboard" assigned to you',
        time: "2 days ago",
    },
]


