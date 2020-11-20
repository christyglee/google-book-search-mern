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

    function saveBook(title, link, author, img, description) {
        let newBook =
        {
            title: title,
            link: link,
            author: author,
            image: img,
            description: description
        }
        API.saveBook(newBook)
            .then(res => {
                console.log("Book saved!");
            })
    }

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
                                                    <SaveBtn
                                                        onClick={() => saveBook(book.volumeInfo.title, book.volumeInfo.infoLink, book.volumeInfo.authors.join(", "), book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.description)}
                                                    // title={book.volumeInfo.title}
                                                    // link={book.volumeInfo.infoLink}
                                                    // author={book.volumeInfo.authors.join(", ")}
                                                    // img={book.volumeInfo.imageLinks.thumbnail}
                                                    // description={book.volumeInfo.description}
                                                    />
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