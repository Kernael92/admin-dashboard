import Dashboard from 'views/Dashboard.jsx';
import Contents from 'views/Content.jsx';
import Articles from 'views/Articles.jsx';
import Duration from 'views/Duration.jsx';
import Pages from 'views/Pages.jsx';
import Reports from 'views/Reports.jsx';
import Subscription from 'views/Subscription.jsx';
import Phishing from 'views/Phishing.jsx';
import Phishing101 from 'views/Phishing101.jsx';






let routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/content",
        name: "Content",
        icon: "tim-icons icon-components",
        component: Contents,
        layout: "/admin"
    },
    {
        path: "/duration",
        name: "Duration",
        icon: "tim-icons icon-time-alarm",
        component: Duration,
        layout: "/admin"
    },
    {
        path: "/articles",
        name: "Articles",
        icon: "tim-icons icon-single-copy-04",
        component: Articles,
        layout: "/admin"
    },
    {
        path: "/pages",
        name: "Pages",
        icon: "tim-icons icon-single-02",
        component: Pages,
        layout: "/admin"
    },
    {
        path: "/reports",
        name: "Reports",
        icon: "tim-icons icon-chart-bar-32",
        component: Reports,
        layout: "/admin"
    },
    {
        path: "/subscription",
        name: "Subscription",
        icon: "tim-icons icon-wallet-43",
        component: Subscription,
        layout: "/admin"
    },
    {
        path: "/phishing",
        name: "Phishing",
        component: Phishing,
        layout: "/admin"
    },
    {
        path: "/phishing101",
        name: "Phishing",
        component: Phishing101,
        layout: "/admin"
    }
    

];

export default routes;