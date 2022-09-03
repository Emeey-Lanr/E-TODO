import {FaPlus} from 'react-icons/fa'
function Addtask({addtaskbtn}) {
  return (
    <div className='addtask'>
       <button onClick={addtaskbtn}><span><FaPlus/></span> Add Task</button>
    </div>
  )
}

export default Addtask