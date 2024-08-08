
import './Image.scss'
const Image = ({
    src,
    name,
    className,
    onClick,
    ref
}) => {
    return (
        <img ref={ref} onClick={onClick && onClick} className={`imgContainer ${className && className}`} src={src} alt={name} />
    )
}

export default Image