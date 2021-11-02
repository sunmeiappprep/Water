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
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  this.props.onCheckin(`${date}/${month}/${year}`);    
  this.setState({in:[date,month,year]})        

}

onhandlecheckout = (e) => {
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
  this.props.onCheckout(`${date}/${month}/${year}`);    
  this.setState({out:[date,month,year]})        
}


disableDate(e){
  // e.preventDefault()
  // e => date.getDay()  10
  // console.log(e.date.getDay())
  // activeStartDate
}

datedisabler(check_in,check_out){
  for (const [index, value] of elements.entries()) {
    if (asd){
      console.log("asd")
    }
  } 
}

isDateDisabled = ({date, view}) => {
  // console.log(date)
  // let arr = []
  // let check = (Date.parse("11-14-21"))
  // let check =  new Date(2021, 12,25); 
  let from = new Date(2021, 10-1,24); 
  let to = new Date(2022, 11-1,31); 
  let check = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()); 
  check > from && check < to
  // let realdate = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()); 
  // let b = `${date.getMonth()}${date.getDate()}${date.getFullYear()}`
  // console.log(x  )
  // console.log(x)
  let test = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2021, 2-1,24) 
  && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2021, 11-1,31); 
  // let test4 = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2021, 2-1,24) 
  // && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2021, 11-1,31); 

  let test4 = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2022, 0-1,1) 
  && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2022, 0-1,12); 
  // let test = date.getMonth() === 10 && date.getDate() >= 17 && date.getFullYear() <= 2021 && 
  // !(date.getMonth() < 11 && date.getDate() <= 24 && date.getFullYear() <= 2021)

  // date.getMonth() >= 0 && date.getFullYear() <= 2022 &&  !(date.getMonth() > 2 && date.getFullYear() <= 2022) 
  // console.log(arr)
  // let test2 = date.getMonth() >= 11 && date.getDate() >= 25 && date.getFullYear() <= 2021 && 
  // (date.getMonth() <= 11 && date.getDate() <= 31 && date.getFullYear() <= 2021)

  // let test4 = date.getMonth() >= 5 && date.getDate() >= 11 && date.getFullYear() <= 2022 && 
  // (date.getMonth() <= 7 && date.getDate() <= 25 && date.getFullYear() <= 2022)
  // let test2 =  date.getMonth() > 5 && date.getFullYear() === 2022 &&
  // date.getMonth() <= 7 && date.getFullYear() === 2022 &&  !(date.getMonth() > 10 && date.getFullYear() === 2022) 
  // test += `${test || date.getMonth() === 6 && date.getFullYear() <= 2022}`
  let test3 = test || test4
  return (
    // test || test2
    test4
    
    
    // date.getMonth() === 1 && date.getDate() > 5 && date.getFullYear() <= 2022

    // date.getMonth() === 1 && date.getDate() === 5 && date.getFullYear() === 2022
    // this.datedisabler()
    // date.getFullYear() === 2022 
    // &&
    // !dates.includes(formatISO(date, {representation: 'date'}))
  );
};

    render() {
    console.log(this.state.in)
    console.log(this.state.out)

 
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