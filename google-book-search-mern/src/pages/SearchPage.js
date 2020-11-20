import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Container from "../components/container";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Title from "../components/Title";
import Author from "../components/Author";
import ImageTag from "../components/ImageTag";
import Description from "../components/Description";
import Search from '../components/Search';
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";


function SearchPage() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!search) {
            return;
        }
    })

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!search) {
            return;
        }

        API.search(search)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                setResults(res.data);
                console.log(res.data);
            })
        // .catch(err => setError(err));
    };

    return (
        <div>
            <Search value={search} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            <Container>
                <PageTitle pageTitle={"Results"} />
                <Card>
                    <div className="row">
                        <div className="col-8">
                            <Title title={"Harry Potter"} />
                        </div>
                        <div className="col-4">
                            <div className="float-right">
                                <ViewBtn />
                                <SaveBtn />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Author author={"J.K. Rowling"} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <ImageTag src={"https://www.shethepeople.tv/wp-content/uploads/2020/05/Harry-Potter--e1588787564271.jpg"} name={"HarryPotter"} />
                        </div>
                        <div className="col-9">
                            <Description description={"Amazing Book"} />
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    )
};




export default SearchPage;