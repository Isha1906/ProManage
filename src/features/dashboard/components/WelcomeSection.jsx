import { Hand } from "lucide-react";

function WelcomeSection() {
    return (
        <section className="flex-1 flex items-center justify-center pt-3 text-center">
            <div>
                <h1 className="flex items-center justify-center text-4xl font-bold gap-3 text-slate-800">
                    Welcome back, Amit!
                    <Hand size={28} strokeWidth={2.5} />
                </h1>

                <p className="mt-2 text-slate-500 text-md font-semibold">
                    Let's make progress today.
                </p>
            </div>
        </section>
    );
}

export default WelcomeSection;