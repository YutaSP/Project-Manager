function ListedProject(props) {
    const displayProject = props.displayProject
    var index = props.value
    console.log(props.value)
    console.log(index)
    return(
        <li>
            <button onClick={displayProject} value = {index}>{props.name}</button>
        </li>
    )
}

export default ListedProject