import { UserKey } from "lucide-react"
function SecuritySettings() {
    return (
        <section className="mt-6 bg-white rounded-xl 
        border border-slate-200 shadow-sm p-5">
            <div>Security</div>
            <div>
                <div className="flex gap-2">
                    <UserKey />
                    <p className="text-md font-semibold">Password</p>
                </div>
                <rect x="0" y="0" width="100%" height="8" fill="url(#squiggle-1)" data-astro-cid-77h5rudd=""></rect>
            </div>
        </section>
    )
}

export default SecuritySettings