import './App.css'
import Header from './Components/Header/Header'
import './common/style.css'
import CustomCursorManager from './Components/CustomCursor/context/manager'
import CustomCursor from './Components/CustomCursor'
import MainPage from './Pages/MainPage/MainPage'
import { useContext, useRef } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from 'react-scroll-to-top'

function App() {
  const { theme } = useContext(ThemeContext);
  const homeRef = useRef(null)
  return (
    <div className={`App ${theme}`}>
      <ScrollToTop className='scrollTopIcon' smooth component={<KeyboardArrowUpIcon />} />
      <CustomCursorManager>
        <CustomCursor />
        <Header homeRef={homeRef} />
        <MainPage homeRef={homeRef} />
      </CustomCursorManager>
    </div>
  )
}

export default App
