import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';



class BookingDate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bookings:[],
        }
        const [value, onChange] = useState(new Date());

        return (
            <div>
              <Calendar
                onChange={onChange}
                value={value}
              />
            </div>
          );
        }
}
    

export default BookingDate;