import React from 'react';


function Image({image}) {
    return (
        <img className="img-thumbnail img-fluid w-100" src={image} alt={image} />
    )
}

export default Image;