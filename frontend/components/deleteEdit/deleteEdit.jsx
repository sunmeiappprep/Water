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
        
        return(
            <button onClick={this.handleDelete(this.props.deleteId)}>
            {this.props.deleteId}
          </button>
        )
    }
}

export default DeleteEdit;