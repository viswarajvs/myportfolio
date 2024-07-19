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
        <Header />
        <MainPage />
      </CustomCursorManager>
    </div>
  )
}

export default App
