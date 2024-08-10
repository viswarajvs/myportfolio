import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

const SeeAll = ({
    text,
    icon,
    link
}) => {
    return (
        <Link className="flex flex-end gap-1 ternary-font hover-zoom-small" to={link} target='_blank'>
            <label>{text}</label>
            <div className='seeAllIcon'>
                {icon
                    ? icon
                    : <KeyboardArrowRightIcon />}
            </div>
        </Link>
    )
}

export default SeeAll