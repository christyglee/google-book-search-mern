import React, { useState, useEffect } from 'react';
import API from '../utils/API';
// // import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import Container from "../components/container";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Title from "../components/Title";
import Author from "../components/Author";
import ImageTag from "../components/ImageTag";
import Description from "../components/Description";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";


function SavedPage() {
    const [books, setBooks] = useState([]);
    // const [results, setResults] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Container>
                <PageTitle pageTitle={"Saved Books"} />
                {!books.length ? (
                    <h3>No Books Saved</h3>
                ) : (
                        <>{books.map(book => {
                            return (
                                <Card key={book.id}>
                                    <div className="row">
                                        <div className="col-8">
                                            <Title title={book.title} />
                                        </div>
                                        <div className="col-4">
                                            <div className="float-right">
                                                <ViewBtn link={book.link} />
                                                <DeleteBtn onClick={() => deleteBook(book._id)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Author author={book.authors} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <ImageTag src={book.image} name={book.title} />
                                        </div>
                                        <div className="col-9">
                                            <Description description={book.description} />
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}</>
                    )}
            </Container>
        </div>
    )
};

export default SavedPage;