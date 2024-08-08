
import './Badge.scss'
const Badge = ({
    children,
    className
}) => {
    return (
        <div className={`flex align-center badge badge-default hover-zoom-0 ${className&& className}`}>{children}</div>
    )
}

export default Badge