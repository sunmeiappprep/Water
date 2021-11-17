import React, { Component } from 'react'

export class ReviewForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            description:"",
            rating:"",
            reviewer_id:props.user,
            listing_id:props.listing
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.descriptionOnchange = this.descriptionOnchange.bind(this);
        this.ratingOnchange = this.ratingOnchange.bind(this);

    }

    handleSubmit(e){
        e.preventDefault()
        const newReview = this.state
        this.props.createReview(newReview)
        // window.location.reload()
        
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
        // const {users} = this.props
        // if (users){
        //     this.setState({reviewer_id:users})
        // }
        // if (listing){
        //     this.setState({listing_id:listing})
        // }
        // console.log("asd"+ users)
        // console.log(this.state.description)
        // const descriptionOnchange = this.descriptionOnchange()
        // console.log(this.state.description)
        return (
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit} className="review-form-container">
                    <label>Description:
                        <input type="textarea"
                        value={this.state.description}
                        onChange={this.descriptionOnchange}
                        className="description-input"
                    />
                    </label>
                    <label>Rating:
                        <input type="number"
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
                    <input className="review-submit" type="submit" value='Create Review' />
                </form>

            </div>


   
        )
    }
}

export default ReviewForm
