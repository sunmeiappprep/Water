import React from 'react';
import deleteEditContainer from './deleteEditContainer';
class DeleteEdit extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
         
        }
        this.handleDelete = this.handleDelete.bind(this)

    }

    

    

    handleDelete(reviewId){
        this.props.deleteReview(reviewId)
    }


    render(){        
        let reviewid = this.props.deleteId
        let deletethis = this.handleDelete(reviewid)
        return(
            <form onSubmit={deletethis}>
            <button type="submit">{this.props.deleteId}</button>
            </form>
    
        )
    }
}

export default DeleteEdit;