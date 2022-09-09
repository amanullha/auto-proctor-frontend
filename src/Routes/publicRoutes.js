import AllQuestions from "../Components/AllQuestions";
import CreateTest from "../Components/CreateTest";
import DashboardArchived from "../Components/DashboardArchived";
import DashboardHome from "../Components/DashboardHome";
import DashboardMorefeatures from "../Components/DashboardMorefeatures";
import NewTest from "../Components/NewTest";
import Dashboard from "../Pages/Dashboard/Dashboard";
import FAQs from "../Pages/FAQs/FAQs";
import Help from "../Pages/Help/Help";
import Pricing from "../Pages/Pricing/Pricing";




export const publicRoutes = [

    // { path: '/', name: 'Dashboard', Component: Dashboard },
    { path: '/faqs', name: 'FAQs', Component: FAQs },
    { path: '/pricing', name: 'Pricing', Component: Pricing },
    { path: '/help', name: 'Help', Component: Help },
]


export const dashboardRoutes = [

    { path: '', name: 'Home', Component: DashboardHome },
    { path: '/dashboard/archived', name: 'Archived', Component: DashboardArchived },
    { path: '/dashboard/more-features', name: 'More Features', Component: DashboardMorefeatures },
    { path: '/dashboard/create-test', name: 'More Features', Component: CreateTest },
    { path: '/dashboard/new-test', name: 'More Features', Component: NewTest },
    { path: '/dashboard/all-questions', name: 'More Features', Component: AllQuestions },
]