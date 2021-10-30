import React from 'react';
class ReviewShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }



    handleDelete(e){
        e.preventDefault()
        this.props.deleteReview(e.target.value)
        window.location.reload()
    }

    testing(){
        console.log("asd")
    }

    handleEdit(e){
        e.preventDefault()
        // console.log(this.state)
        
        this.setState({reviews:"asd"})  
        console.log(e.target.id)
        console.log(e.target.description)
        console.log(e.target.rating)

        // this.props.deleteReview(e.target.value)
        // window.location.reload()
    }
// 

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
                    {/* <button className="EditReview" value={review.id} onClick={this.handleEdit}>Edit</button> */}

                {
                    (review.reviewer.id === user)
                    ?
                    <button className="EditReview" id={review.description} description={review.description} rating={review.rating} listing={review.listing_id} reviewer_id={review.reviewer_id} onClick={this.handleEdit}>Edit</button>

                    :
                    null
                }

            </div>
    
        )
    }
}

export default ReviewShow;