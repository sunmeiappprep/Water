// import React from 'react'
import React, { useState,Component } from 'react';
import Calendar from 'react-calendar';


class BookingDate extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        onChange : new Date(),
        value : new Date(),
        in: "",
        out: "",
        today:new Date(),
        valueCheckin:  new Date(),
        valueCheckOut: new Date(),
        min:new Date(),

      bookings: "booking",
    
    }
    
    // this.onhandlecheckin = onhandlecheckin.bind(this)
}

console(e){
  // console.log(e)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  // console.log(date,month,year)
}
  
onhandlecheckin = (e) => {
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  this.props.onCheckin(`${date}/${month}/${year}`);    
  // console.logx
  this.setState({in:[date,month,year]})        

}

onhandlecheckout = (e) => {
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  this.props.onCheckout(`${date}/${month}/${year}`);    
  this.setState({out:[date,month,year]})       
  console.log(e)
  this.setState({min:e}) 
}




checkifarrayhastrue(array){
  if (array.includes(true)){
    return true
  }
}

isDateDisabled = ({date, view}) => {
  // console.log(x)
  // if (this.state.bookings !== null){
  //   console.log(this.state)
  // }

  let checkifarrayhastrue = this.checkifarrayhastrue

  let bookings = [
    [2021, 11,17,2021,11,24],
    [2022, 1,1,2022, 1,12],
    [2022, 3,3,2022, 3,20],
    [2022, 4,17,2022, 6,20],
    [2021, 11,1,2021,11,2]


  ]

  let finalarr2 = []

  for (let x = 0; x < bookings.length; x++){
    finalarr2.push( new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) >= new Date(bookings[x][0], bookings[x][1],bookings[x][2]) 
    && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) <= new Date(bookings[x][3], bookings[x][4],bookings[x][5]))
  }


  


  if( finalarr2.length === undefined )return null


  return (

  checkifarrayhastrue(finalarr2)
  


  );
};

    render() {

 
        return (
        <div className="calendar-con">
          
          <div className="top-text">Select check-in date</div>
          <div className="sub-text">Add your travel dates for exact pricing</div>
          <div className='two-calendar'>
          <div className="calendar">
            <Calendar 
            onChange={this.onhandlecheckin}
            value={this.state.valueCheckin}
            showNeighboringMonth={false}
            tileDisabled={this.isDateDisabled}
            minDate={this.state.min}
          />
          </div>

        <Calendar className="calendar"
          onChange={this.onhandlecheckout}
          value={this.state.valueCheckOut}
          showNeighboringMonth={false}
          tileDisabled={this.isDateDisabled}
          minDate={new Date()}

        />
          </div>

        </div>
        )
    }
}

export default BookingDate;