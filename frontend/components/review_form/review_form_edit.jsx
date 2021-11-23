import React, { Component } from 'react'

export class ReviewFormEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            description:this.props.oneReview.description,
            rating:this.props.oneReview.rating,
            reviewer_id:props.user,
            listing_id:props.listing
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.descriptionOnchange = this.descriptionOnchange.bind(this);
        this.ratingOnchange = this.ratingOnchange.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }

    handleSubmit(e){
        e.preventDefault()
        const numbers = ["1","2","3","4","5"]
        if(!numbers.includes(this.state.rating) && this.state.description.length === 0){
            alert("Rating Must be from either 1,2,3,4,5 and description cannot be empty")
        }
        else if (this.state.description.length === 0){
            alert("Review cant be empty")
        
        }
        else if (!numbers.includes(this.state.rating)){
            alert("Rating Must be from either 1,2,3,4,5")

        
        }
        else {
            const newReview = this.state
            this.props.createReview(newReview)
            window.location.reload()
        }
        
    }

    componentDidUpdate(pP){
        if (this.props.oneReview && this.state.description === undefined){
            this.setState({description:this.props.oneReview.description})
            this.setState({rating:this.props.oneReview.rating})
        }
        
    }


    handleEdit(e){
        e.preventDefault()
        console.log()
        let arr = e.target.id.split(",")
        const review = {
            id: this.props.oneReview.id,
            rating: this.state.rating,
            description: this.state.description,
            listing_id: this.props.oneReview.listing_id,
            reviewer_id:  this.props.oneReview.reviewer_id,

        }

        this.props.updateReview(review)
        window.location.reload()


    }

    handleDelete(e){
        e.preventDefault()
        this.props.deleteReview(this.props.oneReview.id)
        window.location.reload()
    }

    // onhandleDescription = (e) => {
    //     e.preventDefault()
    //     // console.logx
    //     this.props.onCheckin(`${date}/${month}/${year}`);    

     
    // }

    

    descriptionOnchange(e){
        // this.props.onhandleDescription(e)

        e.preventDefault()

        this.setState({description:e.target.value})
        this.props.onhandleDescription(e.target.value);    

    }

    ratingOnchange(e){
        e.preventDefault()
        this.setState({rating:e.target.value})
        this.props.onRating(e.target.value);    

    }

 

    // componentDidUpdate(){

    // }

    render() {
        // console.log(this.state)
        // const {users} = this.props
        // if (users){
        //     this.setState({reviewer_id:users})
        // }
        // if (listing){
        //     this.setState({listing_id:listing})
        // }
        // console.log(this.state)
        // console.log(this.state.description)
        // const descriptionOnchange = this.descriptionOnchange()
        // console.log(this.state.description)
        return (
            <div className="review-form-container">
                <form onSubmit={this.handleEdit} className="review-form-container2">
                    <label>Review Editor:
                        
                        <textarea className="review-des" type="textarea" rows="4" cols="50" 
                        value={this.state.description}
                        onChange={this.descriptionOnchange}
                        className="description-input"
                    />
                    </label>
                    <label>Rating:
                        <input type="text"
                        value={this.state.rating}
                        onChange={this.ratingOnchange}
                        className="rating-input"
                    />
                    </label>

                    {/* <label>Reviewer_id:
                        <input type="number"
                        value={this.state.reviewer_id}
                        onChange={(e)=> this.setState({reviewer_id:e.target.value})}
                        className="reviewer_id-input"
                    />
                    </label>
                    <label>Listing_id:
                        <input type="number"
                        value={this.state.listing_id}
                        onChange={(e)=> this.setState({listing_id:e.target.value})}
                        className="listing_id-input"
                    />
                    </label> */}
                    <div className="review_edit_button_div">
                        <input className="review_edit_button" type="submit" value='Edit review' />
                        <button className="review_edit_button" onClick={this.handleDelete}>Delete</button>
                    </div>
                    
                </form>

            </div>


   
        )
    }
}

export default ReviewFormEdit
