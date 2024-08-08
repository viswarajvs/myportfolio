import Experience from '../Pages/Experience/Experience'
import Skills from '../Pages/Skills/Skills'
import Home from '../Pages/Home/Home'
export const pages = [
    {
        id:1,
        path: '/home',
        element: Home,
        isRef: true
    },
    {
        id:1,
        path: '/experience',
        element: Experience,
        title: 'Career journey'
    },
    {
        id:2,
        element: Skills,
        title: 'SKILLS'
    },
    {
        id:3,
        element: Skills,
        title: 'PROJECTS'
    },
    {
        id:4,
        element: Skills,
        title: 'PORTFOLIO'
    }
]