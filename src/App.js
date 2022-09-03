import Landingpage from './components/Landingpage'
import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import Icon from './components/Icon'
import Input from './components/Input'
import Notodo from './components/Notodo'
import Addtask from './components/Addtask'
const App  = ()=>{
  const ddate = new Date()
  const houur = ddate.getHours()
  const [landing, setlanding] = useState(true)
  const [notodo, setnotodo] = useState(true)
  const [todo, setodo] = useState(false)
  const [input, setinput]= useState(false)
  const [addtaskbtn, setaddtaskbtn] = useState(true)
  //================EDIT=======================
  const [hideedit, sethideedit] = useState(false)
  const [editbtn, seteditbtn] = useState(true)
  const [ediit, seteditindex] = useState(0)
  const [edittitle, seteditTitle] = useState('')
  const [editdescription, seteditDescription] = useState('')
  const [editdate, seteditdate] = useState('')
  const [editeditlisthour, seteditlisthours] = useState('')
  const [edittodominutes, setteditodominutes] = useState('')
  const [prevcontent, setprev]= useState({})
  const [showinfow, setshowinfo] = useState(false)
  let editedtask ={todoTitle:edittitle, todoDescription:editdescription, todoDate:editdate, todoHour:editeditlisthour, todoMinutes:edittodominutes}

  //=========================================== 
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setdate] = useState('')
  const [listhour, setlisthours] = useState('')
  const [todominutes, settodominutes] = useState('')
  const [hours, sethours] = useState(ddate.getHours())
  const [minutes, setminutes] = useState(ddate.getMinutes())
  const [todolist, settodolist]= useState([])
  let todoDetails = {todoTitle:title, todoDescription:description, todoDate:date, todoHour:listhour, todoMinutes:todominutes}
useEffect(()=>{
  setTimeout(()=>{
    setlanding(false)
    console.log(hours, minutes)
    setshowinfo(true)
},5000)
})
 


  const addtask = ()=>{
   setinput(true)
   setaddtaskbtn(false)
  }
  const removetaskinput = ()=>{
  setinput(false)
  setaddtaskbtn(true)
  }
  const showtodolist =()=>{
    setinput(false)
    setodo(true)
    setaddtaskbtn(true)
    console.log(title, description, date)
    settodolist([...todolist,todoDetails])
  }
  const editTodo = (id)=>{
    console.log(id)
     seteditindex(id)
     
     sethideedit(true)
     setprev(todolist[id])
     console.log(prevcontent)
     
//  seteditbtn(false)
  }
  const saveeditTodo = ()=>{
    todolist[ediit] = editedtask
    settodolist(todolist)
    sethideedit(false)

  }
  const removeeditpage = ()=>{
    sethideedit(false)
  }
  const deleteTodo = (id)=>{
    settodolist(todolist.filter((items, index)=>{
      return(
        id !== index
      )
    }))
  }
  return(
    <>
    {landing && <Landingpage/>}
   {showinfow && <div>
      <h1>E-TODO</h1>
      {notodo && <Notodo/>}
      {todo && <Todo todolist={todolist} showedit={hideedit} editTodo={editTodo} editid={ediit} savedit={saveeditTodo} editbtn={editbtn} removeditpage={removeeditpage} edititle={seteditTitle} editdescription={seteditDescription} editdate={seteditdate} edithour={seteditlisthours} editminutes={setteditodominutes} prevcontent={prevcontent} deleteTodo={deleteTodo}/>}
      {input && <Input removeinput={removetaskinput} showlist={showtodolist} title={setTitle} description={setDescription} date={setdate} />}
      {addtaskbtn && <Addtask addtaskbtn={addtask}/>}
    </div>
}
    </>
  )
}
export default App
