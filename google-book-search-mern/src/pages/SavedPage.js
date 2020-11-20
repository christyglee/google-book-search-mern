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
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!search) {
            return;
        }
    })
    return (
        <div>
            <Container>
                <PageTitle pageTitle={"Saved Books"} />
                <Card>
                    <div className="row">
                        <div className="col-8">
                            <Title title={"Harry Potter"} />
                        </div>
                        <div className="col-4">
                            <div className="float-right">
                                <ViewBtn />
                                <DeleteBtn />
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




export default SavedPage;