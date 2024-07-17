import './App.css'
import Header from './Components/Header/Header'
import './common/style.css'
import CustomCursorManager from './Components/CustomCursor/context/manager'
import CustomCursor from './Components/CustomCursor'
import MainPage from './Pages/MainPage/MainPage'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
        <CustomCursorManager>
          <CustomCursor />
          <div className='flex flex-column height-100vh'>
            <Header />
            <MainPage />
          </div>
        </CustomCursorManager>
    </div>
  )
}

export default App
