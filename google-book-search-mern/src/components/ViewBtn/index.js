import React from 'react';

function ViewBtn(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer"><span><button type="button" className="btn btn-secondary m-3">View</button></span></a>
    );
}

export default ViewBtn;