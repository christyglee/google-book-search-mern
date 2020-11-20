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
    }, [results])

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
                setResults(res.data.items);
                console.log(res.data.items);
                console.log(results)
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Search value={search} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            <Container>
                <PageTitle pageTitle={"Results"} />
                {!results.length ? (
                    <h3>No Results to Display</h3>
                ) : (
                        <>{
                            results.map(book => {
                                return (
                                    <Card key={book._id}>
                                        <div className="row">
                                            <div className="col-8">
                                                <Title title={book.volumeInfo.title} />
                                            </div>
                                            <div className="col-4">
                                                <div className="float-right">
                                                    <ViewBtn link={book.volumeInfo.infoLink} />
                                                    <SaveBtn />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Author author={book.volumeInfo.authors.join(", ")} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <ImageTag src={book.volumeInfo.imageLinks.thumbnail} name={book.volumeInfo.title} />
                                            </div>
                                            <div className="col-9">
                                                <Description description={book.volumeInfo.description} />
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })
                        }</>
                    )}
            </Container>
        </div>
    )
};

export default SearchPage;