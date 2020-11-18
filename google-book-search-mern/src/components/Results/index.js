import React from 'react';


function Results({children}) {
    return (
        <div className='container'>
            <div className='card custom-font mt-4 mb-4'>
                <div className='card-header'>Results</div>
                {children}
            </div>
        </div>
    )
}

export default Results;