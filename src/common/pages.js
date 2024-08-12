import Experience from '../Pages/Experience/Experience'
import Home from '../Pages/Home/Home'
import Summary from '../Pages/Summary/Summary'
import Projects from '../Pages/Projects/Projects'
import PersonalPage from '../Pages/PersonalPage/PersonalPage'
import ContactMe from '../Pages/ContactMe/ContactMe'
export const pages = [
    {
        id:1,
        path: '/home',
        element: Home,
        isRef: true
    },
    {
        id:1,
        path: '/summary',
        element: Summary
    },
    {
        id:1,
        path: '/experience',
        element: Experience,
        title: 'Career journey'
    },
    {
        id:3,
        element: Projects,
        title: 'Project Portfolio'
    },
    // {
    //     id:3,
    //     element: Testimonials,
    //     title: 'Testimonials'
    // },
    {
        id:3,
        element: PersonalPage,
        title: 'Personal Portfolio'
    },
    {
        id:3,
        element: ContactMe
    }
]