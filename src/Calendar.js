import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const locales = {
    "es-MX": require ("date-fns/locale/es")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "meeting",
        allDay: true,
        start: new Date(2022, 8, 0),
        end: new Date(2022, 8, 0)
    },
    {
        title: "vacation",
        start: new Date( 2022, 8, 0),
        end: new Date(2022, 8, 0)
    },
    {
        title: "conference",
        start: new Date(2022, 8, 0),
        end: new Date(2022, 8, 0)
    },
]


function App() {

    const [newEvent, setNewEvent] = useState({title: "", start: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className='App'>
            <h1>Calendario PC</h1>
            <h2>Agregar evento</h2>
            <div>
                <input type="text" placeholder='Agrega titulo' style={{ width: "20%" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                
                <DatePicker placeholderText="Fecha inicio" style={{ marginRight: "10px" }}
                    selected={newEvent.start } onChange ={(start) => setNewEvent({...newEvent, start})} />
                <DatePicker placeholderText="Fecha fin"
                    selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Agregar evento</button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccesor='start'
                andAccessor='end'
                style={{ height: 500, margin: '50px' }} />
        </div>
    )
}

export default App;