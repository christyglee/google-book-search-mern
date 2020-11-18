import React from 'react';

function Save({children}) {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'><i className='fas fa-download'></i> Saved</div>
                {children}
            </div>
        </div>
    )
}

export default Save;
