import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react'

const CalendarPage = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting with Investor', date: '2026-03-28' },
    { title: 'Startup Review', date: '2026-04-01' },
  ])

  const handleDateClick = (arg: any) => {
    const title = prompt('Enter meeting title:')
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }])
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Meeting Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
      />
    </div>
  )
}

export default CalendarPage