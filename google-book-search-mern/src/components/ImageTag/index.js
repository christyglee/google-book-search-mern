import React from 'react';


function Image({image}) {
    return (
        <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
    )
}

export default Image;