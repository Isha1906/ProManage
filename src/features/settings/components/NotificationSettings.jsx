import { useState } from "react";
import { Bell, CheckSquare, FolderKanban, MessageSquare, Mail } from "lucide-react";

function NotificationSettings() {
    const [settings, setSettings] = useState({
        taskNotifications: true,
        projectNotifications: true,
        dailyUpdateNotifications: true,
        emailNotifications: false,
    });

    const notificationItems = [
        {
            key: "taskNotifications",
            title: "Task Notifications",
            description: "Get notified when a new task is assigned or updated.",
            icon: CheckSquare,
            iconStyle: "bg-orange-100 text-orange-500",
        },
        {
            key: "projectNotifications",
            title: "Project Notifications",
            description: "Receive updates about project changes and announcements.",
            icon: FolderKanban,
            iconStyle: "bg-violet-100 text-violet-600",
        },
        {
            key: "dailyUpdateNotifications",
            title: "Daily Update Notifications",
            description: "Get notified about comments on your daily updates.",
            icon: MessageSquare,
            iconStyle: "bg-green-100 text-green-600",
        },
        {
            key: "emailNotifications",
            title: "Email Notifications",
            description: "Receive important notifications via email.",
            icon: Mail,
            iconStyle: "bg-red-100 text-red-500",
        },
    ];

    const handleToggle = (key) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <section className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-5">

            {/* Header */}
            <div className="flex items-center gap-3
            border-b border-gray-200 py-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Bell
                        size={20}
                        className="text-blue-600"
                    />
                </div>

                <div>
                    <h2 className="text-base font-semibold text-slate-800">
                        Notification Preferences
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Choose what notifications you want to receive.
                    </p>
                </div>
            </div>

            {/* Notification options */}
            <div className="mt-5 divide-y divide-slate-200">

                {notificationItems.map((item) => {
                    const Icon = item.icon;
                    const enabled = settings[item.key];

                    return (
                        <div
                            key={item.key}
                            className="flex items-center justify-between gap-4 py-3"
                        >
                            <div className="flex items-center gap-3 min-w-0">

                                <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.iconStyle}`}
                                >
                                    <Icon size={19} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                                        {item.description}
                                    </p>
                                </div>

                            </div>

                            {/* Toggle */}
                            <button
                                type="button"
                                role="switch"
                                aria-checked={enabled}
                                aria-label={`Toggle ${item.title}`}
                                onClick={() => handleToggle(item.key)}
                                className={`relative w-11
                                h-6 rounded-full 
                                shrink-0 transition-colors 
                                cursor-pointer
                                ${enabled
                                        ? "bg-blue-600"
                                        : "bg-slate-300"
                                    }`}
                            >
                                <span
                                    className={`
                                                absolute
                                                top-1
                                                w-4
                                                h-4
                                                rounded-full
                                                bg-white
                                                shadow-sm
                                                transition-transform
                                                ${enabled
                                            ? "right-1"
                                            : "left-1"
                                        }`}
                                />
                            </button>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default NotificationSettings;