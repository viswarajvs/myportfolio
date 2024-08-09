import { mydata } from "../../metadata/mydata"
import ProjectCard from "./ProjectCard"


const Projects = () => {
    return (
        <div className="flex flex-column gap-5">
            {
                mydata.projects.map(project => (
                    <ProjectCard data={project} />
                ))
            }
        </div>
    )
}

export default Projects