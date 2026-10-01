import { useState } from "react";
import { Palette, Sun, Moon, Monitor } from "lucide-react";

function AppearanceSettings() {
    const [theme, setTheme] = useState("light");

    const themes = [
        {
            id: "light",
            title: "Light",
            description: "Use light theme",
            icon: Sun,
        },
        {
            id: "dark",
            title: "Dark",
            description: "Use dark theme",
            icon: Moon,
        },
        {
            id: "system",
            title: "System",
            description: "Use system theme",
            icon: Monitor,
        },
    ];

    return (
        <section className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-5">

            {/* Header */}
            <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Palette
                        size={20}
                        className="text-blue-600"
                    />
                </div>

                <div>
                    <h2 className="text-base font-semibold text-slate-800">
                        Appearance
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Customize how the application looks for you.
                    </p>
                </div>

            </div>

            {/* Theme */}
            <div className="mt-5">

                <p className="text-sm font-semibold text-slate-700 mb-3">
                    Theme
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {themes.map((item) => {
                        const Icon = item.icon;
                        const selected = theme === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setTheme(item.id)}
                                className={`
                                    flex items-center gap-3
                                    p-4
                                    rounded-lg
                                    border
                                    text-left
                                    transition
                                    cursor-pointer
                                    ${selected
                                        ? "border-blue-500 ring-2 ring-blue-500/10"
                                        : "border-slate-200 hover:border-slate-300"
                                    }
                                `}
                            >

                                <div
                                    className={`
                                        w-10
                                        h-10
                                        rounded-lg
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                        ${selected
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-slate-100 text-slate-500"
                                        }
                                    `}
                                >
                                    <Icon size={20} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-slate-500 mt-1">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Radio indicator */}
                                <span
                                    className={`
                                        w-5
                                        h-5
                                        rounded-full
                                        border
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                        ${selected
                                            ? "border-blue-600"
                                            : "border-slate-300"
                                        }
                                    `}
                                >
                                    {selected && (
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                    )}
                                </span>

                            </button>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default AppearanceSettings;