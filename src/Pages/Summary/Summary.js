import { mydata } from "../../metadata/mydata"
import './Summary.scss'

const Summary = () => {
    return (
        <div className="skillContainer flex justify-center">
            {
                mydata.skills.map(skill => {
                    const Logo = skill.logo
                    return (
                        <div className="skillBadge flex gap-2 ternary-font align-center">
                            <div className="skillTab hover-zoom-1"><Logo /></div>
                            <div>{skill.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Summary