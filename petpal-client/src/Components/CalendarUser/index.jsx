import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction" 

function CalendarUser(userId) {
//   const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
 
  useEffect(() => {
    // saveEvent()
    fetchEvents();

    
  }, []);



  const fetchEvents = async () => {
    console.log("line 27" ,userId.userId)
    const id = userId.userId
    const response = await fetch(`http://localhost:5000/service/get-events/${id}`);
    if(response.status ===201){
        const data = await response.json();
        const e = JSON.parse(data.events)
    console.log(e)
    if(e){setEvents(e);}
    
    }
    
  };


  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
    //   selectable={true}
    //   select = 
    //   dateClick={handleDateClick}
    //   events={events}
    events = {events}
      eventBackgroundColor= '#378006'
    />
  );
}

export default CalendarUser;
