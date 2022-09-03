import './todo.css'
import { FaTrashAlt, FaPenAlt, FaRegClock } from 'react-icons/fa'
import Input from './Input'
import Edit from './Edit'
const Todo = ({ todolist, showedit, editTodo, removeditpage, savedit, edititle, editdescription, editdate, edithour, editminutes, prevcontent, deleteTodo }) => {


  return (
    <>
      {todolist.map((items, index) => {
        return (
          <>
            <div className='todolist'>
              <div>
                <div>
                  <p className='todoheading'>{items.todoTitle}</p>
                  <p className='todobody'>{items.todoDescription}</p>
                  <p className='time'>{items.todoHour === '' && items.todoMinutes === '' ? '' : <span><span><FaRegClock /> </span><span>{items.todoHour}</span>:<span>{items.todoMinutes}</span> pm</span>} </p>
                </div>
                <div>
                  <button style={{ color: 'blue' }} onClick={() => editTodo(index)}> <FaPenAlt /> </button>
                  <button style={{ color: 'red' }} onClick={() => deleteTodo(index)} > <FaTrashAlt /> </button>
                </div>
              </div>

              <div>
                <p className='itemdate'>{items.todoDate}</p>
              </div>

            </div>
            {showedit && <Edit removeditpage={removeditpage} saveedit={savedit} title={edititle} description={editdescription} date={editdate} hour={edithour} minutes={editminutes} prev={prevcontent} />}
          </>
        )

      })

      }

    </>
  )
}

export default Todo