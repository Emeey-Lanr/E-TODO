 import './input.css'
 import {FaTimes} from 'react-icons/fa'
const Edit = ( {removeditpage,saveedit, title, description, date, hour, minutes, prev})=> {
  return (
    <div className="editspace">
        <div className='editspaceform'>
            <div className='canceleditspace'><button onClick={removeditpage}><FaTimes/> </button></div>
            <h3>Edit Task</h3>
            <p>Title</p>
            <input type="text" className='edittitlespace' placeholder={`${prev.todoTitle}`} onChange={(e)=>title(e.target.value)} />
            <p>Description</p>
            <textarea name=""  className='editdecripspace' placeholder={`${prev.todoDescription}`} onChange={(e)=>description(e.target.value)}></textarea>
            <input type="date" onChange={(e)=>date(e.target.value)}/>
            <div className='changetime'>
              <span>Change Time</span>
            <input type="text" />
            <input type="text" />
            </div>
            <div className='editspacebtn'>
            <button onClick={saveedit}>Save Changes</button>
            </div>
        </div>

    </div>
  )
}

export default Edit