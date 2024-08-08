import { useEffect, useState } from "react"
import CustomizedTimeline from "../../Components/Timeline/Timeline"
import Reveal from "../../HOC/withReveal"
import { mydata } from "../../metadata/mydata"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className='homepage-container height-100 gap-2'>
            <div className='sec-color'>
                <Reveal xHidden={-75}>
                    {
                        isMobile
                            ? <div className="experienceParent">
                                {
                                    mydata.experience.map(exp => (
                                        <ExperienceCard data={exp} isMobile={isMobile} />
                                    ))
                                }
                            </div>
                            : <CustomizedTimeline />
                    }
                </Reveal>
            </div>
        </div>
    )
}

export default Experience