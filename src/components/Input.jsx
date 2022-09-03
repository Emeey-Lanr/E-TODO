import './input.css'
import { FaPen, FaPlus } from 'react-icons/fa'
import { useState } from 'react'
const Input = ({ removeinput, showlist, title, description, date, listhour, minutes, addsetime, addtime, modalsettime, timeadd, timegone }) => {

  return (
    <>
      <div className='inputhouse'>
        <div className='input'>
          <input type="text" className='title' placeholder='Title' onChange={(e) => title(e.target.value)} />
          <textarea className='description' placeholder={`Description`} onChange={(e) => description(e.target.value)}></textarea>
          <div>
            <input type="date" className='date' onChange={(e) => date(e.target.value)} />
            <div className='setimebtn'>
              <button onClick={addtime}><FaPlus /> Add Time</button>
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
            <p>
              <span onClick={timegone} style={{ color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}>&times;</span>
            </p>
            <label>Hour</label>
            <input type="number" onChange={(e) => listhour(e.target.value)} />
            <label>Minutes</label>
            <input type="number" onChange={(e) => minutes(e.target.value)} />
            <p style={{ textAlign: 'center', color: "blue", fontWeight: '500' }}>{timeadd}</p>
            <button onClick={addsetime}>Add</button>
          </div>

        </div>
      }
    </>


  )
}

export default Input