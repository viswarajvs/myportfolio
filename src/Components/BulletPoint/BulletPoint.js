import { Avatar, ListItem, ListItemAvatar } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const BulletPoint = ({
    message
}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar style={{ background: 'none' }}>
                    <KeyboardArrowRightIcon className="themeSVGIcon" />
                </Avatar>
            </ListItemAvatar>
            {message}
        </ListItem>
    )
}

export default BulletPoint