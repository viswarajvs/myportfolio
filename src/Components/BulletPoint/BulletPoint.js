import { Avatar, ListItem, ListItemAvatar } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'

const BulletPoint = ({
    message
}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <CheckIcon />
                </Avatar>
            </ListItemAvatar>
            {message}
        </ListItem>
    )
}

export default BulletPoint