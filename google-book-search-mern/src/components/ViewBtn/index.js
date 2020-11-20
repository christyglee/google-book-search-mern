import React from 'react';

function ViewBtn(props) {
    return (
        <button onClick={props.link} type="button" className="btn btn-secondary m-3">View</button>
    );
}

export default ViewBtn;