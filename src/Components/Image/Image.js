
import './Image.scss'
const Image = ({
    src,
    name,
    className,
    onClick
}) => {
    return (
        <div onClick={onClick&& onClick} className={`imgContainer ${className && className} hover-zoom-1`}>
            <img src={src} alt={name} />
        </div>
    )
}

export default Image