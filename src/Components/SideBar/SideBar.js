
import './SideBar.scss'
import { ReactComponent as LinkedInLogo } from '../../common/images/linkedlogo.svg'
import { ReactComponent as InstaLogo } from '../../common/images/instalogo.svg'
import { ReactComponent as FbLogo } from '../../common/images/fblogo.svg'
import { ReactComponent as EmailLogo } from '../../common/images/emailLogo.svg'
import { ReactComponent as PhoneLogo } from '../../common/images/phoneLogo.svg'
import { ReactComponent as WhatsappLogo } from '../../common/images/whatsapp.svg'
import { Link } from "react-router-dom";
import { mydata } from '../../metadata/mydata'
import Reveal from '../../HOC/withReveal'

const SideBar = () => {
    return (
        <div className="flex flex-column gap-vh sidebarContainer">
            <Link to={mydata?.sociallinks?.linkedin} target='_blank'>
                <Reveal xHidden={20}><LinkedInLogo className='socialLinkItem hover-zoom-1' /></Reveal>
            </Link>
            {/* <Link to={`${mydata?.sociallinks?.whatsapp}`} target='_blank'>
                <Reveal xHidden={20}><WhatsappLogo className='socialLinkItem hover-zoom-1' /></Reveal>
            </Link> */}
            <Link to={`mailto:${mydata?.sociallinks?.email}`}>
                <Reveal xHidden={20}><EmailLogo className='socialLinkItem hover-zoom-1' /></Reveal>
            </Link>
            {/* <Link to={`tel:${mydata?.sociallinks?.phone}`}>
                <Reveal xHidden={20}><PhoneLogo className='socialLinkItem hover-zoom-1' /></Reveal>
            </Link> */}
            <Link to={mydata?.sociallinks?.insta} target='_blank'>
                <Reveal xHidden={20}><InstaLogo className='socialLinkItem hover-zoom-1' /></Reveal>
            </Link>
            <Link to={mydata?.sociallinks?.fb} target='_blank'>
                <Reveal xHidden={20}><FbLogo className='socialLinkItem hover-zoom-1' /></Reveal>
            </Link>
        </div>
    )
}

export default SideBar