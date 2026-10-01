export const projects = [
    {
        id: 1,
        name: "ProManage",
        description:
            "An employee management and task tracking dashboard that allows team members to manage assigned work, submit updates, track progress, and monitor project activities.",
        status: "In Progress",
        startDate: "01 Sep 2026",
        endDate: "30 Sep 2026",
        manager: "Rahul Sharma",
        role: "Frontend Developer",
        progress: 65,

        technologies: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "REST API",
        ],

        responsibilities: [
            "Develop employee dashboard UI",
            "Create reusable React components",
            "Implement task filtering and search",
            "Build responsive layouts",
            "Integrate frontend with backend APIs",
        ],

        tasks: [
            "Dashboard development",
            "My Work section",
            "Project management UI",
            "Task filtering",
            "Search functionality",
        ],

        recentUpdate:
            "Completed the My Work section with status filtering, priority filtering, task search, and assigned task table.",

        timeline: [
            {
                title: "Planning",
                status: "Completed",
                date: "01 Sep",
            },
            {
                title: "Development",
                status: "In Progress",
                date: "10 Sep",
            },
            {
                title: "Testing",
                status: "Pending",
                date: "",
            },
            {
                title: "Deployment",
                status: "Pending",
                date: "",
            },
        ],
    },

    {
        id: 2,
        name: "Website Redesign",
        description:
            "A redesigned company website focused on improving the user experience, responsive design, and overall visual presentation.",
        status: "Completed",
        startDate: "01 Aug 2026",
        endDate: "30 Aug 2026",
        manager: "Amit Singh",
        role: "Web Developer",
        progress: 100,

        technologies: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Vite",
        ],

        responsibilities: [
            "Develop responsive website components",
            "Fix UI and CSS issues",
            "Implement reusable components",
            "Improve mobile responsiveness",
        ],

        tasks: [
            "Landing page development",
            "Navbar implementation",
            "Responsive design",
            "CSS fixes",
            "Component development",
        ],

        recentUpdate:
            "Project completed successfully with all assigned frontend tasks delivered.",

    },
];
export default projects