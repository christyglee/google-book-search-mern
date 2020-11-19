import React from 'react';


function Results(props) {
    return (
        <div className='card custom-font mt-4 mb-4'>
            {props.result}
        </div>
    )
}

export default Results;