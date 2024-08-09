
import Badge from '../../Components/Badge/Badge'
import ChatBox from '../../Components/ChatBox/ChatBox';
import FlipCard from '../../Components/FlipCard/FlipCard';
import Reveal from '../../HOC/withReveal'
import './Projects.scss'
import FlipIcon from '@mui/icons-material/Flip';
const ProjectCard = ({
    data
}) => {
    const Logo = data.logo
    const flipChild = [
        <div>
            <div className='ternary-font'>{data.shortdesc}</div>
            <div className='primary-font'>{data.role}</div>
            <div className='flex space-between ternary-font align-center'>
                <div className='ternary-font flex gap-2'>
                    {
                        data.techstack.map(tech => (
                            <Badge>{tech}</Badge>
                        ))
                    }
                </div>
                <FlipIcon className='arrowRight' />
            </div>
        </div>,
        <div>
            <div className='margin-top-1 ternary-font'>{
                data.roles.map(role => (
                    <ChatBox alwaysTrue={true} message={role} />
                ))
            }</div>
            <div className='flex space-between ternary-font align-center'>
                <div className='ternary-font flex gap-2'>
                </div>
                <FlipIcon className='arrowRight' />
            </div>
        </div>
    ]
    return (
        <Reveal yHidden={75}>
            <FlipCard className="experience-container project-container" child={flipChild}>
                <div className='primary-font grandtitle flex space-between titlecard align-center'>
                    <label>{data.name}</label>
                    {data.logo && <div className='projectlogo hover-zoom-0'><Logo /></div>}
                </div>
            </FlipCard>

        </Reveal>
    )
}
export default ProjectCard