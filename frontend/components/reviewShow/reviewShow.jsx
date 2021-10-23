import React from 'react';
class ReviewShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            id:"",
            description:"",
            rating:null,
            listing_id:null,
            reviewer_id:null,
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }



    handleDelete(e){
        e.preventDefault()
        this.props.deleteReview(e.target.value)
        window.location.reload()
    }

    // testing(){
    //     console.log("asd")
    // }

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
            rating: arr[2],
            description: arr[1]+"asd",
            listing_id: arr[3],
            reviewer_id: arr[4],

        }
        window.location.reload()

        console.log(review)
        // console.log(arr[0])
        // console.log(arr[1])
        // console.log(arr[2])
        // console.log(arr[3])
        // console.log(arr[4])
        this.props.updateReview(review)

        // setTimeout(() => {
        //     console.log(this.state)
        // }, 1000);



        // console.log(e.target.id[2])

        // console.log(e.target.id[3])
        // console.log(e.target.id[4])



        // this.props.deleteReview(e.target.value)
        // window.location.reload()
    }


    render(){        
        const {review,user} = this.props
        // console.log(this.props)
        return(
            <div>
                {review.description}
                {review.reviewer.first_name}

                {review.rating}
                {review.created_at.slice(0,8)}
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