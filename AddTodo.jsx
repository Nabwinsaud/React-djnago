import {useState} from 'react';

const AddTodo=({onAdd})=>{
    const [agenda,setAgenda]=useState('')
    const [datetime,setDatetime]=useState('')
    const [completed,setCompleted]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!agenda){
            alert('please enter task!')
            return 

        }        onAdd({agenda,datetime,completed})
        setAgenda('')
        setDatetime('')
        setCompleted(false)



    }
return(

    <>

<form className='add-form' onSubmit={onSubmit}>



<div className='form-control '>


<label>  Todo: </label>


<input type='text' placeholder='Add Task:' className='inputs' value={agenda} onChange={(e)=>setAgenda(e.target.value)}



/>
    
</div>

<div className=' form-control'>


<label> Date and time: </label>


<input type='text' placeholder='Date and time:' className='inputs'
value={datetime} onChange={(e)=>setDatetime(e.target.value)}


/>
    
</div>
<div className=' form-control form-control-check'>


<label> Completed: </label>


<input type='checkbox' placeholder  className='inputs'
checked={completed}

value={completed} onChange={(e)=>setCompleted(e.currentTarget.checked)}


/>

    
</div>
<input type='submit' value='save' style={{display:'flex',width:'100%' ,padding:'8px' ,backgroundColor:'#12B0E8' ,fontStyle:'-moz-initial' ,borderRadius:'6px'}} />





    </form>

    </>
)

}
export default AddTodo