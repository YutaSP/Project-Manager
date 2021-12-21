function Addtodo(props){
    const addProject = props.addProject
    return(
        <div>
            <li>
                <button onClick = {addProject}>
                    Add Project
                </button>
            </li>
        </div>
    )
}
export default Addtodo