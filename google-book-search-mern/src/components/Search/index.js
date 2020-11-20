import React from "react";

function Search(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>Book Search</h1>
                    <h6>Books</h6>
                    <div className="input-group mb-3">
                        <input value={props.value} onChange={props.handleInputChange} type="text" className="form-control" placeholder="Enter Book Info" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button onClick={props.handleFormSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search;
