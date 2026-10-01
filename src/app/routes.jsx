import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import WorkDashboard from "../features/dashboard/pages/WorkDashboard";
import MyWork from "../features/my-work/pages/MyWork";
import Projects from "../features/projects/pages/Projects";
import DailyUpdates from "../features/daily-updates/pages/DailyUpdates";
import Login from "../features/auth/pages/Login";
import Settings from "../features/settings/pages/Settings";

const router = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <WorkDashboard />,
            },
        ],
    },
    {
        path: "/my-work",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <MyWork />,
            }
        ]
    },
    {
        path: "/projects",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Projects />,
            }
        ]
    },
    {
        path: "/daily-updates",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <DailyUpdates />
            }
        ]
    },
    {
        path: "/notifications",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <DailyUpdates />
            }
        ]
    },
    {
        path:"/settings",
        element:<AppLayout />,
        children:[
            {
                index:true,
                element:<Settings />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />

    }
]);

export default router;