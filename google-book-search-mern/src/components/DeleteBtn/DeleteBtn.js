import React, { Component } from 'react';
import API from '../../utils/API';

class DeleteBtn extends Component {
    
    constructor (props) {
        super(props)
        this.bookDelete = this.bookDelete.bind(this)
    }

    bookDelete = event => {
        event.preventDefault();
        const bookID = this.props.id;

        API.deleteBook(bookID)
            .then(this.props.handleDeleteReRender(bookID));
    }



    render() {
        return(
            <button className='btn btn-danger' onClick={this.bookDelete}>Delete</button>
        )
    }
}

export default DeleteBtn;