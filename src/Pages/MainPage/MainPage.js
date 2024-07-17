import { useRef } from "react"
import SideBar from "../../Components/SideBar/SideBar"
import './MainPage.css'
import Home from "../Home/Home"
import AboutMe from "../AboutMe/AboutMe"
import withScrollAndSwipe from "../../HOC/withScrollAndSwipe"
import { Route, Routes, useLocation } from "react-router-dom"
import { pages } from "../../common/pages"
import { AnimatePresence } from "framer-motion"
import Wrapper from "./Wrapper"

const MainPage = () => {
    const divRef = useRef(null)
    const location = useLocation()
    const MyComponent = () => {
        return null
    }
    const WrappedComponent = withScrollAndSwipe(MyComponent)
    const HomeAnimated = () => (<Wrapper><Home /></Wrapper>)
    const AboutMeAnimated = () => (<Wrapper><AboutMe /></Wrapper>)
    const HomeAnimateds = () => (<Wrapper><Home /></Wrapper>)
    return (
        <div ref={divRef} className="flex space-between margin-0-1 flex-1">
            <div className="scroller-container">Scroller</div>
            <div className="child-container">
                <AnimatePresence mode="wait" initial={false}>
                    <Routes location={location} key={location.pathname}>
                        <Route Component={HomeAnimated} path="/" />
                        <Route Component={AboutMeAnimated} path="/aboutme" />
                        <Route Component={HomeAnimateds} path="/hello" />
                    </Routes>
                </AnimatePresence>
            </div>
            <WrappedComponent pages={pages} divRef={divRef} />
            <div className="sidebar-container"><SideBar /></div>
        </div>
    )
}

export default MainPage