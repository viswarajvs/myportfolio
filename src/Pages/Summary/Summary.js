import { mydata } from "../../metadata/mydata"
import './Summary.scss'

const Summary = () => {
    return (
        <div className="skillContainer flex justify-center">
            {
                mydata.skills.map(skill => {
                    const Logo = skill.logo
                    return (
                        <div className="skillBadge flex gap-2 ternary-font align-center hover-zoom-1">
                            <div className="skillTab"><Logo /></div>
                            <div className="margin-top-0-5">{skill.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Summary