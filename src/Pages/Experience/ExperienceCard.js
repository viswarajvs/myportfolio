
import moment from 'moment'
import './Experience.scss'
import Reveal from '../../HOC/withReveal'
const ExperienceCard = ({
    data,
    isMobile
}) => {
    const Logo = data.logo ? data.logo : data.continueLogo
    const startDate = moment(data.startdate).format('MMM YYYY')
    const endDate = data.enddate ? moment(data.enddate).format('MMM YYYY') : 'Present'
    return (
        <Reveal yHidden={75}>
            <div className="experience-container hover-zoom-0">
                {(data.logo || data.continueLogo) && isMobile && <div className='expLogo'><Logo /></div>}
                <div className='commontitle primary-font'>{data.companyname}</div>
                <div className='ternary-font'>{data.location}</div>
                <div className='secondary-font bold'>{data.designation}</div>
                <div className='ternary-font'>{startDate} - {endDate}</div>
                <div className='para'>{data.description}</div>
            </div>
        </Reveal>
    )
}
export default ExperienceCard