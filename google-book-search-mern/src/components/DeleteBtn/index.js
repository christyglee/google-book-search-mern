import React from 'react';

function DeleteBtn(props) {
    return (
        <button {...props} type="button" className="btn btn-secondary">Delete</button>
    );
}

export default DeleteBtn;