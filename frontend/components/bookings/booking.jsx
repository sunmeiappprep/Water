import React from 'react'
import BookingAll from './booking_all';
import {Link} from 'react-router-dom'
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import Nav from '../nav/nav';
import 'regenerator-runtime/runtime'
import { CollectionsBookmarkOutlined } from '@material-ui/icons';

class Booking extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bookings:[],
            edited:"",
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    
    async componentDidMount() {
        const response = await this.props.fetchBookings();
        // const json = await response.json();
        this.setState({ bookings: response });
    }


    // componentDidMount() {     
    //     let arr = [];
    //     let bookings = {}
    //     this.props.fetchBookings().then(bookings => this.setState({bookings}))
    //     // .then(() =>{
    //     //     for (let x = 0; x < this.state.bookings.bookings.length; x++){
    //     //         if (this.state.bookings.bookings[x].renter.id === this.props.currentUser[0].id){
    //     //             arr.push(this.state.bookings.bookings[x])
    //     //         }
    //     //     }
    //     //     console.log(arr)

    //     // }).then(()=>{
    //     //     bookings:
    //     //     this.setState({bookings:arr})
    //     // })
    //     // let bk = this.state.bookings.bookings;
        
    // }



    handleDelete(e){
        
        const {bookings,removeBooking} = this.props;
       
        e.preventDefault();
        
        removeBooking(key)
      }

    componentDidUpdate(pP,prevState) {
        let arr = []
        
        if (prevState.bookings.length !== this.state.bookings.length) {
            this.props.fetchBookings()
                // .then(console.log(prevState))
                .then(bookings => this.setState({ bookings }))
                .then(
                // console.log(this.state.bookings.bookings.length)
                )
                .then(()=>{
                        for (let x = 0; x < this.state.bookings.bookings.length; x++){
                            if (this.state.bookings.bookings[x].renter_id === this.props.currentUser[0].id){
                                arr.push(this.state.bookings.bookings[x])
                
                            }
                        }
                        this.setState({edited:arr})
                        // this.setState({bookings:this.props.bookings.bookings})
                    }
                )
                // .then(
                //     console.log(this.state.edited)
                // )
                // .then(console.log(prevState.bookings.length,this.state.bookings.bookings.length))
    }   

        // let arr = []
        // if (pP.bookings.bookings !== this.state.bookings){
        //     this.setState({bookings:this.props.bookings.bookings})
        //     for (let x = 0; x < pP.bookings.bookings.length; x++){
        //         if (pP.bookings.bookings[x].renter_id === this.props.currentUserId[0].id){
        //             arr.push(pP.bookings.bookings[x])
    
        //         }
        //     }
        //     this.setState({edited:arr})
        //     this.setState({bookings:this.props.bookings.bookings})
        // }
}
    // reduceBooking(bookings,id){
    //     let booking2 = []
    //     if(bookings[0] && id){
    //         for (let x = 0; x < bookings.length; x++){
    //             if(bookings[x].renter.id === id){
    //                 booking2.push(bookings[x])
    //             }else{
    //             }
    //         }
    //         return booking2
    //     }
     
    // }

    render(){
        const {removeBooking,history} = this.props;

        const currentUserId = this.props.currentUser[0].id



        const {edited} = this.state
        const {bookings} = this.props

        if (!edited) return null
        return(            
            
            <div className="bookingpage"> 

                <div className="listings-index-box2">
                    <div className="navbar0">
                        <section className="navbar"> 
                            <Modal />           
                            <Link to="/"><img className='logo' src={'https://water-seeds.s3.amazonaws.com/logo.png'} alt="cardsmall"/></Link>
                            <section className='midLinkBundle'>
                                {/* <Link to="/" className='midLink'>Places to stay</Link>
                                <Link to="/" className='midLink'>Experiences</Link>
                                <Link to="/" className='midLink'>Online Experiences</Link> */}
                            <SearchContainer/>

                            </section>          
                            <GreetingContainer className="greeting_container"/>      
                        </section>
                    </div>
                    <div className="search_container">
                    {/* <SearchContainer/> */}
                    </div > 
                </div>
                <div className="bookingpage2">
                <h1>These are your bookings</h1>
                {   
                    edited.map((booking, i) => (     
                    booking.renter_id === currentUserId ?             
                    <Link key ={i} to={`/listings/${booking.listing_id}`}> 
                    {/* <h1>{i}</h1> */}
                    {/* <BookingAll removeBooking={removeBooking} currentUserId={this.props.currentUser} bookings= {this.state.bookings} history={history} key={booking.id} button className="delete-booking" onClick={this.handleDelete} /> */}
                    <BookingAll removeBooking={removeBooking} currentUserId={currentUserId} booking={booking} key={booking.id} button className="delete-booking" onClick={this.handleDelete} />

                    </Link > :
                    null
                    // <button className="delete-booking" onClick={this.handleDelete}>Delete booking</button> : null
                    
                    ))
                }
                {
                           
                }

                </div>


                   
            </div>
            // <div>Asd</div>
        )
    }


}

export default Booking;

