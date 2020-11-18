import React, { Component } from 'react';
import API from '../../utils/API';

class SaveBtn extends Component {

    constructor(props) {
        super(props)
        this.saveBook = this.saveBook.bind(this)
    }


    saveBook = event => {
        event.preventDefault();

        const bookId = this.props.id;

        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            description: this.props.description,
            image: this.props.image,
            link: this.props.link
        }

        API.saveBook(bookData)
            .then(this.props.handleSaveReRender(bookId));
    }

    render() {
        return (
            <button className='btn btn-primary' onClick={this.saveBook}>Save</button>
        )
    }
}
export default SaveBtn;