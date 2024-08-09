
import Badge from '../../Components/Badge/Badge'
import FlipCard from '../../Components/FlipCard/FlipCard';
import Reveal from '../../HOC/withReveal'
import './Projects.scss'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
const ProjectCard = ({
    data
}) => {
    const Logo = data.logo
    const flipChild = [
        <div>
            <div className='ternary-font'>{data.shortdesc}</div>
            <div className='primary-font'>{data.role}</div>
            <div className='ternary-font flex gap-2'>{
                data.techstack.map(tech => (
                    <Badge>{tech}</Badge>
                ))
            }</div>
        </div>,
        <div>
            <div className='margin-top-1 ternary-font'>{
                data.roles.map(role => (
                    <div>
                        <label><AssignmentTurnedInIcon className='rolebullet' />{role}</label>
                    </div>
                ))
            }</div>
        </div>
    ]
    return (
        <Reveal yHidden={75}>
            <FlipCard className="experience-container hover-zoom-0" child={flipChild}>
                <div className='primary-font grandtitle flex space-between titlecard align-center'>
                    <label>{data.name}</label>
                    {data.logo && <div className='projectlogo hover-zoom-0'><Logo /></div>}
                </div>
            </FlipCard>

        </Reveal>
    )
}
export default ProjectCard