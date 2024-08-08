import SkillBar from "../../Components/SkillBar/SkillBar"
import { mydata } from "../../metadata/mydata"
import './Skills.scss'


const Skills = () => {
    return (
        <div className="skill-container">
            {
                mydata.skills.map(item => (
                    <SkillBar data={item} />
                ))
            }
        </div>
    )
}

export default Skills