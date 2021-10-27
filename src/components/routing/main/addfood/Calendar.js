import DatePicker from "react-datepicker";  
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";


function Calendar(props) {

    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        props.getCurrentDate(selectedDate);
        console.log(selectedDate)
      },[]);


    return (
      <div className="calendar">
        <DatePicker selected={selectedDate}
        onSelect={(date)=>{
            setSelectedDate(date)
            props.getCurrentDate(date);
            console.log(selectedDate)
            console.log(date)
            }
        }
        inline
        />
        </div>
    );
  }
  
  export default Calendar;