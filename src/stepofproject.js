import StepsinList from "./listOfSteps"
function Steps(props){
    const object = props.object
    const value = props.showProject
    const steps = object[value].steps
    return(
        <div>
            <ul>
                {
                    steps.map((steps)=>(
                        <StepsinList 
                        name={steps.stepname}
                        dueDate={steps.stepdudate}
                        status={steps.stepstatus}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
export default Steps