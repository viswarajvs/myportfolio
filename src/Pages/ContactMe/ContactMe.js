import { Link } from "react-router-dom"
import { mydata } from "../../metadata/mydata"


const ContactMe = () => {
    return (
        <div className="secondary-font">Write to me at
            <Link className='nodeclink secondary-font primary-theme-color' to={`mailto:${mydata?.sociallinks?.email}`}>{` ${mydata?.sociallinks?.email}`}</Link>
        </div>
    )
}

export default ContactMe