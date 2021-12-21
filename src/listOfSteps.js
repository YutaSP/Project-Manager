function StepinList(props) {
    let status = ''
    if(props.status === false){
         status = 'false'
    }else{
         status = 'true'
    }
    return(
        <li>
            <span>
                {props.name}
                {props.dueDate}
                {status}
            </span>
        </li>
    )
}

export default StepinList