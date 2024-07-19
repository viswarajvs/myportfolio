import { pages } from "../../common/pages"
import SideBar from "../../Components/SideBar/SideBar"
import Wrapper from './Wrapper'
import './MainPage.css'
import Reveal from "../../HOC/withReveal"
import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import darkBG from '../../common/images/darkbg.svg'
import lightBG from '../../common/images/lightbg.svg'
import { ThemeContext } from "../../Context/ThemeContext"

const MainPage = () => {
    const { theme } = useContext(ThemeContext)
    const getCurrentImage = () => {
        if (theme === 'theme-dark')
            return darkBG
        else
            return lightBG
    }
    const [bgImage, setBgImage] = useState(getCurrentImage())

    useEffect(() => {
        const image = getCurrentImage()
        setBgImage(image)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])
    console.log(bgImage, theme)
    return (
        <>
            <motion.div
                key={bgImage} variants={variants} animate={'show'} initial="hide"
                style={{ backgroundImage: `url(${bgImage})` }}
                className="flex space-between flex-1 one-slider-profile">
                <Reveal
                    xHidden={-50}
                    className="child-container"
                >
                    {
                        pages.map((item, index) => {
                            const PageRender = item.element
                            return (
                                <Wrapper index={index}>
                                    <PageRender />
                                </Wrapper>
                            )
                        })

                    }
                </Reveal>
            </motion.div>
            <div className="sidebar-container"><SideBar /></div>
        </>

    )
}
export const variants = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.3
        }
    },
    hide: {
        y: -20,
        opacity: 0
    }
};


export default MainPage