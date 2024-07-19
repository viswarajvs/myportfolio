import { motion, useScroll, useTransform } from "framer-motion"
import './Wrapper.scss'
import { useRef } from "react"
const Wrapper = ({ children, index }) => {
    const myRef = useRef()
    const { scrollYProgress } = useScroll({
        target: myRef,
        offset: ['start end', 'end start']
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.2])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])
    return (
        <div
            key={index}
            ref={myRef}
            className={`wrapper-main primary-bg`}

        >
            <motion.div
                style={{
                    height: '100vh',
                    opacity,
                    scale
                }}

            >{children}</motion.div>
        </div >
    )
}
export default Wrapper