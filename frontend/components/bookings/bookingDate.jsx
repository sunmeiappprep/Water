// import React from 'react'
import React, { useState,Component } from 'react';
import Calendar from 'react-calendar';


class BookingDate extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        onChange : new Date(),
        value : new Date()
    }
}

console(e){
  console.log(e)
}
  
    render() {
      // const [value, onChange] = useState(new Date());
        return (
        <div>
          <Calendar
          onChange={this.console}
          value={this.state.value}
        />
        </div>
        )
    }
}

export default BookingDate;