import ListedProject from "./listedProject"


function Projects(props){
    const object = props.object
    const displayProject = props.displayProject
    console.log(displayProject)
    
    return(
        <div>
            <ul className="projects">
                {
                    object.map((projectname, index) => (
                        <ListedProject 
                        name={projectname.projectname}
                        displayProject = {displayProject}
                        value = {index}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
export default Projects