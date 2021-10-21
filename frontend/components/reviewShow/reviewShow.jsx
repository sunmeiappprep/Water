import React from 'react';
class ReviewShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            reviews:''
        }
        this.handleDelete = this.handleDelete.bind(this)

    }



    handleDelete(e){
        e.preventDefault()
        this.props.deleteReview(e.target.value)
        window.location.reload()
    }

    handleEdit(e){
        e.preventDefault()

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
                         {
                    (review.reviewer.id === user)
                    ?
                    <button className="EditReview" onClick={this.handleEdit}>Edit </button>

                    :
                    null
                }

            </div>
    
        )
    }
}

export default ReviewShow;