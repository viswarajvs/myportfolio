import { useState } from "react"
import './FlipCard.scss'

const FlipCard = ({
    child,
    children,
    className
}) => {
    const [isFront, setIsFront] = useState(true)
    return (
        <>
            <div className={`${isFront ? 'showCard' : 'hideCard'} flipcard ${className}`}>
                {children}
                {child?.[0]}

                <button onClick={() => setIsFront(flag => !flag)}>Flip</button>
            </div >
            <div className={`${isFront ? 'hideCard' : 'showCard'} flipcard ${className}`}>
                {children}
                {child?.[1]}

                <button onClick={() => setIsFront(flag => !flag)}>Flip</button>
            </div>
        </>
    )
}

export default FlipCard