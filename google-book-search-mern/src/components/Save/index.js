import React from 'react';

function Save(props) {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'><i className='fas fa-download'></i> Saved</div>
                {props.save}
            </div>
        </div>
    )
}

export default Save;
