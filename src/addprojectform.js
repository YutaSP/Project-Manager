import {useState} from 'react'

function AddPform(props){
    const addProject = props.addProject
    const listOfProjects = props.listOfProjects
    const testing = props.testing

    const [Projects, setProjects] = useState(
        {
            'projectname': '',
            'duedate': '',
            'status': false,
            'steps': [{
                'stepname': '',
                'stepduedate': '',
                'stepstatus': false,
            }]
        }
    )
    
    function set(e){
        setProjects((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    
    
   function test (){
    const testOne = Projects
    testing(testOne)
        
    console.log(listOfProjects) 
   }
    
    return(
        <div>
            <button onClick={test}>test</button>
            <form onSubmit={addProject}>
                <input  onChange = {set} type="pname" name="projectname"/>
                <input  onChange = {set} type="duedate" name="duedate"/>
                <input id = "1" type="stepname" name="stepname"/>
                <input  onChange = {set} type="duedate" name="stepduedate"/>
                <input  onChange = {set} type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default AddPform