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


    render(){        
        const {review} = this.props
        // console.log(this.props)
        return(
            <div>
                {review.description}
                {review.reviewer.first_name}

                {review.rating}
                {review.created_at.slice(0,8)}
                <button className="DeleteReview" value={review.id} onClick={this.handleDelete}>Delete </button>

            </div>
    
        )
    }
}

export default ReviewShow;