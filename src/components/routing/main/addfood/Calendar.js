import DatePicker from "react-datepicker";  
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";


function Calendar(props) {

    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
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
    );
  }
  
  export default Calendar;