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
      //   bookings:[
      //     {
      //         "id": 109,
      //         "check_in": "2000-02-01",
      //         "check_out": "2001-02-01",
      //         "listing_id": 20,
      //         "renter_id": 6,
      //         "renter": {
      //             "id": 6,
      //             "username": "Sun",
      //             "password_digest": "$2a$12$aRTc/Vb6m7NS06Z.TjZTfO9Wz4ihCew8OBQoJLye5rchamRhjk3BC",
      //             "session_token": "YDZiKBk971jYN81JfkE-kw",
      //             "email": "Sun@gmail.com",
      //             "first_name": "Sun",
      //             "last_name": "Mei",
      //             "created_at": "2021-10-20T01:18:03.323Z",
      //             "updated_at": "2021-10-27T00:39:30.301Z"
      //         },
      //         "listing": {
      //             "id": 20,
      //             "title": "Bright and Spacious 1-Bedroom with Full Kitchen!",
      //             "price": 61,
      //             "address": "8451 ave",
      //             "city": "Honolulu",
      //             "description": "Entire rental unit hosted by Ian",
      //             "num_guest": 3,
      //             "num_beds": 1,
      //             "longitude": -158.045553575206,
      //             "latitude": 21.3042696563979,
      //             "host_id": 4,
      //             "created_at": "2021-10-20T01:18:03.393Z",
      //             "updated_at": "2021-10-20T01:18:22.107Z"
      //         }
      //     },
      //     {
      //         "id": 110,
      //         "check_in": "2000-02-02",
      //         "check_out": "2001-12-02",
      //         "listing_id": 20,
      //         "renter_id": 6,
      //         "renter": {
      //             "id": 6,
      //             "username": "Sun",
      //             "password_digest": "$2a$12$aRTc/Vb6m7NS06Z.TjZTfO9Wz4ihCew8OBQoJLye5rchamRhjk3BC",
      //             "session_token": "YDZiKBk971jYN81JfkE-kw",
      //             "email": "Sun@gmail.com",
      //             "first_name": "Sun",
      //             "last_name": "Mei",
      //             "created_at": "2021-10-20T01:18:03.323Z",
      //             "updated_at": "2021-10-27T00:39:30.301Z"
      //         },
      //         "listing": {
      //             "id": 20,
      //             "title": "Bright and Spacious 1-Bedroom with Full Kitchen!",
      //             "price": 61,
      //             "address": "8451 ave",
      //             "city": "Honolulu",
      //             "description": "Entire rental unit hosted by Ian",
      //             "num_guest": 3,
      //             "num_beds": 1,
      //             "longitude": -158.045553575206,
      //             "latitude": 21.3042696563979,
      //             "host_id": 4,
      //             "created_at": "2021-10-20T01:18:03.393Z",
      //             "updated_at": "2021-10-20T01:18:22.107Z"
      //         }
      //     },
      //     {
      //         "id": 111,
      //         "check_in": "2000-04-02",
      //         "check_out": "2001-11-02",
      //         "listing_id": 20,
      //         "renter_id": 6,
      //         "renter": {
      //             "id": 6,
      //             "username": "Sun",
      //             "password_digest": "$2a$12$aRTc/Vb6m7NS06Z.TjZTfO9Wz4ihCew8OBQoJLye5rchamRhjk3BC",
      //             "session_token": "YDZiKBk971jYN81JfkE-kw",
      //             "email": "Sun@gmail.com",
      //             "first_name": "Sun",
      //             "last_name": "Mei",
      //             "created_at": "2021-10-20T01:18:03.323Z",
      //             "updated_at": "2021-10-27T00:39:30.301Z"
      //         },
      //         "listing": {
      //             "id": 20,
      //             "title": "Bright and Spacious 1-Bedroom with Full Kitchen!",
      //             "price": 61,
      //             "address": "8451 ave",
      //             "city": "Honolulu",
      //             "description": "Entire rental unit hosted by Ian",
      //             "num_guest": 3,
      //             "num_beds": 1,
      //             "longitude": -158.045553575206,
      //             "latitude": 21.3042696563979,
      //             "host_id": 4,
      //             "created_at": "2021-10-20T01:18:03.393Z",
      //             "updated_at": "2021-10-20T01:18:22.107Z"
      //         }
      //     },
      //     {
      //         "id": 112,
      //         "check_in": "2021-10-07",
      //         "check_out": "2021-10-23",
      //         "listing_id": 20,
      //         "renter_id": 6,
      //         "renter": {
      //             "id": 6,
      //             "username": "Sun",
      //             "password_digest": "$2a$12$aRTc/Vb6m7NS06Z.TjZTfO9Wz4ihCew8OBQoJLye5rchamRhjk3BC",
      //             "session_token": "YDZiKBk971jYN81JfkE-kw",
      //             "email": "Sun@gmail.com",
      //             "first_name": "Sun",
      //             "last_name": "Mei",
      //             "created_at": "2021-10-20T01:18:03.323Z",
      //             "updated_at": "2021-10-27T00:39:30.301Z"
      //         },
      //         "listing": {
      //             "id": 20,
      //             "title": "Bright and Spacious 1-Bedroom with Full Kitchen!",
      //             "price": 61,
      //             "address": "8451 ave",
      //             "city": "Honolulu",
      //             "description": "Entire rental unit hosted by Ian",
      //             "num_guest": 3,
      //             "num_beds": 1,
      //             "longitude": -158.045553575206,
      //             "latitude": 21.3042696563979,
      //             "host_id": 4,
      //             "created_at": "2021-10-20T01:18:03.393Z",
      //             "updated_at": "2021-10-20T01:18:22.107Z"
      //         }
      //     },
      //     {
      //         "id": 113,
      //         "check_in": "2023-10-11",
      //         "check_out": "2024-04-26",
      //         "listing_id": 20,
      //         "renter_id": 6,
      //         "renter": {
      //             "id": 6,
      //             "username": "Sun",
      //             "password_digest": "$2a$12$aRTc/Vb6m7NS06Z.TjZTfO9Wz4ihCew8OBQoJLye5rchamRhjk3BC",
      //             "session_token": "YDZiKBk971jYN81JfkE-kw",
      //             "email": "Sun@gmail.com",
      //             "first_name": "Sun",
      //             "last_name": "Mei",
      //             "created_at": "2021-10-20T01:18:03.323Z",
      //             "updated_at": "2021-10-27T00:39:30.301Z"
      //         },
      //         "listing": {
      //             "id": 20,
      //             "title": "Bright and Spacious 1-Bedroom with Full Kitchen!",
      //             "price": 61,
      //             "address": "8451 ave",
      //             "city": "Honolulu",
      //             "description": "Entire rental unit hosted by Ian",
      //             "num_guest": 3,
      //             "num_beds": 1,
      //             "longitude": -158.045553575206,
      //             "latitude": 21.3042696563979,
      //             "host_id": 4,
      //             "created_at": "2021-10-20T01:18:03.393Z",
      //             "updated_at": "2021-10-20T01:18:22.107Z"
      //         }
      //     }
      // ],
      bookings: "booking",
        // finalarr:[[new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2021, 2-1,24) 
        //   && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2021, 11-1,31), new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2022, 0-1,1) 
        //   && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2022, 0-1,12) ]]
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

datechecker(x){
  console.log(x)
  return ("asd")
}

checkarry(array){
  if (array.includes(true)){
    return true
  }
  // console.log(this.state.bookings)git
}

isDateDisabled = ({date, view}) => {
  // console.log(x)
  if (this.state.bookings !== null){
    console.log(this.state)
  }
  // let arr = []
  // let check = (Date.parse("11-14-21"))
  // let check =  new Date(2021, 12,25); 
  // let from = new Date(2021, 10-1,24); 
  // let to = new Date(2022, 11-1,31); 
  // let check = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()); 
  // check > from && check < to
  let checkarry = this.checkarry
  // for (let x = 0; x < 4; x++ ){
  //   console.log(x)
  // }
  // let realdate = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()); 
  // let b = `${date.getMonth()}${date.getDate()}${date.getFullYear()}`
  // console.log(x  )
  // console.log(x)
  let finalarr = [
    new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) >= new Date(2021, 11,17) 
    && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) <= new Date(2021, 11,24), 
    new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) >= new Date(2022, 1,1) 
    && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) <= new Date(2022, 1,12),
    new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) >= new Date(2022, 3,3) 
    && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) <= new Date(2022, 3,20)
  ]
  

  // let test = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2021, 2-1,24) 
  // && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2021, 11-1,31); 
  // // let test4 = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2021, 2-1,24) 
  // // && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2021, 11-1,31); 

  // let test4 = new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) > new Date(2022, 0-1,1) 
  // && new Date(date.getFullYear(), parseInt(date.getMonth())-1,date.getDate()) < new Date(2022, 0-1,12); 

  // let finalarr = [test,test4]
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
  // let test3 = test || test4
  // for (let x = 0; x < ; x++ ){
  //   console.log(x)
  // }
  if( finalarr.length === undefined )return null
  return (
    // console.log(finalarr)
  //  (finalarr.length === 0 ) ?
  //  null :
  checkarry(finalarr)



     
  // this.state.finalarr.some()

    
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