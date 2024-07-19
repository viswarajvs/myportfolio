
import './Badge.scss'
const Badge = ({
    children
}) => {
    return (
        <div className="flex align-center badge badge-default hover-zoom-0">{children}</div>
    )
}

export default Badge