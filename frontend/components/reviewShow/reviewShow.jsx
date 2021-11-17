import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
class ReviewShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            reviews:this.props.review,
            id:"",
            description:"",
            rating:null,
            listing_id:null,
            reviewer_id:null,
            deleted:false,
            flag:"",
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }


    // componentWillMount(){
    //     this.setState({
    //         flag: "b"
    //     })
    // }

    componentDidUpdate(prevProps, prevState){
        
       
        if (prevState.deleted === true){
            this.setState({
                deleted: false
            })
        } 

    }

    handleDelete(e){
        e.preventDefault()
        this.props.deleteReview(e.target.value)
        // console.log(this.props.cdp())
        // this.props.cdp()
        // this.setState({
        //     deleted: true
        // })
        window.location.reload()
    }


    handleEdit(e){
        e.preventDefault()
        // console.log(this.state)
        let arr = e.target.id.split(",")
   
        // this.setState({id:arr[0]}) 
        // this.setState({description:arr[1]+"asd"})  

        // this.setState({rating:arr[2]})  

        // this.setState({listing_id:arr[3]})  

        // this.setState({reviewer_id:arr[4]})     
        const review = {
            id: arr[0],
            rating: this.props.editRating,
            description: this.props.editDescription,
            listing_id: arr[3],
            reviewer_id: arr[4],

        }
        window.location.reload()

        // console.log(review)
        // console.log(arr[0])
        // console.log(arr[1])
        // console.log(arr[2])
        // console.log(arr[3])
        // console.log(arr[4])
        this.props.updateReview(review)





        // console.log(e.target.id[2])

        // console.log(e.target.id[3])
        // console.log(e.target.id[4])



        // this.props.deleteReview(e.target.value)
        // window.location.reload()
    }


    render(){        
        const {review,user} = this.props
        // console.log(this.state)
        // console.log(this.props.cdp)  
        // console.log(review)
        // console.log(this.props)
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let dateString = review.created_at.slice(0,7)
        let dateMonth = dateString.slice(5,7)
        let dateYear = dateString.slice(0,4)
        let month = monthNames[dateMonth-1]
        // console.log(dateYear)
        return(
           
            

            <div className='singleReview'>
                <div >
                    <div className='singleReviewUpperCon'>
                        <div className="personIconCircle">
                            <div className="personalicon">
                            <PersonIcon fontSize={"large"}/>

                            </div>
                        </div>
                        <div>
                            <div className="reviewerName">
                            {review.reviewer.first_name}

                            </div>
                            <div className="reviewerYear">
                            {month}-{dateYear}

                            </div>

                        </div>
                    </div>
                    <div className="reviewDes">
                    {review.description}
                    </div>
                </div>
                

                {/* {review.rating} */}
                {/* {review.reviewer} */}
                {
                    (review.reviewer.id === user)
                    ?
                    <button className="DeleteReview" value={review.id} onClick={this.handleDelete}>Delete </button>
                    :
                    null
                }
                    <button className="EditReview" id={[review.id,review.description,review.rating,review.listing_id,review.reviewer_id]} onClick={this.handleEdit}>Edit</button>
                

                {/* {
                    (review.reviewer.id === user)
                    ?
                    <button className="EditReview" id={[review.id,review.description,review.rating,review.listing_id,review.reviewer_id]} onClick={this.handleEdit}>Edit</button>

                    :
                    null
                } */}

            </div>
    
        )
    }
}

export default ReviewShow;