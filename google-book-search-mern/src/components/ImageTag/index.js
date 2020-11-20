import React from 'react';


function Image(props) {
    return (
        <img className="img-thumbnail img-fluid w-100" src={props.src} alt={props.name} />
    )
}

export default Image;