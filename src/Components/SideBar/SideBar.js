
import './SideBar.scss'
import { ReactComponent as LinkedInLogo } from '../../common/images/linkedlogo.svg'
import { ReactComponent as InstaLogo } from '../../common/images/instalogo.svg'
import { ReactComponent as FbLogo } from '../../common/images/fblogo.svg'
import { ReactComponent as EmailLogo } from '../../common/images/emailLogo.svg'
import { ReactComponent as PhoneLogo } from '../../common/images/phoneLogo.svg'
import { ReactComponent as WhatsappLogo } from '../../common/images/whatsapp.svg'
import { Link } from "react-router-dom";
import { mydata } from '../../metadata/mydata'

const SideBar = () => {
    return (
        <div className="flex flex-column gap-vh sidebarContainer">
            <Link to={mydata?.sociallinks?.linkedin} target='_blank'>
                <LinkedInLogo className='socialLinkItem' />
            </Link>
            <Link to={`${mydata?.sociallinks?.whatsapp}`} target='_blank'>
                <WhatsappLogo className='socialLinkItem' />
            </Link>
            <Link to={`mailto:${mydata?.sociallinks?.email}`}>
                <EmailLogo className='socialLinkItem' />
            </Link>
            <Link to={`tel:${mydata?.sociallinks?.email}`}>
                <PhoneLogo className='socialLinkItem' />
            </Link>
            <Link to={mydata?.sociallinks?.insta} target='_blank'>
                <InstaLogo className='socialLinkItem' />
            </Link>
            <Link to={mydata?.sociallinks?.fb} target='_blank'>
                <FbLogo className='socialLinkItem' />
            </Link>
        </div>
    )
}

export default SideBar