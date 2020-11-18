import React from "react";

function Search() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>Book Search</h1>
                    <h6>Books</h6>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter Book Info" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search;
