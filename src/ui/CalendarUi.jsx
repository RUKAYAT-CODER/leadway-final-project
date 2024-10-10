import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarUi = () => {
  const [date, setDate] = useState(new Date())
  const customStyle = {
    borderRadius: '15px',
    overflow: 'hidden'
  }
  return (
    <div style ={customStyle} className='calendar-container'>
      <Calendar on onChange={setDate} value={date} />
    </div>
  )
}

export default CalendarUi
