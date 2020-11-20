import React, { useState, useEffect, Component } from 'react';
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


class SearchPage extends Component {
    state = { search: "", results: [], hasFetched: false }
    // const[search, setSearch] = useState("");
    // // const [results, setResults] = useState([]);
    // const[checkResults, setCheckResults] = useState({ results: [], hasFetched: false });

    // useEffect(() => {
    //     if (!search) {
    //         return;
    //     }
    // })
    componentDidMount() {
        if (!this.state.search) {
            return;
        }
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit(event) {
        event.preventDefault();
        // if (!this.state.search) {
        //     return;
        // }
        console.log(this.state);
        API.search(this.state.search)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                // setResults(res.data);
                // setCheckResults({ ...checkResults, results: res.data, hasFetched: true })
                this.setState({ results: res.data, hasFetched: true })
                console.log(res.data);
                // console.log("results:" + results)
            })
            .catch(err => console.log(err));
    };

    render() {


        return (
            <div>
                <Search value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit.bind(this)} />
                <Container>
                    <PageTitle pageTitle={"Results"} />
                    {!this.state.hasFetched ? (
                        <h3>No Results to Display</h3>
                    ) : (
                            <>{
                                this.state.results.map(book => {
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
            </div >
        )
    };
}




export default SearchPage;