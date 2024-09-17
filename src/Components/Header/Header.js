
import { useContext } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import './Header.scss'
import { ThemeContext } from '../../Context/ThemeContext'
import { UilSun, UilMoon } from '@iconscout/react-unicons'
import Reveal from '../../HOC/withReveal'
import Image from '../Image/Image'
import profilePic from '../../common/images/vprofile-pic.jpg'

const Header = () => {
    // const { scrollYProgress } = useScroll()
    // const opacity = useTransform(scrollYProgress, [0, 0.44, 0.46], [0, 0, 1])
    // const scale = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0.8, 1])
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <Reveal
            yHidden={50}
            className="header flex align-center padding-0-1">
            <div className='theme-icons'>
                <div className={`theme-wrapper ${theme === 'theme-light' ? 'show' : 'hide'}`}>
                    <UilSun onClick={toggleTheme} className='hover-zoom-1 theme-main' />
                </div>
                <div className={`theme-wrapper ${theme !== 'theme-light' ? 'show' : 'hide'}`}>
                    <UilMoon onClick={toggleTheme} className='hover-zoom-1 theme-main' />
                </div>
            </div>
            <Reveal>
                <motion.span className='title flex align-center'
                >
                    <Image src={profilePic} className='profile-pic' />
                </motion.span>
            </Reveal>
        </Reveal>
    )
}

export default Header