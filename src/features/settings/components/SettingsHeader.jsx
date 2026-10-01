import { Settings as SettingsIcon } from "lucide-react";

function SettingsHeader() {
    return (
        <section className="mt-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <SettingsIcon
                        size={20}
                        className="text-blue-600"
                    />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Settings
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Manage your account and workspace preferences.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SettingsHeader;