import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { PageContext } from "../../Context/PageContext"

const Wrapper = ({ children }) => {
    const { direction, currentPage } = useContext(PageContext)
    const [isExit, setIsExit] = useState(false)
    useEffect(() => {
        return () => {
            setIsExit(true)
        }
    }, [currentPage])
    return (
        <motion.div
            initial={{ transform: `${isExit ? 'translateY(0)' : direction === 'down' ? 'translateY(100%)' : 'translateY(-100%)' }` }}
            animate={{ transform: 'translateY(0)' }}
            exit={{ transform: `${direction === 'down' ? 'translateY(-100%)' : 'translateY(100%)' }` }}
            style={{ height: '100%' }}
            transition={{
                duration: 0.3
            }}
        >
            {children}
        </motion.div>
    )
}
export default Wrapper