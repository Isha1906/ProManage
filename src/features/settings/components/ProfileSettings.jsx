import { Mail, UserRound, Briefcase } from "lucide-react";

function ProfileSettings() {
    return (
        <section className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-5">

            <div>
                <h2 className="text-base font-semibold text-slate-800">
                    Profile
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Your personal and work information.
                </p>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <UserRound
                            size={19}
                            className="text-blue-600"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Full Name
                        </p>

                        <p className="text-sm font-medium text-slate-800">
                            Isha Vats
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Mail
                            size={19}
                            className="text-blue-600"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Email
                        </p>

                        <p className="text-sm font-medium text-slate-800">
                            isha@promanage.com
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Briefcase
                            size={19}
                            className="text-blue-600"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Role
                        </p>

                        <p className="text-sm font-medium text-slate-800">
                            Web Developer
                        </p>
                    </div>
                </div>

            </div>

            <div className="mt-5">
                <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 cursor-pointer"
                >
                    Edit Profile
                </button>
            </div>

        </section>
    );
}

export default ProfileSettings;