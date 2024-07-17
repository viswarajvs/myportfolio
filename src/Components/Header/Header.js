
import { useContext } from 'react'
import './Header.scss'
import { ThemeContext } from '../../Context/ThemeContext'
import { UilSun, UilMoon, UilBars } from '@iconscout/react-unicons'

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className="header flex align-center margin-0-1 space-between">
            <label className='title'>{`<Viswaraj />`}</label>
            <div className='flex gap-1 align-center height-100'>
                <div className='theme-icons'>
                    <div className={`theme-wrapper ${theme === 'theme-light' ? 'show' : 'hide'}`}>
                        <UilSun onClick={toggleTheme} className='hover-zoom-1 theme-main' />
                    </div>
                    <div className={`theme-wrapper ${theme !== 'theme-light' ? 'show' : 'hide'}`}>
                        <UilMoon onClick={toggleTheme} className='hover-zoom-1 theme-main' />
                    </div>
                </div>
                <label className='hover-zoom-1 flex align-center menuicon'>
                    <UilBars />
                </label>
            </div>
        </div>
    )
}

export default Header