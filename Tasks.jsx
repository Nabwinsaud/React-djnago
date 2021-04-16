// import { FaTimes } from 'react-icons/fa';

import Task from './Task';
// import {BsFillBellFill} from 'react-icons/bs';

import {BsTrash} from 'react-icons/bs'
// import { ArrowLeft } from '@material-ui/icons';


const Tasks=({tasks,onDelete,onAdd})=>{
  
   return (


      
        <>
       
{tasks.map((task)=>( 
    <p key={task.id} className='task ' onDelete={onDelete} onAdd={onAdd} >{task.agenda}  <BsTrash style={{pointer:'cursor',color:'green' ,marginLeft:'98%' } } onClick={onDelete} />
    <p className='task1' key={task.id}> {task.time} </p>
    </p>))}


  



{/* 
{tasks.map((task)=>( <Task key={task.id} task={task} ><p>{task.agenda}</p> </Task> )) }  */}



        </>
    )



}



export default Tasks;


