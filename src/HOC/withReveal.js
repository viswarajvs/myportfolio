import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Reveal = ({
    children,
    className,
    xHidden,
    yHidden
}) => {
    const myRef = useRef()
    const isInView = useInView(myRef, { once: true })
    const mainControls = useAnimation()


    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])
    return (
        <motion.div
            className={className}
            ref={myRef}
            variants={{
                hidden: { opacity: 0, x: xHidden || 0, y: yHidden || 0 },
                visible: { opacity: 1, x: 0, y: 0 }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal