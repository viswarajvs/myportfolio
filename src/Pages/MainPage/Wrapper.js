import { motion } from "framer-motion"
import './Wrapper.scss'
import { useRef } from "react"
import Reveal from "../../HOC/withReveal"
const Wrapper = ({ children, index, title, data }) => {
    const myRef = useRef()
    // const { scrollYProgress } = useScroll({
    //     target: myRef,
    //     offset: ['start end', 'end start']
    // })
    // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.2])
    // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
    return (
        <div
            key={index}
            ref={myRef}
            className={`wrapper-main primary-bg ${data.nobg && 'wrapper-nobg'}`}

        >
            <Reveal xHidden={-75}>
                <motion.div
                    style={{
                        padding: "4vw"
                    }}
                >
                    {title && <div className='bold sectiontitle'>{title}</div>}
                    {children}
                </motion.div>
            </Reveal>
        </div >
    )
}
export default Wrapper