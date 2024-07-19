
import { useContext } from 'react'
import './Header.scss'
import { ThemeContext } from '../../Context/ThemeContext'
import { UilSun, UilMoon, UilBars } from '@iconscout/react-unicons'
import Reveal from '../../HOC/withReveal'
import Image from '../Image/Image'
import profilePic from '../../common/images/vprofile-pic.jpg'

const Header = () => {
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
            <span className='title flex align-center'>
                <Image src={profilePic} className='profile-pic' />
            </span>
        </Reveal>
    )
}

export default Header