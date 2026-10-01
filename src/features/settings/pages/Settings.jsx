import DashboardHeader from "../../dashboard/components/DashboardHeader"
import { useOutletContext } from "react-router-dom"
import SettingsHeader from "../components/SettingsHeader";
import ProfileSettings from "../components/ProfileSettings";
import NotificationSettings from "../components/NotificationSettings";
import AppearanceSettings from "../components/AppearanceSettings";
import SecuritySettings from "../components/SecuritySettings";
import SentryTest from "../components/SecuritySettings";

function Settings() {
    const { setcCollapsed, setMobileOpen } = useOutletContext();
    return (
        <section className="min-h-screen w-full min-w-0 
        overflow-x-hidden bg-slate-100 p-3 sm:p-4 md:p-6">
            <DashboardHeader
                setCollapsed={setcCollapsed}
                setMobileOpen={setMobileOpen}
            />
            <SettingsHeader />
            <h3 className="mt-2">Account</h3>
            <ProfileSettings />

            <NotificationSettings />

            <AppearanceSettings />

            <SentryTest />

        </section>
    )
}

export default Settings