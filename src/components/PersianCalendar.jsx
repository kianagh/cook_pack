import React, { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';


function PersianCalendar() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div>
      <h2> </h2>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        calendarType="persian"
        locale="fa" 
      />
      {selectedDay && (
        <p>
          {/* Selected Date: {`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`} */}
        </p>
      )}
    </div>
  );
}

export default PersianCalendar;