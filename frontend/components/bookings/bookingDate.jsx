// import React from 'react'
import React, { useState,Component } from 'react';
import Calendar from 'react-calendar';
import BookingIndexItem from './booking_index_item_container';

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
        today:new Date(),
        dateDiff:-1,
        bookings: [],
        listingBookingArr:[],
        firstbooking:"a",
        toggleEdit:false,
        cc:""
    
    }
    this.removeOne = this.removeOne.bind(this)
    this.dateCallback  = this.dateCallback.bind(this)
    this.checkIfcurrentuserhavebooking = this.checkIfcurrentuserhavebooking.bind(this)

}

componentWillMount(){
  this.props.fetchBookings().then(bookings => this.setState({bookings:bookings.bookings}))
}

componentDidMount(){
  // let newArr = [];
  // let bookingsArr = this.state.bookings.bookings
  // for (let x = 0; x <this.state.bookings.length; x++){
  //   if (this.state.bookings[x].listing_id === this.props.listingId){
  //     newArr.push(bookingsArr[x])
  //   }
    
  // }BookingIndexItem
  // console.log(this.state.bookings)

  // this.setState({listingBookingArr:newArr})
}



removeOne(){
  // for (let x = 0; x <this.state.listingBookingArr.length; x++){
  //   if (this.state.listingBookingArr === this.props.listingId){

  //     newArr.push(this.state.bookings[x])
      
  //   }
  //   else{
  //     // console.log(this.state.bookings[x].listing_id,this.props.listingId)
  //   }
    
  // }
  // this.props.toggleEdit()

  if (this.state.toggleEdit === false){
    this.setState({toggleEdit: true});
  }
  else{
      this.setState({toggleEdit: false});
  }

  let newListingBookingArr = []

  if (this.state.listingBookingArr.length > 0){
    for (let x = 0; x < this.state.listingBookingArr.length; x++){
      if (this.state.listingBookingArr[x].renter_id !== this.props.currentUser){
        newListingBookingArr.push(this.state.listingBookingArr[x])
      }
    }

    
    this.setState({listingBookingArr:newListingBookingArr})
    
    this.props.onhandleDates(newListingBookingArr)
  }

}





componentDidUpdate(pP,pS){
  if(pS.bookings.length !== this.state.bookings.length){
    let newArr = [];
    for (let x = 0; x <this.state.bookings.length; x++){
      if (this.state.bookings[x].listing_id === this.props.listingId){

        newArr.push(this.state.bookings[x])
        
      }
      else{
      }
      
    }
  this.setState({listingBookingArr:newArr})
  this.checkIfcurrentuserhavebooking()
  }
  
 
}

console(e){
  // console.log(e)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const month = e.getMonth()+1;
  const date = e.getDate()
  const year = e.getFullYear()
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
  this.setState({min:e}) 

  var date1 = (this.state.today);
  var date2 = (this.state.min);
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  this.setState({dateDiff:Difference_In_Days})
  if(this.state.dateDiff >= 0){
    this.setState({min:e}) 
  }


}

dateCallback(date,event){


}

checkIfcurrentuserhavebooking(){

  for (let x = 0; x < this.state.listingBookingArr.length; x++){
    if (this.state.listingBookingArr[x].renter_id === this.props.currentUser && this.state.firstbooking === "a"){
       this.setState({firstbooking:this.state.listingBookingArr[x]})
    }
  }

}

showBooking(){
  <div>
    {
  this.state.firstbooking.id

    }
  </div>
}

checkifarrayhastrue(array){
  if (array.includes(true)){
    return true
  }
}

isDateDisabled = ({date, view}) => {
  // console.log(x)
  // if (this.state.bookings !== null){

  // }

  let checkifarrayhastrue = this.checkifarrayhastrue

  let bookings = [
    // [2021, 11,17,2021,11,24],
    // [2022, 1,1,2022, 1,12],
    // [2022, 3,3,2022, 3,20],
    // [2022, 4,17,2022, 6,20],
    // [2021, 11,1,2021,11,2]


  ]
  let testingbooking = [];
  let testingbooking2 = [];
  for (let x = 0; x < this.state.listingBookingArr.length; x++){
    testingbooking.push(this.state.listingBookingArr[x].check_in+"-"+ this.state.listingBookingArr[x].check_out) 
  }


  for (let x = 0; x < testingbooking.length; x++){
    testingbooking2.push(testingbooking[x].split("-"))
  }

  for (let x = 0; x < testingbooking2.length; x++){
    var arrayOfNumbers = testingbooking2[x].map(Number);
    // console.log(arrayOfNumbers)
    bookings.push(arrayOfNumbers)
  }
  // console.log(testingbooking)
  // console.log(bookings)

  let finalarr2 = []

  for (let x = 0; x < bookings.length; x++){
    finalarr2.push( new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) >= new Date(bookings[x][0], bookings[x][1]-1,bookings[x][2]) 
    && new Date(date.getFullYear(), parseInt(date.getMonth()),date.getDate()) <= new Date(bookings[x][3], bookings[x][4]-1,bookings[x][5]))
  }


  // console.log(this.state.listingBookingArr)
  


  if( finalarr2.length === undefined )return null

  // console.log("this is listingBookingArr",this.state.listingBookingArr)

  return (
  checkifarrayhastrue(finalarr2)


  );
};


    render() {
      if (this.state.listingBookingArr){
        this.props.handleFulllist(this.state.listingBookingArr)

        this.checkIfcurrentuserhavebooking()
      }
      // console.log(this.state.toggleEdit)
      // console.log(this.state.bookings.length)
      // console.log(this.state.dateDiff)
      // console.log("asds")
      // console.log(this.state.bookings)
      // let bookingsArr = this.state.bookings
      // for (let x = 0; x <bookingsArr.length; x++){
      //   console.log(bookingsArr[x])
      // // }
      // setInterval(() => {
      //       console.log(this.state.firstbooking)

        
      //   }, 1000);
      // let showBooking = this.showBooking()

      // checkIfcurrentuserhavebooking

      // if (this.state.firstbooking === "a"){

      // }
      // else{

      // }
      // const removeOne = this.removeOne;

      console.log(this.state.cc[0])
      // console.log(new Date())
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
            minDate={new Date()}
            nextAriaLabel="Next"
            navigationAriaLabel="Next"
            nextLabel="Next"
            prevLabel="Previous"
            next2Label={null}
            prev2Label={null}
            onActiveStartDateChange={({ action, activeStartDate, value, view }) => this.setState({cc:[activeStartDate,view]})}
            // navigationAriaLive=
         
          />
          </div>

        <Calendar className="calendar"
          onChange={this.onhandlecheckout}
          value={this.state.valueCheckOut}
          showNeighboringMonth={false}
          tileDisabled={this.isDateDisabled}
          minDate={new Date()}
          nextLabel="Next"
          prevLabel="Previous"
          next2Label={null}
          prev2Label={null}
          activeStartDate={this.state.cc[0]}



          // onClickDay={this.dateCallback}
          // activeStartDate={new Date(2022, 0, 1)}
        />
          </div>

          <button className="calendar_Edit" onClick={this.removeOne}>Edit booking</button>
          {
            (this.state.firstbooking === "a") ?
            null :
            <BookingIndexItem toggleEdit={this.state.toggleEdit} datesInvalid={this.props.datesInvalid} in={this.state.in} out={this.state.out} booking={this.state.firstbooking}/>
          }
        </div>
        )
    }
}

export default BookingDate;