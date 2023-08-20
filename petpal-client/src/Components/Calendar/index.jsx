import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction" 

function Calendar(userId) {
//   const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const[clicked, setClicked] = useState(false)
  useEffect(() => {
    // saveEvent()
    fetchEvents();

    
  }, []);


  useEffect(() => {
    if(clicked){saveEvent()
    setClicked(!clicked)}
    
    // fetchEvents();

    
  }, [clicked]);

  const handleDateClick = (arg) => {
    
    const date = arg.dateStr;
    events.some(e => e.date == date) ? setEvents(events.filter(e => e.date != date)):setEvents([...events, {'date':date}]);
    console.log(events)
    // saveEvent()
    setClicked(!clicked)
   
  };

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

  const saveEvent = async() => {
console.log(userId)
    const id = userId.userId
   
       console.log(JSON.stringify(events)) 
       const ev = JSON.stringify(events)
    
    const response = await fetch(`http://localhost:5000/service/add-events/${id}`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
        },
        body: JSON.stringify({
            events:ev
           
    })
      
     
    });
    const data = await response.json();
    console.log(data)
    let obj = JSON.parse(data)
    console.log(obj)
    // setEvents([...events, data]);
   
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      selectable={true}
    //   select = 
      dateClick={handleDateClick}
    //   events={events}
    events = {events}
      eventBackgroundColor= '#378006'
    />
  );
}

export default Calendar;
