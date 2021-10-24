import DatePicker from "react-datepicker";  
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";


function Calendar({ children }) {

const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker selected={startDate}
        onSelect={(date) => {
         setStartDate(date);
        }}
        inline
        />
    );
  }
  
  export default Calendar;