

let routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: "#",
        layout: "/admin"
    },
    {
        path: "/content",
        name: "contents",
        icon: "",
        component: "",
        layout: "/admin"
    },
    {
        path: "/content/trainingMaterials",
        name: "Training Materials",
        icon: "",
        component: "#",
        layout: "/admin"
    },
    {
        path: "/content/trainingMaterials/phishing",
        name: "Phishing",
        icon: "",
        component: "#",
        layout: "/admin"
    },
    {
        path: "/content/timerDuration",
        name: "Timer Duration",
        icon: "",
        component: "#",
        layout: "/admin"
    },
    {
        path: "/content/timerduration/5min",
        name: "5 min",
        icon: "",
        component: "#",
        layout: "/admin"
    },
];

export default routes;