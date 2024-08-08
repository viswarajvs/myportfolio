
import { ProgressBar } from 'react-bootstrap'
import Badge from '../Badge/Badge'
import './SkillBar.scss'

const SkillBar = ({
    data
}) => {

    const Logo = data?.logo
    return (
        <div className='skillbar ternary-font-size'>
            <div className='flex align-center gap-1'>
                <div className='skilllogo'>{<Logo />}</div>
                <div>
                    <div>{data?.name}</div>
                    <Badge className='experiencecard'>{data?.exp}</Badge>
                </div>
                <div className='progressHolder'>
                    <ProgressBar now={data.proficiency} label={`${data.proficiency}%`} />
                    <div>{data?.description}</div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar