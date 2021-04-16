import React ,{useState} from 'react';

// import Home from './Home';
// import Seconds from './About';
// import Todo from './Todo';
// import './index.css';
// import Todo from './Todo';
// import IconLabelButtons from './Reactstrap';
// import Apps from './Login'
// import Login from './Login';
// import Logout from './Logout';
// import Prompt from './Prompt';
// import Authenti from './Authenti';
// import Reactstrap from './Reactstrap';
// import New from './New';
// import Fancy from './Fancy';
// import Count from './Counter';
import  Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTodo from './Components/AddTodo'
// import Tasks from './Components/Tasks';

const App =()=>{  
       
    const [tasks,setTask]=useState([
  
    
    
        {
            //'Metting at the cafe
            id:1,
            agenda:'Happy new year',
            time:'2078-01-01',
            completed:false,
    },
    
    
    
    // {  id:2,
    //     agenda:'Taking Coding notes',
    
    //     time:'2022-01-12',
    //     completed:false,
    // },
    
    // {
    //     id:3,
    //     agenda:'Sleeping early during schools',
    
    // time:'2020-12-02',
    // completed:false,
    // },
   
    
    
    ])

//  const addtodo=add=>{
//      const newtodo=[... tasks,{add}]
//      newtodo.join(add)
//      setTask(newtodo)



//  }   

const AddTodlist=task=>{

const addtask={... task}
setTask([...tasks,addtask])








}

 //delete todo    

 

    const deleteTask=id=>{
    //     const removetask=tasks.slice()

//  
const newtask=tasks.slice('')
// let newtask=[... tasks]
  newtask.splice(id,1)
  
  setTask(newtask)








}
     


        

    



return(
    




    <>
    <div className='container'>

    <Header title={'Todo list '} />
        <AddTodo onAdd={AddTodlist} key={tasks.id}/>
    {/* <Tasks tasks={tasks} onDelete={deleteTask}/> */} 
    {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} />:'Delete completed ..'}

  

    </div>

  

   
    </>
);



}

  



export default App;
