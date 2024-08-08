import { motion } from "framer-motion"
import Image from "../../Components/Image/Image"
import profilePic from '../../common/images/vprofile-pic.jpg'
import './ProfilePic.scss'

const ProfilePic =() => {
    return (
        <motion.div
            className="smooth-transition"
        >
            <Image src={profilePic} className='verifiedProfilePic' />
        </motion.div>
    )
}

export default ProfilePic