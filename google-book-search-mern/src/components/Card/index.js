import React from 'react';

function Card(props) {
    return (
            <div className='card mt-4 mb-4' {...props}>
                <div className='card-header' {...props}></div>
        
            </div>
    )
}

export default Card;