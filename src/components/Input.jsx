import './input.css'
import {FaPen, FaPlus} from 'react-icons/fa' 
import { useState } from 'react'
const Input = ({removeinput, showlist, title, description, date})=> {
    const [modalsettime, setmodalsettime] = useState(false)
    const addtime = ()=>{
        setmodalsettime(true)
    }
    
  return (
    <>
     <div className='inputhouse'>
        <div className='input'>
        <input type="text" className='title' placeholder='Title'  onChange={(e)=>title(e.target.value)}/>
      <textarea className='description' placeholder={`Description`} onChange={(e)=>description(e.target.value)}></textarea>
      <div>
        <input type="date"  className='date' onChange={(e)=>date(e.target.value)}/>
        <div className='setimebtn'>
            <button onClick={()=>addtime()}><FaPlus/> Add Time</button>
        </div>
      </div>
    </div>
 </div>
 <div className='addremovebtn'>
 <button className='cancel' onClick={removeinput}>Cancel</button>
 <button className='add' onClick={showlist}>Add</button>
</div>
{modalsettime &&
<div className='settime'>
    <div>
        <label>Hour</label>
       <input type="text" onChange={(e)=>hour(e)}/>
       <label>Minutes</label>
        <input type="text" onChange={(e)=>minutes(e)}/>
     <button onClick={()=>addsetime()}>Add</button>
    </div>
 
</div>
}
    </>
    

  )
}

export default Input