import React from 'react';

function Card({children}) {
    return (
            <div className='card mt-4 mb-4'>
                <div className='card-header'></div>
                {children}
            </div>
    )
}

export default Card;