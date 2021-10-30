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
    // this.onhandlecheckin = onhandlecheckin.bind(this)
}

console(e){
  console.log(e)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  console.log(date,month,year)
}
  
onhandlecheckin = (e) => {
  // var lang = this.dropdown.value;
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  this.props.onCheckin(`${date}/${month}/${year}`);            
}

onhandlecheckout = (e) => {
  // var lang = this.dropdown.value;
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  this.props.onCheckout(`${date}/${month}/${year}`);            
}


disableDate(e){
  // e.preventDefault()
  // e => date.getDay()  10
  // console.log(e.date.getDay())
  // activeStartDate
}

isDateDisabled = ({date, view}) => {
  console.log(date)
  return (
    date.getDate() === 5 && date.getFullYear() === 2021 
    // date.getFullYear() === 2022 
    // &&
    // !dates.includes(formatISO(date, {representation: 'date'}))
  );
};

    render() {
    // console.log(this.props)

      // const [value, onChange] = useState(new Date());
        return (
        <div className="two-calendar">
          <Calendar
          onChange={this.onhandlecheckin}
          value={this.state.value}
          tileDisabled={this.isDateDisabled}
        />
        <Calendar
          onChange={this.onhandlecheckout}
          value={this.state.value}
        />
        </div>
        )
    }
}

export default BookingDate;