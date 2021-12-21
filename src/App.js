import './App.css';
import React,{useState} from 'react'
import Projects from './PList';
import Navigation from './navigation';
import Steps from './stepofproject';
import Addtodo from './addtodo';
import AddPform from './addprojectform';



function App() {
  //when api is built, this portion will be replaced with api calls
  
  const [listOfProjects, setlistOfProjects] = useState([{
    'projectname': 'defeault',
    'duedate': 'xxxx',
    'status': false,
    'steps': [{
        'stepname': 'defaultx',
        'stepdudate': 'xxxx',
        'stepstatus': false,
    }]
},
{
  'projectname': 'defeault3',
  'duedate': 'xxxx3',
  'status': false,
  'steps': [{
      'stepname': 'default33',
      'stepduedate': 'xxxx3',
      'stepstatus': false,
  }]
},
{
  'projectname': 'defeault66',
  'duedate': 'xxxx35',
  'status': false,
  'steps': [{
      'stepname': 'default3543',
      'stepduedate': 'xxxx354',
      'stepstatus': false,
  }]
}])

const testing = (inputproject) => {
  const testOne = inputproject
  setlistOfProjects(listOfProjects.concat(testOne))
  console.log(listOfProjects)
}

const [showProject, setProject] = useState(0)
const displayProject = (e) => {
  const newvalue = e.target.value
  setProject(newvalue)
  console.log(newvalue)
}

const [toggle, settoggle] = useState(true)
const addProject = () => {
  settoggle(!toggle)
}

const whereismyobject = () => {
  console.log(listOfProjects)
}

  return (
    <div className="App">
      <Navigation />
      {
        toggle === true ?(
        <div>
          <header className="App-header">
            <button onClick = {whereismyobject}></button>
            <br />
              PROJECT MANAGEMENT TOOL
            <br />
            <p>Project List:</p>
            <Projects 
            object={listOfProjects}
            displayProject = {displayProject}
            />
            <Addtodo addProject = {addProject}/>
          </header>
          <Steps 
          object={listOfProjects}
          showProject = {showProject}
          />
        </div>
        ) : (
        <div>
          <AddPform 
          addProject = {addProject}
          testing = {testing}
          listOfProjects = {listOfProjects}
          />
        </div>
        )
      }
    </div>
  );
}

export default App;
